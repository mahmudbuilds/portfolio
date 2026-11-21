import { skillCategoriesData } from "../data/portfolioData";

export function SkillsSection() {
  return (
    <section id="stack" className="space-y-8 scroll-mt-24">
      <div className="space-y-2">
        <h2 className="font-serif text-2xl sm:text-3xl tracking-[-0.02em] font-normal text-ink text-balance">
          Core Stack
        </h2>
        <p className="text-sm sm:text-[15px] text-ink-muted max-w-[60ch]">
          The production languages, frameworks, and data tools I reach for daily.
        </p>
      </div>

      <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-line">
        {skillCategoriesData.map((category) => (
          <div key={category.name} className="space-y-3">
            <dt className="text-xs font-mono uppercase tracking-[0.08em] text-ink-muted">
              {category.name}
            </dt>
            <dd className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center px-3 py-1.5 rounded-md bg-surface border border-line text-sm text-ink whitespace-nowrap"
                >
                  {skill.name}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
