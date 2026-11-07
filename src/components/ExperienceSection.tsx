import { experienceMilestonesData } from "../data/portfolioData";

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-6 scroll-mt-12">
      {/* Section Header */}
      <div className="pb-2 border-b border-zinc-800/80">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
          Experience & Milestones
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          Where I have built software, solved technical bottlenecks, and delivered products.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        {experienceMilestonesData.map((milestone, idx) => (
          <div key={idx} className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-3">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-600 border-2 border-zinc-950" />

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-zinc-100">
                  {milestone.role}
                </h3>
                <p className="text-sm text-zinc-400 font-medium">
                  {milestone.company}
                </p>
              </div>
              <span className="text-xs font-mono text-zinc-500">
                {milestone.year}
              </span>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed">
              {milestone.description}
            </p>

            <ul className="space-y-2 pt-1">
              {milestone.highlights.map((highlight, hIdx) => (
                <li
                  key={hIdx}
                  className="text-xs sm:text-sm text-zinc-400 flex items-start gap-2.5 leading-relaxed"
                >
                  <span className="text-zinc-600 select-none mt-1">›</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
