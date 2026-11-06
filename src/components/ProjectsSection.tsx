import React, { useState } from "react";
import { FolderGit2, ExternalLink, Code2, ArrowRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { projectsData } from "../data/portfolioData";
import type { Project, ProjectCategory } from "../types";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>// 01. FLAGSHIP SYSTEMS &amp; ARCHITECTURES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
              Engineered for Production
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Each system is engineered with architectural rigor: decoupled APIs, multi-tenant databases, type-safe schemas, and production deployments.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-white/[0.04] border border-white/[0.08] self-start md:self-auto font-mono text-xs">
            {(["All", "Full-Stack", "AI & Systems", "Frontend Concepts"] as ProjectCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-sky-500 text-slate-950 font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl bg-[#0c101a] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 shadow-lg shadow-black/40"
            >
              {/* Top Accent Strip */}
              <div
                className="h-1 w-full transition-opacity opacity-70 group-hover:opacity-100"
                style={{ backgroundColor: project.accentHex }}
              />

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  {/* Header: Title and Category */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        FEATURED
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-white tracking-tight mt-1 group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-sky-400/90 mt-1 leading-snug">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Metrics Chips */}
                <div className="pt-2">
                  <div className="grid grid-cols-2 gap-2 my-2 font-mono text-[11px]">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="p-2 rounded bg-white/[0.02] border border-white/[0.05]">
                        <div className="text-[10px] text-slate-400">{m.label}</div>
                        <div className="font-medium text-slate-200 mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions Bar */}
              <div className="px-6 py-3.5 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between font-mono text-xs">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors cursor-pointer group/btn"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Inspect Architecture</span>
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      title="Open Live Deployment"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    title="View Source on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
