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
    <section id="contact" className="py-24 border-t border-white/[0.06] relative text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950/90 border border-white/10 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl backdrop-blur-xl">
          {/* Top ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-sky-500/10 blur-[90px] pointer-events-none" />

          {/* Heading */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Let’s build something extraordinary together.
            </h2>

            <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
              I’m always open to discussing new engineering opportunities, full-stack architectures, or select contracts.
            </p>
          </div>

          {/* Email Copy Card */}
          <div className="mt-8 p-3 sm:p-4 rounded-2xl bg-black/50 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 max-w-md mx-auto">
            <div className="text-sm font-semibold text-white px-2">
              {developerBio.email}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={copyEmail}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-semibold text-white transition-all cursor-pointer active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-300" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${developerBio.email}?subject=Full-Stack%20Role%20Inquiry`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-sky-500/20 transition-all active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-8">
            <a
              href={developerBio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/[0.08] hover:border-white/20 text-xs font-medium text-slate-300 hover:text-white transition-all hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href={developerBio.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/[0.08] hover:border-white/20 text-xs font-medium text-slate-300 hover:text-white transition-all hover:scale-105"
            >
              <TwitterIcon className="w-4 h-4" />
              <span>X (Twitter)</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href={developerBio.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/[0.08] hover:border-white/20 text-xs font-medium text-slate-300 hover:text-white transition-all hover:scale-105"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          {/* Response SLA */}
          <div className="pt-6 border-t border-white/[0.06] flex items-center justify-center gap-2 text-xs text-slate-400 mt-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Direct Response SLA: Usually within 24 hours.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
