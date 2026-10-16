export function DemoTag({ label = "Exemplo editável" }: { label?: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-dashed border-warning bg-warning/10 px-2.5 py-0.5 font-mono text-[11px] text-warning">
      {label}
    </span>
  );
}
