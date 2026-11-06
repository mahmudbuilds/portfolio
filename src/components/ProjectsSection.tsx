import React, { useState } from "react";
import { ExternalLink, ArrowRight, Layers } from "lucide-react";
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
    <section id="projects" className="py-24 border-t border-white/[0.06] relative text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
              <Layers className="w-3.5 h-3.5" />
              <span>PRODUCTION SYSTEMS &amp; PRODUCTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Selected Flagship Work
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              Scalable multi-tenant platforms, high-performance backends, and responsive client-side AI tools.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/80 rounded-xl border border-white/10 self-start md:self-auto text-xs font-medium">
            {(["All", "Full-Stack", "AI & Systems", "Frontend Concepts"] as ProjectCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-white text-slate-950 font-semibold shadow-md"
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
              className="group relative rounded-2xl bg-slate-900/40 border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-sky-500/5 backdrop-blur-sm"
            >
              {/* Subtle top glow bar */}
              <div
                className="h-1 w-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: project.accentHex }}
              />

              <div className="p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20">
                        FLAGSHIP
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mt-2 group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-sky-400/90 font-medium mt-1 leading-snug">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics Badges */}
                <div className="pt-2">
                  <div className="grid grid-cols-2 gap-2 my-2 text-xs">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-950/60 border border-white/[0.05]">
                        <div className="text-[10px] text-slate-400 font-medium">{m.label}</div>
                        <div className="font-semibold text-white mt-0.5 truncate">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md bg-white/[0.04] text-[11px] font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions Bar */}
              <div className="px-7 py-4 bg-slate-950/60 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors cursor-pointer group/btn"
                >
                  <span>System Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
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
