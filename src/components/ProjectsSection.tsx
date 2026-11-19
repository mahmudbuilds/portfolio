import { useState, useMemo } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../data/portfolioData";
import type { ProjectCategory } from "../types";

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Full-Stack",
  "AI & Systems",
  "Frontend Concepts",
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="space-y-8 scroll-mt-16">
      {/* Section Header & Underline Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1.5">
          <h2 className="font-serif text-2xl sm:text-3xl tracking-[-0.02em] font-normal text-ink">
            Selected Work
          </h2>
          <p className="text-sm text-ink-muted">
            Production web applications, neural AI audio tools, and browser systems.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="flex items-center gap-4 sm:gap-5 overflow-x-auto no-scrollbar shrink-0"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`pb-1.5 text-xs sm:text-[13px] transition-colors cursor-pointer shrink-0 whitespace-nowrap border-b-2 ${
                  isActive
                    ? "border-accent text-ink font-medium"
                    : "border-transparent text-ink-muted hover:text-ink"
                }`}
              >
                {category === "All" ? (
                  <span className="tabular-nums">All ({projectsData.length})</span>
                ) : (
                  category
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Editorial Index List */}
      <div className="border-t border-b border-line divide-y divide-line">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
