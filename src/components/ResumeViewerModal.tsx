import React, { useState } from "react";
import { X, Printer, Copy, Check, Mail } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { developerBio, projectsData, skillCategoriesData, experienceMilestonesData } from "../data/portfolioData";

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyMarkdownResume = () => {
    const md = `
# Mahmud (@mahmudbuilds)
**${developerBio.title}**
Email: ${developerBio.email} | GitHub: ${developerBio.github} | X: ${developerBio.twitter}

---

## Executive Summary
${developerBio.bio}

---

## Flagship Systems & Architectures
${projectsData
  .map(
    (p) => `
### ${p.title} — ${p.tagline}
- **Stack:** ${p.stack.join(", ")}
- **Overview:** ${p.description}
- **Key Highlights:**
${p.features.map((f) => `  * ${f}`).join("\n")}
- **GitHub:** ${p.githubUrl} ${p.liveUrl ? `| **Live:** ${p.liveUrl}` : ""}
`
  )
  .join("\n")}

---

## Technical Radar
${skillCategoriesData
  .map(
    (cat) => `
### ${cat.name}
${cat.skills.map((s) => `${s.name} (${s.level})`).join(" • ")}
`
  )
  .join("\n")}

---

## Engineering Milestones
${experienceMilestonesData
  .map(
    (m) => `
### ${m.year} — ${m.role} (${m.company})
${m.description}
${m.highlights.map((h) => `- ${h}`).join("\n")}
`
  )
  .join("\n")}
    `.trim();

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-xl bg-[#090d16] border border-white/10 shadow-2xl text-left text-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-3.5 bg-[#0e1320] border-b border-white/[0.08]">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-semibold text-white">Mahmud_Resume_Executive.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={copyMarkdownResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Copy clean Markdown to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Markdown</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#090d16] font-sans">
          {/* Candidate Header */}
          <div className="border-b border-white/[0.08] pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                {developerBio.name}
              </h1>
              <span className="text-xs font-mono text-sky-400">
                {developerBio.handle}
              </span>
            </div>

            <p className="text-sm font-mono font-medium text-slate-300">
              {developerBio.title}
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-2">
              <a href={`mailto:${developerBio.email}`} className="hover:text-white flex items-center gap-1">
                <Mail className="w-3 h-3" />
                <span>{developerBio.email}</span>
              </a>
              <a href={developerBio.github} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                <GithubIcon className="w-3 h-3" />
                <span>github.com/mahmudbuilds</span>
              </a>
              <span>Global / Remote (UTC)</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-sky-400 uppercase mb-2">
              // EXECUTIVE SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {developerBio.bio}
            </p>
          </div>

          {/* Flagship Architectures */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold tracking-wider text-sky-400 uppercase">
              // FLAGSHIP PRODUCTION SYSTEMS
            </h2>

            {projectsData.slice(0, 4).map((project) => (
              <div key={project.id} className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white text-sm">{project.title}</span>
                    <span className="text-slate-400 text-xs">— {project.tagline}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" className="text-sky-400 hover:underline">
                        Live Demo
                      </a>
                    )}
                    <a href={project.githubUrl} target="_blank" className="text-slate-400 hover:text-white">
                      Source Code
                    </a>
                  </div>
                </div>

                <div className="text-xs text-slate-400 font-mono">
                  Stack: {project.stack.join(" • ")}
                </div>

                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pt-1">
                  {project.features.slice(0, 3).map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Radar */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-wider text-sky-400 uppercase">
              // TECHNICAL RADAR
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategoriesData.map((cat, i) => (
                <div key={i} className="p-3 rounded bg-white/[0.02] border border-white/[0.05]">
                  <div className="font-semibold text-slate-200 mb-1">{cat.name}</div>
                  <div className="text-slate-400 text-[11px] leading-relaxed">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Milestones */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold tracking-wider text-sky-400 uppercase">
              // EXPERIENCE &amp; MILESTONES
            </h2>

            {experienceMilestonesData.map((m, i) => (
              <div key={i} className="space-y-1 text-xs">
                <div className="flex items-baseline justify-between">
                  <span className="font-semibold text-white">{m.role}</span>
                  <span className="text-sky-400 font-mono">{m.year}</span>
                </div>
                <div className="text-slate-400 font-mono">{m.company}</div>
                <p className="text-slate-300 pt-1">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
