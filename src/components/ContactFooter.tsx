import { useState } from "react";
import { Copy, Check, Download, FileText, ArrowUpRight } from "lucide-react";
import { developerBio } from "../data/portfolioData";
import { copyToClipboard } from "../utils/clipboard";

const currentYear = new Date().getFullYear();

interface ContactFooterProps {
  onOpenResume: (trigger?: HTMLElement | null) => void;
}

export function ContactFooter({ onOpenResume }: ContactFooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    const ok = await copyToClipboard(developerBio.email);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <footer
      id="contact"
      className="border-t border-line bg-surface/60 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-24 space-y-14">
        <div className="space-y-6">
          <div className="space-y-3 max-w-[60ch]">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] tracking-[-0.025em] font-normal text-ink text-balance">
              Let&apos;s build something reliable.
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
              I&apos;m open to full-time full-stack engineering roles on
              product-focused teams. If you&apos;re hiring or want to talk
              through any of the systems above, send a note.
            </p>
          </div>

          {/* Focal Email Address */}
          <div className="space-y-2 pt-1">
            <a
              href={`mailto:${developerBio.email}`}
              className="inline-block font-serif text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] text-ink hover:text-accent underline decoration-line-strong hover:decoration-accent underline-offset-8 transition-colors break-all"
            >
              {developerBio.email}
            </a>
            <p className="font-mono text-xs sm:text-[13px] text-ink-muted">
              {developerBio.location} · {developerBio.timezone} ·{" "}
              {developerBio.responsePromise}
            </p>
          </div>

          {/* Closing Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-ink text-paper hover:opacity-90 text-sm font-medium transition-opacity cursor-pointer active:scale-[0.99] min-h-[44px]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Copied email</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Copy email</span>
                </>
              )}
            </button>

            <a
              href={developerBio.resumePdfUrl}
              download
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-line-strong hover:border-ink text-ink text-sm font-medium transition-colors active:scale-[0.99] min-h-[44px]"
            >
              <Download className="w-4 h-4 text-ink-muted shrink-0" aria-hidden="true" />
              <span>Download PDF resume</span>
            </a>

            <button
              type="button"
              onClick={(e) => onOpenResume(e.currentTarget)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-ink-secondary hover:text-ink text-sm font-medium transition-colors cursor-pointer min-h-[44px]"
            >
              <FileText className="w-4 h-4 text-ink-muted shrink-0" aria-hidden="true" />
              <span>Preview resume</span>
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[13px] text-ink-muted">
          <p className="tabular-nums">
            © {currentYear} {developerBio.name}
          </p>

          <div className="flex items-center gap-5">
            <a
              href={developerBio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-ink hover:underline transition-colors py-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href={developerBio.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-ink hover:underline transition-colors py-1"
            >
              <span>X / Twitter</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
