// Add the confirmed public contact details here. Empty values are not displayed.
const CONTACT = { email: '', phone: '' };
const translations = {
  ka: {
    skip:'მთავარ შინაარსზე გადასვლა',tagline:'იურიდიული და სტრატეგიული კონსულტაცია',about:'ჩემ შესახებ',services:'საქმიანობის სფეროები',advantages:'უპირატესობები',contact:'კონტაქტი',consult:'კონსულტაცია',headline:'სტრატეგიული იურიდიული კონსულტაცია და რისკების მართვა',intro:'თქვენი საქმიანობისა და აქტივების სრული სამართლებრივი მხარდაჭერა.',stat1:'ინდივიდუალური მიდგომა',stat1sub:'თქვენს მიზნებზე ორიენტირებული',stat2:'სტრატეგიული ხედვა',stat2sub:'სამართალი და ბიზნესი',stat3:'რისკების პრევენცია',stat3sub:'დაცვა წინასწარი დაგეგმვით',stat4:'სამი ენა',stat4sub:'ქართული · English · Русский',expertise:'ჩვენი კომპეტენცია',approach:'ჩვენი მიდგომა',why:'რატომ უნდა აგვირჩიოთ',start:'დავიწყოთ საუბარი',contactTitle:'განვიხილოთ თქვენი სამართლებრივი და სტრატეგიული საჭიროებები',contactDescription:'ინდივიდუალური კონსულტაციისთვის დაგვიკავშირდით თქვენთვის მოსახერხებელი გზით.',location:'თბილისი, საქართველო',pending:'საკონტაქტო ინფორმაცია მალე დაემატება.',languages:'კონსულტაცია ქართულ, ინგლისურ და რუსულ ენებზე.',footerServices:'იურიდიული კონსულტაცია · რისკების მართვა · ბიზნეს კონსულტაცია',rights:'ყველა უფლება დაცულია.',discuss:'დაგვიკავშირდით',navigation:'მთავარი ნავიგაცია',portrait:'ირაკლი თედორაძე',office:'იურიდიული ოფისის ინტერიერი',top:'გვერდის დასაწყისში',
    cards:[['კორპორაციული სამართალი','კომპანიების, გარიგებებისა და სამართლებრივი რისკების კომპლექსური შემოწმება.'],['უძრავი ქონება და აქტივების დაცვა','უძრავი ქონების, აქტივებისა და საკუთრების სამართლებრივი საკითხები.'],['ხელშეკრულებები და კომერციული კონსულტაცია','ხელშეკრულებების მომზადება, სამართლებრივი ანალიზი და კომერციული რისკების მართვა.'],['სამოქალაქო და საოჯახო სამართალი','სამოქალაქო და საოჯახო სამართლის საკითხებზე ინდივიდუალური სამართლებრივი კონსულტაცია.'],['სამართლებრივი რისკების მართვა','პოტენციური სამართლებრივი რისკების იდენტიფიცირება და პრევენციული სტრატეგიის შემუშავება.'],['სტრატეგიული ბიზნეს კონსულტაცია','სამართლებრივი და ბიზნესხედვის გაერთიანება ინფორმირებული გადაწყვეტილებების მისაღებად.']],
    reasons:[['პრევენციული მიდგომა','პრობლემების წარმოშობამდე შესაძლო რისკების გამოვლენა და მათი შემცირების დაგეგმვა.'],['ინტერდისციპლინური ხედვა','სამართლებრივი და ბიზნეს საკითხების ერთიან კონტექსტში განხილვა.'],['პერსონალიზებული მომსახურება','თქვენს მიზნებსა და კონკრეტულ სიტუაციაზე მორგებული მიდგომა.'],['მრავალენოვანი კომუნიკაცია','მკაფიო და გასაგები კონსულტაცია ქართულ, ინგლისურ და რუსულ ენებზე.']]
  },
  en: {
    skip:'Skip to content',tagline:'Legal & Strategic Advisory',about:'About',services:'Practice areas',advantages:'Our approach',contact:'Contact',consult:'Get in touch',headline:'Strategic Legal Advisory & Risk Management',intro:'Comprehensive legal support for your business and assets.',stat1:'Personal approach',stat1sub:'Focused on your objectives',stat2:'Strategic perspective',stat2sub:'Connecting law and business',stat3:'Risk prevention first',stat3sub:'Protection through planning',stat4:'Multilingual',stat4sub:'ქართული · English · Русский',expertise:'OUR EXPERTISE',approach:'OUR APPROACH',why:'Why Work With Us',start:'LET’S START A CONVERSATION',contactTitle:'Let’s Discuss Your Legal & Strategic Needs',contactDescription:'Contact us in the way that suits you to discuss your needs in a personal consultation.',location:'Tbilisi, Georgia',pending:'Contact details will be added soon.',languages:'Consultations in Georgian, English and Russian.',footerServices:'Legal Advisory · Risk Management · Business Advisory',rights:'All rights reserved.',discuss:'Get in touch',navigation:'Main navigation',portrait:'Irakli Tedoradze',office:'Law office interior',top:'Back to top',
    cards:[['Corporate & Legal Due Diligence','Comprehensive legal review of companies, transactions and associated risks.'],['Real Estate & Asset Protection','Legal guidance on real estate, assets and property ownership.'],['Contractual & Commercial Advisory','Contract drafting, legal analysis and management of commercial risks.'],['Civil & Family Law Advisory','Individual legal guidance on civil and family law matters.'],['Legal Risk Management','Identification of potential legal risks and development of preventive strategies.'],['Strategic Business Advisory','Bringing legal and business perspectives together for informed decisions.']],
    reasons:[['A preventive approach','Identifying potential risks and planning to reduce them before problems arise.'],['An interdisciplinary perspective','Considering legal and business questions within a shared context.'],['Personalized service','An approach tailored to your objectives and individual circumstances.'],['Multilingual communication','Clear, accessible consultations in Georgian, English and Russian.']]
  },
  ru: {
    skip:'Перейти к содержимому',tagline:'Юридический и стратегический консалтинг',about:'О нас',services:'Направления',advantages:'Преимущества',contact:'Контакты',consult:'Связаться с нами',headline:'Юридический консалтинг и управление рисками',intro:'Комплексная правовая поддержка вашего бизнеса и защита активов.',stat1:'Индивидуальный подход',stat1sub:'С учётом ваших целей',stat2:'Стратегический взгляд',stat2sub:'На стыке права и бизнеса',stat3:'Предупреждение рисков',stat3sub:'Защита через планирование',stat4:'Три языка',stat4sub:'ქართული · English · Русский',expertise:'НАША ЭКСПЕРТИЗА',approach:'НАШ ПОДХОД',why:'Почему выбирают нас',start:'НАЧНЁМ С РАЗГОВОРА',contactTitle:'Обсудим ваши правовые и стратегические задачи',contactDescription:'Свяжитесь с нами удобным для вас способом для индивидуальной консультации.',location:'Тбилиси, Грузия',pending:'Контактные данные скоро появятся.',languages:'Консультации на грузинском, английском и русском языках.',footerServices:'Юридический консалтинг · Управление рисками · Бизнес-консалтинг',rights:'Все права защищены.',discuss:'Обсудить задачу',navigation:'Главная навигация',portrait:'Ираклий Тедорадзе',office:'Интерьер юридического офиса',top:'Наверх',
    cards:[['Корпоративное право и правовой аудит','Комплексная юридическая проверка компаний, сделок и связанных с ними рисков.'],['Недвижимость и защита активов','Правовое сопровождение вопросов недвижимости, активов и права собственности.'],['Договоры и коммерческое право','Подготовка договоров, правовой анализ и управление коммерческими рисками.'],['Гражданское и семейное право','Индивидуальные консультации по вопросам гражданского и семейного права.'],['Управление правовыми рисками','Выявление потенциальных юридических рисков и разработка стратегии их предупреждения.'],['Стратегический бизнес-консалтинг','Объединение юридического и делового подходов для принятия обоснованных решений.']],
    reasons:[['Превентивный подход','Выявляем возможные риски и планируем их снижение до возникновения проблем.'],['Междисциплинарный взгляд','Рассматриваем правовые и деловые вопросы в едином контексте.'],['Персональное сопровождение','Учитываем ваши цели и конкретные обстоятельства при разработке решений.'],['Общение на трёх языках','Понятные консультации на грузинском, английском и русском языках.']]
  }
};
const paths = {
  building:'M3 9 12 3l9 6M3 10h18M5 10v9m5-9v9m4-9v9m5-9v9M3 20h18M2 22h20',
  scales:'M12 3v17M7 22h10M4 7h16M6 7 2 15h8L6 7Zm12 0-4 8h8l-4-8Z',
  shield:'M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6l-9-4Zm-4 9 3 3 5-6',
  globe:'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM2 12h20M4 6h16M4 18h16M12 2c-6 5-6 15 0 20 6-5 6-15 0-20Z',
  home:'m2 11 10-9 10 9M5 9v12h14V9M9 21v-8h6v8',
  document:'M14 2H4v20h16V8l-6-6Zm0 0v6h6M7 12h10M7 16h10M7 19h6',
  people:'M10 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm10 1a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM1 21v-4a6 6 0 0 1 12 0v4H1Zm13-9a6 6 0 0 1 9 5v4h-7',
  strategy:'M5 22h14M7 19h10l-2-5 3-6-5-6-1 4-6 4v4l5-2-4 7ZM13 7h.01',
  pin:'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  mail:'M2 4h20v16H2V4Zm0 0 10 9L22 4',
  phone:'m7 2-4 2c-3 7 10 20 17 17l2-4-6-3-2 3c-3-1-6-4-7-7l3-2-3-6Z'
};
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]}"/></svg>`;
const cardIcons = ['building','home','document','people','shield','strategy'];
function renderLanguage(lang) {
  if (!Object.hasOwn(translations, lang)) lang = 'ka';
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.title = `Irakli Tedoradze | ${t.tagline}`;
  document.querySelector('meta[name="description"]').content = `${t.headline}. ${t.intro}`;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t[el.dataset.i18n]; });
  document.querySelectorAll('[data-lang]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.lang === lang)));
  document.querySelector('.navigation').setAttribute('aria-label', t.navigation);
  document.querySelector('.hero-photo').setAttribute('aria-label', t.portrait);
  document.querySelector('.office-photo').setAttribute('aria-label', t.office);
  document.querySelector('.back-top').setAttribute('aria-label', t.top);
  document.getElementById('service-cards').innerHTML = t.cards.map(([title, description], i) => `<article class="service-card"><div class="service-heading"><span class="line-icon">${icon(cardIcons[i])}</span><h3>${title}</h3></div><p>${description}</p><a href="#contact" aria-label="${t.discuss}: ${title}">${t.discuss}<span aria-hidden="true">→</span></a></article>`).join('');
  document.getElementById('advantage-list').innerHTML = t.reasons.map(([title, description], i) => `<div class="advantage"><span class="advantage-number" aria-hidden="true">0${i+1}</span><div><h3>${title}</h3><p>${description}</p></div></div>`).join('');
  try { localStorage.setItem('language', lang); } catch { /* Storage may be disabled. */ }
}
document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });
for (const [type, value] of Object.entries(CONTACT)) {
  if (!value) continue;
  const link = document.createElement('a');
  link.href = type === 'email' ? `mailto:${value}` : `tel:${value.replace(/[^+\d]/g, '')}`;
  const visual = document.createElement('span');
  visual.className = 'line-icon';
  visual.innerHTML = icon(type === 'email' ? 'mail' : 'phone');
  link.append(visual, document.createTextNode(value));
  document.getElementById('contact-details').prepend(link);
}
document.querySelector('.contact-pending').hidden = Boolean(CONTACT.email || CONTACT.phone);
document.getElementById('year').textContent = new Date().getFullYear();
let initialLanguage = 'ka';
try { initialLanguage = localStorage.getItem('language') || 'ka'; } catch { /* Default to Georgian. */ }
const queryLanguage = new URLSearchParams(location.search).get('lang');
renderLanguage(queryLanguage || initialLanguage);
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
  renderLanguage(button.dataset.lang);
  const url = new URL(location.href);
  url.searchParams.set('lang', button.dataset.lang);
  history.replaceState(null, '', url);
}));
