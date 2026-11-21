import { useState, useEffect } from "react";
import {
  Mail,
  Copy,
  Check,
  FileText,
  ArrowUpRight,
  Sun,
  Moon,
  Download,
} from "lucide-react";
import { developerBio } from "../data/portfolioData";
import type { Theme } from "../hooks/useTheme";
import { HeroWaveform } from "./HeroWaveform";
import { copyToClipboard } from "../utils/clipboard";

const NAV_ITEMS = [
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "approach", label: "Approach" },
] as const;

interface SiteNavProps {
  onOpenResume: (trigger?: HTMLElement | null) => void;
  theme: Theme;
  onToggleTheme: () => void;
}

export function SiteNav({ onOpenResume, theme, onToggleTheme }: SiteNavProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 h-14 sm:h-16 flex items-center justify-between gap-3">
        <a
          href="#top"
          className="font-mono text-xs sm:text-sm tracking-[-0.01em] text-ink hover:text-accent transition-colors shrink-0 py-2"
        >
          {developerBio.handle}
        </a>

        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <nav
            aria-label="Primary"
            className="flex items-center gap-0.5 sm:gap-1.5 text-xs sm:text-sm text-ink-secondary overflow-x-auto no-scrollbar"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`px-2 sm:px-2.5 py-2 rounded-md transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-ink font-medium bg-surface"
                      : "hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <span className="h-4 w-px bg-line shrink-0" aria-hidden="true" />

          <button
            type="button"
            onClick={(e) => onOpenResume(e.currentTarget)}
            className="px-2.5 sm:px-3 py-1.5 rounded-md border border-line-strong hover:border-ink text-xs sm:text-sm font-medium text-ink transition-colors cursor-pointer shrink-0 min-h-[36px]"
          >
            Resume
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-md text-ink-secondary hover:text-ink hover:bg-surface transition-colors cursor-pointer shrink-0"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Moon className="w-4 h-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

interface HeroSectionProps {
  onOpenResume: (trigger?: HTMLElement | null) => void;
}

export function HeroSection({ onOpenResume }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    const ok = await copyToClipboard(developerBio.email);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section
      aria-label="Introduction"
      className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] items-center gap-10 lg:gap-14"
    >
      <div className="space-y-6 sm:space-y-7">
        <div className="space-y-4">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.75rem] leading-[1.05] tracking-[-0.025em] font-normal text-ink text-balance">
            {developerBio.name}
          </h1>

          <p className="text-lg sm:text-xl md:text-[1.35rem] leading-[1.45] text-ink-secondary max-w-[52ch] font-normal">
            Full-stack software engineer building resilient web applications,
            transactional backends, and fast interfaces.
          </p>

          <p className="text-sm sm:text-[15px] text-ink-muted leading-relaxed max-w-[58ch]">
            {developerBio.availability} · {developerBio.location}. Shipping
            end-to-end with TypeScript, React, Next.js, Python, PostgreSQL, and
            Convex.
          </p>
        </div>

        {/* Focused Primary Actions (2 buttons) */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href={`mailto:${developerBio.email}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-ink text-paper hover:opacity-90 text-sm font-medium transition-opacity active:scale-[0.99] min-h-[44px]"
          >
            <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Email me</span>
          </a>

          <button
            type="button"
            onClick={(e) => onOpenResume(e.currentTarget)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-line-strong hover:border-ink text-ink text-sm font-medium transition-colors cursor-pointer active:scale-[0.99] min-h-[44px]"
          >
            <FileText className="w-4 h-4 text-ink-muted shrink-0" aria-hidden="true" />
            <span>View resume</span>
          </button>
        </div>

        {/* Secondary Utility & Social Row */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-secondary pt-1">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 hover:text-ink transition-colors cursor-pointer min-h-[44px]"
            title={`Copy ${developerBio.email}`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                <span className="text-ink font-medium">Copied email</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-ink-muted shrink-0" aria-hidden="true" />
                <span>Copy email</span>
              </>
            )}
          </button>

          <a
            href={developerBio.resumePdfUrl}
            download
            className="inline-flex items-center gap-1.5 hover:text-ink hover:underline transition-colors min-h-[44px]"
          >
            <Download className="w-3.5 h-3.5 text-ink-muted shrink-0" aria-hidden="true" />
            <span>PDF resume</span>
          </a>

          <a
            href={developerBio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-ink hover:underline transition-colors min-h-[44px]"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
          </a>

          <a
            href={developerBio.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-ink hover:underline transition-colors min-h-[44px]"
          >
            <span>X / Twitter</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Interactive Signature Visual */}
      <HeroWaveform />
    </section>
  );
}
