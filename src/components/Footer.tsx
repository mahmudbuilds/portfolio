import React from "react";
import { ArrowUp, Terminal } from "lucide-react";
import { developerBio } from "../data/portfolioData";

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] py-10 bg-[#06080e] text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Moniker & Copyright */}
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-200">
              {developerBio.name} ({developerBio.handle})
            </span>
            <span>•</span>
            <span>MIT License</span>
            <span>•</span>
            <span className="hidden md:inline">Engineered with React 19 &amp; Vite</span>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Dev CLI (⌘K)</span>
            </button>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
