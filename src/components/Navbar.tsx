"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Command, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#080a0f]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
            <div className="w-full h-full bg-[#0d1117] rounded-[11px] flex items-center justify-center">
              <span className="font-mono text-sm font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                M
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-white tracking-tight text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
              Mahmud
            </span>
            <span className="font-mono text-[10px] text-zinc-400">
              @mahmudbuilds
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3.5 py-1 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Status Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for roles</span>
          </div>

          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            aria-label="Open Command Palette"
            className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-all text-xs font-medium group cursor-pointer"
          >
            <Command className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline text-zinc-400">Search</span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 font-mono text-[10px] bg-white/[0.08] border border-white/[0.1] px-1.5 py-0.5 rounded text-zinc-400">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>

          {/* GitHub Icon */}
          <a
            href="https://github.com/mahmudbuilds"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#080a0f]/95 backdrop-blur-2xl px-4 py-4 mt-2 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              Open to high-impact roles
            </span>
            <a
              href="https://github.com/mahmudbuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-white flex items-center gap-1"
            >
              GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
