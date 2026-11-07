"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Printer, Copy, Check, Download, Mail, ExternalLink, Globe } from "lucide-react";
import { GithubIcon, XIcon } from "./Icons";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `MAHMUD - FULL-STACK & AI ENGINEER
Email: mahxgithub@gmail.com
GitHub: https://github.com/mahmudbuilds
Twitter: https://twitter.com/mahmudbuilds

SUMMARY
Full-Stack and AI Engineer specializing in decoupled web architectures, intelligent developer tools, and high-performance user interfaces. Proven track record architecting enterprise multi-tenant supply chain platforms (Next.js 16 + Django REST) and ATS-beating resume parsing systems.

TECHNICAL SKILLS
• Languages: TypeScript, Python, JavaScript, HTML5, CSS3, SQL
• Frontend: Next.js 16 (App Router), React 19, Tailwind CSS v4, Motion (Framer Motion), Vite
• Backend: Django, Django REST Framework, Node.js, Express, PostgreSQL, RESTful APIs, JWT, RBAC
• AI & Applied Intelligence: LLM APIs, Prompt Engineering, ATS Parsing Algorithms, pdfjs-dist
• Cloud & Tools: Bun, Git, GitHub Actions, Vercel, Neon.tech, Render, Docker

FEATURED PROJECTS
1. Inventry - Enterprise Multi-Tenant Inventory Platform
   • Next.js 16 + Django REST Framework + PostgreSQL + Tailwind CSS
   • Built multi-tenant data isolation, role-based access control, and real-time inventory telemetry.
   • Live: https://inventry-roan.vercel.app

2. ResuMind - AI-Powered ATS Resume Analyzer
   • React Router 7 + TypeScript + pdfjs-dist
   • Implemented client-side multi-column PDF text extraction and ATS scoring algorithm.

3. Vesper - Undetectable AI Copilot Concept
   • React 19 + TypeScript + Motion + Tailwind CSS
   • High-fidelity 60 FPS interface for technical interview copilots.

4. Flow Batch Automator — Batch Prompting for Google Flow
   • Chrome Extension (Manifest V3) + JavaScript + Shadow DOM + MutationObserver
   • Built automated batch prompting queue and asset pipeline for Google Flow (flow.google.com).
   • Code: https://github.com/mahmudbuilds/flow-batch-automator`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto print:p-0">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md print:hidden"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl bg-[#0c1018] border border-white/[0.12] rounded-2xl shadow-2xl shadow-cyan-950/40 overflow-hidden z-10 my-8 print:border-none print:bg-white print:text-black print:rounded-none"
        >
          {/* Action Bar (Hidden in Print) */}
          <div className="flex items-center justify-between p-4 border-b border-white/[0.08] bg-white/[0.02] print:hidden">
            <span className="text-xs font-mono text-zinc-400">
              Interactive Resume & CV
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-zinc-300 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-xs font-mono transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg transition-colors ml-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto font-sans print:max-h-none print:overflow-visible print:p-0">
            {/* Header */}
            <div className="border-b border-white/[0.1] pb-6 mb-6 print:border-black">
              <h1 className="text-3xl font-bold text-white tracking-tight print:text-black">
                Mahmud
              </h1>
              <p className="text-cyan-400 font-mono text-sm mt-1 print:text-blue-700">
                Full-Stack & AI Engineer | Indie Builder
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-400 mt-4 print:text-zinc-700">
                <a
                  href="mailto:mahxgithub@gmail.com"
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400 print:hidden" />
                  mahxgithub@gmail.com
                </a>
                <a
                  href="https://github.com/mahmudbuilds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-cyan-400 print:hidden" />
                  github.com/mahmudbuilds
                </a>
                <a
                  href="https://twitter.com/mahmudbuilds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <XIcon className="w-3.5 h-3.5 text-cyan-400 print:hidden" />
                  @mahmudbuilds
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-8">
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2 print:text-black">
                Executive Summary
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed print:text-zinc-800">
                Full-Stack and AI Engineer with expertise building production-ready web applications, decoupled API systems, and intelligent automated tools. Specializes in Next.js 16, React 19, Django REST Framework, PostgreSQL, and LLM-powered developer utilities. Passionate about multi-tenant system architecture, strict relational boundaries, and frictionless 60 FPS micro-interactions.
              </p>
            </div>

            {/* Core Skills */}
            <div className="mb-8">
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-3 print:text-black">
                Technical Proficiency
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] print:bg-zinc-100 print:border-zinc-300">
                  <div className="font-semibold text-white mb-1 print:text-black">Frontend & UX</div>
                  <div className="text-zinc-400 print:text-zinc-700">Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Motion, Responsive Design</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] print:bg-zinc-100 print:border-zinc-300">
                  <div className="font-semibold text-white mb-1 print:text-black">Backend & Cloud</div>
                  <div className="text-zinc-400 print:text-zinc-700">Python, Django REST Framework, Node.js, Express, PostgreSQL, RBAC, JWT Auth, Docker</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] print:bg-zinc-100 print:border-zinc-300">
                  <div className="font-semibold text-white mb-1 print:text-black">AI & Intelligent Systems</div>
                  <div className="text-zinc-400 print:text-zinc-700">LLM Prompt Engineering, ATS Scoring Algorithms, pdfjs-dist extraction, Agentic Workflows</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] print:bg-zinc-100 print:border-zinc-300">
                  <div className="font-semibold text-white mb-1 print:text-black">Tooling & Infrastructure</div>
                  <div className="text-zinc-400 print:text-zinc-700">Bun, Git & GitHub Actions, Vercel, Neon.tech, Render, REST APIs</div>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="mb-8">
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-4 print:text-black">
                Featured Projects & Systems Architecture
              </h2>
              <div className="space-y-4">
                <div className="border-l-2 border-cyan-500/40 pl-4 print:border-zinc-400">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white text-sm print:text-black">
                      Inventry — Multi-Tenant Inventory & Supply Chain Platform
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-400">2026</span>
                  </div>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5 mb-1.5 print:text-zinc-600">
                    Next.js 16, Django REST Framework, PostgreSQL, Tailwind CSS, RBAC, Docker
                  </p>
                  <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1 print:text-zinc-800">
                    <li>Designed decoupled architecture connecting Next.js 16 client to a high-throughput Django REST API.</li>
                    <li>Built strict multi-tenant data segregation ensuring tenant privacy across warehouse hubs.</li>
                    <li>Engineered automated inventory telemetry with low-stock threshold triggers and audit logging.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-cyan-500/40 pl-4 print:border-zinc-400">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white text-sm print:text-black">
                      ResuMind — AI-Powered Resume Analyzer & ATS Matcher
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-400">2026</span>
                  </div>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5 mb-1.5 print:text-zinc-600">
                    React Router 7, TypeScript, pdfjs-dist, LLM APIs, Tailwind CSS
                  </p>
                  <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1 print:text-zinc-800">
                    <li>Engineered multi-column client-side PDF parser extracting structured experience data.</li>
                    <li>Created 0-100 compatibility scoring system benchmarking candidate resumes against target job descriptions.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-cyan-500/40 pl-4 print:border-zinc-400">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white text-sm print:text-black">
                      Flow Batch Automator — Batch Prompting for Google Flow
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-400">2026</span>
                  </div>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5 mb-1.5 print:text-zinc-600">
                    Chrome Extension (Manifest V3), JavaScript, Shadow DOM, MutationObserver
                  </p>
                  <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1 print:text-zinc-800">
                    <li>Engineered automated batch prompting and queue execution exclusively for Google Flow (flow.google.com).</li>
                    <li>Integrated MutationObserver for real-time generation tracking and automated 2K media interception.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
