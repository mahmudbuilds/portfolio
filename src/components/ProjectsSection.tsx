import { useState, useMemo } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../data/portfolioData";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    return ["All", "Full-Stack", "AI & Systems", "Frontend Concepts"];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="space-y-6 sm:space-y-8 scroll-mt-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 pb-3 border-b border-zinc-200 dark:border-zinc-800/80">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Selected Work
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            Production web applications, neural AI audio tools, and browser systems.
          </p>
        </div>

        {/* Filter Tabs: Horizontal scroll on narrow mobile, wraps cleanly on desktop */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 -mx-1 px-1 no-scrollbar shrink-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer shrink-0 whitespace-nowrap min-h-[34px] flex items-center ${
                activeCategory === category
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-semibold shadow-xs"
                  : "bg-zinc-100 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/70 border border-zinc-200 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:text-zinc-200 dark:border-zinc-800 dark:hover:border-zinc-700"
              }`}
            >
              {category === "All"
                ? `All (${projectsData.length})`
                : category === "AI & Systems"
                ? "AI & Systems"
                : category === "Frontend Concepts"
                ? "Frontend Concepts"
                : category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Responsive Grid: Uniform 1 col on mobile, 2 cols on tablet/desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="col-span-1">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
