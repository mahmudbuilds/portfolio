"use client";

import { motion } from "motion/react";
import { Cpu, Terminal, Sparkles, Layers, ShieldCheck, Database, Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  const getCategoryIcon = (name: string) => {
    switch (name) {
      case "Frontend Architecture":
        return Layers;
      case "Backend & Systems":
        return Database;
      case "AI & Applied Intelligence":
        return Sparkles;
      case "Cloud, Tooling & DevOps":
        return Wrench;
      default:
        return Cpu;
    }
  };

  const getCategoryBorder = (color: string) => {
    switch (color) {
      case "cyan":
        return "border-cyan-500/20 group-hover:border-cyan-500/40";
      case "emerald":
        return "border-emerald-500/20 group-hover:border-emerald-500/40";
      case "violet":
        return "border-violet-500/20 group-hover:border-violet-500/40";
      case "amber":
        return "border-amber-500/20 group-hover:border-amber-500/40";
      default:
        return "border-white/10";
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/[0.08] text-violet-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering Radar & Tech Stack
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Modern, battle-tested technologies deployed across production systems, high-concurrency APIs, and user-centric interfaces.
          </p>
        </div>

        {/* 4-Grid Categorized Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = getCategoryIcon(category.name);
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`group rounded-2xl border bg-[#0d111a]/80 p-6 backdrop-blur-xl transition-all duration-300 shadow-xl shadow-black/30 hover:-translate-y-0.5 ${getCategoryBorder(
                  category.color
                )}`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white tracking-tight">
                        {category.name}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Badges Grid */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all ${
                        skill.highlight
                          ? "bg-white/[0.06] border-white/[0.15] text-zinc-100 hover:border-cyan-400/50"
                          : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <span>{skill.name}</span>
                      <span
                        className={`text-[9px] px-1.5 py-0.2 rounded font-semibold uppercase tracking-wider ${
                          skill.level === "Core"
                            ? "bg-cyan-500/15 text-cyan-300"
                            : skill.level === "Advanced"
                            ? "bg-emerald-500/15 text-emerald-300"
                            : "bg-zinc-500/15 text-zinc-400"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
