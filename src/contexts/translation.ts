export type Language = "eng" | "ru";

export interface Translations {
  [key: string]: {
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
    devmobapp: string;
    collaborationStartUp: string;
    technologies: string;
    erpSystem: string;
    itSystem: string;
    uiDesign: string;
    approach: string;
  };
}

export const translations: Record<
  Language,
  {
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
  }
> = {
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
  },
};
