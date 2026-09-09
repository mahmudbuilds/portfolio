"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Command,
  FileText,
  Copy,
  Check,
  Terminal,
  Sparkles,
  Layers,
  Cpu,
  Database,
  ExternalLink
} from "lucide-react";

interface HeroProps {
  onOpenCommandPalette: () => void;
  onOpenResume: () => void;
}

export function Hero({ onOpenCommandPalette, onOpenResume }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<"inventry" | "resumind" | "stack">("inventry");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mahxgithub@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippets = {
    inventry: `// Inventry: Enterprise Decoupled Architecture
interface SupplyChainNode {
  tenantId: string;        // Strict multi-tenant isolation
  rbacRole: "Admin" | "Manager" | "Auditor";
  inventoryTelemetry: {
    realTimeStock: number;
    thresholdAlert: boolean;
  };
}

// Next.js 16 App Router -> Django REST Framework
export async function syncWarehouse(node: SupplyChainNode) {
  return await api.post("/v1/inventory/reconcile/", {
    headers: { Authorization: \`Bearer \${jwtToken}\` },
    body: JSON.stringify(node),
  });
}`,
    resumind: `// ResuMind: AI ATS Scoring & PDF Parsing
import * as pdfjs from "pdfjs-dist";

export async function parseAndScoreResume(file: ArrayBuffer, jobSpec: string) {
  const extractedText = await extractMultiColumnPDF(file);
  const { score, missingKeywords } = await evaluateATS({
    resumeText: extractedText,
    targetRole: jobSpec,
    algorithm: "ATS-Match-V3" // 0-100 compatibility
  });
  return { score, missingKeywords };
}`,
    stack: `// Developer Profile: Mahmud (@mahmudbuilds)
const engineer = {
  name: "Mahmud",
  role: "Full-Stack & AI Engineer",
  ethos: "Indie builder solving problems with code",
  runtime: "Bun (High-performance JS/TS)",
  frontend: ["Next.js 16", "React 19", "Tailwind v4", "Motion"],
  backend: ["Python", "Django REST", "Node.js", "PostgreSQL"],
  intelligence: ["LLM Workflows", "Vector/Prompt Systems", "pdfjs-dist"],
  status: "Open to high-impact engineering roles"
};`
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Decorative Mesh & Glow */}
      <div className="absolute inset-0 bg-mesh subtle-grid pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-violet-500/10 to-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-mono text-emerald-300 tracking-wide font-medium">
                Open to Full-Stack & AI Roles
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Architecting{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                resilient systems
              </span>{" "}
              & intelligent tools.
            </h1>

            {/* Subheading / Tagline */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              I&apos;m <span className="text-white font-medium">Mahmud</span> (
              <a
                href="https://github.com/mahmudbuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline font-mono"
              >
                @mahmudbuilds
              </a>
              ), an indie developer and full-stack software engineer crafting enterprise multi-tenant cloud platforms, ATS-beating AI analyzers, and fluid 60 FPS user experiences.
            </p>

            {/* Tech Pill Row */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-zinc-400">
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
                Next.js 16
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
                React 19
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
                Django REST
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
                PostgreSQL
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
                AI / LLMs
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
                Bun
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-semibold text-sm hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5 cursor-pointer"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white text-sm font-medium transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                Resume
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-zinc-300 hover:text-white text-sm font-medium transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-mono text-xs">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span className="font-mono text-xs">Copy Email</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenCommandPalette}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-zinc-400 hover:text-zinc-200 text-xs font-mono transition-colors"
                title="Press ⌘K or Ctrl+K anytime"
              >
                <Command className="w-3.5 h-3.5 text-cyan-400" />
                <span>Cmd + K</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Code & Architecture Inspector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-white/[0.12] bg-[#0c1018]/90 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 overflow-hidden">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/70 border border-rose-600/40" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/70 border border-amber-600/40" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70 border border-emerald-600/40" />
                  <span className="ml-2 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    architecture.preview.ts
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  LIVE
                </span>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-white/[0.06] bg-black/30 text-xs font-mono">
                <button
                  onClick={() => setActiveCodeTab("inventry")}
                  className={`px-3.5 py-2 border-b-2 transition-all cursor-pointer ${
                    activeCodeTab === "inventry"
                      ? "border-cyan-400 text-cyan-300 bg-white/[0.04]"
                      : "border-transparent text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  Inventry.ts
                </button>
                <button
                  onClick={() => setActiveCodeTab("resumind")}
                  className={`px-3.5 py-2 border-b-2 transition-all cursor-pointer ${
                    activeCodeTab === "resumind"
                      ? "border-cyan-400 text-cyan-300 bg-white/[0.04]"
                      : "border-transparent text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  ResuMind.ts
                </button>
                <button
                  onClick={() => setActiveCodeTab("stack")}
                  className={`px-3.5 py-2 border-b-2 transition-all cursor-pointer ${
                    activeCodeTab === "stack"
                      ? "border-cyan-400 text-cyan-300 bg-white/[0.04]"
                      : "border-transparent text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  Bio.ts
                </button>
              </div>

              {/* Code Display */}
              <div className="p-4 font-mono text-[11px] sm:text-xs text-zinc-300 overflow-x-auto leading-relaxed max-h-[360px]">
                <pre className="text-zinc-300">
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>
              </div>

              {/* Card Footer Telemetry */}
              <div className="px-4 py-2.5 bg-black/40 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    TypeScript Strict
                  </span>
                  <span>UTF-8</span>
                </div>
                <span className="text-zinc-400">Next.js 16 + Bun</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
