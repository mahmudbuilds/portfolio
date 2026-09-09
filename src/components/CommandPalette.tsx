"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Command,
  ExternalLink,
  Copy,
  Check,
  FolderGit2,
  FileText,
  Sparkles,
  ArrowRight,
  Code2,
  Send,
  X
} from "lucide-react";
import { GithubIcon, XIcon } from "./Icons";
import { projects } from "@/data/projects";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  category: "Actions" | "Projects" | "Navigation";
  icon: any;
  action: () => void;
  badge?: string;
}

export function CommandPalette({ isOpen, onClose, onOpenResume }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Global keyboard listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or toggle
        }
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText("mahxgithub@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      onClose();
    }, 1200);
  };

  const scrollToSection = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items: CommandItem[] = useMemo(() => {
    const actions: CommandItem[] = [
      {
        id: "copy-email",
        title: copiedEmail ? "Copied mahxgithub@gmail.com!" : "Copy Email Address",
        subtitle: "mahxgithub@gmail.com",
        category: "Actions",
        icon: copiedEmail ? Check : Copy,
        badge: "Contact",
        action: copyEmail,
      },
      {
        id: "view-resume",
        title: "View & Download Resume",
        subtitle: "Scannable interactive CV & experience",
        category: "Actions",
        icon: FileText,
        badge: "CV",
        action: () => {
          onClose();
          onOpenResume();
        },
      },
      {
        id: "github-profile",
        title: "Visit GitHub Profile",
        subtitle: "github.com/mahmudbuilds (17+ repos)",
        category: "Actions",
        icon: GithubIcon,
        badge: "External",
        action: () => {
          window.open("https://github.com/mahmudbuilds", "_blank");
          onClose();
        },
      },
      {
        id: "twitter-profile",
        title: "Connect on X / Twitter",
        subtitle: "@mahmudbuilds",
        category: "Actions",
        icon: XIcon,
        badge: "Social",
        action: () => {
          window.open("https://twitter.com/mahmudbuilds", "_blank");
          onClose();
        },
      },
    ];

    const projectItems: CommandItem[] = projects.map((p) => ({
      id: `project-${p.id}`,
      title: p.title,
      subtitle: p.tagline,
      category: "Projects",
      icon: FolderGit2,
      badge: p.category,
      action: () => {
        if (p.liveUrl) {
          window.open(p.liveUrl, "_blank");
        } else {
          window.open(p.githubUrl, "_blank");
        }
        onClose();
      },
    }));

    const navigationItems: CommandItem[] = [
      {
        id: "nav-projects",
        title: "Browse Featured Projects",
        subtitle: "Inventry, ResuMind, Vesper, E-Commerce",
        category: "Navigation",
        icon: Code2,
        action: () => scrollToSection("projects"),
      },
      {
        id: "nav-skills",
        title: "Explore Tech Stack & Radar",
        subtitle: "Next.js 16, Django REST, React 19, AI/LLMs",
        category: "Navigation",
        icon: Sparkles,
        action: () => scrollToSection("skills"),
      },
      {
        id: "nav-journey",
        title: "View Journey & Milestones",
        subtitle: "Engineering milestones and trajectory",
        category: "Navigation",
        icon: ArrowRight,
        action: () => scrollToSection("journey"),
      },
      {
        id: "nav-contact",
        title: "Get In Touch",
        subtitle: "Send a message or collaborate",
        category: "Navigation",
        icon: Send,
        action: () => scrollToSection("contact"),
      },
    ];

    return [...actions, ...projectItems, ...navigationItems];
  }, [copiedEmail, onOpenResume]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle?.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [items, query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-[#0e121b] border border-white/[0.12] rounded-2xl shadow-2xl shadow-cyan-950/40 overflow-hidden z-10"
          >
            {/* Input Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08] bg-white/[0.02]">
              <Search className="w-5 h-5 text-zinc-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Type a command, project, skill, or action..."
                className="w-full bg-transparent text-white placeholder-zinc-500 text-sm focus:outline-none font-medium"
              />
              <button
                onClick={onClose}
                aria-label="Close command palette"
                className="p-1 text-zinc-400 hover:text-white rounded-md transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List Body */}
            <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-white/[0.04]">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-zinc-500 text-sm">
                  No matching commands or projects found for &quot;{query}&quot;
                </div>
              ) : (
                <div className="space-y-1">
                  {filteredItems.map((item, idx) => {
                    const Icon = item.icon;
                    const isSelected = idx === selectedIndex;
                    return (
                      <button
                        key={item.id}
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full text-left flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all ${
                          isSelected
                            ? "bg-gradient-to-r from-cyan-500/15 to-violet-500/10 border border-cyan-500/30 text-white"
                            : "text-zinc-300 hover:bg-white/[0.04] border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`p-2 rounded-lg shrink-0 ${
                              isSelected
                                ? "bg-cyan-500/20 text-cyan-300"
                                : "bg-white/[0.05] text-zinc-400"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs sm:text-sm font-medium truncate flex items-center gap-2">
                              <span>{item.title}</span>
                              {item.badge && (
                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.08] text-zinc-400 border border-white/[0.06]">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            {item.subtitle && (
                              <p className="text-[11px] text-zinc-400 truncate">
                                {item.subtitle}
                              </p>
                            )}
                          </div>
                        </div>
                        <span className="text-[11px] text-zinc-400 font-mono shrink-0 ml-2 hidden sm:inline">
                          {isSelected ? "↵ Enter" : item.category}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Palette Footer */}
            <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="bg-white/[0.08] px-1.5 py-0.5 rounded text-[10px]">↑↓</kbd> Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="bg-white/[0.08] px-1.5 py-0.5 rounded text-[10px]">↵</kbd> Select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="bg-white/[0.08] px-1.5 py-0.5 rounded text-[10px]">Esc</kbd> Close
                </span>
              </div>
              <span className="text-cyan-400/80 font-semibold">Mahmud OS</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
