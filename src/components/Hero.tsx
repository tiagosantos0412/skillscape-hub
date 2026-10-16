import { ArrowRight, Download, Mail } from 'lucide-react'
import { profile } from '@/data/portfolio'

const btn = "inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
const btnPrimary = `${btn} bg-primary text-primary-foreground hover:brightness-110 hover:shadow-glow`
const btnGhost = `${btn} border border-border bg-card text-foreground hover:border-primary hover:text-primary`

export default function Hero() {
  const terminalLines = [
    "requisitos analisados",
    "cenários cobertos",
    "bugs documentados no Jira",
    "regressão com Cypress",
    "APIs validadas (Postman)",
  ]

  return (
    <section id="inicio" className="relative overflow-hidden pt-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(39, 49, 64, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(39, 49, 64, 0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-[1.4fr_1fr] md:py-32">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> disponível para oportunidades
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl text-primary md:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projetos" className={btnPrimary}>
              Ver projetos <ArrowRight size={16} />
            </a>
            <a href={profile.resumeUrl} download className={btnGhost}>
              <Download size={16} /> Baixar currículo
            </a>
            <a href="#contato" className={btnGhost}>
              <Mail size={16} /> Contato
            </a>
          </div>
        </div>

        <div
          aria-hidden
          className="hidden rounded-xl border border-border bg-card p-5 font-mono text-sm shadow-glow md:block"
        >
          <div className="mb-4 flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-destructive" />
            <span className="h-3 w-3 rounded-full bg-warning" />
            <span className="h-3 w-3 rounded-full bg-primary" />
          </div>

          <p className="terminal-line text-muted-foreground" style={{ animationDelay: "0ms" }}>
            $ run qa-profile.spec
          </p>

          {terminalLines.map((t, i) => (
            <p
              key={t}
              className="terminal-line mt-2"
              style={{ animationDelay: `${400 + i * 450}ms` }}
            >
              <span className="text-primary">✓</span> {t}
            </p>
          ))}

          <p
            className="terminal-line mt-4 text-primary"
            style={{ animationDelay: `${400 + terminalLines.length * 450 + 200}ms` }}
          >
            5 passing · 0 failing
          </p>
        </div>
      </div>
    </section>
  )
}
