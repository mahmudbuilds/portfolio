import { useState } from "react";
import { Mail, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, TwitterIcon, InstagramIcon } from "./SocialIcons";
import { developerBio } from "../data/portfolioData";

export function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerBio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer id="contact" className="space-y-8 sm:space-y-10 pt-8 sm:pt-10 border-t border-zinc-800/80">
      {/* Contact Callout Card: Clean responsive layout */}
      <div className="p-6 sm:p-8 rounded-2xl border border-zinc-800/80 bg-zinc-900/35 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100">
            Let's Connect
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            I'm currently open for full-time software engineering roles and exciting projects.
            Whether you want to discuss a role, review system architecture, or just say hello, feel free to reach out.
          </p>
        </div>

        {/* Action Row: Symmetrical buttons on mobile, compact on desktop */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-sm active:scale-[0.98] min-h-[42px]"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Copied Email Address!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-zinc-900 shrink-0" />
                <span>Copy {developerBio.email}</span>
              </>
            )}
          </button>

          {/* Mailto Direct Link */}
          <a
            href={`mailto:${developerBio.email}`}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white text-xs sm:text-sm font-medium transition-all min-h-[42px]"
          >
            <span>Open Email Client</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 shrink-0" />
          </a>
        </div>
      </div>

      {/* Social Links & Colophon */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 text-xs text-zinc-500">
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href={developerBio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-zinc-300 transition-colors py-1"
          >
            <GithubIcon className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            <span>GitHub</span>
          </a>
          <a
            href={developerBio.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-zinc-300 transition-colors py-1"
          >
            <TwitterIcon className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            <span>Twitter / X</span>
          </a>
          <a
            href={developerBio.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-zinc-300 transition-colors py-1"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            <span>Instagram</span>
          </a>
        </div>

        <p className="font-mono text-zinc-600">
          © {new Date().getFullYear()} Mahmud · Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
