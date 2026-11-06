import React, { useState } from "react";
import { Check, Copy, Send, ArrowUpRight, Mail } from "lucide-react";
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
    <section id="contact" className="py-24 border-t border-white/[0.08] relative text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto rounded-3xl bg-slate-900/40 border border-white/10 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl backdrop-blur-xl">
          {/* Subtle top ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-sky-500/10 blur-[90px] pointer-events-none" />

          {/* Heading */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-medium text-sky-400">
              <Mail className="w-3.5 h-3.5" />
              <span>Contact &amp; Inquiries</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Get in Touch
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
              Open to senior full-stack engineering roles, multi-tenant cloud architectures, and select technical contracts.
            </p>
          </div>

          {/* Email Copy Card */}
          <div className="mt-8 p-3 sm:p-4 rounded-2xl bg-black/60 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 max-w-md mx-auto">
            <div className="text-xs sm:text-sm font-mono text-slate-200 px-2 truncate">
              {developerBio.email}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={copyEmail}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-medium text-white transition-all cursor-pointer active:scale-95"
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
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-950 text-xs font-semibold shadow-md transition-all active:scale-95"
              >
                <Send className="w-3.5 h-3.5 text-slate-950" />
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/60 hover:bg-slate-900 border border-white/[0.08] hover:border-white/20 text-xs font-medium text-slate-300 hover:text-white transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href={developerBio.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/60 hover:bg-slate-900 border border-white/[0.08] hover:border-white/20 text-xs font-medium text-slate-300 hover:text-white transition-all"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
              <span>X (Twitter)</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href={developerBio.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/60 hover:bg-slate-900 border border-white/[0.08] hover:border-white/20 text-xs font-medium text-slate-300 hover:text-white transition-all"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Instagram</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
