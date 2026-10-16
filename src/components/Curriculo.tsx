import { Download } from 'lucide-react'
import { profile } from '@/data/portfolio'

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

export default function Curriculo() {
  return (
    <Section id="curriculo" label="resume.pdf" title="Currículo">
      <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-border bg-card p-8 md:flex-row md:items-center">
        <p className="max-w-xl text-muted-foreground">
          Baixe meu currículo completo em PDF.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={profile.resumeUrl} download className={btnPrimary}>
            <Download size={16} /> Baixar PDF
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className={btnGhost}
          >
            Abrir no navegador
          </a>
        </div>
      </div>
    </Section>
  )
}
