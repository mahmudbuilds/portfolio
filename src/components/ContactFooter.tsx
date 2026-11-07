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
    <footer id="contact" className="space-y-12 pt-8 border-t border-zinc-800/80">
      {/* Contact Callout */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
          Let's Connect
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed max-w-lg">
          I'm currently looking for full-time engineering opportunities and exciting projects.
          Whether you want to discuss a role, review code, or just say hello, feel free to reach out.
        </p>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-sm font-semibold transition-all cursor-pointer shadow-sm active:scale-[0.98]"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Copied email!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-zinc-900" />
                <span>Copy {developerBio.email}</span>
              </>
            )}
          </button>

          {/* Mailto Direct Link */}
          <a
            href={`mailto:${developerBio.email}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-sm font-medium transition-all"
          >
            <span>Open Email Client</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-500" />
          </a>
        </div>
      </div>

      {/* Social Links & Colophon */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-zinc-900 text-xs text-zinc-500">
        <div className="flex items-center gap-4">
          <a
            href={developerBio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-zinc-300 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
            <span>GitHub</span>
          </a>
          <a
            href={developerBio.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-zinc-300 transition-colors"
          >
            <TwitterIcon className="w-3.5 h-3.5 text-zinc-400" />
            <span>Twitter / X</span>
          </a>
          <a
            href={developerBio.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-zinc-300 transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-zinc-400" />
            <span>Instagram</span>
          </a>
        </div>

        <p className="font-mono">
          © {new Date().getFullYear()} Mahmud · Crafted with React & Tailwind
        </p>
      </div>
    </footer>
  );
}
