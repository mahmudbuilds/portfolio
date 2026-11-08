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
    <section id="approach" className="space-y-6 sm:space-y-8 scroll-mt-16">
      {/* Section Header */}
      <div className="pb-3 border-b border-zinc-200 dark:border-zinc-800/80">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Engineering Approach
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          Guiding principles that shape how I design systems, structure architectures, and write software.
        </p>
      </div>

      {/* Principles Grid: 1 col on mobile, 3 cols on tablet/desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {principles.map((principle) => (
          <div
            key={principle.number}
            className="p-5 sm:p-6 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/35 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/60 hover:border-zinc-300 dark:hover:border-zinc-700/80 shadow-xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2 py-0.5 rounded text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                  {principle.number}
                </span>
                <span className="text-[11px] font-mono text-zinc-500">Core Value</span>
              </div>

              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {principle.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {principle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
