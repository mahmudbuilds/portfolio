import { experienceMilestonesData } from "../data/portfolioData";

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-8 scroll-mt-16">
      <div className="space-y-1.5">
        <h2 className="font-serif text-2xl sm:text-3xl tracking-[-0.02em] font-normal text-ink">
          Experience
        </h2>
        <p className="text-sm text-ink-muted">
          Core engineering domains, systems built, and technical ownership from schema to UI.
        </p>
      </div>

      <div className="border-t border-b border-line divide-y divide-line">
        {experienceMilestonesData.map((milestone, idx) => (
          <div
            key={idx}
            className="py-7 sm:py-9 grid grid-cols-1 md:grid-cols-[14rem_1fr] lg:grid-cols-[16rem_1fr] gap-4 md:gap-10 lg:gap-12"
          >
            {/* Left Column: Period & Context */}
            <div className="space-y-1 md:pt-1">
              <p className="font-mono text-xs tabular-nums text-ink-muted">
                {milestone.year}
              </p>
              <p className="text-sm font-medium text-ink-secondary">
                {milestone.company}
              </p>
            </div>

            {/* Right Column: Role, Summary & Deliverables */}
            <div className="space-y-3.5 max-w-[72ch]">
              <h3 className="font-serif text-xl sm:text-2xl tracking-[-0.015em] font-normal text-ink">
                {milestone.role}
              </h3>

              <p className="text-sm text-ink-muted leading-relaxed">
                {milestone.description}
              </p>

              <ul className="space-y-2.5 pt-1">
                {milestone.highlights.map((highlight, hIdx) => (
                  <li
                    key={hIdx}
                    className="text-sm text-ink-secondary flex items-start gap-3 leading-relaxed"
                  >
                    <span
                      className="text-ink-muted select-none shrink-0"
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
