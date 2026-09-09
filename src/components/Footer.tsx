"use client";

import { ArrowUp, Heart } from "lucide-react";
import { GithubIcon, XIcon, InstagramIcon } from "./Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#06080c] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white tracking-tight">Mahmud</span>
              <span className="font-mono text-xs text-cyan-400">@mahmudbuilds</span>
            </div>
            <p className="text-xs text-zinc-400">
              Indie builder solving problems with code. Open to collaboration.
            </p>
          </div>

          {/* Tech Stack Indicator */}
          <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] text-zinc-400">
            <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
              Next.js 16
            </span>
            <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
              React 19
            </span>
            <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
              Tailwind v4
            </span>
            <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
              Motion
            </span>
            <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-amber-300">
              Bun Runtime
            </span>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mahmudbuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/mahmudbuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors"
              aria-label="Twitter / X"
            >
              <XIcon className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/mahmudbuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
