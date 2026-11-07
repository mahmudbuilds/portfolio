import React, { useState } from "react";
import { ArrowRight, FileText, Play, ExternalLink, ShieldCheck, Database, Layout } from "lucide-react";
import { developerBio } from "../data/portfolioData";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activePreview, setActivePreview] = useState<"inventry" | "resumind" | "auditor">("inventry");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden text-left">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-emerald-500/5 blur-[130px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
          {/* Identity & Status */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-medium text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Full-Stack Web Developer</span>
          </div>

          {/* Simple, Plain Headline */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            Building clean, reliable web apps that solve real problems.
          </h1>

          {/* Simple Human Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            I’m <strong className="text-white font-semibold">{developerBio.name}</strong> ({developerBio.handle}). I build full-stack web applications with React, Next.js, Python, and PostgreSQL. Creator of Inventry, ResuMind, and Code Auditor.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold text-xs transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-slate-200 hover:text-white font-medium text-xs transition-all active:scale-95 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>View Resume</span>
            </button>

            <a
              href="#systems-lab"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/80 border border-white/10 hover:border-sky-500/30 text-slate-300 hover:text-white font-medium text-xs transition-all active:scale-95 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 text-emerald-400 fill-current" />
              <span>Try Interactive Demos</span>
            </a>
          </div>

          {/* Clean Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 w-full max-w-3xl text-left">
            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/[0.06]">
              <div className="text-xs font-semibold text-slate-400">Shipped Apps</div>
              <div className="text-xl font-bold text-white mt-1">6 Applications</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Live &amp; Deployed</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/[0.06]">
              <div className="text-xs font-semibold text-slate-400">Tech Stack</div>
              <div className="text-xl font-bold text-sky-400 mt-1">React + Python</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Next.js &amp; PostgreSQL</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/[0.06]">
              <div className="text-xs font-semibold text-slate-400">Reliability</div>
              <div className="text-xl font-bold text-emerald-400 mt-1">Zero Race Bugs</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Safe Order Transactions</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/[0.06]">
              <div className="text-xs font-semibold text-slate-400">User Privacy</div>
              <div className="text-xl font-bold text-indigo-400 mt-1">100% Private</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Zero File Data Retention</div>
            </div>
          </div>
        </div>

        {/* Product Showcase Window Frame */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl bg-gradient-to-b from-white/[0.1] to-white/[0.02] p-[1px] shadow-2xl">
          <div className="rounded-[15px] bg-[#07090e] overflow-hidden border border-white/[0.06]">
            {/* Window Topbar */}
            <div className="px-5 py-3.5 bg-slate-900/60 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-px bg-white/10 mx-1.5" />
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                  mahmudbuilds.com // project_previews
                </span>
              </div>

              {/* Product Tabs */}
              <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/[0.08] text-xs">
                <button
                  onClick={() => setActivePreview("inventry")}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                    activePreview === "inventry"
                      ? "bg-sky-500 text-slate-950 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Inventry (Warehouse Stock)
                </button>
                <button
                  onClick={() => setActivePreview("resumind")}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                    activePreview === "resumind"
                      ? "bg-sky-500 text-slate-950 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  ResuMind (Resume Scanner)
                </button>
                <button
                  onClick={() => setActivePreview("auditor")}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                    activePreview === "auditor"
                      ? "bg-sky-500 text-slate-950 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Code Auditor (Security)
                </button>
              </div>
            </div>

            {/* Window Content */}
            <div className="p-6 md:p-8">
              {activePreview === "inventry" && (
                <div className="space-y-6 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white">Inventry</h3>
                        <span className="text-slate-400 text-xs">— Warehouse Stock &amp; Supply Chain App</span>
                        <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                          Live Application
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1">
                        Helps businesses track inventory across warehouses and prevents accidental overselling when multiple orders come in at once.
                      </p>
                    </div>

                    <a
                      href="https://inventry-roan.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 text-xs font-medium border border-sky-500/30 transition-colors self-start sm:self-auto"
                    >
                      <span>Open Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Telemetry Strip */}
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-white font-medium">SKU-412 (Industrial Valve)</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400">Location: Warehouse Alpha</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-400 font-semibold">284 in stock</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        Live Synced
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-1.5">
                      <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Separate Company Accounts</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Each organization’s data is completely separated so one company can never view another company’s items.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-1.5">
                      <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                        <Database className="w-4 h-4" />
                        <span>No Overselling Errors</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Processes orders one at a time so two buyers cannot accidentally buy the last remaining item.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-1.5">
                      <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold">
                        <Layout className="w-4 h-4" />
                        <span>Fast &amp; Responsive</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Built with Next.js and Python for instant screen updates and quick searching across thousands of items.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activePreview === "resumind" && (
                <div className="space-y-6 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white">ResuMind</h3>
                        <span className="text-slate-400 text-xs">— Smart Resume Keyword Scanner</span>
                        <span className="text-[10px] font-semibold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20">
                          100% Private
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1">
                        Scans your PDF resume in your browser and compares it to a job description to show you which skills you are missing.
                      </p>
                    </div>

                    <a
                      href="https://github.com/mahmudbuilds/ResuMind"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 text-xs font-medium border border-sky-500/30 transition-colors self-start sm:self-auto"
                    >
                      <span>View GitHub Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Telemetry Strip */}
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-400" />
                      <span className="text-white font-medium">Smart Column Layout Reader</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400">Works on multi-column resumes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sky-300 font-semibold">Instant Results</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
                        In-Browser Only
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-1.5">
                      <div className="text-sky-400 text-xs font-semibold">Reads 2-Column Resumes</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Reads text properly column by column without mixing up sentences or losing your bullet points.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-1.5">
                      <div className="text-emerald-400 text-xs font-semibold">100% Private</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Your resume is never uploaded to a server or saved anywhere. Everything happens right on your device.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-1.5">
                      <div className="text-indigo-400 text-xs font-semibold">Missing Skill Alerts</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Quickly highlights the most important keywords and qualifications missing from your resume.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activePreview === "auditor" && (
                <div className="space-y-6 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white">Code Auditor</h3>
                        <span className="text-slate-400 text-xs">— Code Security Scanner for Python</span>
                        <span className="text-[10px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                          Security Tool
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1">
                        Finds dangerous security flaws in Python code (like SQL injection) before code gets deployed to users.
                      </p>
                    </div>

                    <a
                      href="https://github.com/mahmudbuilds"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 text-xs font-medium border border-sky-500/30 transition-colors self-start sm:self-auto"
                    >
                      <span>View GitHub Profile</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Telemetry Strip */}
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="text-white font-medium">Automatic Code Bug Scanner</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400">Checks for SQL injection &amp; unsafe functions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-amber-300 font-semibold">Easy Fixes Included</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        Before &amp; After Examples
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-1.5">
                      <div className="text-sky-400 text-xs font-semibold">Finds Dangerous Bugs</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Catches SQL injection and unsafe commands that could allow unauthorized visitors to alter data.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-1.5">
                      <div className="text-emerald-400 text-xs font-semibold">Shows How to Fix</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Gives developers clear, safe code snippets so they can fix security vulnerabilities in minutes.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-1.5">
                      <div className="text-indigo-400 text-xs font-semibold">Safe Scanning</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Reads code structure safely without running potentially dangerous code files on the machine.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
