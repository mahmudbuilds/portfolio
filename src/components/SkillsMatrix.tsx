import React from "react";
import { Cpu, CheckCircle2 } from "lucide-react";
import { skillCategoriesData } from "../data/portfolioData";

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-t border-white/[0.06] relative text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Core Competencies &amp; Stack
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl">
            A comprehensive matrix of technical domains where I build production-grade software.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategoriesData.map((category, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-900/40 border border-white/[0.08] hover:border-white/[0.16] transition-all space-y-5 backdrop-blur-sm"
            >
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center justify-between">
                  <span>{category.name}</span>
                  <span className="text-xs font-medium text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full">
                    {category.skills.filter((s) => s.level === "Core").length} Core Technologies
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                      skill.level === "Core"
                        ? "bg-sky-500/10 border-sky-500/30 text-sky-200"
                        : skill.level === "Advanced"
                        ? "bg-slate-900 border-white/10 text-slate-200"
                        : "bg-slate-900/40 border-white/[0.06] text-slate-400"
                    }`}
                  >
                    {skill.highlight && <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
