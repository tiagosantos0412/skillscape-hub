import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Projetos', href: '#projetos' },
  { name: 'Certificados', href: '#certificados' },
  { name: 'Currículo', href: '#curriculo' },
  { name: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/90 backdrop-blur border-b border-dark-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#inicio" className="text-accent font-bold text-xl">
            QA SkillScape Hub
          </a>

          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-accent transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-accent"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark-800 border-b border-dark-700">
          <div className="px-4 py-3 space-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-accent transition-colors text-sm font-medium py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
