const experiences = [
  {
    role: 'Analista de QA',
    company: 'Empresa Exemplo',
    period: '2024 - Atual',
    description:
      'Execução de testes manuais e automatizados, levantamento de cenários de teste e integração com pipelines de CI/CD.',
  },
  {
    role: 'Estagiário de QA',
    company: 'Outra Empresa',
    period: '2023 - 2024',
    description:
      'Apoio na execução de testes regressivos, documentação de bugs e criação de casos de teste em ferramentas de gestão.',
  },
]

export default function Curriculo() {
  return (
    <section id="curriculo" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Experiência
        </h2>
        <div className="relative border-l-2 border-dark-700 ml-3 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.role} className="pl-8 relative">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-dark-800"></span>
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-accent font-medium text-sm mb-2">
                {exp.company} • {exp.period}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
