import React from "react";
import { X, ExternalLink, Cpu, Database, Shield, Wrench, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import type { Project } from "../types";

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#0b0f19] border border-white/10 shadow-2xl text-left text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#0b0f19]/95 backdrop-blur border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: project.accentHex }}
            />
            <div>
              <h3 className="font-semibold text-lg text-white font-mono tracking-tight">
                {project.title} // Architecture Deep-Dive
              </h3>
              <p className="text-xs text-slate-400 font-mono">{project.tagline}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              System Overview &amp; Requirements
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((m, i) => (
              <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] font-mono">
                <div className="text-[10px] text-slate-400">{m.label}</div>
                <div className="text-sm font-semibold text-white mt-0.5">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Architecture Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Client Architecture */}
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                <Cpu className="w-4 h-4" />
                <span>CLIENT &amp; RUNTIME</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                {project.architecture.clientArchitecture}
              </p>
            </div>

            {/* Backend Architecture */}
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Wrench className="w-4 h-4" />
                <span>BACKEND SERVICES &amp; API</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                {project.architecture.backendArchitecture}
              </p>
            </div>

            {/* Database & Storage */}
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <Database className="w-4 h-4" />
                <span>PERSISTENCE &amp; STORAGE</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                {project.architecture.databaseAndStorage}
              </p>
            </div>

            {/* Security & Auth */}
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                <Shield className="w-4 h-4" />
                <span>SECURITY &amp; ISOLATION</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                {project.architecture.securityAndAuth}
              </p>
            </div>
          </div>

          {/* Hard Engineering Challenge & Engineered Solution */}
          <div className="p-4 rounded-lg bg-black/40 border border-white/[0.08] space-y-3 font-mono text-xs">
            <div>
              <span className="text-rose-400 font-semibold">// CORE ENGINEERING CHALLENGE: </span>
              <span className="text-slate-300">{project.architecture.keyTechnicalChallenge}</span>
            </div>
            <div>
              <span className="text-emerald-400 font-semibold">// ENGINEERED SOLUTION: </span>
              <span className="text-slate-300">{project.architecture.solutionEngineered}</span>
            </div>
          </div>

          {/* Features Checklist */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Implemented Features &amp; Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white/[0.02] border-t border-white/[0.08] flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition-colors"
              >
                <span>Live System Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close (Esc)
          </button>
        </div>
      </div>
    </div>
  );
};
