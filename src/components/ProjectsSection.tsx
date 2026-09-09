"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Layers, ArrowUpRight, Sparkles, Filter } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projects, Project } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Full-Stack", "AI & ML", "Frontend"];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/[0.08] text-cyan-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRODUCTION & ENGINEERING LAB</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Systems & Applications
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
              Production-grade applications and technical experiments engineered with decoupled APIs, intelligent agents, and modern frontend architecture.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#0c1018]/80 hover:bg-[#111722] hover:border-white/[0.18] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl shadow-black/40 hover:-translate-y-1"
              >
                {/* Accent Top Gradient Line */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${
                    project.category === "Full-Stack"
                      ? "from-emerald-500 via-teal-400 to-cyan-500"
                      : project.category === "AI & ML"
                      ? "from-cyan-400 via-blue-500 to-violet-500"
                      : "from-violet-500 via-fuchsia-400 to-pink-500"
                  }`}
                />

                <div className="p-6 space-y-4 flex-1">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-zinc-300">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Featured Flagship
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                    </h3>
                    <p className="text-xs text-cyan-300/80 font-mono mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics Pills if available */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {project.metrics.slice(0, 2).map((m) => (
                        <div
                          key={m.label}
                          className="px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/[0.05]"
                        >
                          <div className="text-[10px] text-zinc-400 font-mono">{m.label}</div>
                          <div className="text-xs font-semibold text-zinc-200">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="text-[11px] font-mono px-1.5 py-0.5 rounded text-zinc-400">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 py-4 border-t border-white/[0.06] bg-black/30 flex items-center justify-between gap-3 text-xs">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-zinc-400 hover:text-cyan-300 transition-colors font-mono cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    Specs & Arch
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all font-mono font-medium"
                      >
                        Live Demo
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
