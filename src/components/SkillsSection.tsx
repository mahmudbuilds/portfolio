import { skillCategoriesData } from "../data/portfolioData";

export function SkillsSection() {
  return (
    <section id="stack" className="space-y-8 scroll-mt-16">
      <div className="space-y-1.5">
        <h2 className="font-serif text-2xl sm:text-3xl tracking-[-0.02em] font-normal text-ink">
          Technical Stack
        </h2>
        <p className="text-sm text-ink-muted">
          Languages, frameworks, and infrastructure I use in production.
        </p>
      </div>

      <dl className="border-t border-b border-line divide-y divide-line">
        {skillCategoriesData.map((category) => (
          <div
            key={category.name}
            className="py-5 grid grid-cols-1 md:grid-cols-[12.5rem_1fr] gap-2 md:gap-10 items-baseline"
          >
            <dt className="text-sm font-medium text-ink">
              {category.name}
            </dt>
            <dd className="text-sm text-ink-secondary leading-relaxed">
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
