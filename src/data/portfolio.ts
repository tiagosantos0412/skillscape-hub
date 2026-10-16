export const profile = {
  name: "Tiago Felipe dos Santos",
  role: "QA Engineer · Analista de Testes de Software",
  location: "Santo André – SP",
  tagline:
    "Garantia de qualidade em testes de software: análise de requisitos, cenários de teste bem cobertos e bugs documentados com clareza.",
  resumeUrl: "/pdf/tiago-felipe-dos-santos.pdf",
  about: [
    "Sou QA Engineer Jr e atuo na qualidade de software, com experiência em testes de softwares de jogos e sistemas que envolvem servidores. Trabalho com análise de requisitos, testes funcionais e exploratórios, registro de defeitos e validação de funcionalidades em diferentes cenários.",
    "Também tenho experiência com Cypress, Postman e SQL, além de colaborar com equipes ágeis durante o ciclo de desenvolvimento. Neste portfólio, apresento minhas competências e projetos relacionados à área de Qualidade de Software.",
  ],
  goal: "Atuar em QA contribuindo para a qualidade e confiabilidade dos produtos, enquanto amplio minha experiência em automação de testes e melhoria contínua.",
  softSkills: ["Trabalho em equipe", "Boa comunicação", "Adaptabilidade", "Curiosidade e vontade de aprender"],
  education: "Análise e Desenvolvimento de Sistemas — Anhanguera Educacional (concluído)",
};

export const experience = [
  { company: "FBM Brasil", role: "Analista de Testes Júnior — QC", period: "jun/2026 – atual" },
  { company: "Limpe Fácil Soluções Financeiras", role: "QA & Suporte Técnico", period: "mai/2024 – fev/2026" },
  { company: "UniHosp Saúde", role: "Suporte Técnico", period: "jun/2022 – abr/2024" },
  { company: "BRQ Digital Solutions", role: "Técnico de Sistemas Júnior", period: "abr/2021 – fev/2022" },
  { company: "USCS", role: "Assistente de TI", period: "jan/2018 – ago/2020" },
];

export const contacts = {
  linkedin: "https://www.linkedin.com/in/tiago-felipe-dos-santos-55938b27b/",
  github: "https://github.com/tiagosantos0412",
  email: "tiago.felipe0412@gmail.com",
};

export type Skill = { name: string; level: number };

export const skillCategories = [
  {
    id: "manual",
    title: "Testes manuais",
    icon: "🧪",
    skills: [
      { name: "Testes funcionais", level: 4 },
      { name: "Testes exploratórios", level: 4 },
      { name: "Regressão", level: 3 },
      { name: "Testes integrados", level: 3 },
      { name: "Casos e cenários de teste", level: 4 },
    ],
  },
  {
    id: "auto",
    title: "Automação & APIs",
    icon: "⚙️",
    skills: [
      { name: "Cypress", level: 3 },
      { name: "Postman (APIs REST)", level: 3 },
    ],
  },
  {
    id: "tools",
    title: "Gestão & documentação",
    icon: "📋",
    skills: [
      { name: "Jira", level: 4 },
      { name: "Confluence", level: 3 },
    ],
  },
  {
    id: "data",
    title: "Dados & desenvolvimento",
    icon: "🗄️",
    skills: [
      { name: "SQL / PostgreSQL / MySQL", level: 3 },
      { name: "PHP", level: 2 },
      { name: "Python", level: 2 },
      { name: ".NET C# / WPF / XAML", level: 2 },
      { name: "WordPress", level: 3 },
    ],
  },
];

export const skillLevelsAreDemo = true;

export type Project = {
  title: string;
  description: string;
  tools: string[];
  activities: string[];
  repoUrl?: string;
  demoUrl?: string;
  demo?: boolean;
};

export const projects: Project[] = [
  {
    title: "Exemplo: Suíte de regressão E2E com Cypress",
    description: "Descreva aqui o objetivo do projeto, o sistema testado e o resultado alcançado.",
    tools: ["Cypress", "JavaScript", "GitHub Actions"],
    activities: ["Mapeamento de fluxos críticos", "Criação de testes E2E", "Relatório de execução"],
    repoUrl: "",
    demo: true,
  },
  {
    title: "Exemplo: Validação de API REST",
    description: "Descreva a API, os cenários cobertos (positivos, negativos, limites) e o que foi encontrado.",
    tools: ["Postman", "Newman", "JSON"],
    activities: ["Collection com cenários", "Validação de status e contratos", "Documentação de bugs"],
    demo: true,
  },
  {
    title: "Exemplo: Plano de testes exploratórios",
    description: "Descreva o produto analisado, charters de teste e principais defeitos reportados.",
    tools: ["Jira", "Confluence"],
    activities: ["Análise de requisitos", "Sessões exploratórias", "Registro com evidências"],
    demo: true,
  },
];

export type Certificate = {
  title: string;
  institution: string;
  date: string;
  url?: string;
  image?: string;
  demo?: boolean;
};

export const certificates: Certificate[] = [
  { title: "Exemplo: Nome do certificado", institution: "Instituição", date: "mm/aaaa", url: "", demo: true },
  { title: "Exemplo: Curso de Cypress", institution: "Instituição", date: "mm/aaaa", url: "", demo: true },
];
