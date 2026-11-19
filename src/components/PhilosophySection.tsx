export function PhilosophySection() {
  const principles = [
    {
      title: "Simplicity over cleverness",
      description:
        "Code should be easy to read, test, and delete. Clear, straightforward logic ages far better than opaque abstractions that turn into technical debt.",
    },
    {
      title: "Performance is respect for the user",
      description:
        "Fast initial loads, indexed database queries, and lean bundles aren't afterthoughts — they are fundamental to building software people enjoy using.",
    },
    {
      title: "End-to-end ownership",
      description:
        "Reliable web applications require care across the entire stack, from relational schema design and API contracts to responsive layout and keyboard accessibility.",
    },
  ];

  return (
    <section id="approach" className="space-y-8 scroll-mt-16">
      <div className="space-y-1.5">
        <h2 className="font-serif text-2xl sm:text-3xl tracking-[-0.02em] font-normal text-ink">
          Engineering Approach
        </h2>
        <p className="text-sm text-ink-muted">
          Principles that guide how I design systems and write software.
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
