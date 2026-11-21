export function PhilosophySection() {
  const principles = [
    {
      index: "01",
      title: "Enforce invariants at the database layer",
      description:
        "Application checks alone break under concurrent requests. Critical rules belong inside transactions and schema constraints.",
      example:
        "In Inventry, wrapping stock decrements in PostgreSQL SELECT FOR UPDATE row locks prevents concurrent orders from driving inventory negative.",
    },
    {
      index: "02",
      title: "Design for upstream failure, not the happy path",
      description:
        "Third-party APIs hit rate limits and quotas in production. Fallbacks and metering should be built into the server layer from day one.",
      example:
        "In Resonance, multi-key API rotation detects upstream quota errors, swaps to a healthy key, and re-clones custom voices from cached audio buffers.",
    },
    {
      index: "03",
      title: "Keep state where it belongs",
      description:
        "Not every problem needs a backend round-trip. Choosing the right execution boundary cuts latency, complexity, and security surface.",
      example:
        "In ResuMind, running PDF parsing 100% client-side removes PII storage risk; in Flow Batch Automator, closed Shadow DOM and IndexedDB isolate extension state.",
    },
  ];

  return (
    <section id="approach" className="space-y-8 scroll-mt-16">
      <div className="space-y-1.5">
        <h2 className="font-serif text-2xl sm:text-3xl tracking-[-0.02em] font-normal text-ink">
          Engineering Approach
        </h2>
        <p className="text-sm sm:text-[15px] text-ink-muted">
          Trade-offs I prioritize when designing systems, backed by decisions from shipped work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-8 border-t border-line">
        {principles.map((principle) => (
          <div
            key={principle.title}
            className="flex flex-col justify-between space-y-4 bg-surface/60 border border-line rounded-xl p-6"
          >
            <div className="space-y-2.5">
              <span className="font-mono text-xs text-accent tabular-nums">
                {principle.index}
              </span>
              <h3 className="text-base font-medium text-ink tracking-[-0.01em] leading-snug">
                {principle.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {principle.description}
              </p>
            </div>
            <p className="text-[13px] text-ink-muted leading-relaxed pt-3 border-t border-line">
              {principle.example}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
