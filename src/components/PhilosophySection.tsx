export function PhilosophySection() {
  const principles = [
    {
      number: "01",
      title: "Simplicity Over Cleverness",
      description:
        "Code should be easy to read, test, and delete. I prefer clear, straightforward logic over complex, opaque abstractions that become technical debt."
    },
    {
      number: "02",
      title: "Performance is Respect for the User",
      description:
        "Fast initial page loads, snappy database queries, and lightweight bundles aren't afterthoughts. They are fundamental to delivering software people love to use."
    },
    {
      number: "03",
      title: "End-to-End Craftsmanship",
      description:
        "Great web applications require care across the entire stack—from relational schema design and API contracts to responsive layout and keyboard accessibility."
    }
  ];

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="pb-2 border-b border-zinc-800/80">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
          Engineering Approach
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          Guiding principles that shape how I design systems and write software.
        </p>
      </div>

      {/* Principles List */}
      <div className="grid grid-cols-1 gap-4">
        {principles.map((principle) => (
          <div
            key={principle.number}
            className="flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-zinc-800/70 bg-zinc-900/20"
          >
            <span className="text-xs font-mono text-zinc-500 font-semibold mt-0.5 select-none">
              {principle.number}
            </span>
            <div className="space-y-1">
              <h3 className="text-sm sm:text-base font-semibold text-zinc-200">
                {principle.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {principle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
