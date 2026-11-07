import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  featuredSpotlight?: boolean;
}

export function ProjectCard({ project, featuredSpotlight = false }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  const hasDistinctLive =
    project.liveUrl &&
    project.liveUrl !== project.githubUrl &&
    !project.liveUrl.includes("github.com");

  return (
    <article
      className={`group relative rounded-2xl transition-all duration-200 flex flex-col justify-between h-full ${
        featuredSpotlight
          ? "border border-zinc-750 bg-gradient-to-br from-zinc-900/80 via-zinc-900/50 to-zinc-950/90 p-5 sm:p-7 shadow-lg shadow-black/40 hover:border-zinc-600"
          : "border border-zinc-800/80 bg-zinc-900/35 hover:bg-zinc-900/70 hover:border-zinc-700/80 p-5 sm:p-6 shadow-sm hover:shadow-md"
      }`}
    >
      <div>
        {/* Top Header: Title, Category Badges & Direct Action Links */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <h3
                className={`font-semibold text-zinc-100 group-hover:text-white transition-colors tracking-tight ${
                  featuredSpotlight ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
                }`}
              >
                {project.title}
              </h3>

              <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono uppercase tracking-wider bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
                {project.category}
              </span>

              {featuredSpotlight && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  Featured Platform
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm font-medium text-zinc-200">
              {project.tagline}
            </p>
          </div>

          {/* External Links */}
          <div className="flex items-center gap-2 shrink-0 self-start">
            {hasDistinctLive && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live demo for ${project.title}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs font-medium border border-zinc-700 hover:border-zinc-600 transition-colors shadow-xs min-h-[34px]"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                </span>
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code for ${project.title}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-medium border border-zinc-800 hover:border-zinc-700 transition-colors min-h-[34px]"
              >
                <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Narrative Description */}
        <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        {/* Key Metrics Chips (For spotlight or cards with metrics) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-3.5 flex flex-wrap gap-2 text-xs">
            {project.metrics.map((metric, mIdx) => (
              <div
                key={mIdx}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-950/60 border border-zinc-850 text-zinc-400 text-[11px] font-mono"
              >
                <span className="text-zinc-500">{metric.label}:</span>
                <span className="text-zinc-200 font-medium">{metric.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Region: Stack Tags & Engineering Breakdown Drawer */}
      <div className="mt-4 pt-3.5 border-t border-zinc-800/60 space-y-3">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-zinc-950/80 border border-zinc-800/90"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable Engineering Breakdown */}
        {project.architecture && (
          <div className="pt-1">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer py-1 min-h-[28px]"
            >
              <span>{expanded ? "Hide technical breakdown" : "Engineering breakdown & challenges"}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  expanded ? "rotate-180 text-zinc-200" : "text-zinc-500"
                }`}
              />
            </button>

            {expanded && (
              <div className="mt-3 space-y-3 text-xs text-zinc-400 bg-zinc-950/80 p-3.5 sm:p-4 rounded-xl border border-zinc-800/80 leading-relaxed animate-in fade-in duration-200">
                <div>
                  <span className="font-semibold text-zinc-200 block mb-1">Architecture & Data Flow</span>
                  <p className="text-zinc-400">
                    {project.architecture.clientArchitecture} {project.architecture.backendArchitecture}
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-zinc-200 block mb-1">Key Technical Challenge</span>
                  <p className="text-zinc-400">{project.architecture.keyTechnicalChallenge}</p>
                </div>

                <div>
                  <span className="font-semibold text-emerald-400 block mb-1">Solution Engineered</span>
                  <p className="text-zinc-300">{project.architecture.solutionEngineered}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
