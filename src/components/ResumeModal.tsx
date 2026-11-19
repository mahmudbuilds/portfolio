import { useState, useEffect } from "react";
import { X, Printer, Copy, Check, Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, TwitterIcon } from "./SocialIcons";
import {
  developerBio,
  projectsData,
  skillCategoriesData,
  experienceMilestonesData,
} from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyMarkdown = () => {
    const md = `
# ${developerBio.name}
**${developerBio.title}**
Email: ${developerBio.email} | GitHub: ${developerBio.github} | Twitter: ${developerBio.twitter}

## Summary
${developerBio.bio}

## Selected Projects
${projectsData
  .map(
    (p) => `
### ${p.title}
- **Stack:** ${p.stack.join(", ")}
- **Description:** ${p.description}
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

## Technical Skills
${skillCategoriesData
  .map((cat) => `**${cat.name}:** ${cat.skills.map((s) => s.name).join(", ")}`)
  .join("\n")}
    `.trim();

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/65 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[90vh] flex flex-col rounded-xl bg-white border border-[#e4e1d9] shadow-2xl text-[#161614] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div className="no-print flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[#e4e1d9] bg-[#faf9f6] gap-2">
          <span className="text-xs sm:text-sm font-medium text-[#161614]">
            Resume
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={copyMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white hover:bg-[#f2f0eb] border border-[#cbc6bb] text-xs font-medium text-[#161614] transition-colors cursor-pointer"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-[#b84a27]" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-[#68655e]" />
              )}
              <span className="hidden sm:inline">
                {copied ? "Copied Markdown" : "Copy Markdown"}
              </span>
              <span className="sm:hidden">{copied ? "Copied" : "Copy"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#161614] hover:opacity-90 text-[#faf9f6] text-xs font-medium transition-opacity cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
              <span className="sm:hidden">Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-[#68655e] hover:text-[#161614] hover:bg-[#f2f0eb] transition-colors cursor-pointer"
              aria-label="Close resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable Resume Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8 font-sans text-xs sm:text-sm leading-relaxed bg-white text-[#2e2d2a]">
          {/* Header */}
          <div className="border-b border-[#e4e1d9] pb-5 space-y-1.5">
            <h1 className="font-serif text-2xl sm:text-3xl font-normal tracking-[-0.02em] text-[#161614]">
              {developerBio.name}
            </h1>
            <p className="text-sm sm:text-base text-[#52504a]">
              {developerBio.title}
            </p>
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap text-xs text-[#68655e] pt-1 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                {developerBio.email}
              </span>
              <a
                href={developerBio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#161614] hover:underline"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                github.com/mahmudbuilds
              </a>
              <a
                href={developerBio.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#161614] hover:underline"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
                @mahmudbuilds
              </a>
            </div>
          </div>

          {/* Summary */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#68655e] font-medium border-b border-[#e4e1d9] pb-1">
              Summary
            </h2>
            <p className="text-[#2e2d2a] leading-relaxed">{developerBio.bio}</p>
          </section>

          {/* Selected Projects */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#68655e] font-medium border-b border-[#e4e1d9] pb-1">
              Selected Projects
            </h2>
            <div className="space-y-4">
              {projectsData.map((project) => (
                <div key={project.id} className="space-y-1.5">
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="font-semibold text-[#161614]">
                        {project.title}
                      </span>
                      <span className="text-xs text-[#68655e]">
                        — {project.tagline}
                      </span>
                    </div>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#52504a] hover:text-[#161614] inline-flex items-center gap-0.5 font-mono"
                      >
                        link <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-[#68655e]">
                    <strong className="text-[#161614] font-medium">Stack:</strong>{" "}
                    {project.stack.join(", ")}
                  </p>
                  <ul className="space-y-1 text-xs text-[#2e2d2a]">
                    {project.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#68655e] select-none">—</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#68655e] font-medium border-b border-[#e4e1d9] pb-1">
              Experience
            </h2>
            <div className="space-y-4">
              {experienceMilestonesData.map((milestone, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-baseline justify-between flex-wrap gap-1">
                    <div>
                      <span className="font-semibold text-[#161614]">
                        {milestone.role}
                      </span>
                      <span className="text-xs text-[#68655e]">
                        {" "}
                        · {milestone.company}
                      </span>
                    </div>
                    <span className="text-xs font-mono tabular-nums text-[#68655e]">
                      {milestone.year}
                    </span>
                  </div>
                  <p className="text-xs text-[#52504a]">{milestone.description}</p>
                  <ul className="space-y-1 text-xs text-[#2e2d2a]">
                    {milestone.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#68655e] select-none">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#68655e] font-medium border-b border-[#e4e1d9] pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategoriesData.map((category) => (
                <div key={category.name} className="space-y-0.5">
                  <span className="font-medium text-[#161614] block">
                    {category.name}
                  </span>
                  <p className="text-[#52504a]">
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
