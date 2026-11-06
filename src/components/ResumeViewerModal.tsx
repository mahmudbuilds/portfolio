import React, { useState } from "react";
import { X, Printer, Copy, Check, Mail, ExternalLink, Sparkles } from "lucide-react";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#080d1a] border border-white/10 shadow-2xl text-left text-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#0c1222] border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
              CV
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white text-sm">Executive Portfolio &amp; Resume</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                  Verified Active
                </span>
              </div>
              <p className="text-xs text-slate-400">Mahmud • {developerBio.title}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-slate-300 hover:text-white transition-all cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={copyMarkdownResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-slate-300 hover:text-white transition-all cursor-pointer"
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
                  <span className="hidden sm:inline">Copy Markdown</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#080d1a] font-sans">
          {/* Candidate Header */}
          <div className="border-b border-white/[0.08] pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl font-extrabold tracking-tight text-white">
                {developerBio.name}
              </h1>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                {developerBio.handle}
              </span>
            </div>

            <p className="text-sm font-medium text-slate-300">
              {developerBio.title}
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-1">
              <a href={`mailto:${developerBio.email}`} className="hover:text-white flex items-center gap-1.5 transition-colors">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>{developerBio.email}</span>
              </a>
              <a href={developerBio.github} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5 transition-colors">
                <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                <span>github.com/mahmudbuilds</span>
              </a>
              <span className="flex items-center gap-1.5 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Available for Senior / Lead Full-Stack &amp; AI Roles
              </span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-semibold tracking-wider text-sky-400 uppercase flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>Executive Summary</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {developerBio.bio}
            </p>
          </div>

          {/* Flagship Architectures */}
          <div className="space-y-4">
            <h2 className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              Flagship Production Systems
            </h2>

            <div className="space-y-3">
              {projectsData.slice(0, 4).map((project) => (
                <div key={project.id} className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-sm">{project.title}</span>
                      <span className="text-slate-400 text-xs">— {project.tagline}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 font-medium inline-flex items-center gap-1">
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white inline-flex items-center gap-1">
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[11px] text-slate-300 border border-white/[0.04]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 pt-1">
                    {project.features.slice(0, 3).map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Radar */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              Technical Competencies &amp; Radar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategoriesData.map((cat, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="font-semibold text-slate-200 mb-2">{cat.name}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 text-[11px]">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Milestones */}
          <div className="space-y-4">
            <h2 className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
              Engineering Experience &amp; Milestones
            </h2>

            <div className="space-y-3">
              {experienceMilestonesData.map((m, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5 text-xs">
                  <div className="flex items-baseline justify-between">
                    <span className="font-semibold text-white text-sm">{m.role}</span>
                    <span className="text-sky-400 font-medium px-2 py-0.5 rounded bg-sky-500/10 text-[11px]">{m.year}</span>
                  </div>
                  <div className="text-slate-400 font-medium">{m.company}</div>
                  <p className="text-slate-300 leading-relaxed">{m.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-400 pt-1 text-[11px]">
                    {m.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
