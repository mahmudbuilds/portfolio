"use client";

import { motion } from "motion/react";
import { Terminal, Shield, Zap, Compass, CheckCircle, ArrowRight } from "lucide-react";
import { experienceMilestones } from "@/data/skills";

export function AboutSection() {
  const principles = [
    {
      title: "Pragmatic Problem Solver",
      description: "Code is a lever to eliminate friction. I build solutions for tangible pain points—from breaking the HR ATS black box with ResuMind to unifying multi-tenant warehouse stock in Inventry.",
      icon: Zap,
      accent: "text-amber-400",
    },
    {
      title: "Architectural Integrity",
      description: "Decoupled Next.js 16 frontends, resilient Django REST APIs, and strict PostgreSQL relational boundaries with granular Role-Based Access Control (RBAC).",
      icon: Shield,
      accent: "text-cyan-400",
    },
    {
      title: "Obsessive Craft & Speed",
      description: "Software should feel instantaneous and tactile. I prioritize zero-jank 60 FPS micro-interactions, responsive mobile views, and rapid keyboard-first navigation.",
      icon: Compass,
      accent: "text-emerald-400",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] text-emerald-300 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>ETHOS & JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Indie builder solving complex problems with clean code.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            I am a full-stack engineer driven by the craft of building useful software. I treat every project as an end-to-end product—balancing clean database schemas, secure authentication, and fluid user interactions.
          </p>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-white/[0.08] bg-[#0c1018]/60 p-6 backdrop-blur-md hover:border-white/[0.15] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4">
                  <Icon className={`w-5 h-5 ${principle.accent}`} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Milestones & Trajectory Timeline */}
        <div id="journey" className="pt-8">
          <div className="mb-10 space-y-2">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Engineering Trajectory & Milestones
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-mono">
              Key development milestones and open-source releases
            </p>
          </div>

          <div className="space-y-6 relative border-l border-white/[0.1] ml-3 pl-6 sm:ml-4 sm:pl-8">
            {experienceMilestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#080a0f] border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-sm sm:text-base">
                        {milestone.role}
                      </span>
                      <span className="text-zinc-500 font-mono text-xs">
                        @ {milestone.company}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 self-start sm:self-auto">
                      {milestone.year}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-3">
                    {milestone.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                    {milestone.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
