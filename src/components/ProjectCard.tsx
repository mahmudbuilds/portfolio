import { useState } from "react";
import { ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  const hasDistinctLive =
    project.liveUrl &&
    project.liveUrl !== project.githubUrl &&
    !project.liveUrl.includes("github.com");

  return (
    <article className="group relative rounded-xl border border-zinc-800/70 bg-zinc-900/30 hover:bg-zinc-900/70 hover:border-zinc-700/80 p-4 sm:p-6 transition-all duration-200">
      {/* Top Header: Title, Tags & Action Links */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono uppercase tracking-wider bg-zinc-800 text-zinc-400 border border-zinc-700/50">
              {project.category}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                <Sparkles className="w-2.5 h-2.5" />
                Featured
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm font-medium text-zinc-300">
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
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-medium border border-zinc-700 transition-colors min-h-[32px]"
            >
              <span>Live</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${project.title}`}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-medium border border-zinc-700 transition-colors min-h-[32px]"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>

      {/* Narrative Description */}
      <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack Tags */}
      <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded text-[11px] sm:text-xs font-mono text-zinc-400 bg-zinc-950/80 border border-zinc-800"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Expandable Engineering Breakdown */}
      {project.architecture && (
        <div className="mt-3.5 sm:mt-4 pt-3 border-t border-zinc-800/60">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer py-1.5 min-h-[32px]"
          >
            <span>{expanded ? "Hide technical breakdown" : "Engineering breakdown & challenges"}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                expanded ? "rotate-180 text-zinc-200" : "text-zinc-500"
              }`}
            />
          </button>

          {expanded && (
            <div className="mt-3 space-y-3 text-xs text-zinc-400 bg-zinc-950/60 p-3.5 sm:p-4 rounded-lg border border-zinc-800/70 leading-relaxed animate-in fade-in duration-200">
              <div>
                <span className="font-semibold text-zinc-300 block mb-1">Architecture & Data Flow</span>
                <p>{project.architecture.clientArchitecture} {project.architecture.backendArchitecture}</p>
              </div>

              <div>
                <span className="font-semibold text-zinc-300 block mb-1">Key Technical Challenge</span>
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
    </article>
  );
}
