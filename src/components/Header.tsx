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
    <header className="space-y-8 pt-4 sm:pt-8">
      {/* Top Utility Bar: Status & Fast Navigation */}
      <div className="flex items-center justify-between text-xs sm:text-sm">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for engineering roles</span>
        </div>

        {/* Minimal Navigation */}
        <nav className="flex items-center gap-4 text-zinc-400 font-mono text-xs">
          <a href="#projects" className="hover:text-zinc-100 transition-colors">
            projects
          </a>
          <a href="#experience" className="hover:text-zinc-100 transition-colors">
            experience
          </a>
          <a href="#stack" className="hover:text-zinc-100 transition-colors">
            stack
          </a>
          <button
            onClick={onOpenResume}
            className="text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            cv.pdf
          </button>
        </nav>
      </div>

      {/* Identity & Bio */}
      <div className="space-y-4">
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-100">
              {developerBio.name}
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 mt-1 font-normal">
              {developerBio.title}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            <span>Lagos · Working Worldwide</span>
          </div>
        </div>

        <p className="text-base text-zinc-300 leading-relaxed max-w-xl">
          I build full-stack web applications with React, Next.js, Python, and PostgreSQL.
          Passionate about clean code, reliable backend architecture, and interfaces that feel fast,
          simple, and intuitive to use.
        </p>
      </div>

      {/* Action Links & Quick Contact Bar */}
      <div className="flex items-center flex-wrap gap-3 pt-1">
        {/* Copy Email Button */}
        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-sm font-medium transition-all cursor-pointer shadow-sm active:scale-[0.98]"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400">Copied to clipboard</span>
            </>
          ) : (
            <>
              <Mail className="w-4 h-4 text-zinc-400" />
              <span>{developerBio.email}</span>
            </>
          )}
        </button>

        {/* View Resume Button */}
        <button
          onClick={onOpenResume}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-sm font-medium transition-all cursor-pointer shadow-sm active:scale-[0.98]"
        >
          <FileText className="w-4 h-4 text-zinc-400" />
          <span>Resume</span>
        </button>

        {/* GitHub Link */}
        <a
          href={developerBio.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-sm font-medium transition-all"
        >
          <GithubIcon className="w-4 h-4 text-zinc-400" />
          <span>GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
        </a>

        {/* Twitter / X Link */}
        <a
          href={developerBio.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-sm font-medium transition-all"
        >
          <TwitterIcon className="w-4 h-4 text-zinc-400" />
          <span>Twitter</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
        </a>
      </div>
    </header>
  );
}
