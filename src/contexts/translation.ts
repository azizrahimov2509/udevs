export type Language = "eng" | "ru";

export interface Translations {
  direction: string;
  command: string;
  services: string;
  tools: string;
  clients: string;
  portfolio: string;
  languages: string;
  mobile: string;
  erp: string;
  interface: string;
  consulting: string;
  optimization: string;
  contact: string;
  outsourse: string;
  team: string;
  ourservices: string;
  project: string;
  dedicatedTeam: string;
  devmobapp: string;
  collaborationStartUp: string;
  technologies: string;
  erpSystem: string;
  itSystem: string;
  uiDesign: string;
  approach: string;
  optInfras: string;
  exports: string;
  impqualific: string;
  ourclients: string;
  deliverService: string;
  whatDidWe: string;
  smstext: string;
  imantext: string;
  goodzonetext: string;
  howWeWork: string;
  contactphone: string;
  sendus: string;
  analysis: string;
  analysText: string;
  offer: string;
  offerText: string;
  teamtext: string;
  start: string;
  getstart: string;
  contactus: string;
  leaveMessage: string;
  name: string;
  email: string;
  descproject: string;
  send: string;
}

export const translations: Record<Language, Translations> = {
  eng: {
    direction: "Direction",
    command: "Command",
    services: "Services",
    tools: "Tools",
    clients: "Clients",
    portfolio: "Portfolio",
    languages: "Languages",
    mobile: "Development of mobile applications",
    erp: "Development and implementation ERP systems",
    interface: "User interface, User experience design",
    consulting: "IT consulting",
    optimization: "Optimization IT consulting infrastructure",
    contact: "Contact",
    outsourse: "IT-Outsourcing Company",
    team: "Team",
    ourservices: "Our services",
    project:
      "For each project, we form a team that includes a project manager, business analyst, UI / UX designer, DevOps, QA engineer, backend and front-end developers.",
    dedicatedTeam: " Dedicated team",
    devmobapp: "Development of mobile applications",
    collaborationStartUp:
      "In collaboration with startups, we have learned how to create a creative and functional user interface for mobile applications.",
    technologies: "Technologies",
    erpSystem: "ERP systems",
    itSystem:
      "IT Systems of any level of complexity at a convenient time for you",
    uiDesign: "UI / UX design",
    approach: "Our company takes a human-centered approach to design",
    optInfras: "Optimization Infrastructure",
    exports:
      "Our experienced professionals will help you optimize your infrastructure",
    impqualific:
      "We can improve the qualifications of your employees thereby increasing the efficiency of your company",
    ourclients: "Our clients",
    deliverService:
      "Delever - Delivery service automation targeted at both consumers and restaurants.",
    whatDidWe: "What we did?",
    smstext: "Smsuz.uz - It is a platform for bulk SMS messaging.",
    imantext:
      "Iman - It is a mutual financing platform based on the principles of Islamic Finance. Buyers, sellers and investors meet here.",
    goodzonetext:
      "Goodzone - Internet shop of household appliances in Uzbekistan.",
    howWeWork: "How we work?",
    contactphone: "Сontact",
    sendus: "Send us your project request or project idea.",
    analysis: "Analysis",
    analysText: "You will get to know the team and we'll get started.",
    offer: "Offer",
    offerText: "We will provide you with our free, non-binding application.",
    teamtext: "We provide a team for your requirements.",
    start: "Start",
    getstart: "You will get to know the team and we'll get started.",
    contactus: "Contact us",
    leaveMessage: "Leave a message",
    name: "Name",
    email: "Your email",
    descproject: "Briefly describe your project",
    send: "Send",
  },
  ru: {
    direction: "Услуги",
    command: "Команда",
    services: "Направление",
    tools: "Инструменты",
    clients: "Клиенты",
    portfolio: "Портфолио",
    languages: "Язык",
    mobile: "Разработка мобильных приложений",
    erp: "Разработка и внедрение ERP системы",
    interface: "UI/UX дизайн",
    consulting: "IT консалтинг",
    optimization: "Оптимизация инфраструктуры",
    contact: "Связаться",
    outsourse: "IT-Аутсорсинг Компания",
    team: "Выделенная команда",
    ourservices: "Наши услуги",
    project:
      "Для каждого проекта мы формируем команду, в которую входят проект менеджер, бизнес-аналитик, UI/UX дизайнер, DevOps, QA-инженер, бэкенд и фронтенд разработчики",
    dedicatedTeam: "Сотрудников",
    devmobapp: "Мобильная разработка",
    collaborationStartUp:
      "В сотрудничестве со стартапами мы научились создавать творческий и функциональный пользовательский интерфейс для мобильных приложений.",
    technologies: "Технологии",
    erpSystem: "ERP cистемы",
    itSystem: "IT Системы любого уровня сложности в удобные для вас сроки.",
    uiDesign: "UI / UX Дизайн",
    approach:
      "Наша компания придерживается подхода к дизайну, ориентированного на человека..",
    optInfras: "Оптимизация инфраструктуры",
    exports:
      "Наши опытные специалисты помогут оптимизировать вашу инфраструктуру.",
    impqualific:
      "Мы можем повысить квалификацию ваших сотрудников тем самым увеличить эффективность вашей компании.",
    ourclients: "Наши клиенты",
    deliverService:
      "Delever — Автоматизация службы доставки ориентированая как на потребителей так и на рестораны.",
    whatDidWe: "Мы разрабатывали:",
    smstext: "Smsuz.uz — Это платформа для массовых смс рассылок.",
    imantext:
      "Iman — это платформа взаимного финансирования, основанная на принципах «Исламских финансов». Здесь встречаются покупатели, продавцы и инвесторы.",
    goodzonetext: "Goodzone — Интернет магазин бытовой техники в Узбекистане.",
    howWeWork: "Как мы работаем?",
    contactphone: "Связь",
    sendus: "Отправьте нам свой запрос на проект или идею проекта.",
    analysis: "Анализ",
    analysText: "Мы свяжемся с вами, чтобы уточнить ваши требования к проекту.",
    offer: "Предложение",
    offerText:
      "Мы предоставим вам нашу бесплатную, не имеющую обязательной силы заявку.",
    teamtext: "Мы выделяем команду под ваши требования.",
    start: "Начать",
    getstart: "Вы познакомитесь с командой, и мы начнем.",
    contactus: "Свяжитесь с нами",
    leaveMessage: "Оставьте нам сообщение",
    name: "Имя",
    email: "Ваша почта",
    descproject: "Кратко опишите свой проект",
    send: "Отправить",
  },
};
