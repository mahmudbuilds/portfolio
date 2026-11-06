import React, { useState, useEffect } from "react";
import { Terminal, FileText, Mail, Check, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { developerBio } from "../data/portfolioData";

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Live clock in UTC
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { timeZone: "UTC", hour12: false }) + " UTC");
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(developerBio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090e]/90 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-2xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand & Moniker */}
          <a
            href="#"
            className="group flex items-center gap-3 text-slate-100 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center font-mono font-bold text-sm text-sky-400 group-hover:border-sky-500/40 group-hover:scale-105 transition-all">
              M_
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-semibold tracking-tight text-slate-200 group-hover:text-sky-300 transition-colors">
                mahmudbuilds
              </span>
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {time || "SYS: ONLINE"}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wide text-slate-400">
            <a href="#projects" className="hover:text-slate-100 transition-colors">
              // PROJECTS
            </a>
            <a href="#workbench" className="hover:text-slate-100 transition-colors">
              // WORKBENCH
            </a>
            <a href="#skills" className="hover:text-slate-100 transition-colors">
              // RADAR
            </a>
            <a href="#experience" className="hover:text-slate-100 transition-colors">
              // TIMELINE
            </a>
            <a href="#contact" className="hover:text-slate-100 transition-colors">
              // CONTACT
            </a>
          </nav>

          {/* Quick Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Terminal CLI Trigger */}
            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-sky-500/30 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer active:scale-95"
              title="Open Interactive Command Palette (⌘K)"
            >
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span>CLI</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] text-slate-400 bg-white/[0.06] rounded border border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* Resume Trigger */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-emerald-500/30 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>RESUME</span>
            </button>

            {/* Email Copy */}
            <button
              onClick={copyEmail}
              className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer active:scale-95"
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">COPIED!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>EMAIL</span>
                </>
              )}
            </button>

            {/* GitHub Profile */}
            <a
              href={developerBio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-400 hover:text-white transition-all hover:scale-105 active:scale-95"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-md bg-white/[0.04] border border-white/10 text-sky-400"
              aria-label="Open CLI"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-white/[0.04] border border-white/10 text-slate-300"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#07090e]/95 backdrop-blur-2xl border-b border-white/10 px-5 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3 font-mono text-sm text-slate-300">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-white/[0.05] hover:text-sky-400"
            >
              // 01. Flagship Projects
            </a>
            <a
              href="#workbench"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-white/[0.05] hover:text-sky-400"
            >
              // 02. Interactive Workbench
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-white/[0.05] hover:text-sky-400"
            >
              // 03. Technical Radar
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-white/[0.05] hover:text-sky-400"
            >
              // 04. Milestones Timeline
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-white/[0.05] hover:text-sky-400"
            >
              // 05. Direct Contact
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-medium"
            >
              <FileText className="w-4 h-4" />
              <span>View Executive CV / Resume</span>
            </button>

            <button
              onClick={() => {
                copyEmail();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-200 font-mono text-xs"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>Copy {developerBio.email}</span>
            </button>

            <a
              href={developerBio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 font-mono text-xs"
            >
              <GithubIcon className="w-4 h-4" />
              <span>mahmudbuilds on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
