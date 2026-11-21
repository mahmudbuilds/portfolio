import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../data/portfolioData";

export function ProjectsSection() {
  const featuredProjects = projectsData.slice(0, 2);
  const moreProjects = projectsData.slice(2);

  return (
    <section id="projects" className="space-y-10 scroll-mt-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div className="space-y-1.5">
          <h2 className="font-serif text-2xl sm:text-3xl tracking-[-0.02em] font-normal text-ink">
            Selected Work
          </h2>
          <p className="text-sm sm:text-[15px] text-ink-muted">
            End-to-end web applications, resilient API integrations, and browser-native tools.
          </p>
        </div>
        <p className="text-xs sm:text-[13px] font-mono text-ink-muted tabular-nums">
          {projectsData.length} shipped projects
        </p>
      </div>

      {/* Flagship Showcase (2-Column Focal Point) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {featuredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx + 1}
            variant="featured"
          />
        ))}
      </div>

      {/* Additional Projects Index */}
      {moreProjects.length > 0 && (
        <div className="space-y-4 pt-2">
          <h3 className="text-xs font-mono uppercase tracking-[0.08em] text-ink-muted">
            More Work
          </h3>
          <div className="border-t border-b border-line divide-y divide-line">
            {moreProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={featuredProjects.length + idx + 1}
                variant="index"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
