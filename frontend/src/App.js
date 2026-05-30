import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { translations, getTranslation } from './i18n';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'ru');
  const [cases, setCases] = useState([]);
  const [stats, setStats] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3002/api';
  const t = (key) => getTranslation(language, key);

  useEffect(() => {
    localStorage.setItem('language', language);
    fetchStatistics();
  }, [language]);

  const fetchStatistics = async () => {
    try {
      const response = await axios.get(`${API_URL}/statistics/dashboard`);
      setStats(response.data.data);
    } catch (error) {
      console.error('Error fetching statistics:', error);
    }
  };

  const fetchCases = async () => {
    try {
      const response = await axios.get(`${API_URL}/cases`);
      setCases(response.data.data || []);
    } catch (error) {
      console.error('Error fetching cases:', error);
    }
  };

  const handleAddCase = async (formData) => {
    try {
      await axios.post(`${API_URL}/cases/submit`, formData);
      alert(t('success'));
      setCurrentPage('home');
      fetchCases();
      fetchStatistics();
    } catch (error) {
      alert(t('error') + ' ' + error.message);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="header-top">
            <h1>{t('header.title')}</h1>
            <div className="language-switcher">
              {Object.keys(translations).map(lang => (
                <button
                  key={lang}
                  className={`lang-btn ${language === lang ? 'active' : ''}`}
                  onClick={() => setLanguage(lang)}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <nav className="nav">
            <button onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'active' : ''}>
              {t('header.home')}
            </button>
            <button onClick={() => {setCurrentPage('submit');}} className={currentPage === 'submit' ? 'active' : ''}>
              {t('header.addCase')}
            </button>
            <button onClick={() => {setCurrentPage('cases'); fetchCases();}} className={currentPage === 'cases' ? 'active' : ''}>
              {t('header.cases')}
            </button>
            <button onClick={() => setCurrentPage('statistics')} className={currentPage === 'statistics' ? 'active' : ''}>
              {t('header.statistics')}
            </button>
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="container">
          {currentPage === 'home' && <HomePage stats={stats} t={t} />}
          {currentPage === 'submit' && <SubmitCasePage onSubmit={handleAddCase} t={t} />}
          {currentPage === 'cases' && <CasesPage cases={cases} t={t} />}
          {currentPage === 'statistics' && <StatisticsPage stats={stats} t={t} />}
        </div>
      </main>

      <footer className="footer">
        <p>{t('footer.copyright')}</p>
        <p>{t('footer.description')}</p>
      </footer>
    </div>
  );
}

function HomePage({ stats, t }) {
  return (
    <div className="page home-page">
      <section className="hero">
        <h2>{t('hero.title')}</h2>
        <p>{t('hero.subtitle')}</p>
        <div className="hero-stats">
          {stats && (
            <>
              <div className="stat-box">
                <h3>{stats.total_cases?.[0]?.count || 0}</h3>
                <p>{t('hero.casesCount')}</p>
              </div>
              <div className="stat-box">
                <h3>{stats.total_users?.[0]?.count || 0}</h3>
                <p>{t('hero.usersCount')}</p>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="info">
        <h3>{t('sections.whatIs')}</h3>
        <p>{t('sections.whatIsText')}</p>
      </section>

      <section className="info">
        <h3>{t('sections.whatIsBias')}</h3>
        <p>{t('sections.whatIsBiasText')}</p>
        <ul>
          <li>{t('sections.biasLanguage')}</li>
          <li>{t('sections.biasGeo')}</li>
          <li>{t('sections.biasCultural')}</li>
          <li>{t('sections.biasEducational')}</li>
        </ul>
      </section>

      <section className="info">
        <h3>{t('sections.why')}</h3>
        <ul>
          <li>{t('sections.whyAccountability')}</li>
          <li>{t('sections.whyPower')}</li>
          <li>{t('sections.whyJustice')}</li>
          <li>{t('sections.whyChanges')}</li>
          <li>{t('sections.whyHelp')}</li>
        </ul>
      </section>

      <section className="info">
        <h3>{t('sections.howWorks')}</h3>
        <div className="steps">
          <div className="step">
            <div className="step-number">1️⃣</div>
            <div className="step-content">
              <h4>{t('sections.step1')}</h4>
              <p>{t('sections.step1Desc')}</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2️⃣</div>
            <div className="step-content">
              <h4>{t('sections.step2')}</h4>
              <p>{t('sections.step2Desc')}</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3️⃣</div>
            <div className="step-content">
              <h4>{t('sections.step3')}</h4>
              <p>{t('sections.step3Desc')}</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4️⃣</div>
            <div className="step-content">
              <h4>{t('sections.step4')}</h4>
              <p>{t('sections.step4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="info">
        <h3>{t('sections.compensation')}</h3>
        <p>{t('sections.compensationText')}</p>
        <ul>
          <li>{t('sections.compUSA')}</li>
          <li>{t('sections.compGroup')}</li>
          <li>{t('sections.compLawyers')}</li>
        </ul>
      </section>

      <section className="info">
        <h3>{t('sections.privacy')}</h3>
        <ul>
          <li>{t('sections.privacyAnon')}</li>
          <li>{t('sections.privacyEncrypt')}</li>
          <li>{t('sections.privacySpam')}</li>
          <li>{t('sections.privacyGDPR')}</li>
        </ul>
      </section>

      <section className="info">
        <h3>{t('sections.faq')}</h3>
        <div className="faq">
          <div className="faq-item">
            <h4>{t('sections.faqQ1')}</h4>
            <p>{t('sections.faqA1')}</p>
          </div>
          <div className="faq-item">
            <h4>{t('sections.faqQ2')}</h4>
            <p>{t('sections.faqA2')}</p>
          </div>
          <div className="faq-item">
            <h4>{t('sections.faqQ3')}</h4>
            <p>{t('sections.faqA3')}</p>
          </div>
          <div className="faq-item">
            <h4>{t('sections.faqQ4')}</h4>
            <p>{t('sections.faqA4')}</p>
          </div>
        </div>
      </section>

      <section className="info cta">
        <h3>{t('sections.cta')}</h3>
        <p>{t('sections.ctaText')}</p>
        <button className="cta-button">{t('sections.ctaButton')}</button>
      </section>
    </div>
  );
}

function SubmitCasePage({ onSubmit, t }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    aiSystem: '',
    company: '',
    discriminationType: 'language',
    affectedGroup: '',
    incidentDate: '',
    country: '',
    languageInvolved: '',
    harmDescription: '',
    evidenceText: '',
    isAnonymous: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.company) {
      alert('⚠️ ' + t('form.required'));
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="page submit-page" id="add-case">
      <h2>{t('form.title')}</h2>
      <form onSubmit={handleSubmit} className="case-form">
        
        <div className="form-group">
          <label>{t('form.caseTitle')} *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder={t('form.caseTitlePlaceholder')}
          />
        </div>

        <div className="form-group">
          <label>{t('form.description')} *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder={t('form.descriptionPlaceholder')}
            rows={6}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>{t('form.aiSystem')}</label>
            <input
              type="text"
              name="aiSystem"
              value={formData.aiSystem}
              onChange={handleChange}
              placeholder={t('form.aiSystemPlaceholder')}
            />
          </div>

          <div className="form-group">
            <label>{t('form.company')} *</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder={t('form.companyPlaceholder')}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>{t('form.discriminationType')} *</label>
            <select name="discriminationType" value={formData.discriminationType} onChange={handleChange}>
              <option value="language">{t('form.language')}</option>
              <option value="nationality">{t('form.nationality')}</option>
              <option value="race">{t('form.race')}</option>
              <option value="religion">{t('form.religion')}</option>
              <option value="gender">{t('form.gender')}</option>
              <option value="disability">{t('form.disability')}</option>
              <option value="age">{t('form.age')}</option>
              <option value="other">{t('form.other')}</option>
            </select>
          </div>

          <div className="form-group">
            <label>{t('form.affectedGroup')}</label>
            <input
              type="text"
              name="affectedGroup"
              value={formData.affectedGroup}
              onChange={handleChange}
              placeholder={t('form.affectedGroupPlaceholder')}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>{t('form.incidentDate')} *</label>
            <input
              type="date"
              name="incidentDate"
              value={formData.incidentDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>{t('form.country')}</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder={t('form.countryPlaceholder')}
            />
          </div>
        </div>

        <div className="form-group">
          <label>{t('form.language_')}</label>
          <input
            type="text"
            name="languageInvolved"
            value={formData.languageInvolved}
            onChange={handleChange}
            placeholder={t('form.languagePlaceholder')}
          />
        </div>

        <div className="form-group">
          <label>{t('form.harm')}</label>
          <textarea
            name="harmDescription"
            value={formData.harmDescription}
            onChange={handleChange}
            placeholder={t('form.harmPlaceholder')}
            rows={4}
          />
        </div>

        <div className="form-group">
          <label>{t('form.evidence')}</label>
          <textarea
            name="evidenceText"
            value={formData.evidenceText}
            onChange={handleChange}
            placeholder={t('form.evidencePlaceholder')}
            rows={4}
          />
        </div>

        <div className="form-group checkbox">
          <input
            type="checkbox"
            name="isAnonymous"
            checked={formData.isAnonymous}
            onChange={handleChange}
            id="anonymous"
          />
          <label htmlFor="anonymous">{t('form.anonymous')}</label>
        </div>

        <button type="submit" className="btn-submit">{t('form.submit')}</button>
      </form>
    </div>
  );
}

function CasesPage({ cases, t }) {
  return (
    <div className="page cases-page">
      <h2>{t('cases.title')}</h2>
      <div className="cases-grid">
        {cases.length === 0 ? (
          <p style={{gridColumn: '1/-1', textAlign: 'center', color: '#999', padding: '2rem'}}>
            {t('cases.empty')}
          </p>
        ) : (
          cases.map(caseItem => (
            <div key={caseItem.id} className="case-card">
              <h3>{caseItem.title}</h3>
              <p><strong>{t('cases.company')}</strong> {caseItem.company || 'N/A'}</p>
              <p><strong>{t('cases.type')}</strong> {caseItem.discrimination_type || 'N/A'}</p>
              <p><strong>{t('cases.country')}</strong> {caseItem.country || 'N/A'}</p>
              <p><strong>{t('cases.date')}</strong> {caseItem.incident_date ? new Date(caseItem.incident_date).toLocaleDateString() : 'N/A'}</p>
              <p className="description">{caseItem.description}</p>
              <div className="case-footer">
                <span className="views">👁️ {caseItem.views || 0} {t('cases.views')}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function StatisticsPage({ stats, t }) {
  return (
    <div className="page statistics-page">
      <h2>{t('statistics.title')}</h2>
      
      {stats ? (
        <>
          <section className="stat-section">
            <h3>{t('statistics.byType')}</h3>
            <div className="stat-list">
              {stats.discrimination_types?.length > 0 ? (
                stats.discrimination_types.map((item, idx) => (
                  <div key={idx} className="stat-item">
                    <span>{item.discrimination_type}</span>
                    <span className="count">{item.count}</span>
                  </div>
                ))
              ) : (
                <p style={{padding: '1rem', color: '#999'}}>{t('statistics.noData')}</p>
              )}
            </div>
          </section>

          <section className="stat-section">
            <h3>{t('statistics.byCompany')}</h3>
            <div className="stat-list">
              {stats.by_company?.length > 0 ? (
                stats.by_company.map((item, idx) => (
                  <div key={idx} className="stat-item">
                    <span>{item.company}</span>
                    <span className="count">{item.count}</span>
                  </div>
                ))
              ) : (
                <p style={{padding: '1rem', color: '#999'}}>{t('statistics.noData')}</p>
              )}
            </div>
          </section>

          <section className="stat-section">
            <h3>{t('statistics.byCountry')}</h3>
            <div className="stat-list">
              {stats.by_country?.length > 0 ? (
                stats.by_country.map((item, idx) => (
                  <div key={idx} className="stat-item">
                    <span>{item.country}</span>
                    <span className="count">{item.count}</span>
                  </div>
                ))
              ) : (
                <p style={{padding: '1rem', color: '#999'}}>{t('statistics.noData')}</p>
              )}
            </div>
          </section>
        </>
      ) : (
        <p style={{textAlign: 'center', color: '#999', padding: '2rem'}}>{t('statistics.loading')}</p>
      )}
    </div>
  );
}

export default App;
