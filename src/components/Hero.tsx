import React from "react";
import { ArrowDown, Terminal, FileText, CheckCircle2, ShieldCheck, Cpu, Database, ExternalLink } from "lucide-react";
import { developerBio } from "../data/portfolioData";

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResume }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Ambience (Taste-skill compliant: dark neutral, subtle grid lines, no violent violet gradient) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "32px 32px"
          }}
        />
        {/* Soft top starlight glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/[0.04] blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Copy (Col 1 to 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* System Status Telemetry Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span className="text-slate-400">STATUS:</span>
              <span className="text-emerald-400 font-medium">FULL-STACK &amp; AI SYSTEMS ENGINEER</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.12]">
              Engineering resilient <span className="text-sky-400">cloud platforms</span>, backends, &amp; pragmatic AI tools.
            </h1>

            {/* Crisp Plain Copy (Anti-slop) */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              I’m <strong className="text-white font-semibold">{developerBio.name}</strong> ({developerBio.handle}). I architect high-performance decoupled systems — from enterprise multi-tenant supply chain infrastructures (Next.js 16 + Django REST) to client-side ATS AST analyzers and fluid 60 FPS developer tools.
            </p>

            {/* Quick Metrics & Highlights Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xl font-bold font-mono text-white">5+</div>
                <div className="text-xs text-slate-400 font-mono">Shipped Systems</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xl font-bold font-mono text-emerald-400">Multi-Tenant</div>
                <div className="text-xs text-slate-400 font-mono">RBAC Security</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] col-span-2 sm:col-span-1">
                <div className="text-xl font-bold font-mono text-sky-400">&lt;50ms</div>
                <div className="text-xs text-slate-400 font-mono">Edge Latency</div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-medium text-sm transition-all shadow-lg shadow-sky-500/20 active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Flagship Systems</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] text-slate-200 hover:text-white font-mono text-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-sky-400" />
                <span>Launch CLI Console</span>
                <span className="text-[10px] text-slate-400 bg-white/10 px-1 rounded">⌘K</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] text-slate-200 hover:text-white font-mono text-xs transition-all active:scale-[0.98] cursor-pointer"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>View CV Matrix</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Interactive Architecture Telemetry Card (Col 8 to 12) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl bg-[#0d121e]/90 border border-white/[0.08] shadow-2xl shadow-black/80 overflow-hidden text-left">
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">system_architecture.telemetry</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400/90 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  HEALTH: NOMINAL
                </span>
              </div>

              {/* Live Architecture Nodes Visualizer */}
              <div className="p-5 space-y-4 font-mono text-xs">
                {/* Node 1: Edge & Client */}
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded bg-sky-500/10 text-sky-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-200 font-semibold">Client &amp; Edge Runtime</div>
                      <div className="text-[11px] text-slate-400">Next.js 16 / React 19 / Vite App Router</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                    Vercel Edge
                  </div>
                </div>

                {/* Connection line */}
                <div className="flex justify-center -my-2">
                  <div className="w-px h-4 bg-gradient-to-b from-sky-500/40 to-emerald-500/40" />
                </div>

                {/* Node 2: Backend & Security */}
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded bg-emerald-500/10 text-emerald-400">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-200 font-semibold">Decoupled API &amp; Auth</div>
                      <div className="text-[11px] text-slate-400">Django REST Framework + JWT &amp; Multi-Tenant RBAC</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Isolated
                  </div>
                </div>

                {/* Connection line */}
                <div className="flex justify-center -my-2">
                  <div className="w-px h-4 bg-gradient-to-b from-emerald-500/40 to-amber-500/40" />
                </div>

                {/* Node 3: Database & Cloud */}
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded bg-amber-500/10 text-amber-400">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-200 font-semibold">Persistence Layer</div>
                      <div className="text-[11px] text-slate-400">PostgreSQL Cloud Pool (Neon.tech)</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                    Pooled
                  </div>
                </div>

                {/* Live Console Output Simulation */}
                <div className="mt-4 p-3 rounded-lg bg-black/60 border border-white/[0.06] text-[11px] space-y-1">
                  <div className="text-slate-400 flex items-center justify-between">
                    <span>$ sys.verify_pipeline</span>
                    <span className="text-emerald-400">✓ ALL PASS</span>
                  </div>
                  <div className="text-slate-400 text-[10px] leading-relaxed">
                    &gt; Inventry: Multi-Tenant schema partition verified.<br/>
                    &gt; ResuMind: AST PDF tokenizer ready (zero retention).<br/>
                    &gt; Vesper: 60 FPS motion rendering nominal.
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Deployed on Vercel
                </span>
                <a
                  href="https://github.com/mahmudbuilds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1"
                >
                  <span>@mahmudbuilds</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
