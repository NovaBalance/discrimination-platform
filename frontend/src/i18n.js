// Переводы для всех языков
export const translations = {
  ru: {
    header: {
      title: "🏛️ Платформа коллективного иска",
      home: "Главная",
      addCase: "➕ Добавить случай",
      cases: "Случаи",
      statistics: "Статистика",
      sessions: "🕓 Сессии"
    },
    hero: {
      title: "⚔️ Борьба с дискриминацией ИИ",
      subtitle: "Присоединитесь к тысячам людей, документирующих дискриминацию в ИИ-системах",
      casesCount: "Задокументировано случаев",
      usersCount: "Пострадавших людей"
    },
    sections: {
      whatIs: "❓ Что это за платформа?",
      whatIsText: "Эта платформа помогает собирать доказательства дискриминации ИИ и организовывать групповой иск. Если вы столкнулись с дискриминацией от ИИ-системы на основе вашего языка, национальности, расы, вероисповедания или другого защищённого признака — отправьте отчёт здесь.",
      
      whatIsBias: "🎯 Что такое дискриминация ИИ?",
      whatIsBiasText: "Это когда ИИ-система отказывает в услуге или предоставляет худшее качество на основе защищённых признаков:",
      biasLanguage: "🗣️ Языковая: ИИ не поддерживает ваш язык, хотя поддерживает другие",
      biasGeo: "🌍 Географическая: услуга недоступна в вашей стране",
      biasCultural: "👤 Культурная: ИИ даёт неправильные ответы о вашей культуре",
      biasEducational: "🎓 Образовательная: ИИ хуже учится на данных вашей группы",

      why: "⚡ Почему это важно?",
      whyAccountability: "✅ Ответственность: Компании должны нести ответственность за дискриминацию",
      whyPower: "✅ Коллективная сила: Групповой иск мощнее, чем индивидуальные жалобы",
      whyJustice: "✅ Справедливость: Пострадавшие получат компенсацию",
      whyChanges: "✅ Изменения: Компании будут исправлять ИИ-системы",
      whyHelp: "✅ Защита других: Ваша история поможет тысячам людей",

      howWorks: "🚀 Как это работает?",
      step1: "Документируйте",
      step1Desc: "Нажмите '➕ Добавить случай' и расскажите о дискриминации подробно. Включите скриншоты и цитаты.",
      step2: "Соберите доказательства",
      step2Desc: "Приложите точные цитаты от ИИ-системы. Это самое важное для суда.",
      step3: "Присоединитесь к группе",
      step3Desc: "Когда будет 50+ людей, мы найдём адвокатов для группового иска.",
      step4: "Получите компенсацию",
      step4Desc: "После победы каждый получит компенсацию за вред.",

      compensation: "💰 Сколько я получу?",
      compensationText: "Размер компенсации зависит от нанесённого вреда, масштаба и судебного решения:",
      compUSA: "💔 В США: обычно $100 - $5,000 на человека",
      compGroup: "📈 При групповом иске: компенсация может быть значительной",
      compLawyers: "⚠️ Адвокаты: берут 25-30% от выигрыша",

      privacy: "🛡️ Защита конфиденциальности",
      privacyAnon: "🔒 Анонимность: можно отправить отчёт анонимно",
      privacyEncrypt: "🔐 Шифрование: все данные защищены",
      privacySpam: "🚫 Без спама: мы никогда не продадим ваши данные",
      privacyGDPR: "⚖️ GDPR: соответствуем законам о защите данных",

      faq: "❓ Частые вопросы",
      faqQ1: "Это действительно приведёт к иску?",
      faqA1: "Да! Когда будет достаточно доказательств и пострадавших, мы найдём адвокатов и подадим групповой иск в суд.",
      faqQ2: "Я могу участвовать анонимно?",
      faqA2: "Да, отправьте отчёт анонимно. Для получения компенсации нужно раскрыть личность адвокату.",
      faqQ3: "Какие ИИ-системы рассматриваются?",
      faqA3: "Любые: ChatGPT, Google Gemini, Claude, Copilot, локальные ИИ и другие.",
      faqQ4: "Мне нужно нанимать адвоката?",
      faqA4: "Нет! Мы найдём адвокатов. Они работают на условиях 'contingency fee' - берут процент от выигрыша.",

      cta: "🚀 Начните прямо сейчас!",
      ctaText: "Если вы столкнулись с дискриминацией ИИ — не молчите!",
      ctaButton: "➕ Добавить ваш случай"
    },
    form: {
      title: "📝 Отправить случай дискриминации ИИ",
      caseTitle: "📌 Название случая",
      caseTitlePlaceholder: "Например: Gordon отказал в поддержке русского языка",
      description: "📄 Подробное описание",
      descriptionPlaceholder: "Что произошло? Как это вас повредило?",
      aiSystem: "🤖 ИИ-система",
      aiSystemPlaceholder: "Например: Gordon, ChatGPT, Gemini",
      company: "🏢 Компания-разработчик",
      companyPlaceholder: "Например: Docker, OpenAI, Google",
      discriminationType: "⚠️ Тип дискриминации",
      language: "🗣️ Языковая дискриминация",
      nationality: "🌍 Национальность",
      race: "👤 Раса/Этнос",
      religion: "✝️ Вероисповедание",
      gender: "⚧ Пол",
      disability: "♿ Инвалидность",
      age: "👴 Возраст",
      other: "❓ Другое",
      affectedGroup: "👥 Затронутая группа",
      affectedGroupPlaceholder: "Например: русскоговорящие, индусы, мусульмане",
      incidentDate: "📅 Дата инцидента",
      country: "🌍 Ваша страна",
      countryPlaceholder: "Например: Россия, Узбекистан",
      language_: "🗣️ Язык, связанный с дискриминацией",
      languagePlaceholder: "Например: русский, арабский, китайский",
      harm: "💔 Описание нанесённого вреда",
      harmPlaceholder: "Как это вас повредило? Какие последствия?",
      evidence: "📋 Доказательства (точные цитаты от ИИ)",
      evidencePlaceholder: "Скопируйте точную цитату из ИИ-системы, которая содержит дискриминацию",
      anonymous: "🔒 Отправить анонимно",
      submit: "✅ Отправить случай",
      required: "Пожалуйста, заполните обязательные поля (название, описание, компания)"
    },
    cases: {
      title: "📂 Задокументированные случаи",
      empty: "🤔 Пока случаев не добавлено. Будьте первым, кто поделится своей историей!",
      company: "🏢 Компания:",
      type: "⚠️ Тип:",
      country: "🌍 Страна:",
      date: "📅 Дата:",
      views: "👁️ просмотров"
    },
    statistics: {
      title: "📊 Панель статистики",
      byType: "📈 По типам дискриминации",
      byCompany: "🏢 Топ компаний",
      byCountry: "🌍 Топ стран",
      noData: "Данных пока нет",
      loading: "⏳ Загрузка статистики..."
    },
    sessions: {
      title: "🕓 Недавние сессии",
      intro: "Ваши последние посещения этой платформы — время и местоположение.",
      empty: "🤔 Недавних сессий пока нет.",
      page: "📄 Страница:",
      location: "📍 Местоположение:",
      started: "🟢 Начало:",
      lastSeen: "⏱️ Активность:",
      unknown: "Неизвестно"
    },
    footer: {
      copyright: "© 2025 Платформа по борьбе с дискриминацией ИИ. Все права защищены.",
      description: "Эта платформа помогает документировать и организовывать групповые иски против компаний разработчиков ИИ."
    },
    success: "✅ Случай успешно добавлен!",
    error: "❌ Ошибка:"
  },
  en: {
    header: {
      title: "🏛️ Class Action Lawsuit Platform",
      home: "Home",
      addCase: "➕ Add Case",
      cases: "Cases",
      statistics: "Statistics",
      sessions: "🕓 Sessions"
    },
    hero: {
      title: "⚔️ Fight AI Discrimination",
      subtitle: "Join thousands of people documenting discrimination in AI systems",
      casesCount: "Cases Documented",
      usersCount: "People Affected"
    },
    sections: {
      whatIs: "❓ What is this platform?",
      whatIsText: "This platform helps collect evidence of AI discrimination and organize a class action lawsuit. If you've experienced discrimination from an AI system based on your language, nationality, race, religion, or other protected characteristic — submit a report here.",
      
      whatIsBias: "🎯 What is AI discrimination?",
      whatIsBiasText: "This is when an AI system refuses service or provides lower quality based on protected characteristics:",
      biasLanguage: "🗣️ Language: AI doesn't support your language while supporting others",
      biasGeo: "🌍 Geographic: service unavailable in your country",
      biasCultural: "👤 Cultural: AI gives wrong answers about your culture",
      biasEducational: "🎓 Educational: AI learns worse on data from your group",

      why: "⚡ Why does this matter?",
      whyAccountability: "✅ Accountability: AI companies must be responsible for discrimination",
      whyPower: "✅ Collective Power: Class action is stronger than individual complaints",
      whyJustice: "✅ Justice: Victims receive compensation",
      whyChanges: "✅ Changes: Companies will fix AI systems",
      whyHelp: "✅ Protect Others: Your story helps thousands of people",

      howWorks: "🚀 How does it work?",
      step1: "Document",
      step1Desc: "Click '➕ Add Case' and tell us about the discrimination in detail. Include screenshots and quotes.",
      step2: "Gather Evidence",
      step2Desc: "Attach exact quotes from the AI system. This is most important for court.",
      step3: "Join the Group",
      step3Desc: "When we have 50+ people, we'll find lawyers for the class action.",
      step4: "Get Compensation",
      step4Desc: "After winning, each person receives compensation for harm.",

      compensation: "💰 How much will I get?",
      compensationText: "Compensation depends on harm, scale, and court decision:",
      compUSA: "💔 In USA: typically $100 - $5,000 per person",
      compGroup: "📈 In class action: compensation can be significant",
      compLawyers: "⚠️ Lawyers: take 25-30% of winnings",

      privacy: "🛡️ Privacy Protection",
      privacyAnon: "🔒 Anonymity: submit reports anonymously",
      privacyEncrypt: "🔐 Encryption: all data is protected",
      privacySpam: "🚫 No spam: we never sell your data",
      privacyGDPR: "⚖️ GDPR: we comply with data protection laws",

      faq: "❓ Frequently Asked Questions",
      faqQ1: "Will this really lead to a lawsuit?",
      faqA1: "Yes! When we have enough evidence and victims, we'll find lawyers and file a class action suit.",
      faqQ2: "Can I participate anonymously?",
      faqA2: "Yes, submit anonymously. To receive compensation, you'll need to reveal your identity to the lawyer.",
      faqQ3: "Which AI systems are covered?",
      faqA3: "Any: ChatGPT, Google Gemini, Claude, Copilot, local AI, and others.",
      faqQ4: "Do I need to hire a lawyer?",
      faqA4: "No! We'll find lawyers. They work on contingency fee - taking a percentage of winnings.",

      cta: "🚀 Start Now!",
      ctaText: "If you've experienced AI discrimination — speak up!",
      ctaButton: "➕ Add Your Case"
    },
    form: {
      title: "📝 Report AI Discrimination Case",
      caseTitle: "📌 Case Title",
      caseTitlePlaceholder: "Example: Gordon refused Russian language support",
      description: "📄 Detailed Description",
      descriptionPlaceholder: "What happened? How did it harm you?",
      aiSystem: "🤖 AI System",
      aiSystemPlaceholder: "Example: Gordon, ChatGPT, Gemini",
      company: "🏢 Developer Company",
      companyPlaceholder: "Example: Docker, OpenAI, Google",
      discriminationType: "⚠️ Discrimination Type",
      language: "🗣️ Language Discrimination",
      nationality: "🌍 Nationality",
      race: "👤 Race/Ethnicity",
      religion: "✝️ Religion",
      gender: "⚧ Gender",
      disability: "♿ Disability",
      age: "👴 Age",
      other: "❓ Other",
      affectedGroup: "👥 Affected Group",
      affectedGroupPlaceholder: "Example: Russian speakers, Indians, Muslims",
      incidentDate: "📅 Incident Date",
      country: "🌍 Your Country",
      countryPlaceholder: "Example: Russia, USA",
      language_: "🗣️ Language Involved",
      languagePlaceholder: "Example: Russian, Arabic, Chinese",
      harm: "💔 Description of Harm",
      harmPlaceholder: "How did it harm you? What were the consequences?",
      evidence: "📋 Evidence (Exact AI Quotes)",
      evidencePlaceholder: "Copy the exact quote from the AI system showing discrimination",
      anonymous: "🔒 Submit Anonymously",
      submit: "✅ Submit Case",
      required: "Please fill required fields (title, description, company)"
    },
    cases: {
      title: "📂 Documented Cases",
      empty: "🤔 No cases yet. Be the first to share your story!",
      company: "🏢 Company:",
      type: "⚠️ Type:",
      country: "🌍 Country:",
      date: "📅 Date:",
      views: "👁️ views"
    },
    statistics: {
      title: "📊 Statistics Dashboard",
      byType: "📈 By Discrimination Type",
      byCompany: "🏢 Top Companies",
      byCountry: "🌍 Top Countries",
      noData: "No data yet",
      loading: "⏳ Loading statistics..."
    },
    sessions: {
      title: "🕓 Recent Sessions",
      intro: "Your latest visits to this platform — time and location.",
      empty: "🤔 No recent sessions yet.",
      page: "📄 Page:",
      location: "📍 Location:",
      started: "🟢 Started:",
      lastSeen: "⏱️ Last seen:",
      unknown: "Unknown"
    },
    footer: {
      copyright: "© 2025 AI Discrimination Lawsuit Platform. All rights reserved.",
      description: "This platform helps document and organize class action lawsuits against AI companies."
    },
    success: "✅ Case submitted successfully!",
    error: "❌ Error:"
  },
  es: {
    header: {
      title: "🏛️ Plataforma de Demanda Colectiva",
      home: "Inicio",
      addCase: "➕ Agregar Caso",
      cases: "Casos",
      statistics: "Estadísticas",
      sessions: "🕓 Sesiones"
    },
    hero: {
      title: "⚔️ Lucha contra la Discriminación de IA",
      subtitle: "Únete a miles de personas que documentan discriminación en sistemas de IA",
      casesCount: "Casos Documentados",
      usersCount: "Personas Afectadas"
    },
    sections: {
      whatIs: "❓ ¿Qué es esta plataforma?",
      whatIsText: "Esta plataforma ayuda a recopilar evidencia de discriminación de IA y organizar una demanda colectiva. Si ha experimentado discriminación de un sistema de IA basada en su idioma, nacionalidad, raza, religión u otra característica protegida, envíe un informe aquí.",
      
      whatIsBias: "🎯 ¿Qué es la discriminación de IA?",
      whatIsBiasText: "Esto es cuando un sistema de IA rechaza el servicio o proporciona menor calidad basado en características protegidas:",
      biasLanguage: "🗣️ Idioma: IA no soporta tu idioma mientras soporta otros",
      biasGeo: "🌍 Geográfica: servicio no disponible en su país",
      biasCultural: "👤 Cultural: IA da respuestas incorrectas sobre su cultura",
      biasEducational: "🎓 Educativa: IA aprende peor con datos de su grupo",

      why: "⚡ ¿Por qué es importante?",
      whyAccountability: "✅ Responsabilidad: Las empresas de IA deben ser responsables de la discriminación",
      whyPower: "✅ Poder Colectivo: La demanda colectiva es más fuerte que quejas individuales",
      whyJustice: "✅ Justicia: Las víctimas reciben compensación",
      whyChanges: "✅ Cambios: Las empresas arreglarán los sistemas de IA",
      whyHelp: "✅ Proteger a Otros: Su historia ayuda a miles de personas",

      howWorks: "🚀 ¿Cómo funciona?",
      step1: "Documentar",
      step1Desc: "Haga clic en '➕ Agregar Caso' y cuéntenos sobre la discriminación en detalle. Incluya capturas de pantalla y citas.",
      step2: "Recopilar Evidencia",
      step2Desc: "Adjunte citas exactas del sistema de IA. Esto es lo más importante para el tribunal.",
      step3: "Unirse al Grupo",
      step3Desc: "Cuando tengamos 50+ personas, encontraremos abogados para la demanda colectiva.",
      step4: "Obtener Compensación",
      step4Desc: "Después de ganar, cada persona recibe compensación por el daño.",

      compensation: "💰 ¿Cuánto recibiré?",
      compensationText: "La compensación depende del daño, escala y decisión judicial:",
      compUSA: "💔 En EE.UU.: típicamente $100 - $5,000 por persona",
      compGroup: "📈 En demanda colectiva: la compensación puede ser significativa",
      compLawyers: "⚠️ Abogados: toman 25-30% de las ganancias",

      privacy: "🛡️ Protección de Privacidad",
      privacyAnon: "🔒 Anonimato: enviar informes anónimamente",
      privacyEncrypt: "🔐 Encriptación: todos los datos están protegidos",
      privacySpam: "🚫 Sin spam: nunca vendemos sus datos",
      privacyGDPR: "⚖️ GDPR: cumplimos con las leyes de protección de datos",

      faq: "❓ Preguntas Frecuentes",
      faqQ1: "¿Realmente llevará a una demanda?",
      faqA1: "¡Sí! Cuando tengamos suficiente evidencia y víctimas, encontraremos abogados y presentaremos una demanda colectiva.",
      faqQ2: "¿Puedo participar anónimamente?",
      faqA2: "Sí, envíe anónimamente. Para recibir compensación, deberá revelar su identidad al abogado.",
      faqQ3: "¿Qué sistemas de IA se cubren?",
      faqA3: "Cualquiera: ChatGPT, Google Gemini, Claude, Copilot, IA local y otros.",
      faqQ4: "¿Necesito contratar un abogado?",
      faqA4: "¡No! Encontraremos abogados. Trabajan por honorarios de contingencia - tomando un porcentaje de las ganancias.",

      cta: "🚀 ¡Comience Ahora!",
      ctaText: "Si ha experimentado discriminación de IA, ¡hable!",
      ctaButton: "➕ Agregar Su Caso"
    },
    form: {
      title: "📝 Reportar Caso de Discriminación de IA",
      caseTitle: "📌 Título del Caso",
      caseTitlePlaceholder: "Ejemplo: Gordon rechazó soporte de idioma ruso",
      description: "📄 Descripción Detallada",
      descriptionPlaceholder: "¿Qué sucedió? ¿Cómo te perjudicó?",
      aiSystem: "🤖 Sistema de IA",
      aiSystemPlaceholder: "Ejemplo: Gordon, ChatGPT, Gemini",
      company: "🏢 Empresa Desarrolladora",
      companyPlaceholder: "Ejemplo: Docker, OpenAI, Google",
      discriminationType: "⚠️ Tipo de Discriminación",
      language: "🗣️ Discriminación por Idioma",
      nationality: "🌍 Nacionalidad",
      race: "👤 Raza/Etnia",
      religion: "✝️ Religión",
      gender: "⚧ Género",
      disability: "♿ Discapacidad",
      age: "👴 Edad",
      other: "❓ Otro",
      affectedGroup: "👥 Grupo Afectado",
      affectedGroupPlaceholder: "Ejemplo: Hablantes de ruso, Indios, Musulmanes",
      incidentDate: "📅 Fecha del Incidente",
      country: "🌍 Su País",
      countryPlaceholder: "Ejemplo: Rusia, España",
      language_: "🗣️ Idioma Involucrado",
      languagePlaceholder: "Ejemplo: Ruso, Árabe, Chino",
      harm: "💔 Descripción del Daño",
      harmPlaceholder: "¿Cómo te perjudicó? ¿Cuáles fueron las consecuencias?",
      evidence: "📋 Evidencia (Citas Exactas de IA)",
      evidencePlaceholder: "Copie la cita exacta del sistema de IA mostrando discriminación",
      anonymous: "🔒 Enviar Anónimamente",
      submit: "✅ Enviar Caso",
      required: "Por favor complete los campos requeridos (título, descripción, empresa)"
    },
    cases: {
      title: "📂 Casos Documentados",
      empty: "🤔 ¡Sin casos aún! ¡Sea el primero en compartir su historia!",
      company: "🏢 Empresa:",
      type: "⚠️ Tipo:",
      country: "🌍 País:",
      date: "📅 Fecha:",
      views: "👁️ vistas"
    },
    statistics: {
      title: "📊 Panel de Estadísticas",
      byType: "📈 Por Tipo de Discriminación",
      byCompany: "🏢 Empresas Principales",
      byCountry: "🌍 Países Principales",
      noData: "Sin datos aún",
      loading: "⏳ Cargando estadísticas..."
    },
    sessions: {
      title: "🕓 Sesiones Recientes",
      intro: "Tus últimas visitas a esta plataforma — hora y ubicación.",
      empty: "🤔 Aún no hay sesiones recientes.",
      page: "📄 Página:",
      location: "📍 Ubicación:",
      started: "🟢 Inicio:",
      lastSeen: "⏱️ Última actividad:",
      unknown: "Desconocido"
    },
    footer: {
      copyright: "© 2025 Plataforma de Demanda Colectiva por Discriminación de IA. Todos los derechos reservados.",
      description: "Esta plataforma ayuda a documentar y organizar demandas colectivas contra empresas de IA."
    },
    success: "✅ ¡Caso enviado correctamente!",
    error: "❌ Error:"
  }
};

export const getTranslation = (language, key) => {
  const keys = key.split('.');
  let value = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};
