import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../data/portfolioData";

export function ProjectsSection() {
  const featuredProjects = projectsData.filter((p) => p.featured);
  const moreProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="space-y-10 scroll-mt-24">
      <div className="space-y-2">
        <h2 className="font-serif text-2xl sm:text-3xl tracking-[-0.02em] font-normal text-ink text-balance">
          Selected Work
        </h2>
        <p className="text-sm sm:text-[15px] text-ink-muted max-w-[60ch]">
          Production web applications, concurrency-safe backends, and browser-native software.
        </p>
      </div>

      {/* Flagship Media-Led Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} variant="featured" />
        ))}
      </div>

      {/* Additional Projects Index */}
      {moreProjects.length > 0 && (
        <div className="space-y-4 pt-4">
          <h3 className="text-xs font-mono uppercase tracking-[0.08em] text-ink-muted">
            More Work
          </h3>
          <div className="border-t border-b border-line divide-y divide-line">
            {moreProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="index" />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
