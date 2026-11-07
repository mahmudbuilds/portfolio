import React from "react";
import { X, ExternalLink, Layout, Database, Shield, Wrench, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import type { Project } from "../types";

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#07090e] border border-white/10 shadow-2xl text-left text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 bg-[#0a0d16]/95 backdrop-blur-xl border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div
              className="w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: project.accentHex }}
            />
            <div>
              <h3 className="font-bold text-lg text-white tracking-tight">
                {project.title} — Project Details
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">{project.tagline}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-7">
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-400">
              About This Project
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((m, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.06]">
                <div className="text-[11px] text-slate-400 font-medium">{m.label}</div>
                <div className="text-sm font-bold text-white mt-1">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Simple Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Frontend */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/[0.06] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-400">
                <Layout className="w-4 h-4" />
                <span>Frontend &amp; User Interface</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.architecture.clientArchitecture}
              </p>
            </div>

            {/* Backend */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/[0.06] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                <Wrench className="w-4 h-4" />
                <span>Backend Logic &amp; Server</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.architecture.backendArchitecture}
              </p>
            </div>

            {/* Database */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/[0.06] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                <Database className="w-4 h-4" />
                <span>Database &amp; Data Storage</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.architecture.databaseAndStorage}
              </p>
            </div>

            {/* Security */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/[0.06] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-400">
                <Shield className="w-4 h-4" />
                <span>Security &amp; User Privacy</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.architecture.securityAndAuth}
              </p>
            </div>
          </div>

          {/* Key Problem Solved Card */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-sky-500/20 space-y-3 text-xs leading-relaxed">
            <div>
              <span className="font-bold text-sky-400 block mb-1">Key Problem Solved:</span>
              <span className="text-slate-300">{project.architecture.keyTechnicalChallenge}</span>
            </div>
            <div className="pt-2 border-t border-white/[0.06]">
              <span className="font-bold text-emerald-400 block mb-1">How Mahmud Built It:</span>
              <span className="text-slate-300">{project.architecture.solutionEngineered}</span>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-white/[0.08] text-xs font-medium text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-900/60 border-t border-white/[0.08] flex items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-semibold transition-all shadow-md active:scale-95"
              >
                <span>Open Live App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-200 transition-all active:scale-95"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Project</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
