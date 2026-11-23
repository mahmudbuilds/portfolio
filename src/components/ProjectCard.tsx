import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import type { Project } from "../types";
import { InventryDiagram } from "./InventryDiagram";

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "index";
}

export function ProjectCard({ project, variant = "index" }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  const hasDistinctLive =
    Boolean(project.liveUrl) &&
    project.liveUrl !== project.githubUrl &&
    !project.liveUrl!.includes("github.com");

  if (variant === "featured") {
    return (
      <article
        id={`project-${project.id}`}
        className="flex flex-col justify-between bg-surface border border-line rounded-xl overflow-hidden transition-colors hover:border-line-strong scroll-mt-24"
      >
        {/* Top per-project accent hairline */}
        <div
          className="h-[2px] w-full shrink-0"
          style={{ backgroundColor: project.accentHex }}
          aria-hidden="true"
        />

        {/* Media Stage: Screenshot or Architecture Diagram */}
        {(project.screenshot || project.diagram) && (
          <div className="aspect-[16/10] w-full bg-paper border-b border-line overflow-hidden">
            {project.screenshot ? (
              <img
                src={project.screenshot}
                alt={project.screenshotAlt ?? `${project.title} application interface`}
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            ) : project.diagram === "inventry-locking" ? (
              <InventryDiagram />
            ) : null}
          </div>
        )}

        <div className="flex-1 flex flex-col justify-between p-6 sm:p-7 space-y-6">
          <div className="space-y-5">
            {/* Category & Action Links */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: project.accentHex }}
                  aria-hidden="true"
                />
                <span>{project.category}</span>
              </div>

              <div className="flex items-center gap-3 text-[13px]">
                {hasDistinctLive && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit live site for ${project.title}`}
                    className="inline-flex items-center gap-1 text-ink font-medium hover:text-accent hover:underline transition-colors min-h-[44px] px-1"
                  >
                    <span>Live site</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code for ${project.title}`}
                  className="inline-flex items-center gap-1 text-ink-secondary hover:text-ink hover:underline transition-colors min-h-[44px] px-1"
                >
                  <span>Source</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Title & Outcome-First Summary */}
            <div className="space-y-2.5">
              <h3 className="font-serif text-2xl sm:text-[1.75rem] leading-tight tracking-[-0.02em] font-normal text-ink text-balance">
                {project.title}
              </h3>
              <p className="text-sm sm:text-[15px] font-medium text-ink-secondary leading-snug">
                {project.tagline}
              </p>
              <p className="text-sm sm:text-[15px] text-ink-muted leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Concrete Engineering Specs (3 columns, no orphan cell) */}
            {project.metrics.length > 0 && (
              <dl className="grid grid-cols-3 gap-3 pt-4 border-t border-line">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="space-y-0.5 min-w-0">
                    <dt className="text-[11px] font-mono uppercase tracking-[0.05em] text-ink-muted truncate">
                      {metric.label}
                    </dt>
                    <dd className="text-xs sm:text-[13px] font-medium text-ink leading-snug">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          {/* Footer: Tech Stack & Expandable Architecture Notes */}
          <div className="space-y-2 pt-4 border-t border-line">
            <p className="text-[13px] font-mono text-ink-muted leading-relaxed">
              {project.stack.join(" · ")}
            </p>

            <div>
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-secondary hover:text-ink transition-colors cursor-pointer min-h-[44px]"
              >
                <span>
                  {expanded ? "Hide architecture notes" : "Architecture notes"}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-ink-muted transition-transform duration-200 ${
                    expanded ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {expanded && (
                <div className="mt-2 pl-4 border-l border-line-strong space-y-3 text-[13px] leading-relaxed text-ink-secondary">
                  <div>
                    <span className="font-medium text-ink block mb-0.5">
                      System design
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
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      id={`project-${project.id}`}
      className="py-7 sm:py-8 grid grid-cols-1 md:grid-cols-[14rem_1fr] lg:grid-cols-[16rem_1fr] gap-4 md:gap-10 lg:gap-12 scroll-mt-24"
    >
      {/* Left Metadata & Links Column */}
      <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-3 md:gap-2.5 md:pt-1">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: project.accentHex }}
              aria-hidden="true"
            />
            <span>{project.category}</span>
          </div>
          {project.metrics[0] && (
            <p className="text-[13px] text-ink-secondary font-medium">
              {project.metrics[0].value}
            </p>
          )}
        </div>

        <div className="flex items-center md:flex-col md:items-start gap-3 md:gap-0 text-[13px]">
          {hasDistinctLive && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit live site for ${project.title}`}
              className="inline-flex items-center gap-1 text-ink font-medium hover:text-accent hover:underline transition-colors min-h-[44px] md:min-h-[36px]"
            >
              <span>Live site</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${project.title}`}
            className="inline-flex items-center gap-1 text-ink-secondary hover:text-ink hover:underline transition-colors min-h-[44px] md:min-h-[36px]"
          >
            <span>Source</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Right Content Column (+ Optional Preview Image) */}
      <div
        className={
          project.screenshot
            ? "grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_18rem] gap-6 lg:gap-8 items-start"
            : ""
        }
      >
        <div className="space-y-3 max-w-[54ch]">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl tracking-[-0.015em] font-normal text-ink text-balance">
              {project.title}
            </h3>
            <p className="text-sm sm:text-[15px] font-medium text-ink-secondary mt-1">
              {project.tagline}
            </p>
          </div>

          <p className="text-sm sm:text-[15px] text-ink-muted leading-relaxed">
            {project.description}
          </p>

          <p className="text-[13px] font-mono text-ink-muted leading-relaxed pt-0.5">
            {project.stack.join(" · ")}
          </p>

          <div>
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-secondary hover:text-ink transition-colors cursor-pointer min-h-[44px]"
            >
              <span>
                {expanded ? "Hide architecture notes" : "Architecture notes"}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-ink-muted transition-transform duration-200 ${
                  expanded ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {expanded && (
              <div className="mt-2 pl-4 border-l border-line-strong space-y-3 text-[13px] leading-relaxed text-ink-secondary">
                <div>
                  <span className="font-medium text-ink block mb-0.5">
                    System design
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
        </div>

        {project.screenshot && (
          <div className="aspect-[16/10] w-full max-w-md lg:max-w-none rounded-lg border border-line bg-surface overflow-hidden">
            <img
              src={project.screenshot}
              alt={project.screenshotAlt ?? `${project.title} application interface`}
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
          </div>
        )}
      </div>
    </article>
  );
}
