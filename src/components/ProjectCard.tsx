import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
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
    <article className="py-7 sm:py-9 grid grid-cols-1 md:grid-cols-[14rem_1fr] lg:grid-cols-[16rem_1fr] gap-4 md:gap-10 lg:gap-12">
      {/* Left Metadata & Links Column */}
      <div className="flex flex-row md:flex-col items-baseline md:items-start justify-between md:justify-start gap-3 md:pt-1">
        <span className="text-xs text-ink-muted font-medium">
          {project.category}
        </span>

        <div className="flex items-center md:flex-col md:items-start gap-4 md:gap-1.5 text-xs sm:text-[13px]">
          {hasDistinctLive && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit live site for ${project.title}`}
              className="inline-flex items-center gap-1 text-ink font-medium hover:text-accent hover:underline transition-colors"
            >
              <span>Live site</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${project.title}`}
              className="inline-flex items-center gap-1 text-ink-secondary hover:text-ink hover:underline transition-colors"
            >
              <span>Source</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
            </a>
          )}
        </div>
      </div>

      {/* Right Content Column */}
      <div className="space-y-3">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl tracking-[-0.015em] font-normal text-ink">
            {hasDistinctLive ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          <p className="text-sm font-medium text-ink-secondary mt-1">
            {project.tagline}
          </p>
        </div>

        <p className="text-sm text-ink-muted leading-relaxed max-w-[72ch]">
          {project.description}
        </p>

        {/* Inline Tech Stack Metadata (no pill soup) */}
        <p className="text-xs font-mono text-ink-muted leading-relaxed pt-0.5">
          {project.stack.join(" · ")}
        </p>

        {/* Expandable Technical Notes */}
        {project.architecture && (
          <div className="pt-1">
            <button
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-secondary hover:text-ink transition-colors cursor-pointer py-1"
            >
              <span>{expanded ? "Hide technical notes" : "Technical notes"}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-ink-muted transition-transform duration-200 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {expanded && (
              <div className="mt-3.5 pl-4 border-l border-line-strong space-y-3.5 text-xs sm:text-[13px] leading-relaxed text-ink-secondary max-w-[72ch]">
                <div>
                  <span className="font-medium text-ink block mb-0.5">
                    Architecture &amp; data flow
                  </span>
                  <p className="text-ink-muted">
                    {project.architecture.clientArchitecture}{" "}
                    {project.architecture.backendArchitecture}
                  </p>
                </div>

                <div>
                  <span className="font-medium text-ink block mb-0.5">
                    Key challenge
                  </span>
                  <p className="text-ink-muted">
                    {project.architecture.keyTechnicalChallenge}
                  </p>
                </div>

                <div>
                  <span className="font-medium text-ink block mb-0.5">
                    Solution
                  </span>
                  <p className="text-ink-secondary">
                    {project.architecture.solutionEngineered}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
