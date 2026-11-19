export function PhilosophySection() {
  const principles = [
    {
      title: "Data integrity first",
      description:
        "Good UI cannot hide a fragile backend. I design explicit schemas, enforce constraints at the database layer, and handle concurrency and failure modes before they reach users.",
    },
    {
      title: "Boring, legible architecture",
      description:
        "Maintainable software favors clear boundaries and predictable data flow over premature abstraction. Code should be easy for the next engineer to trace, test, and change safely.",
    },
    {
      title: "Own the whole path to production",
      description:
        "Shipping reliable products means caring about every layer — from SQL query plans and auth boundaries to responsive layouts, keyboard ergonomics, and perceived latency.",
    },
  ];

  return (
    <section id="approach" className="space-y-8 scroll-mt-16">
      <div className="space-y-1.5">
        <h2 className="font-serif text-2xl sm:text-3xl tracking-[-0.02em] font-normal text-ink">
          Engineering Approach
        </h2>
        <p className="text-sm text-ink-muted">
          How I make trade-offs when designing systems and shipping product features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pt-7 border-t border-line">
        {principles.map((principle) => (
          <div key={principle.title} className="space-y-2.5">
            <h3 className="text-[15px] font-medium text-ink tracking-[-0.01em]">
              {principle.title}
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
