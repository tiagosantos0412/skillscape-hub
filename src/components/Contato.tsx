import { Github, Linkedin, Mail } from 'lucide-react'

const contacts = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/seu-perfil',
    icon: <Linkedin className="w-6 h-6" />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/seu-usuario',
    icon: <Github className="w-6 h-6" />,
  },
  {
    name: 'E-mail',
    href: 'mailto:tiago.felipe@email.com',
    icon: <Mail className="w-6 h-6" />,
  },
]

export default function Contato() {
  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Contato</h2>
        <p className="text-gray-400 mb-10">
          Quer trocar uma ideia sobre QA ou oportunidades? Me encontre nos links abaixo.
        </p>
        <div className="flex justify-center gap-6">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-gray-300 hover:text-accent transition-colors"
              aria-label={contact.name}
            >
              {contact.icon}
              <span className="text-sm font-medium">{contact.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
