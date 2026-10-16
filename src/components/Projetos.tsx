import { ExternalLink } from 'lucide-react'

// Para adicionar novos projetos, edite este array
const projects = [
  {
    title: 'Automação de Login',
    description:
      'Suite de testes automatizados para fluxo de login com cenários positivos, negativos e validação de mensagens de erro.',
    tags: ['Cypress', 'JavaScript', 'CI/CD'],
    link: 'https://github.com',
  },
  {
    title: 'Testes de API Rest',
    description:
      'Coleção de testes para validação de endpoints REST, incluindo status codes, contratos e cenários de erro.',
    tags: ['Postman', 'Newman', 'API'],
    link: 'https://github.com',
  },
  {
    title: 'Plano de Testes E-commerce',
    description:
      'Documentação completa de estratégia de testes para um sistema de e-commerce fictício.',
    tags: ['Testes Manuais', 'BDD', 'Jira'],
    link: 'https://github.com',
  },
]

export default function Projetos() {
  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-dark-900 p-6 rounded-xl border border-dark-700 hover:border-accent transition-colors flex flex-col"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-dark-700 text-accent rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-light text-sm font-medium"
              >
                Ver projeto <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
