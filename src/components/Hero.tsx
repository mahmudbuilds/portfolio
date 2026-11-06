import React, { useState } from "react";
import { ArrowRight, FileText, Cpu, ExternalLink, ShieldCheck, Database, Layers } from "lucide-react";
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
            <span>Full-Stack &amp; Systems Engineer</span>
          </div>

          {/* Main Plain Headline */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.12]">
            Building multi-tenant web platforms, decoupled APIs, and developer tooling.
          </h1>

          {/* Plain Human Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            I’m <strong className="text-white font-semibold">{developerBio.name}</strong> ({developerBio.handle}). I engineer resilient full-stack systems with Next.js, Django REST Framework, and PostgreSQL. Creator of Inventry, ResuMind, and Code Auditor.
          </p>

          {/* Core Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold text-xs transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>View Featured Projects</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-slate-200 hover:text-white font-medium text-xs transition-all active:scale-95 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>Executive Resume</span>
            </button>

            <a
              href="#systems-lab"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/80 border border-white/10 hover:border-sky-500/30 text-slate-300 hover:text-white font-medium text-xs transition-all active:scale-95 cursor-pointer"
            >
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>Interactive Systems Lab</span>
            </a>
          </div>

          {/* Concrete Engineering Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 w-full max-w-3xl text-left">
            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/[0.06]">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Shipped Systems</div>
              <div className="text-xl font-bold text-white mt-1">6 Applications</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Production Deployments</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/[0.06]">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Core Architecture</div>
              <div className="text-xl font-bold text-sky-400 mt-1">Next.js + Django</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Decoupled RESTful APIs</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/[0.06]">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Database Integrity</div>
              <div className="text-xl font-bold text-emerald-400 mt-1">Row-Level Locks</div>
              <div className="text-[11px] text-slate-400 mt-0.5">PostgreSQL Concurrency</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/[0.06]">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Document Analysis</div>
              <div className="text-xl font-bold text-indigo-400 mt-1">AST Parsing</div>
              <div className="text-[11px] text-slate-400 mt-0.5">In-Browser Spatial Clustered</div>
            </div>
          </div>
        </div>

        {/* Real Product Showcase Window Frame */}
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
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                  mahmudbuilds.systems // verified_flagship_preview
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
                  Inventry (Live Supply Chain)
                </button>
                <button
                  onClick={() => setActivePreview("resumind")}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                    activePreview === "resumind"
                      ? "bg-sky-500 text-slate-950 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  ResuMind (AST Parser)
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
                        <span className="text-slate-400 text-xs">— Multi-Tenant Supply Chain Platform</span>
                        <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                          Production Deployed
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Decoupled Next.js 16 App Router on Vercel Edge with Django REST Framework API on Render and PostgreSQL on Neon.
                      </p>
                    </div>

                    <a
                      href="https://inventry-roan.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 text-xs font-medium border border-sky-500/30 transition-colors self-start sm:self-auto"
                    >
                      <span>Open Live Application</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
                      <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Tenant Isolation</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Data tenancy enforced at the ORM base manager level to guarantee zero cross-tenant query leaks.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
                      <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                        <Database className="w-4 h-4" />
                        <span>Row-Level Stock Locking</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Atomic transactions with row-level locks on stock counters serialize concurrent orders and prevent negative inventory.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
                      <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold">
                        <Layers className="w-4 h-4" />
                        <span>Decoupled API Contract</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Frontend deployed on Vercel Edge communicating with Django REST API over secure tokenized JWT authentication.
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
                        <span className="text-slate-400 text-xs">— Client-Side AST Document &amp; Resume Engine</span>
                        <span className="text-[10px] font-semibold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20">
                          Zero-Retention
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Processes multi-column PDF resumes in browser memory using pdfjs-dist coordinate clustering with zero server data storage.
                      </p>
                    </div>

                    <a
                      href="https://github.com/mahmudbuilds/ResuMind"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 text-xs font-medium border border-sky-500/30 transition-colors self-start sm:self-auto"
                    >
                      <span>View GitHub Repository</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
                      <div className="text-sky-400 text-xs font-semibold">Spatial Coordinate Clustering</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Groups text fragments by horizontal line positions and vertical gutters, preventing multi-column text scrambling.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
                      <div className="text-emerald-400 text-xs font-semibold">Zero Server Retention</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Evaluations execute entirely in client memory; resumes are never stored or transmitted to database disks.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
                      <div className="text-indigo-400 text-xs font-semibold">Dedicated Web Worker</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Heavy PDF tokenization and AST parsing runs in a background Web Worker thread, keeping UI interaction responsive.
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
                        <span className="text-slate-400 text-xs">— Python AST Static Security Analyzer</span>
                        <span className="text-[10px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                          Static Analysis
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Automated static analysis engine parsing Python abstract syntax trees to detect SQL injection, eval() calls, and insecure patterns.
                      </p>
                    </div>

                    <a
                      href="https://github.com/mahmudbuilds"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 text-xs font-medium border border-sky-500/30 transition-colors self-start sm:self-auto"
                    >
                      <span>View GitHub Profile</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
                      <div className="text-sky-400 text-xs font-semibold">AST Node Traversal</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Utilizes Python’s native ast.NodeVisitor to inspect code structure without executing untrusted code.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
                      <div className="text-emerald-400 text-xs font-semibold">CWE Vulnerability Mapping</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Detects CWE-89 (SQL Injection) and CWE-95 (Code Injection) by verifying argument node types in function calls.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
                      <div className="text-indigo-400 text-xs font-semibold">Remediation Diffs</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Automatically generates parameterized code replacement diffs to assist engineers in patching security findings.
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
