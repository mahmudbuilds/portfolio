import { useState, useEffect, useRef } from "react";
import { X, Printer, Copy, Check, Mail, Download } from "lucide-react";
import { GithubIcon, TwitterIcon } from "./SocialIcons";
import {
  developerBio,
  projectsData,
  skillCategoriesData,
  experienceMilestonesData,
} from "../data/portfolioData";
import { copyToClipboard } from "../utils/clipboard";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = async () => {
    const md = `
# ${developerBio.name}
**${developerBio.title}**
Email: ${developerBio.email} | GitHub: ${developerBio.github} | X: ${developerBio.twitter}

## Summary
${developerBio.bio}

## Selected Projects
${projectsData
  .map(
    (p) => `
### ${p.title}
- **Stack:** ${p.stack.join(", ")}
- **Summary:** ${p.tagline}
- **Key Features:**
${p.features.map((f) => `  * ${f}`).join("\n")}
- **Links:** GitHub (${p.githubUrl})${p.liveUrl ? ` | Live (${p.liveUrl})` : ""}
`
  )
  .join("\n")}

## Experience
${experienceMilestonesData
  .map(
    (m) => `
### ${m.role} — ${m.company} (${m.year})
${m.description}
${m.highlights.map((h) => `- ${h}`).join("\n")}
`
  )
  .join("\n")}

## Core Stack
${skillCategoriesData
  .map((cat) => `**${cat.name}:** ${cat.skills.map((s) => s.name).join(", ")}`)
  .join("\n")}
    `.trim();

    const ok = await copyToClipboard(md);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[90vh] flex flex-col rounded-xl bg-paper border border-line-strong shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Theme-aware Modal Toolbar */}
        <div className="no-print flex items-center justify-between px-4 sm:px-6 py-3 border-b border-line bg-surface gap-2">
          <span
            id="resume-modal-title"
            className="text-xs sm:text-sm font-medium text-ink"
          >
            Resume
          </span>

          <div className="flex items-center gap-2">
            <a
              href={developerBio.resumePdfUrl}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-ink hover:opacity-90 text-paper text-xs font-medium transition-opacity min-h-[36px]"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-paper hover:bg-surface border border-line-strong text-xs font-medium text-ink transition-colors cursor-pointer min-h-[36px]"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
              )}
              <span className="hidden sm:inline">
                {copied ? "Copied Markdown" : "Copy Markdown"}
              </span>
              <span className="sm:hidden">{copied ? "Copied" : "Copy"}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-paper hover:bg-surface border border-line-strong text-xs font-medium text-ink transition-colors cursor-pointer min-h-[36px]"
            >
              <Printer className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
              <span>Print</span>
            </button>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-md text-ink-muted hover:text-ink hover:bg-paper transition-colors cursor-pointer"
              aria-label="Close resume"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Printable Document Sheet (always crisp paper white for print accuracy) */}
        <div className="overflow-y-auto bg-white text-[#161614] p-6 sm:p-10 space-y-6 text-sm leading-relaxed">
          {/* Document Header */}
          <div className="border-b border-[#e4e1d9] pb-5 space-y-2">
            <h1 className="font-serif text-3xl tracking-[-0.02em] text-[#161614] font-normal">
              {developerBio.name}
            </h1>
            <p className="text-sm font-medium text-[#43413c]">
              {developerBio.title} · {developerBio.location}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#4f4c46] pt-1">
              <a
                href={`mailto:${developerBio.email}`}
                className="inline-flex items-center gap-1 hover:text-[#161614]"
              >
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                {developerBio.email}
              </a>
              <a
                href={developerBio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#161614]"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                github.com/mahmudbuilds
              </a>
              <a
                href={developerBio.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#161614]"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
                x.com/mahmudbuilds
              </a>
            </div>
          </div>

          {/* Summary */}
          <section className="space-y-1.5">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#4f4c46] font-medium border-b border-[#e4e1d9] pb-1">
              Summary
            </h2>
            <p className="text-xs sm:text-[13px] text-[#2e2d2a] leading-relaxed">
              {developerBio.bio}
            </p>
          </section>

          {/* Selected Projects */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#4f4c46] font-medium border-b border-[#e4e1d9] pb-1">
              Selected Projects
            </h2>
            <div className="space-y-4">
              {projectsData.map((project) => (
                <div key={project.id} className="space-y-1">
                  <div className="flex items-baseline justify-between flex-wrap gap-1">
                    <span className="font-semibold text-[#161614]">
                      {project.title}
                    </span>
                    <span className="text-[11px] font-mono text-[#4f4c46]">
                      {project.stack.join(" · ")}
                    </span>
                  </div>
                  <p className="text-xs text-[#383631]">{project.tagline}</p>
                  <ul className="space-y-0.5 text-xs text-[#2e2d2a] pt-0.5">
                    {project.features.slice(0, 2).map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <span className="text-[#4f4c46] select-none">—</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#4f4c46] font-medium border-b border-[#e4e1d9] pb-1">
              Experience
            </h2>
            <div className="space-y-4">
              {experienceMilestonesData.map((milestone) => (
                <div key={milestone.year} className="space-y-1.5">
                  <div className="flex items-baseline justify-between flex-wrap gap-1">
                    <div>
                      <span className="font-semibold text-[#161614]">
                        {milestone.role}
                      </span>
                      <span className="text-xs text-[#4f4c46]">
                        {" "}
                        · {milestone.company}
                      </span>
                    </div>
                    <span className="text-xs font-mono tabular-nums text-[#4f4c46]">
                      {milestone.year}
                    </span>
                  </div>
                  <p className="text-xs text-[#383631]">{milestone.description}</p>
                  <ul className="space-y-1 text-xs text-[#2e2d2a]">
                    {milestone.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="text-[#4f4c46] select-none">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Core Stack */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#4f4c46] font-medium border-b border-[#e4e1d9] pb-1">
              Core Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {skillCategoriesData.map((category) => (
                <div key={category.name} className="space-y-0.5">
                  <span className="font-medium text-[#161614] block">
                    {category.name}
                  </span>
                  <p className="text-[#383631]">
                    {category.skills.map((s) => s.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
