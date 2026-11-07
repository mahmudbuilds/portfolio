import React from "react";
import { Calendar, Check } from "lucide-react";
import { experienceMilestonesData } from "../data/portfolioData";

export const ExperienceMilestones: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-white/[0.08] relative text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-amber-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>Work &amp; Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience &amp; Milestones
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl">
            A timeline of web applications built, frameworks mastered, and engineering milestones.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6">
          {experienceMilestonesData.map((milestone, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-900/40 border border-white/[0.08] hover:border-white/[0.16] transition-all space-y-4 backdrop-blur-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {milestone.role}
                  </h3>
                  <span className="text-xs text-sky-400 font-medium">
                    {milestone.company}
                  </span>
                </div>

                <span className="text-xs font-medium text-slate-300 bg-white/[0.05] border border-white/10 px-3 py-1 rounded-full self-start sm:self-auto">
                  {milestone.year}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {milestone.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-1">
                {milestone.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-sky-400 mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tags if present */}
              {milestone.tags && milestone.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.04]">
                  {milestone.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md bg-white/[0.03] text-[11px] font-medium text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
