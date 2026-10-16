export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent font-medium mb-4">Portfólio de Quality Assurance</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Olá, eu sou <span className="text-accent">Tiago Felipe</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Analista de QA focado em garantir qualidade de software através de testes manuais,
          automatizados e boas práticas de engenharia.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projetos"
            className="px-6 py-3 bg-accent hover:bg-accent-dark text-dark-900 font-semibold rounded-lg transition-colors"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-dark-900 font-semibold rounded-lg transition-colors"
          >
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  )
}
