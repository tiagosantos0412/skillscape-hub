import { Github, ExternalLink, CheckCircle2 } from 'lucide-react'
import { projects } from '@/data/portfolio'

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

export default function Projetos() {
  return (
    <Section id="projetos" label="test cases" title="Projetos">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60"
          >
            <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            <ul className="mt-4 space-y-1.5 text-sm">
              {p.activities.map((a) => (
                <li key={a} className="flex gap-2 text-muted-foreground">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                  {a}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tools.map((t) => (
                <span key={t} className="rounded bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-4 pt-5 text-sm">
              {p.repoUrl && (
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  <Github size={14} /> Repositório
                </a>
              )}
              {p.demoUrl && (
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  <ExternalLink size={14} /> Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
