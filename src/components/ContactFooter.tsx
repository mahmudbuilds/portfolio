import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { developerBio } from "../data/portfolioData";

const currentYear = new Date().getFullYear();

export function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerBio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer id="contact" className="pt-12 sm:pt-16 border-t border-line space-y-12">
      <div className="space-y-6">
        <div className="space-y-2.5 max-w-[62ch]">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] font-normal text-ink">
            Get in touch
          </h2>
          <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
            I'm looking for a full-time full-stack engineering role on a product-focused team. If
            you're hiring or want to talk through any of the systems above, send me a note.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${developerBio.email}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-ink text-paper hover:opacity-90 text-sm font-medium transition-opacity active:scale-[0.99] min-h-[42px]"
          >
            <Mail className="w-4 h-4 shrink-0" />
            <span>Email me</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-line-strong hover:border-ink text-ink text-sm font-medium transition-colors cursor-pointer active:scale-[0.99] min-h-[42px]"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-accent shrink-0" />
                <span>Copied email</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-ink-muted shrink-0" />
                <span className="font-mono text-[13px]">{developerBio.email}</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="pt-6 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[13px] text-ink-muted">
        <p className="tabular-nums">
          © {currentYear} {developerBio.name}
        </p>

        <div className="flex items-center gap-5">
          <a
            href={developerBio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink hover:underline transition-colors"
          >
            GitHub
          </a>
          <a
            href={developerBio.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink hover:underline transition-colors"
          >
            X / Twitter
          </a>
          <a
            href={developerBio.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink hover:underline transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
