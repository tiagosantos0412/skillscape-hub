import { Bug, Code, FileText, Terminal, ShieldCheck, Cpu } from 'lucide-react'

const skills = [
  {
    icon: <Bug className="w-8 h-8 text-accent" />,
    title: 'Testes Manuais',
    description: 'Execução de testes funcionais, exploratórios e regressivos.',
  },
  {
    icon: <Code className="w-8 h-8 text-accent" />,
    title: 'Automação de Testes',
    description: 'Criação de testes automatizados com Cypress, Selenium e outras ferramentas.',
  },
  {
    icon: <Terminal className="w-8 h-8 text-accent" />,
    title: 'API Testing',
    description: 'Testes de APIs REST com Postman, Insomnia e validações de contrato.',
  },
  {
    icon: <FileText className="w-8 h-8 text-accent" />,
    title: 'Documentação',
    description: 'Escrita de casos de teste, cenários BDD e relatórios de bugs.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: 'Qualidade de Processos',
    description: 'Revisão de requisitos, critérios de aceitação e melhoria contínua.',
  },
  {
    icon: <Cpu className="w-8 h-8 text-accent" />,
    title: 'Ferramentas',
    description: 'Jira, Azure DevOps, Git, GitHub, CI/CD e ferramentas de gestão de testes.',
  },
]

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Habilidades
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-accent transition-colors"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
