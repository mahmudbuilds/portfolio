import React, { useState } from "react";
import { ArrowRight, FileText, Sparkles, ShieldCheck, Activity, Layers, ExternalLink } from "lucide-react";
import { developerBio } from "../data/portfolioData";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activePreview, setActivePreview] = useState<"inventry" | "resumind" | "vesper">("inventry");

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden text-left">
      {/* Ambient background glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-emerald-500/5 blur-[140px] rounded-full" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-sky-500/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full" />
        
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-medium text-slate-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400">Available for high-impact roles &amp; contracts</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Crafting resilient cloud systems &amp; <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">refined digital products.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
            I’m <strong className="text-white font-semibold">{developerBio.name}</strong> ({developerBio.handle}). Full-Stack Software Engineer building production-ready multi-tenant architectures, decoupled APIs, and intelligent developer tooling.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold text-sm transition-all shadow-xl shadow-white/10 hover:shadow-white/20 active:scale-95 cursor-pointer"
            >
              <span>Explore Flagship Work</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-slate-200 hover:text-white font-medium text-sm transition-all active:scale-95 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>View Executive CV</span>
            </button>

            <a
              href="#showcase"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-800/80 border border-white/10 hover:border-sky-500/30 text-slate-300 hover:text-white font-medium text-sm transition-all active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Interactive Studio</span>
            </a>
          </div>

          {/* Quick Credibility Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 w-full max-w-2xl text-left">
            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-white/[0.06]">
              <div className="text-2xl font-bold text-white tracking-tight">5+</div>
              <div className="text-xs text-slate-400 mt-0.5">Shipped Platforms</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-white/[0.06]">
              <div className="text-2xl font-bold text-emerald-400 tracking-tight">Multi-Tenant</div>
              <div className="text-xs text-slate-400 mt-0.5">RBAC Security</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-white/[0.06]">
              <div className="text-2xl font-bold text-sky-400 tracking-tight">&lt;45ms</div>
              <div className="text-xs text-slate-400 mt-0.5">Edge Latency</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-white/[0.06]">
              <div className="text-2xl font-bold text-indigo-400 tracking-tight">60 FPS</div>
              <div className="text-xs text-slate-400 mt-0.5">Tactile Interfaces</div>
            </div>
          </div>
        </div>

        {/* Luxury Application Showcase Frame */}
        <div className="mt-16 max-w-5xl mx-auto rounded-2xl bg-gradient-to-b from-white/[0.1] to-white/[0.02] p-[1px] shadow-2xl shadow-sky-500/5">
          <div className="rounded-[15px] bg-slate-950/90 backdrop-blur-2xl overflow-hidden border border-white/[0.06]">
            {/* Window Topbar */}
            <div className="px-4 py-3.5 bg-slate-900/60 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-px bg-white/10 mx-1" />
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                  mahmud.systems // flagship_architecture_preview
                </span>
              </div>

              {/* Product Switcher Tabs */}
              <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/[0.08] text-xs">
                <button
                  onClick={() => setActivePreview("inventry")}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                    activePreview === "inventry"
                      ? "bg-sky-500 text-slate-950 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Inventry (Supply Chain)
                </button>
                <button
                  onClick={() => setActivePreview("resumind")}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                    activePreview === "resumind"
                      ? "bg-sky-500 text-slate-950 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  ResuMind (ATS Engine)
                </button>
                <button
                  onClick={() => setActivePreview("vesper")}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                    activePreview === "vesper"
                      ? "bg-sky-500 text-slate-950 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Vesper (Interview HUD)
                </button>
              </div>
            </div>

            {/* Window Content Preview */}
            <div className="p-6 md:p-8">
              {activePreview === "inventry" && (
                <div className="space-y-6 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                    <div>
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <span>Inventry — Multi-Tenant Cloud Logistics</span>
                        <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                          Production Live
                        </span>
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Next.js 16 App Router client decoupled from a high-performance Django REST Framework API with PostgreSQL.
                      </p>
                    </div>

                    <a
                      href="https://inventry-roan.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 text-xs font-medium border border-sky-500/30 transition-colors self-start sm:self-auto"
                    >
                      <span>Open Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Architecture Feature Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
                      <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Tenant Isolation</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Data tenancy enforced at the ORM base manager level to prevent cross-organization queries.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
                      <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                        <Activity className="w-4 h-4" />
                        <span>Stock Depletion Engine</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Row-level locked transactions preventing concurrent race conditions during rapid warehouse orders.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
                      <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold">
                        <Layers className="w-4 h-4" />
                        <span>Decoupled Deployment</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Frontend deployed on Vercel Edge with global proxy caching; backend deployed on Render with cloud PostgreSQL.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activePreview === "resumind" && (
                <div className="space-y-6 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                    <div>
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <span>ResuMind — AI ATS Semantic Scoring Engine</span>
                        <span className="text-[11px] font-semibold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20">
                          Client-Side AST
                        </span>
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Zero-retention privacy engine evaluating resumes against job descriptions with multi-column PDF structural parsing.
                      </p>
                    </div>

                    <a
                      href="https://github.com/mahmudbuilds/ResuMind"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 text-xs font-medium border border-sky-500/30 transition-colors self-start sm:self-auto"
                    >
                      <span>View GitHub Repo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
                      <div className="text-sky-400 text-xs font-semibold">0-100 Scoring Algorithm</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Deterministic scoring mimicking modern enterprise ATS filters (Workday, Greenhouse, Lever).
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
                      <div className="text-emerald-400 text-xs font-semibold">Bounding-Box PDF Parser</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Uses pdfjs-dist coordinate clustering to accurately read multi-column layouts without scrambling text.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
                      <div className="text-indigo-400 text-xs font-semibold">Zero-Data Retention</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Evaluations run entirely in client memory; resumes are never stored on external database disks.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activePreview === "vesper" && (
                <div className="space-y-6 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                    <div>
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <span>Vesper — 60 FPS Technical Interview Copilot HUD</span>
                        <span className="text-[11px] font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                          React 19 + Motion
                        </span>
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Hyper-tactile interface concept inspired by modern desktop copilots with sub-pixel typography tracking.
                      </p>
                    </div>

                    <a
                      href="https://github.com/mahmudbuilds/vesper"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 text-xs font-medium border border-sky-500/30 transition-colors self-start sm:self-auto"
                    >
                      <span>View GitHub Repo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
                      <div className="text-sky-400 text-xs font-semibold">Fluid Kinetic Transitions</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Spring-physics animations crafted with Motion for fluid micro-interactions and tactile feel.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
                      <div className="text-emerald-400 text-xs font-semibold">Stealth HUD Architecture</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        High-density UI optimized for quick visual scanning with zero cognitive overload.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.06] space-y-2">
                      <div className="text-indigo-400 text-xs font-semibold">Sub-Pixel Typography</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Calibrated letter-spacing and hierarchy tested across Retina and high-DPI displays.
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
