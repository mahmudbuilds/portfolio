import { useState } from "react";
import { Mail, Check, FileText, ArrowUpRight, MapPin } from "lucide-react";
import { GithubIcon, TwitterIcon } from "./SocialIcons";
import { developerBio } from "../data/portfolioData";

interface HeaderProps {
  onOpenResume: () => void;
}

export function Header({ onOpenResume }: HeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerBio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <header className="space-y-6 sm:space-y-8 pt-2 sm:pt-4">
      {/* Top Utility Bar: Structured across all viewports */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 sm:pb-5 border-b border-zinc-800/80">
        {/* Left: Brand Identity + Availability Badge */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <span className="font-mono text-xs font-semibold tracking-wider text-zinc-200">
            mahmud.build
          </span>
          <span className="text-zinc-700 hidden md:inline">/</span>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium w-fit shrink-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="whitespace-nowrap">Available for engineering roles</span>
          </div>
        </div>

        {/* Right: Clean Navigation */}
        <nav className="flex items-center gap-1 sm:gap-1.5 text-zinc-400 font-mono text-[11px] sm:text-xs overflow-x-auto no-scrollbar py-0.5">
          <a
            href="#projects"
            className="px-2 sm:px-2.5 py-1 rounded-md hover:text-zinc-100 hover:bg-zinc-900/60 transition-colors"
          >
            work
          </a>
          <a
            href="#experience"
            className="px-2 sm:px-2.5 py-1 rounded-md hover:text-zinc-100 hover:bg-zinc-900/60 transition-colors"
          >
            experience
          </a>
          <a
            href="#stack"
            className="px-2 sm:px-2.5 py-1 rounded-md hover:text-zinc-100 hover:bg-zinc-900/60 transition-colors"
          >
            stack
          </a>
          <a
            href="#approach"
            className="px-2 sm:px-2.5 py-1 rounded-md hover:text-zinc-100 hover:bg-zinc-900/60 transition-colors"
          >
            approach
          </a>
          <button
            onClick={onOpenResume}
            className="px-2 sm:px-2.5 py-1 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white transition-colors cursor-pointer"
          >
            cv.pdf
          </button>
        </nav>
      </div>

      {/* Identity & Hero Content */}
      <div className="space-y-4 sm:space-y-5">
        <div className="space-y-1.5 sm:space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100">
              {developerBio.name}
            </h1>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-zinc-500 font-mono pt-1 sm:pt-0">
              <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              <span>Nigeria · Working Worldwide</span>
            </div>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-zinc-400 font-normal">
            {developerBio.title}
          </p>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl">
          I build full-stack web applications, AI systems, and tools with React, Next.js, TypeScript, Python, and
          Convex. Passionate about clean code, reliable backend architecture, and interfaces that
          feel fast, simple, and intuitive to use.
        </p>
      </div>

      {/* Action Links & Quick Contact Bar: 2x2 grid on mobile, flexible row on desktop */}
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center gap-2.5 sm:gap-3 pt-1">
        {/* Copy Email Button */}
        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-xs sm:text-sm font-medium transition-all cursor-pointer shadow-sm active:scale-[0.98] min-h-[40px]"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-emerald-400 font-medium">Copied Email!</span>
            </>
          ) : (
            <>
              <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
              <span className="sm:hidden">Copy Email</span>
              <span className="hidden sm:inline">{developerBio.email}</span>
            </>
          )}
        </button>

        {/* View Resume Button */}
        <button
          onClick={onOpenResume}
          className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-xs sm:text-sm font-medium transition-all cursor-pointer shadow-sm active:scale-[0.98] min-h-[40px]"
        >
          <FileText className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>Resume / CV</span>
        </button>

        {/* GitHub Link */}
        <a
          href={developerBio.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all min-h-[40px]"
        >
          <GithubIcon className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
        </a>

        {/* Twitter / X Link */}
        <a
          href={developerBio.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all min-h-[40px]"
        >
          <TwitterIcon className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>Twitter</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
        </a>
      </div>

      {/* Focus Area Strip: Adds purposeful structure and density on larger viewports */}
      <div className="hidden sm:grid sm:grid-cols-3 gap-2.5 sm:gap-3 pt-3 border-t border-zinc-900 text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/20 border border-zinc-850">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
          <span>AI Voice & Neural Audio</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/20 border border-zinc-850">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span>Full-Stack Next.js & Python</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/20 border border-zinc-850">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
          <span>Chrome Manifest V3 Systems</span>
        </div>
      </div>
    </header>
  );
}
