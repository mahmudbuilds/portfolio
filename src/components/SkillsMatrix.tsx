import React from "react";
import { Wrench, Check } from "lucide-react";
import { skillCategoriesData } from "../data/portfolioData";

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-t border-white/[0.08] relative text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400">
            <Wrench className="w-3.5 h-3.5" />
            <span>Developer Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills &amp; Technologies
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl">
            Technologies, frameworks, and tools I use to design and build web applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategoriesData.map((category, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-900/40 border border-white/[0.08] hover:border-white/[0.16] transition-all space-y-5 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white tracking-tight">
                  {category.name}
                </h3>
                <span className="text-xs text-slate-400">
                  {category.skills.length} Skills
                </span>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/[0.08] bg-slate-950/60 text-slate-200 text-xs font-medium hover:border-sky-500/40 hover:text-white transition-colors"
                  >
                    <Check className="w-3 h-3 text-sky-400" />
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
