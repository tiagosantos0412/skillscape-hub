import { Award, ExternalLink } from 'lucide-react'
import { certificates } from '@/data/portfolio'

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

export default function Certificados() {
  return (
    <Section id="certificados" label="badges" title="Certificados">
      <div className="grid gap-4 sm:grid-cols-2">
        {certificates.map((c) => (
          <div key={c.title} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
            {c.image ? (
              <img src={c.image} alt={`Certificado ${c.title}`} className="h-16 w-16 rounded object-cover" />
            ) : (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Award />
              </div>
            )}
            <div>
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground">
                {c.institution} · {c.date}
              </p>
              {c.url && (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Ver certificado <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
