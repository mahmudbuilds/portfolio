import { experienceMilestonesData } from "../data/portfolioData";

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-8 scroll-mt-24">
      <div className="space-y-2">
        <h2 className="font-serif text-2xl sm:text-3xl tracking-[-0.02em] font-normal text-ink text-balance">
          Experience
        </h2>
        <p className="text-sm sm:text-[15px] text-ink-muted max-w-[60ch]">
          End-to-end engineering ownership across schema design, API resilience, and interface craft.
        </p>
      </div>

      <div className="border-t border-b border-line divide-y divide-line">
        {experienceMilestonesData.map((milestone) => (
          <div
            key={milestone.year}
            className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-[14rem_1fr] lg:grid-cols-[16rem_1fr] gap-4 md:gap-10 lg:gap-12"
          >
            {/* Left Column: Period & Context */}
            <div className="space-y-1 md:pt-1">
              <p className="font-mono text-[13px] tabular-nums text-ink-secondary">
                {milestone.year}
              </p>
              <p className="text-sm font-medium text-ink-muted">
                {milestone.company}
              </p>
            </div>

            {/* Right Column: Role, Summary & Deliverables */}
            <div className="space-y-4 max-w-[54ch]">
              <h3 className="font-serif text-xl sm:text-2xl tracking-[-0.015em] font-normal text-ink text-balance">
                {milestone.role}
              </h3>

              <p className="text-sm sm:text-[15px] text-ink-muted leading-relaxed">
                {milestone.description}
              </p>

              <ul className="space-y-2.5 pt-1">
                {milestone.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-sm sm:text-[15px] text-ink-secondary flex items-start gap-3 leading-relaxed"
                  >
                    <span
                      className="text-accent select-none shrink-0"
                      aria-hidden="true"
                    >
                      —
                    </span>
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
