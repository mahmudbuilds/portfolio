import { skillCategoriesData } from "../data/portfolioData";
import { Terminal, Layout, Server, Wrench } from "lucide-react";

export function SkillsSection() {
  const getCategoryIcon = (name: string) => {
    switch (name) {
      case "Programming Languages":
        return <Terminal className="w-4 h-4 text-rose-400" />;
      case "Frontend Development":
        return <Layout className="w-4 h-4 text-emerald-400" />;
      case "Backend & Cloud":
        return <Server className="w-4 h-4 text-sky-400" />;
      case "Developer Tools & APIs":
        return <Wrench className="w-4 h-4 text-amber-400" />;
      default:
        return <Terminal className="w-4 h-4 text-zinc-400" />;
    }
  };

  return (
    <section id="stack" className="space-y-6 sm:space-y-8 scroll-mt-16">
      {/* Section Header */}
      <div className="pb-3 border-b border-zinc-200 dark:border-zinc-800/80">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Technical Tooling & Stack
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          Technologies, frameworks, and cloud architecture I use to engineer production software.
        </p>
      </div>

      {/* Grid of Categories: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {skillCategoriesData.map((category) => (
          <div
            key={category.name}
            className="p-5 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/35 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/60 hover:border-zinc-300 dark:hover:border-zinc-700/80 shadow-xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-zinc-200 dark:border-zinc-850">
                {getCategoryIcon(category.name)}
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-semibold">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 rounded-md text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-950/80 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
