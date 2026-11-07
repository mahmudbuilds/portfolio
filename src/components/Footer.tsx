import React from "react";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, TwitterIcon } from "./SocialIcons";
import { developerBio } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] py-12 bg-[#02050b] text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-xs text-white">
                M
              </div>
              <span className="font-semibold text-slate-200">
                {developerBio.name}
              </span>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-slate-400">
              Full-Stack Web Developer
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-slate-500">
              © {new Date().getFullYear()} All rights reserved
            </span>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={developerBio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-all hover:scale-105"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={developerBio.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-all hover:scale-105"
              aria-label="X (Twitter)"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${developerBio.email}`}
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-all hover:scale-105"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <div className="w-px h-4 bg-white/10" />

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all cursor-pointer group text-xs font-medium"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <p className="flex items-center gap-1">
            Built with React 19, TypeScript &amp; Tailwind CSS
          </p>
          <p className="flex items-center gap-1">
            Engineered with precision <Heart className="w-3 h-3 text-rose-500/80 inline fill-rose-500/20" />
          </p>
        </div>
      </div>
    </footer>
  );
};
