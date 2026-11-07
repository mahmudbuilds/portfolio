import React, { useState } from "react";
import { Play, RotateCcw, AlertCircle, CheckCircle2, ShieldCheck, ShoppingCart, FileSearch, Lock } from "lucide-react";

export const SystemsLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"inventory" | "resume" | "security">("inventory");

  // --- Demo 1: Inventry Stock Demo State ---
  const [hasProtection, setHasProtection] = useState(true);
  const [orderStatus, setOrderStatus] = useState<"idle" | "running" | "done">("idle");
  const [stockCount, setStockCount] = useState<number>(6);
  const [customer1Message, setCustomer1Message] = useState<string>("Ready to order 5 items");
  const [customer2Message, setCustomer2Message] = useState<string>("Ready to order 5 items");
  const [summaryMessage, setSummaryMessage] = useState<string | null>(null);

  const runOrderTest = () => {
    setOrderStatus("running");
    setCustomer1Message("Placing order for 5 items...");
    setCustomer2Message("Placing order for 5 items at the exact same moment...");

    setTimeout(() => {
      if (hasProtection) {
        setStockCount(1);
        setCustomer1Message("✅ Order #1 Confirmed: 5 items allocated. Stock left: 1.");
        setCustomer2Message("❌ Order #2 Stopped: Only 1 item left in warehouse! Customer notified safely.");
        setSummaryMessage("Success: The app processed orders one by one, preventing the business from selling items it doesn't have.");
      } else {
        setStockCount(-4);
        setCustomer1Message("⚠️ Order #1 Confirmed: 5 items sold.");
        setCustomer2Message("⚠️ Order #2 Confirmed: 5 items sold! Stock is now -4 (Oversold by 4 items!)");
        setSummaryMessage("Mistake: Without protection, both customers were told 'yes', leaving the warehouse with negative inventory.");
      }
      setOrderStatus("done");
    }, 800);
  };

  const resetOrderTest = () => {
    setOrderStatus("idle");
    setStockCount(6);
    setCustomer1Message("Ready to order 5 items");
    setCustomer2Message("Ready to order 5 items");
    setSummaryMessage(null);
  };

  // --- Demo 2: ResuMind Keyword Matcher State ---
  const [selectedRole, setSelectedRole] = useState<"frontend" | "backend" | "fullstack">("fullstack");

  const roles = {
    fullstack: {
      title: "Full-Stack Engineer Role",
      matchScore: 92,
      matched: ["React", "Next.js", "Python", "PostgreSQL", "REST APIs", "Git"],
      missing: ["Docker", "Redis"],
      tip: "ResuMind scanned the resume in 0.2 seconds in your browser. Adding 'Docker' will push the match score to 98%."
    },
    frontend: {
      title: "Frontend Developer Role",
      matchScore: 96,
      matched: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "Responsive Design"],
      missing: ["GraphQL"],
      tip: "Great match! All core frontend requirements are clearly present on the resume."
    },
    backend: {
      title: "Backend Developer Role",
      matchScore: 88,
      matched: ["Python", "Django", "PostgreSQL", "Database Design", "User Authentication"],
      missing: ["Microservices", "Kubernetes"],
      tip: "Strong match on relational databases and Python frameworks."
    }
  };

  const currentRole = roles[selectedRole];

  // --- Demo 3: Code Auditor Security State ---
  const [selectedSecurityExample, setSelectedSecurityExample] = useState<"sql_leak" | "dangerous_command" | "safe_example">("sql_leak");

  const securityExamples = {
    sql_leak: {
      title: "Common Mistake: SQL Injection",
      isVulnerable: true,
      whatHappened: "User input is directly glued into a database query.",
      risk: "A malicious user could type ' OR 1=1; -- into a search box to see private customer passwords or wipe the database.",
      badCode: `query = f"SELECT * FROM users WHERE email = '{user_input}'"`,
      goodCode: `query = "SELECT * FROM users WHERE email = %s", [user_input]`,
      howItHelps: "Code Auditor flags this immediately and shows the developer how to pass the email as safe data instead of executable code."
    },
    dangerous_command: {
      title: "Common Mistake: Running Unsafe Commands",
      isVulnerable: true,
      whatHappened: "The app runs a command string entered by a visitor.",
      risk: "An attacker could upload a dangerous file or run a script on your server.",
      badCode: `result = eval(user_text)  # Runs any command the user typed`,
      goodCode: `result = safe_math_parser(user_text)  # Only allows numbers`,
      howItHelps: "Code Auditor warns developers to replace raw eval() calls with safe, restricted functions."
    },
    safe_example: {
      title: "Best Practice: Safe Protected Code",
      isVulnerable: false,
      whatHappened: "User input is kept separate from database instructions.",
      risk: "No risk detected. The database driver safely treats the input strictly as plain text.",
      badCode: `# This code is already clean and safe`,
      goodCode: `cursor.execute("SELECT * FROM items WHERE id = %s", [item_id])`,
      howItHelps: "Code Auditor passes this code with zero security warnings."
    }
  };

  const currentSecurity = securityExamples[selectedSecurityExample];

  return (
    <section id="systems-lab" className="py-24 border-t border-white/[0.08] relative text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-medium text-sky-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Interactive App Demos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Try Out How the Apps Work
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              Simple interactive previews showing the real features built into Inventry, ResuMind, and Code Auditor.
            </p>
          </div>

          {/* Simple Tab Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-white/[0.08] text-xs">
            <button
              onClick={() => setActiveTab("inventory")}
              className={`px-3.5 py-2 rounded-lg font-medium transition-all cursor-pointer ${
                activeTab === "inventory"
                  ? "bg-sky-500 text-slate-950 shadow font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              1. Inventry (Stock Demo)
            </button>
            <button
              onClick={() => setActiveTab("resume")}
              className={`px-3.5 py-2 rounded-lg font-medium transition-all cursor-pointer ${
                activeTab === "resume"
                  ? "bg-sky-500 text-slate-950 shadow font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              2. ResuMind (Resume Scanner)
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`px-3.5 py-2 rounded-lg font-medium transition-all cursor-pointer ${
                activeTab === "security"
                  ? "bg-sky-500 text-slate-950 shadow font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              3. Code Auditor (Bug Detector)
            </button>
          </div>
        </div>

        {/* --- DEMO 1: Inventry Stock Tracker --- */}
        {activeTab === "inventory" && (
          <div className="rounded-2xl bg-slate-900/40 border border-white/[0.08] p-6 sm:p-8 space-y-7 backdrop-blur-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-sky-400" />
                  <span>Inventry: How it prevents selling items you don't have</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  <strong>The Situation:</strong> A warehouse has only 6 items left. Two buyers both click "Buy 5 items" at the exact same second. Watch what happens:
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    setHasProtection(!hasProtection);
                    resetOrderTest();
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                    hasProtection
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                      : "bg-rose-500/10 text-rose-400 border-rose-500/30"
                  }`}
                >
                  {hasProtection ? "Protection: On (Safe)" : "Protection: Off (Bug)"}
                </button>

                <button
                  onClick={runOrderTest}
                  disabled={orderStatus === "running"}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-slate-950 font-semibold text-xs transition-all shadow-md cursor-pointer active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Place Both Orders Now</span>
                </button>

                <button
                  onClick={resetOrderTest}
                  className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Reset"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Visual Orders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Customer 1 */}
              <div className="p-5 rounded-xl bg-slate-950/60 border border-white/[0.06] space-y-2">
                <div className="text-xs font-semibold text-sky-400">Customer 1</div>
                <div className="text-sm font-medium text-white">Ordering 5 items</div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04] text-xs text-slate-300 min-h-[56px] flex items-center">
                  {customer1Message}
                </div>
              </div>

              {/* Warehouse Inventory Stock */}
              <div className="p-5 rounded-xl bg-slate-950/60 border border-white/[0.06] space-y-2 text-center">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Warehouse Stock Level
                </div>
                <div className="py-1">
                  <span
                    className={`text-4xl font-extrabold font-mono transition-colors ${
                      stockCount < 0 ? "text-rose-400 animate-pulse" : "text-emerald-400"
                    }`}
                  >
                    {stockCount}
                  </span>
                  <span className="text-xs text-slate-400 ml-2">units in warehouse</span>
                </div>
                <div className="text-[11px] text-slate-500">
                  Initial stock started at 6 units
                </div>
              </div>

              {/* Customer 2 */}
              <div className="p-5 rounded-xl bg-slate-950/60 border border-white/[0.06] space-y-2">
                <div className="text-xs font-semibold text-indigo-400">Customer 2</div>
                <div className="text-sm font-medium text-white">Ordering 5 items</div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04] text-xs text-slate-300 min-h-[56px] flex items-center">
                  {customer2Message}
                </div>
              </div>
            </div>

            {summaryMessage && (
              <div
                className={`p-4 rounded-xl text-xs sm:text-sm flex items-center gap-3 border ${
                  hasProtection
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                    : "bg-rose-500/10 border-rose-500/20 text-rose-300"
                }`}
              >
                {hasProtection ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                )}
                <span>{summaryMessage}</span>
              </div>
            )}
          </div>
        )}

        {/* --- DEMO 2: ResuMind Resume Scanner --- */}
        {activeTab === "resume" && (
          <div className="rounded-2xl bg-slate-900/40 border border-white/[0.08] p-6 sm:p-8 space-y-7 backdrop-blur-xl">
            <div className="pb-6 border-b border-white/[0.08]">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <FileSearch className="w-5 h-5 text-sky-400" />
                <span>ResuMind: How it scans resumes and finds missing skills</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Choose a job role below to see how ResuMind analyzes a resume, matches relevant keywords, and points out what’s missing — all inside your browser without saving your file.
              </p>
            </div>

            {/* Role Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedRole("fullstack")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedRole === "fullstack"
                    ? "bg-sky-500 text-slate-950 shadow"
                    : "bg-white/[0.04] text-slate-300 hover:text-white border border-white/[0.06]"
                }`}
              >
                Full-Stack Engineer Role
              </button>
              <button
                onClick={() => setSelectedRole("frontend")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedRole === "frontend"
                    ? "bg-sky-500 text-slate-950 shadow"
                    : "bg-white/[0.04] text-slate-300 hover:text-white border border-white/[0.06]"
                }`}
              >
                Frontend Developer Role
              </button>
              <button
                onClick={() => setSelectedRole("backend")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedRole === "backend"
                    ? "bg-sky-500 text-slate-950 shadow"
                    : "bg-white/[0.04] text-slate-300 hover:text-white border border-white/[0.06]"
                }`}
              >
                Backend Developer Role
              </button>
            </div>

            {/* Results Card */}
            <div className="p-6 rounded-xl bg-slate-950/60 border border-white/[0.06] space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Target Job Description:</div>
                  <div className="text-base font-bold text-white mt-0.5">{currentRole.title}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Match Score:</span>
                  <span className="text-xl font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                    {currentRole.matchScore}% Match
                  </span>
                </div>
              </div>

              {/* Matched Skills */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Skills Found on Resume:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentRole.matched.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-medium"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Missing Skills */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-sky-400 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Recommended Skills to Add to Resume:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentRole.missing.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-300 border border-sky-500/20 text-xs font-medium"
                    >
                      + {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-slate-300">
                <strong>Quick Tip:</strong> {currentRole.tip}
              </div>
            </div>
          </div>
        )}

        {/* --- DEMO 3: Code Auditor Security Checker --- */}
        {activeTab === "security" && (
          <div className="rounded-2xl bg-slate-900/40 border border-white/[0.08] p-6 sm:p-8 space-y-7 backdrop-blur-xl">
            <div className="pb-6 border-b border-white/[0.08]">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-sky-400" />
                <span>Code Auditor: How it catches security bugs before they go live</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Choose an example to see how Code Auditor scans code, explains what the risk is in plain English, and provides the safe fix.
              </p>
            </div>

            {/* Example Selector */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSecurityExample("sql_leak")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedSecurityExample === "sql_leak"
                    ? "bg-sky-500 text-slate-950 shadow"
                    : "bg-white/[0.04] text-slate-300 hover:text-white border border-white/[0.06]"
                }`}
              >
                1. SQL Injection Risk
              </button>
              <button
                onClick={() => setSelectedSecurityExample("dangerous_command")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedSecurityExample === "dangerous_command"
                    ? "bg-sky-500 text-slate-950 shadow"
                    : "bg-white/[0.04] text-slate-300 hover:text-white border border-white/[0.06]"
                }`}
              >
                2. Dangerous Command Execution
              </button>
              <button
                onClick={() => setSelectedSecurityExample("safe_example")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedSecurityExample === "safe_example"
                    ? "bg-sky-500 text-slate-950 shadow"
                    : "bg-white/[0.04] text-slate-300 hover:text-white border border-white/[0.06]"
                }`}
              >
                3. Clean &amp; Safe Code Example
              </button>
            </div>

            {/* Example Card */}
            <div className="p-6 rounded-xl bg-slate-950/60 border border-white/[0.06] space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="text-base font-bold text-white">{currentSecurity.title}</h4>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold self-start sm:self-auto ${
                    currentSecurity.isVulnerable
                      ? "bg-rose-500/15 text-rose-300 border border-rose-500/30"
                      : "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                  }`}
                >
                  {currentSecurity.isVulnerable ? "⚠️ Vulnerability Detected" : "✓ Passed Clean"}
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div>
                  <strong className="text-white">What's happening:</strong> {currentSecurity.whatHappened}
                </div>
                <div>
                  <strong className="text-white">The Risk:</strong> {currentSecurity.risk}
                </div>
              </div>

              {/* Code comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 space-y-1.5">
                  <div className="text-[11px] font-sans font-semibold text-rose-400">Unsafe Code:</div>
                  <div className="text-rose-200 overflow-x-auto">{currentSecurity.badCode}</div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-1.5">
                  <div className="text-[11px] font-sans font-semibold text-emerald-400">Safe Solution:</div>
                  <div className="text-emerald-200 overflow-x-auto">{currentSecurity.goodCode}</div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-slate-300">
                <strong>Why this matters:</strong> {currentSecurity.howItHelps}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
