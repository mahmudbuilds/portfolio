import { useState, useEffect } from "react";
import { X, Printer, Copy, Check, Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, TwitterIcon } from "./SocialIcons";
import { developerBio, projectsData, skillCategoriesData, experienceMilestonesData } from "../data/portfolioData";

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
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[90vh] flex flex-col rounded-xl bg-zinc-950 border border-zinc-800 shadow-2xl text-zinc-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar: Fully responsive for mobile screens */}
        <div className="flex items-center justify-between px-3.5 sm:px-5 py-3 border-b border-zinc-800 bg-zinc-900/50 gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="font-mono text-xs text-zinc-400">cv.pdf</span>
            <span className="text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
              Ready
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={copyMarkdown}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? "Copied Markdown" : "Copy Markdown"}</span>
              <span className="sm:hidden">{copied ? "Copied" : "Copy"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-md bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
              <span className="sm:hidden">Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable Resume Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-10 space-y-6 sm:space-y-8 font-sans text-xs sm:text-sm leading-relaxed">
          {/* Header */}
          <div className="border-b border-zinc-800 pb-5 sm:pb-6 space-y-1.5 sm:space-y-2">
            <h1 className="text-xl sm:text-3xl font-bold tracking-tight text-white">
              {developerBio.name}
            </h1>
            <p className="text-sm sm:text-base font-medium text-zinc-300">
              {developerBio.title}
            </p>
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap text-xs text-zinc-400 pt-1 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {developerBio.email}
              </span>
              <a
                href={developerBio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-zinc-200"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                github.com/mahmudbuilds
              </a>
              <a
                href={developerBio.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-zinc-200"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
                @mahmudbuilds
              </a>
            </div>
          </div>

          {/* Summary */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Professional Summary
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              {developerBio.bio}
            </p>
          </section>

          {/* Selected Projects */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Selected Projects & Engineering
            </h2>
            <div className="space-y-4">
              {projectsData.map((project) => (
                <div key={project.id} className="space-y-1.5">
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-zinc-100">{project.title}</span>
                      <span className="text-xs text-zinc-400">— {project.tagline}</span>
                    </div>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-zinc-400 hover:text-white inline-flex items-center gap-0.5 font-mono"
                      >
                        link <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-zinc-400">
                    <strong className="text-zinc-300">Stack:</strong> {project.stack.join(", ")}
                  </p>
                  <ul className="space-y-1 text-xs text-zinc-300">
                    {project.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-zinc-500">•</span>
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
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Experience & Milestones
            </h2>
            <div className="space-y-4">
              {experienceMilestonesData.map((milestone, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-baseline justify-between flex-wrap gap-1">
                    <div>
                      <span className="font-semibold text-zinc-100">{milestone.role}</span>
                      <span className="text-xs text-zinc-400"> · {milestone.company}</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-500">{milestone.year}</span>
                  </div>
                  <p className="text-xs text-zinc-400">{milestone.description}</p>
                  <ul className="space-y-1 text-xs text-zinc-300">
                    {milestone.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-zinc-500">•</span>
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
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Technical Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategoriesData.map((category) => (
                <div key={category.name} className="space-y-1">
                  <span className="font-medium text-zinc-300 block">{category.name}</span>
                  <p className="text-zinc-400">{category.skills.map((s) => s.name).join(", ")}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
