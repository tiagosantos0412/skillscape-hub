import { profile, experience } from '@/data/portfolio'

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

export default function Sobre() {
  return (
    <Section id="sobre" label="sobre mim" title="Sobre mim">
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-4 text-muted-foreground">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="mb-1 text-sm font-semibold text-foreground">Foco profissional:</p>
            <p>{profile.goal}</p>
          </div>
          <p className="text-sm">
            <strong className="text-foreground">Formação:</strong> {profile.education}
          </p>
          <div className="flex flex-wrap gap-2">
            {profile.softSkills.map((s) => (
              <span key={s} className="rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">
                {s}
              </span>
            ))}
          </div>
        </div>

        <ol className="relative space-y-6 border-l border-border pl-6">
          {experience.map((e) => (
            <li key={e.company} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
              <p className="font-mono text-xs text-primary">{e.period}</p>
              <p className="font-semibold text-foreground">{e.role}</p>
              <p className="text-sm text-muted-foreground">{e.company}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
