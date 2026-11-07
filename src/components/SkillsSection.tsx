import { skillCategoriesData } from "../data/portfolioData";

export function SkillsSection() {
  return (
    <section id="stack" className="space-y-6 scroll-mt-12">
      {/* Section Header */}
      <div className="pb-2 border-b border-zinc-800/80">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
          Technical Tooling & Stack
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          Technologies and tools I use to build scalable web applications.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillCategoriesData.map((category) => (
          <div
            key={category.name}
            className="p-4 sm:p-5 rounded-xl border border-zinc-800/70 bg-zinc-900/30 space-y-3"
          >
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
              {category.name}
            </h3>

            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-2.5 py-1 rounded-md text-xs font-mono text-zinc-300 bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
