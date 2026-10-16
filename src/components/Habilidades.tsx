import { Skills } from './portfolio/Skills'

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

export default function Habilidades() {
  return (
    <Section id="habilidades" label="skill tree" title="Habilidades técnicas">
      <Skills />
    </Section>
  )
}
