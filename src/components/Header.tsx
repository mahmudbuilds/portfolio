import { useState } from "react";
import { Mail, Copy, Check, FileText, ArrowUpRight, Sun, Moon } from "lucide-react";
import { developerBio } from "../data/portfolioData";
import type { Theme } from "../hooks/useTheme";

interface HeaderProps {
  onOpenResume: () => void;
  theme: Theme;
  onToggleTheme: () => void;
}

export function Header({ onOpenResume, theme, onToggleTheme }: HeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerBio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <header className="space-y-12 sm:space-y-16">
      {/* Minimal Top Navigation */}
      <div className="flex items-center justify-between gap-4 pb-5 border-b border-line">
        <a
          href="#"
          className="font-mono text-xs sm:text-sm tracking-[-0.01em] text-ink-secondary hover:text-ink transition-colors shrink-0"
        >
          {developerBio.handle}
        </a>

        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <nav
            aria-label="Primary"
            className="flex items-center gap-0.5 sm:gap-2 text-xs sm:text-sm text-ink-secondary overflow-x-auto no-scrollbar"
          >
            <a
              href="#projects"
              className="px-2 py-1 hover:text-ink transition-colors whitespace-nowrap"
            >
              Work
            </a>
            <a
              href="#experience"
              className="px-2 py-1 hover:text-ink transition-colors whitespace-nowrap"
            >
              Experience
            </a>
            <a
              href="#stack"
              className="hidden sm:inline-block px-2 py-1 hover:text-ink transition-colors whitespace-nowrap"
            >
              Stack
            </a>
            <a
              href="#approach"
              className="hidden md:inline-block px-2 py-1 hover:text-ink transition-colors whitespace-nowrap"
            >
              Approach
            </a>
            <button
              onClick={onOpenResume}
              className="px-2 py-1 text-ink font-medium hover:text-accent transition-colors cursor-pointer whitespace-nowrap"
            >
              Resume
            </button>
          </nav>

          <span className="h-3.5 w-px bg-line shrink-0" aria-hidden="true" />

          <button
            onClick={onToggleTheme}
            className="p-1.5 rounded-md text-ink-secondary hover:text-ink hover:bg-surface transition-colors cursor-pointer shrink-0"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Editorial Hero Introduction */}
      <div className="space-y-6 sm:space-y-7">
        <div className="space-y-4">
          <p className="text-xs sm:text-[13px] font-mono text-ink-muted flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <span className="inline-flex items-center gap-2 text-ink-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
              Open to full-time full-stack roles
            </span>
            <span aria-hidden="true">·</span>
            <span>Nigeria · Remote worldwide</span>
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.75rem] leading-[1.05] tracking-[-0.025em] font-normal text-ink text-balance">
            {developerBio.name}
          </h1>

          <p className="text-lg sm:text-xl md:text-[1.4rem] leading-[1.45] text-ink-secondary max-w-[58ch] font-normal">
            Full-stack software engineer building resilient web applications, transactional
            backends, and fast, thoughtfully engineered interfaces.
          </p>
        </div>

        <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-[66ch]">
          I ship end-to-end products with TypeScript, React, Next.js, Python, PostgreSQL, and
          Convex, caring equally about data integrity, API reliability, and frontend polish.
        </p>

        {/* Clear Action Bar */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
          <a
            href={`mailto:${developerBio.email}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-ink text-paper hover:opacity-90 text-sm font-medium transition-opacity active:scale-[0.99] min-h-[42px]"
          >
            <Mail className="w-4 h-4 shrink-0" />
            <span>Email me</span>
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-line-strong hover:border-ink text-ink text-sm font-medium transition-colors cursor-pointer active:scale-[0.99] min-h-[42px]"
          >
            <FileText className="w-4 h-4 text-ink-muted shrink-0" />
            <span>View resume</span>
          </button>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pl-0.5 sm:pl-1 text-sm text-ink-secondary">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 hover:text-ink transition-colors cursor-pointer py-1"
              title={`Copy ${developerBio.email}`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="text-ink font-medium">Copied email</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-ink-muted shrink-0" />
                  <span>Copy email</span>
                </>
              )}
            </button>

            <a
              href={developerBio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-ink hover:underline transition-colors py-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
            </a>
            <a
              href={developerBio.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-ink hover:underline transition-colors py-1"
            >
              <span>X / Twitter</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
