import React, { useState } from "react";
import { Check, Copy, Send, ArrowUpRight, MessageSquare } from "lucide-react";
import { GithubIcon, TwitterIcon, InstagramIcon } from "./SocialIcons";
import { developerBio } from "../data/portfolioData";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(developerBio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl mx-auto rounded-2xl bg-[#0c101a] border border-white/[0.08] p-8 sm:p-12 space-y-8 text-center relative overflow-hidden shadow-2xl">
          {/* Top Starlight Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-sky-500/[0.06] blur-[80px] pointer-events-none" />

          {/* Heading */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>// 05. REACH OUT DIRECTLY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
              Let’s Build Something Meaningful
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
              Open to high-impact full-stack software engineering roles, distributed systems challenges, and ambitious project collaborations.
            </p>
          </div>

          {/* Email Copy Card */}
          <div className="p-4 rounded-xl bg-black/50 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-lg mx-auto">
            <div className="font-mono text-sm text-slate-200">
              {developerBio.email}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={copyEmail}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-slate-200 hover:text-white transition-colors cursor-pointer active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${developerBio.email}?subject=Full-Stack%20Role%20Inquiry%20via%20Portfolio`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-mono font-semibold transition-colors shadow-md shadow-sky-500/20 active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Mail</span>
              </a>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={developerBio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-mono text-slate-300 hover:text-white transition-all hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub (@mahmudbuilds)</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href={developerBio.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-mono text-slate-300 hover:text-white transition-all hover:scale-105"
            >
              <TwitterIcon className="w-4 h-4" />
              <span>X / Twitter (@mahmudbuilds)</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href={developerBio.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-mono text-slate-300 hover:text-white transition-all hover:scale-105"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          {/* Status Note */}
          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Response SLA: Within 24 hours for engineering roles and collaborations.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
