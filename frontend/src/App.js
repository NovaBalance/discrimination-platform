import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cases, setCases] = useState([]);
  const [stats, setStats] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3002/api';

  useEffect(() => {
    fetchStatistics();
  }, []);

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
      alert('✅ Случай успешно добавлен!');
      setCurrentPage('home');
      fetchCases();
      fetchStatistics();
    } catch (error) {
      alert('❌ Ошибка: ' + error.message);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>🏛️ Платформа коллективного иска</h1>
          <nav className="nav">
            <button onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'active' : ''}>
              Главная
            </button>
            <button onClick={() => {setCurrentPage('submit');}} className={currentPage === 'submit' ? 'active' : ''}>
              ➕ Добавить случай
            </button>
            <button onClick={() => {setCurrentPage('cases'); fetchCases();}} className={currentPage === 'cases' ? 'active' : ''}>
              Случаи
            </button>
            <button onClick={() => setCurrentPage('statistics')} className={currentPage === 'statistics' ? 'active' : ''}>
              Статистика
            </button>
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="container">
          {currentPage === 'home' && <HomePage stats={stats} />}
          {currentPage === 'submit' && <SubmitCasePage onSubmit={handleAddCase} />}
          {currentPage === 'cases' && <CasesPage cases={cases} />}
          {currentPage === 'statistics' && <StatisticsPage stats={stats} />}
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Платформа по борьбе с дискриминацией ИИ. Все права защищены.</p>
        <p>Эта платформа помогает документировать и организовывать групповые иски против компаний разработчиков ИИ.</p>
      </footer>
    </div>
  );
}

function HomePage({ stats }) {
  return (
    <div className="page home-page">
      <section className="hero">
        <h2>⚔️ Борьба с дискриминацией ИИ</h2>
        <p>Присоединитесь к тысячам людей, документирующих дискриминацию в ИИ-системах</p>
        <div className="hero-stats">
          {stats && (
            <>
              <div className="stat-box">
                <h3>{stats.total_cases?.[0]?.count || 0}</h3>
                <p>📋 Задокументировано случаев</p>
              </div>
              <div className="stat-box">
                <h3>{stats.total_users?.[0]?.count || 0}</h3>
                <p>👥 Пострадавших людей</p>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="info">
        <h3>❓ Что это за платформа?</h3>
        <p>
          Эта платформа помогает собирать доказательства дискриминации ИИ и организовывать групповой иск.
          Если вы столкнулись с дискриминацией от ИИ-системы на основе вашего языка, национальности,
          расы, вероисповедания или другого защищённого признака — отправьте отчёт здесь.
        </p>
      </section>

      <section className="info">
        <h3>⚡ Почему это важно?</h3>
        <ul>
          <li>✓ Компании, разработавшие ИИ, должны нести ответственность за дискриминацию</li>
          <li>✓ Коллективное действие мощнее, чем индивидуальные жалобы</li>
          <li>✓ Ваша история может помочь тысячам других людей</li>
          <li>✓ Вместе мы можем изменить то, как создаётся ИИ</li>
        </ul>
      </section>
    </div>
  );
}

function SubmitCasePage({ onSubmit }) {
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
      alert('⚠️ Пожалуйста, заполните обязательные поля (название, описание, компания)');
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="page submit-page">
      <h2>📝 Отправить случай дискриминации ИИ</h2>
      <form onSubmit={handleSubmit} className="case-form">
        
        <div className="form-group">
          <label>📌 Название случая *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Например: Gordon отказал в поддержке русского языка"
          />
        </div>

        <div className="form-group">
          <label>📄 Подробное описание *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Что произошло? Как это вас повредило?"
            rows={6}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>🤖 ИИ-система</label>
            <input
              type="text"
              name="aiSystem"
              value={formData.aiSystem}
              onChange={handleChange}
              placeholder="Например: Gordon, ChatGPT, Gemini"
            />
          </div>

          <div className="form-group">
            <label>🏢 Компания-разработчик *</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="Например: Docker, OpenAI, Google"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>⚠️ Тип дискриминации *</label>
            <select name="discriminationType" value={formData.discriminationType} onChange={handleChange}>
              <option value="language">🗣️ Языковая дискриминация</option>
              <option value="nationality">🌍 Национальность</option>
              <option value="race">👤 Раса/Этнос</option>
              <option value="religion">✝️ Вероисповедание</option>
              <option value="gender">⚧ Пол</option>
              <option value="disability">♿ Инвалидность</option>
              <option value="age">👴 Возраст</option>
              <option value="other">❓ Другое</option>
            </select>
          </div>

          <div className="form-group">
            <label>👥 Затронутая группа</label>
            <input
              type="text"
              name="affectedGroup"
              value={formData.affectedGroup}
              onChange={handleChange}
              placeholder="Например: русскоговорящие, индусы, мусульмане"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>📅 Дата инцидента *</label>
            <input
              type="date"
              name="incidentDate"
              value={formData.incidentDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>🌍 Ваша страна</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Например: Россия, Узбекистан"
            />
          </div>
        </div>

        <div className="form-group">
          <label>🗣️ Язык, связанный с дискриминацией</label>
          <input
            type="text"
            name="languageInvolved"
            value={formData.languageInvolved}
            onChange={handleChange}
            placeholder="Например: русский, арабский, китайский"
          />
        </div>

        <div className="form-group">
          <label>💔 Описание нанесённого вреда</label>
          <textarea
            name="harmDescription"
            value={formData.harmDescription}
            onChange={handleChange}
            placeholder="Как это вас повредило? Какие последствия?"
            rows={4}
          />
        </div>

        <div className="form-group">
          <label>📋 Доказательства (точные цитаты от ИИ)</label>
          <textarea
            name="evidenceText"
            value={formData.evidenceText}
            onChange={handleChange}
            placeholder="Скопируйте точную цитату из ИИ-системы, которая содержит дискриминацию"
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
          <label htmlFor="anonymous">🔒 Отправить анонимно</label>
        </div>

        <button type="submit" className="btn-submit">✅ Отправить случай</button>
      </form>
    </div>
  );
}

function CasesPage({ cases }) {
  return (
    <div className="page cases-page">
      <h2>📂 Задокументированные случаи</h2>
      <div className="cases-grid">
        {cases.length === 0 ? (
          <p style={{gridColumn: '1/-1', textAlign: 'center', color: '#999', padding: '2rem'}}>
            🤔 Пока случаев не добавлено. Будьте первым, кто поделится своей историей!
          </p>
        ) : (
          cases.map(caseItem => (
            <div key={caseItem.id} className="case-card">
              <h3>{caseItem.title}</h3>
              <p><strong>🏢 Компания:</strong> {caseItem.company || 'N/A'}</p>
              <p><strong>⚠️ Тип:</strong> {caseItem.discrimination_type || 'N/A'}</p>
              <p><strong>🌍 Страна:</strong> {caseItem.country || 'N/A'}</p>
              <p><strong>📅 Дата:</strong> {caseItem.incident_date ? new Date(caseItem.incident_date).toLocaleDateString('ru-RU') : 'N/A'}</p>
              <p className="description">{caseItem.description}</p>
              <div className="case-footer">
                <span className="views">👁️ {caseItem.views || 0} просмотров</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function StatisticsPage({ stats }) {
  return (
    <div className="page statistics-page">
      <h2>📊 Панель статистики</h2>
      
      {stats ? (
        <>
          <section className="stat-section">
            <h3>📈 По типам дискриминации</h3>
            <div className="stat-list">
              {stats.discrimination_types?.length > 0 ? (
                stats.discrimination_types.map((item, idx) => (
                  <div key={idx} className="stat-item">
                    <span>{item.discrimination_type}</span>
                    <span className="count">{item.count}</span>
                  </div>
                ))
              ) : (
                <p style={{padding: '1rem', color: '#999'}}>Данных пока нет</p>
              )}
            </div>
          </section>

          <section className="stat-section">
            <h3>🏢 Топ компаний</h3>
            <div className="stat-list">
              {stats.by_company?.length > 0 ? (
                stats.by_company.map((item, idx) => (
                  <div key={idx} className="stat-item">
                    <span>{item.company}</span>
                    <span className="count">{item.count}</span>
                  </div>
                ))
              ) : (
                <p style={{padding: '1rem', color: '#999'}}>Данных пока нет</p>
              )}
            </div>
          </section>

          <section className="stat-section">
            <h3>🌍 Топ стран</h3>
            <div className="stat-list">
              {stats.by_country?.length > 0 ? (
                stats.by_country.map((item, idx) => (
                  <div key={idx} className="stat-item">
                    <span>{item.country}</span>
                    <span className="count">{item.count}</span>
                  </div>
                ))
              ) : (
                <p style={{padding: '1rem', color: '#999'}}>Данных пока нет</p>
              )}
            </div>
          </section>
        </>
      ) : (
        <p style={{textAlign: 'center', color: '#999', padding: '2rem'}}>⏳ Загрузка статистики...</p>
      )}
    </div>
  );
}

export default App;
