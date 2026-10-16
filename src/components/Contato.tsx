import { Mail, Linkedin, Github } from 'lucide-react'
import { contacts } from '@/data/portfolio'

const btn = "inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
const btnPrimary = `${btn} bg-primary text-primary-foreground hover:brightness-110 hover:shadow-glow`
const btnGhost = `${btn} border border-border bg-card text-foreground hover:border-primary hover:text-primary`

function Section({ id, label, title, children }: { id: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="mb-2 font-mono text-sm text-primary">// {label}</p>
        <h2 className="mb-10 font-display text-3xl font-bold md:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default function Contato() {
  return (
    <Section id="contato" label="contato" title="Vamos conversar?">
      <div className="flex flex-wrap gap-3">
        {contacts.linkedin && (
          <a href={contacts.linkedin} target="_blank" rel="noreferrer" className={btnPrimary}>
            <Linkedin size={16} /> LinkedIn
          </a>
        )}
        {contacts.github && (
          <a href={contacts.github} target="_blank" rel="noreferrer" className={btnGhost}>
            <Github size={16} /> GitHub
          </a>
        )}
        {contacts.email && (
          <a href={`mailto:${contacts.email}`} className={btnGhost}>
            <Mail size={16} /> {contacts.email}
          </a>
        )}
      </div>
    </Section>
  )
}
