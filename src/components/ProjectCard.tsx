import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: "featured" | "index";
}

export function ProjectCard({
  project,
  index,
  variant = "index",
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  const hasDistinctLive =
    project.liveUrl &&
    project.liveUrl !== project.githubUrl &&
    !project.liveUrl.includes("github.com");

  const formattedIndex = String(index).padStart(2, "0");

  if (variant === "featured") {
    return (
      <article className="flex flex-col justify-between bg-surface border border-line rounded-xl p-6 sm:p-7 space-y-6 transition-colors hover:border-line-strong">
        <div className="space-y-5">
          {/* Card Top Bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs font-mono text-ink-muted">
              <span className="text-accent font-medium tabular-nums">
                {formattedIndex}
              </span>
              <span aria-hidden="true">/</span>
              <span>{project.category}</span>
            </div>

            <div className="flex items-center gap-4 text-[13px]">
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

          {/* Title & Summary */}
          <div className="space-y-2.5">
            <h3 className="font-serif text-2xl sm:text-[1.75rem] leading-tight tracking-[-0.02em] font-normal text-ink">
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
            <p className="text-sm sm:text-[15px] font-medium text-ink-secondary leading-snug">
              {project.tagline}
            </p>
            <p className="text-sm sm:text-[15px] text-ink-muted leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Engineering Metrics */}
          {project.metrics.length > 0 && (
            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-line">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="space-y-0.5">
                  <dt className="text-[11px] font-mono uppercase tracking-[0.06em] text-ink-muted">
                    {metric.label}
                  </dt>
                  <dd className="text-[13px] font-medium text-ink">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {/* Footer: Tech Stack & Technical Notes */}
        <div className="space-y-3 pt-4 border-t border-line">
          <p className="text-[13px] font-mono text-ink-muted leading-relaxed">
            {project.stack.join(" · ")}
          </p>

          {project.architecture && (
            <div>
              <button
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-secondary hover:text-ink transition-colors cursor-pointer py-1"
              >
                <span>{expanded ? "Hide technical notes" : "Technical notes"}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-ink-muted transition-transform duration-200 ${
                    expanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expanded && (
                <div className="mt-3 pl-4 border-l border-line-strong space-y-3 text-[13px] leading-relaxed text-ink-secondary">
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

  return (
    <article className="py-7 sm:py-8 grid grid-cols-1 md:grid-cols-[14rem_1fr] lg:grid-cols-[16rem_1fr] gap-4 md:gap-10 lg:gap-12">
      {/* Enriched Left Metadata & Links Column */}
      <div className="flex flex-row md:flex-col items-baseline md:items-start justify-between md:justify-start gap-3 md:gap-3.5 md:pt-1">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
            <span className="tabular-nums text-ink-secondary">{formattedIndex}</span>
            <span aria-hidden="true">/</span>
            <span>{project.category}</span>
          </div>
          {project.metrics[0] && (
            <p className="text-[13px] text-ink-secondary font-medium">
              {project.metrics[0].value}
            </p>
          )}
        </div>

        <div className="flex items-center md:flex-col md:items-start gap-4 md:gap-1.5 text-[13px]">
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
          <p className="text-sm sm:text-[15px] font-medium text-ink-secondary mt-1">
            {project.tagline}
          </p>
        </div>

        <p className="text-sm sm:text-[15px] text-ink-muted leading-relaxed max-w-[72ch]">
          {project.description}
        </p>

        {/* Inline Tech Stack Metadata */}
        <p className="text-[13px] font-mono text-ink-muted leading-relaxed pt-0.5">
          {project.stack.join(" · ")}
        </p>

        {/* Expandable Technical Notes */}
        {project.architecture && (
          <div className="pt-1">
            <button
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-secondary hover:text-ink transition-colors cursor-pointer py-1"
            >
              <span>{expanded ? "Hide technical notes" : "Technical notes"}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-ink-muted transition-transform duration-200 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {expanded && (
              <div className="mt-3.5 pl-4 border-l border-line-strong space-y-3.5 text-[13px] leading-relaxed text-ink-secondary max-w-[72ch]">
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
