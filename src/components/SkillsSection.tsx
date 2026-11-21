import { skillCategoriesData } from "../data/portfolioData";

export function SkillsSection() {
  return (
    <section id="stack" className="space-y-8 scroll-mt-16">
      <div className="space-y-1.5">
        <h2 className="font-serif text-2xl sm:text-3xl tracking-[-0.02em] font-normal text-ink">
          Technical Stack
        </h2>
        <p className="text-sm sm:text-[15px] text-ink-muted">
          Core languages, frameworks, and data tools I ship production software with.
        </p>
      </div>

      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 pt-8 border-t border-line">
        {skillCategoriesData.map((category) => (
          <div
            key={category.name}
            className="space-y-2.5"
          >
            <dt className="text-xs font-mono uppercase tracking-[0.08em] text-ink-muted">
              {category.name}
            </dt>
            <dd className="text-sm sm:text-[15px] text-ink leading-relaxed">
              {category.skills.map((skill, idx) => (
                <span key={skill.name}>
                  {idx > 0 && (
                    <span className="mx-2 text-line-strong select-none" aria-hidden="true">
                      /
                    </span>
                  )}
                  <span>{skill.name}</span>
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
