import { useState } from "react";
import { skillCategories, skillLevelsAreDemo } from "@/data/portfolio";
import { DemoTag } from "./DemoTag";

const levelNames = ["", "Iniciante", "Básico", "Intermediário", "Avançado", "Especialista"];

export function Skills() {
  const [active, setActive] = useState(skillCategories[0]?.id ?? "");
  const cat = skillCategories.find((c) => c.id === active) ?? skillCategories[0]!;
  const total = skillCategories.flatMap((c) => c.skills);
  const xp = total.reduce((s, k) => s + k.level * 100, 0);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
          {total.length} skills desbloqueadas · {xp} XP
        </span>
        {skillLevelsAreDemo && <DemoTag label="Níveis demonstrativos — ajuste no arquivo de dados" />}
      </div>
      <div role="tablist" aria-label="Categorias de habilidades" className="mb-6 flex flex-wrap gap-2">
        {skillCategories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={active === c.id}
            onClick={() => setActive(c.id)}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-ring ${
              active === c.id
                ? "border-primary bg-primary text-primary-foreground shadow-glow"
                : "border-border bg-card text-foreground hover:border-primary/60"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cat.skills.map((s, i) => (
          <div
            key={s.name}
            className="rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/60"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="mb-3 flex items-start justify-between gap-2">
              <h4 className="font-semibold">{s.name}</h4>
              <span className="shrink-0 rounded-md bg-accent px-2 py-0.5 font-mono text-xs text-accent-foreground">
                LV {s.level}
              </span>
            </div>
            <div className="flex gap-1" aria-label={`Nível ${s.level} de 5`}>
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className={`h-2 flex-1 rounded-full ${n <= s.level ? "bg-primary" : "bg-muted"}`}
                />
              ))}
            </div>
            <p className="mt-2 font-mono text-xs text-muted-foreground">{levelNames[s.level]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
