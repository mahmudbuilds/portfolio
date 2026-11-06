import React from "react";
import { Calendar } from "lucide-react";
import { experienceMilestonesData } from "../data/portfolioData";

export const ExperienceMilestones: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>// 04. TIMELINE &amp; IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
            Engineering Milestones
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            A chronological timeline of architectures built, systems delivered, and technical focus areas.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-32 before:w-px before:bg-white/[0.08]">
          {experienceMilestonesData.map((milestone, idx) => (
            <div
              key={idx}
              className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-10 group"
            >
              {/* Year Marker */}
              <div className="md:w-28 text-left md:text-right font-mono text-sm font-semibold text-sky-400 shrink-0 flex items-center md:justify-end gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform" />
                <span>{milestone.year}</span>
              </div>

              {/* Card Content */}
              <div className="flex-1 p-6 rounded-xl bg-[#0c101a] border border-white/[0.08] group-hover:border-white/[0.15] transition-all space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-lg font-semibold text-white tracking-tight">
                    {milestone.role}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    {milestone.company}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {milestone.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-1">
                  {milestone.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400 font-mono">
                      <span className="text-sky-400 mt-0.5">↳</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.05]">
                  {milestone.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-white/[0.03] text-[10px] font-mono text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
