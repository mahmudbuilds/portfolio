"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare } from "lucide-react";
import { GithubIcon, XIcon, InstagramIcon } from "./Icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mahxgithub@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Launch client default email client with pre-filled fields
    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName || "Visitor"}`);
    const body = encodeURIComponent(
      `Hi Mahmud,\n\n${message}\n\nFrom: ${senderName} (${senderEmail})`
    );
    window.location.href = `mailto:mahxgithub@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/[0.08] text-cyan-300 text-xs font-mono">
              <Mail className="w-3.5 h-3.5" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Let&apos;s build something impactful together.
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Whether you have an ambitious full-stack project, an AI tool concept, or an engineering role that demands high-velocity execution, my inbox is always open.
            </p>

            {/* Email Quick-Copy Card */}
            <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#0c1018]/80 backdrop-blur-xl">
              <div className="text-xs font-mono text-zinc-400 mb-1">Direct Contact</div>
              <div className="flex items-center justify-between gap-3">
                <a
                  href="mailto:mahxgithub@gmail.com"
                  className="font-mono text-sm sm:text-base text-white hover:text-cyan-400 transition-colors truncate"
                >
                  mahxgithub@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-zinc-300 transition-all shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://github.com/mahmudbuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all flex flex-col items-center justify-center gap-2 text-zinc-300 hover:text-white group"
              >
                <GithubIcon className="w-5 h-5 text-zinc-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all" />
                <span className="text-xs font-medium">GitHub</span>
              </a>

              <a
                href="https://twitter.com/mahmudbuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all flex flex-col items-center justify-center gap-2 text-zinc-300 hover:text-white group"
              >
                <XIcon className="w-5 h-5 text-zinc-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all" />
                <span className="text-xs font-medium">Twitter / X</span>
              </a>

              <a
                href="https://instagram.com/mahmudbuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all flex flex-col items-center justify-center gap-2 text-zinc-300 hover:text-white group"
              >
                <InstagramIcon className="w-5 h-5 text-zinc-400 group-hover:text-pink-400 group-hover:scale-110 transition-all" />
                <span className="text-xs font-medium">Instagram</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.1] bg-[#0c1018]/90 backdrop-blur-xl shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">
                  Send a Quick Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400">Your Name</label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400">Your Email</label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">Message / Opportunity</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about the role, project scope, or idea you'd like to collaborate on..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-semibold text-sm hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>

                {submitted && (
                  <div className="text-xs font-mono text-emerald-400 text-center pt-2">
                    Opening your default email client with your message drafted!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
