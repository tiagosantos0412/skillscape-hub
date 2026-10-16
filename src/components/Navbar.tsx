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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="font-mono text-sm font-bold">
          <span className="text-primary">✓</span> tiago.qa
        </a>

        <nav aria-label="Principal" className="hidden gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-muted-foreground hover:text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav aria-label="Mobile" className="flex flex-col border-t border-border px-5 py-3 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-2 text-muted-foreground hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
