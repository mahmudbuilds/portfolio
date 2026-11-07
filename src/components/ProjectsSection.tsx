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
    <section id="projects" className="space-y-6 scroll-mt-12">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-zinc-800/80">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
            Selected Work
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Production web apps, developer tools, and client-side systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                activeCategory === category
                  ? "bg-zinc-100 text-zinc-950 font-medium"
                  : "bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border border-zinc-800"
              }`}
            >
              {category === "All"
                ? `All (${projectsData.length})`
                : category === "AI & Systems"
                ? "Systems"
                : category === "Frontend Concepts"
                ? "Frontend"
                : category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
