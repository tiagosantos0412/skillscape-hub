import { Award } from 'lucide-react'

// Para adicionar novos certificados, edite este array
const certificates = [
  {
    title: 'Formação em Testes de Software',
    institution: 'Udemy',
    year: '2025',
  },
  {
    title: 'Automação de Testes com Cypress',
    institution: 'QAxperience',
    year: '2025',
  },
  {
    title: 'API Testing e Postman Avançado',
    institution: 'Alura',
    year: '2024',
  },
]

export default function Certificados() {
  return (
    <section id="certificados" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Certificados
        </h2>
        <div className="space-y-4">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="flex items-start gap-4 bg-dark-800 p-5 rounded-xl border border-dark-700 hover:border-accent transition-colors"
            >
              <Award className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                <p className="text-gray-400 text-sm">
                  {cert.institution} • {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
