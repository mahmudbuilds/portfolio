import React, { useState, useEffect, useRef } from "react";
import { Terminal, X, CornerDownLeft, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { developerBio, projectsData, skillCategoriesData } from "../data/portfolioData";
import type { Project } from "../types";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onSelectProject: (p: Project) => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onSelectProject,
}) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: "init",
      command: "welcome",
      output: (
        <div className="space-y-1 text-slate-300">
          <div className="text-sky-400 font-semibold">
            Mahmud Developer Console [Version 2.5.0-vite]
          </div>
          <div className="text-slate-400">
            Type <span className="text-emerald-400 font-bold">help</span> to view available commands, or try <span className="text-emerald-400 font-bold">projects</span>, <span className="text-emerald-400 font-bold">skills</span>, <span className="text-emerald-400 font-bold">cat resume</span>, <span className="text-emerald-400 font-bold">hire</span>.
          </div>
        </div>
      )
    }
  ]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
        outputNode = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="text-slate-400">// AVAILABLE COMMANDS:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
              <div><strong className="text-sky-400">projects</strong> - List all flagship systems</div>
              <div><strong className="text-sky-400">skills</strong> - View technical radar matrix</div>
              <div><strong className="text-sky-400">cat resume</strong> - View scannable CV format</div>
              <div><strong className="text-sky-400">contact</strong> - Get direct email &amp; handles</div>
              <div><strong className="text-sky-400">hire</strong> - Instant offer trigger + confetti</div>
              <div><strong className="text-sky-400">whoami</strong> - Visitor &amp; runtime telemetry</div>
              <div><strong className="text-sky-400">status</strong> - Check cloud deployments status</div>
              <div><strong className="text-sky-400">clear</strong> - Reset terminal history</div>
            </div>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-2 text-xs">
            <div className="text-slate-400">// SHIPPED ARCHITECTURES:</div>
            <div className="space-y-1.5">
              {projectsData.map((p) => (
                <div
                  key={p.id}
                  className="p-2 rounded bg-white/[0.03] border border-white/[0.06] flex items-center justify-between"
                >
                  <div>
                    <span className="font-semibold text-white">{p.title}</span>
                    <span className="text-slate-400 ml-2">({p.category})</span>
                    <div className="text-[11px] text-slate-400">{p.tagline}</div>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectProject(p);
                    }}
                    className="text-[11px] font-mono text-sky-400 hover:text-sky-300 underline cursor-pointer"
                  >
                    inspect →
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="space-y-3 text-xs">
            {skillCategoriesData.map((cat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-sky-400 font-semibold">{cat.name}:</div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/[0.04] text-[11px] font-mono text-slate-300"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case "cat resume":
      case "resume":
        outputNode = (
          <div className="space-y-2 text-xs">
            <div className="text-emerald-400 font-semibold">Opening Interactive CV modal...</div>
            <p className="text-slate-300">
              Launching scannable, print-to-PDF ready executive developer resume.
            </p>
          </div>
        );
        setTimeout(() => {
          onClose();
          onOpenResume();
        }, 600);
        break;

      case "contact":
        outputNode = (
          <div className="space-y-2 text-xs text-slate-300">
            <div className="text-sky-400 font-semibold">// DIRECT REACH OUT:</div>
            <div>
              Email:{" "}
              <a href={`mailto:${developerBio.email}`} className="text-white underline">
                {developerBio.email}
              </a>
            </div>
            <div>GitHub: <a href={developerBio.github} target="_blank" rel="noopener noreferrer" className="text-sky-400 underline">github.com/mahmudbuilds</a></div>
            <div>X / Twitter: <a href={developerBio.twitter} target="_blank" rel="noopener noreferrer" className="text-sky-400 underline">@mahmudbuilds</a></div>
          </div>
        );
        break;

      case "hire":
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
        navigator.clipboard.writeText(developerBio.email);
        outputNode = (
          <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 space-y-1">
            <div className="font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              CONFIRMED: Let’s Build Something Exceptional!
            </div>
            <div>
              Copied <strong>{developerBio.email}</strong> to your clipboard.
            </div>
            <div className="text-[11px] text-slate-300">
              Send an email or message on X (@mahmudbuilds). Let’s connect on your vision or open role.
            </div>
          </div>
        );
        break;

      case "whoami":
        outputNode = (
          <div className="text-xs space-y-1 text-slate-300">
            <div><strong>Visitor:</strong> Engineering Recruiter / Technical Leader</div>
            <div><strong>Host:</strong> mahmud.builds (Vercel Edge Global Network)</div>
            <div><strong>Protocol:</strong> HTTPS / HTTP/3 QUIC (0-RTT)</div>
            <div><strong>Design Standard:</strong> Anti-Slop (Taste-Skill 2.5)</div>
          </div>
        );
        break;

      case "status":
        outputNode = (
          <div className="text-xs space-y-1 font-mono text-emerald-400">
            <div>✓ Vercel Edge: DEPLOYED (100% Uptime)</div>
            <div>✓ Neon PostgreSQL Pool: ONLINE</div>
            <div>✓ Inventry Multi-Tenant Partition: ACTIVE</div>
            <div>✓ ResuMind ATS Engine: OPERATIONAL</div>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "sudo rm -rf /":
      case "rm -rf /":
        outputNode = (
          <div className="text-rose-400 text-xs font-mono">
            nice try! Immutable production sandbox. Permission denied.
          </div>
        );
        break;

      default:
        outputNode = (
          <div className="text-xs text-slate-400 font-mono">
            Command not recognized: &quot;{cmd}&quot;. Type <span className="text-sky-400">help</span> for the manual.
          </div>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        command: input,
        output: outputNode
      }
    ]);
    setInput("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[80vh] flex flex-col rounded-xl bg-[#080b12] border border-white/10 shadow-2xl text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d121d] border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-sky-400" />
            <span className="font-mono text-xs text-slate-200 font-semibold">
              mahmud@developer-console: ~
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
              ESC to exit
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-xs">
          {history.map((item) => (
            <div key={item.id} className="space-y-1.5">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400 font-bold">&gt;</span>
                <span className="text-slate-200 font-medium">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Command Input Form */}
        <form
          onSubmit={handleCommand}
          className="flex items-center gap-2 px-4 py-3 bg-[#0a0e17] border-t border-white/[0.08]"
        >
          <span className="text-sky-400 font-mono font-bold">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (try 'help', 'projects', 'hire')..."
            className="flex-1 bg-transparent border-none text-xs font-mono text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            type="submit"
            className="p-1.5 rounded bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
