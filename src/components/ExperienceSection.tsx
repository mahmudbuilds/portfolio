import { experienceMilestonesData } from "../data/portfolioData";

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-6 sm:space-y-8 scroll-mt-16">
      {/* Section Header */}
      <div className="pb-3 border-b border-zinc-200 dark:border-zinc-800/80">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Experience & Milestones
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          Where I have built software, solved technical bottlenecks, and delivered products to production.
        </p>
      </div>

      {/* Experience Milestones: Responsive dual-column layout on desktop, clean timeline on mobile */}
      <div className="space-y-8 sm:space-y-10">
        {experienceMilestonesData.map((milestone, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 pt-4 first:pt-0"
          >
            {/* Left Column: Timeline & Company Metadata */}
            <div className="md:w-64 shrink-0 space-y-1.5">
              <span className="inline-block px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300 font-medium">
                {milestone.year}
              </span>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
                {milestone.company}
              </p>
              <p className="text-xs text-zinc-500 font-mono">
                Full-Stack & Systems
              </p>
            </div>

            {/* Right Column: Role Title, Summary & Key Deliverables */}
            <div className="flex-1 space-y-3 pb-6 border-b border-zinc-200 dark:border-zinc-900 last:border-b-0 last:pb-0">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {milestone.role}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {milestone.description}
              </p>

              <ul className="space-y-2 pt-1">
                {milestone.highlights.map((highlight, hIdx) => (
                  <li
                    key={hIdx}
                    className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2.5 leading-relaxed"
                  >
                    <span className="text-emerald-600 dark:text-emerald-500 select-none mt-1 shrink-0 text-xs">›</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
