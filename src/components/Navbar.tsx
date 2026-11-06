import React, { useState, useEffect } from "react";
import { FileText, ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { developerBio } from "../data/portfolioData";

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-slate-950/80 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/60"
              : "bg-slate-900/40 backdrop-blur-md border border-white/[0.05]"
          }`}
        >
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-sm text-white">
                  M
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-950 rounded-full" />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-semibold text-sm text-white tracking-tight group-hover:text-sky-300 transition-colors">
                Mahmud
              </span>
              <span className="text-[11px] text-slate-400 font-normal">
                Full-Stack &amp; AI Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] px-3 py-1.5 rounded-xl border border-white/[0.05] text-xs font-medium text-slate-300">
            <a
              href="#projects"
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.05] transition-all"
            >
              Featured Work
            </a>
            <a
              href="#showcase"
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.05] transition-all flex items-center gap-1.5 text-sky-400"
            >
              <Sparkles className="w-3 h-3" />
              <span>Interactive Studio</span>
            </a>
            <a
              href="#skills"
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.05] transition-all"
            >
              Tech Stack
            </a>
            <a
              href="#experience"
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.05] transition-all"
            >
              Milestones
            </a>
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.05] transition-all"
            >
              Contact
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] text-xs font-medium text-slate-200 hover:text-white transition-all cursor-pointer active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>Resume</span>
            </button>

            <a
              href={developerBio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] text-slate-300 hover:text-white transition-all hover:scale-105 active:scale-95"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium text-xs shadow-md shadow-sky-500/20 transition-all hover:shadow-sky-500/30 active:scale-95"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-sky-400 text-xs font-medium"
              title="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto bg-slate-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 space-y-4 animate-in slide-in-from-top-3 duration-200 shadow-2xl">
          <nav className="flex flex-col gap-2 text-sm text-slate-300 text-left">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-white/[0.05] hover:text-white transition-colors"
            >
              Featured Work
            </a>
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-white/[0.05] hover:text-white transition-colors text-sky-400"
            >
              Interactive Product Studio
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-white/[0.05] hover:text-white transition-colors"
            >
              Tech Stack
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-white/[0.05] hover:text-white transition-colors"
            >
              Engineering Milestones
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-white/[0.05] hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="pt-2 border-t border-white/[0.08] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-slate-200 text-xs font-medium"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>View Executive Resume</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-semibold"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
