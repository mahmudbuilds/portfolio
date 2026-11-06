import React from "react";
import { Cpu, CheckCircle2 } from "lucide-react";
import { skillCategoriesData } from "../data/portfolioData";

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>// 03. TECHNICAL RADAR &amp; CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
            Core Competencies &amp; Toolchain
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            A comprehensive matrix of technical domains where I build production-grade, scalable software.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategoriesData.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#0c101a] border border-white/[0.08] hover:border-white/[0.15] transition-all space-y-4"
            >
              <div>
                <h3 className="text-lg font-semibold text-white tracking-tight flex items-center justify-between">
                  <span>{category.name}</span>
                  <span className="text-[11px] font-mono text-sky-400">
                    {category.skills.filter((s) => s.level === "Core").length} CORE
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono text-xs transition-all ${
                      skill.level === "Core"
                        ? "bg-sky-500/10 border-sky-500/30 text-sky-200 font-medium"
                        : skill.level === "Advanced"
                        ? "bg-white/[0.04] border-white/10 text-slate-200"
                        : "bg-white/[0.02] border-white/[0.05] text-slate-400"
                    }`}
                  >
                    {skill.highlight && <CheckCircle2 className="w-3 h-3 text-sky-400" />}
                    <span>{skill.name}</span>
                    <span className="text-[9px] uppercase tracking-wider text-slate-400 ml-0.5">
                      • {skill.level}
                    </span>
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
