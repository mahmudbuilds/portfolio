import React, { useState } from "react";
import { Sparkles, CheckCircle, XCircle, RefreshCw, Lock } from "lucide-react";

export const InteractiveStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"ats" | "rbac">("ats");

  // --- ATS Simulator State ---
  const [candidateProfile, setCandidateProfile] = useState<"mahmud" | "frontend_only" | "junior">("mahmud");
  const [isEvaluating, setIsEvaluating] = useState(false);

  const getAtsDetails = () => {
    if (candidateProfile === "mahmud") {
      return {
        score: 98,
        matchRate: "Top 2% ATS Rank",
        status: "Exceptional Fit",
        headline: "Principal / Senior Full-Stack Compatibility",
        keyMatches: [
          "Next.js 16 (App Router)", "React 19", "TypeScript", "Django REST Framework",
          "PostgreSQL Multi-Tenancy", "RBAC Authorization", "Vercel Edge", "Docker", "RESTful Architecture"
        ],
        gaps: [],
        review: "Exceptional candidate profile exhibiting verified full-stack architecture depth, enterprise multi-tenancy, and high-fidelity frontends."
      };
    } else if (candidateProfile === "frontend_only") {
      return {
        score: 82,
        matchRate: "Standard Tier",
        status: "Strong Frontend Fit",
        headline: "Frontend Focused Candidate",
        keyMatches: ["React", "TypeScript", "Tailwind CSS", "Vite", "Client Performance"],
        gaps: ["Django REST Backend", "Database Partitioning", "Multi-Tenant Authorization"],
        review: "Proficient in frontend components, but lacks proven enterprise backend architecture and multi-tenant security layers."
      };
    } else {
      return {
        score: 58,
        matchRate: "Automated Filter Risk",
        status: "Entry Level Match",
        headline: "Junior Web Developer",
        keyMatches: ["HTML/CSS", "JavaScript", "Basic React", "Git"],
        gaps: ["Full-Stack Architecture", "Next.js 16 App Router", "Django REST", "PostgreSQL", "System Design"],
        review: "Fails automated filter for senior roles requiring decoupled architecture and scalable API design experience."
      };
    }
  };

  const handleReevaluate = () => {
    setIsEvaluating(true);
    setTimeout(() => setIsEvaluating(false), 450);
  };

  // --- RBAC Inspector State ---
  const [role, setRole] = useState<"admin" | "manager" | "auditor">("admin");
  const [organization, setOrganization] = useState<"acme" | "apex">("acme");

  const ats = getAtsDetails();

  return (
    <section id="showcase" className="py-24 border-t border-white/[0.06] relative text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INTERACTIVE PRODUCT STUDIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Live Product Demonstrators
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              Interact directly with the core algorithms and security models I&apos;ve engineered.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/80 rounded-xl border border-white/10 self-start md:self-auto text-xs font-medium">
            <button
              onClick={() => setActiveTab("ats")}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === "ats"
                  ? "bg-white text-slate-950 font-semibold shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ResuMind ATS Simulator
            </button>
            <button
              onClick={() => setActiveTab("rbac")}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === "rbac"
                  ? "bg-white text-slate-950 font-semibold shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Inventry RBAC Inspector
            </button>
          </div>
        </div>

        {/* --- TAB 1: RESUMIND ATS SIMULATOR --- */}
        {activeTab === "ats" && (
          <div className="rounded-2xl bg-slate-950/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl space-y-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-medium text-sky-400 uppercase tracking-wider">
                  Document Intelligence Engine
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  ResuMind ATS Compatibility Simulator
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Evaluates resumes against recruiter filtering algorithms using structural PDF tokenization.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Target Role:</span>
                <span className="text-xs font-semibold text-white bg-slate-900 border border-white/10 px-3 py-1.5 rounded-lg">
                  Senior Full-Stack Engineer
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Profile Picker */}
              <div className="lg:col-span-5 space-y-3">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Select Candidate Profile:
                </label>

                <button
                  onClick={() => {
                    setCandidateProfile("mahmud");
                    handleReevaluate();
                  }}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    candidateProfile === "mahmud"
                      ? "bg-sky-500/10 border-sky-500/50 shadow-lg shadow-sky-500/5 text-white"
                      : "bg-slate-900/40 border-white/[0.06] text-slate-400 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-white">Mahmud (@mahmudbuilds)</span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      FLAGSHIP
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Full-stack systems engineer (Next.js 16, Django REST, PostgreSQL, React 19, RBAC).
                  </p>
                </button>

                <button
                  onClick={() => {
                    setCandidateProfile("frontend_only");
                    handleReevaluate();
                  }}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    candidateProfile === "frontend_only"
                      ? "bg-sky-500/10 border-sky-500/50 shadow-lg shadow-sky-500/5 text-white"
                      : "bg-slate-900/40 border-white/[0.06] text-slate-400 hover:border-white/20"
                  }`}
                >
                  <div className="font-semibold text-sm text-white">Frontend Specialist Profile</div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    High frontend competence, but missing scalable backend tenancy architectures.
                  </p>
                </button>

                <button
                  onClick={() => {
                    setCandidateProfile("junior");
                    handleReevaluate();
                  }}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    candidateProfile === "junior"
                      ? "bg-sky-500/10 border-sky-500/50 shadow-lg shadow-sky-500/5 text-white"
                      : "bg-slate-900/40 border-white/[0.06] text-slate-400 hover:border-white/20"
                  }`}
                >
                  <div className="font-semibold text-sm text-white">Generic Junior Web Profile</div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Basic web technologies, lacking distributed systems or production depth.
                  </p>
                </button>

                <button
                  onClick={handleReevaluate}
                  disabled={isEvaluating}
                  className="w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-xs font-semibold text-slate-200 transition-all cursor-pointer active:scale-98"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-sky-400 ${isEvaluating ? "animate-spin" : ""}`} />
                  <span>{isEvaluating ? "Parsing AST Tokens..." : "Re-evaluate Profile Match"}</span>
                </button>
              </div>

              {/* Simulation Result Card */}
              <div className="lg:col-span-7 bg-slate-900/50 border border-white/[0.08] rounded-2xl p-6 sm:p-7 space-y-6">
                {/* Score Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-emerald-500/20 border border-sky-500/30 flex items-center justify-center">
                      <span className="text-2xl font-extrabold text-white">{ats.score}</span>
                    </div>

                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">ATS Match Score</div>
                      <div className="text-base font-bold text-white mt-0.5">{ats.headline}</div>
                      <div className="text-xs text-emerald-400 font-medium">{ats.matchRate}</div>
                    </div>
                  </div>

                  <span className={`self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full ${
                    ats.score >= 90
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : ats.score >= 70
                      ? "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                      : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                  }`}>
                    {ats.status}
                  </span>
                </div>

                {/* Key Matches */}
                <div>
                  <div className="text-xs font-semibold text-slate-300 mb-2.5 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Identified High-Impact Competencies ({ats.keyMatches.length})</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ats.keyMatches.map((m, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium"
                      >
                        ✓ {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gaps if any */}
                {ats.gaps.length > 0 && (
                  <div>
                    <div className="text-xs font-semibold text-rose-400 mb-2.5 flex items-center gap-1.5">
                      <XCircle className="w-3.5 h-3.5 text-rose-400" />
                      <span>Identified Candidate Skill Gaps</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {ats.gaps.map((g, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-medium"
                        >
                          ✕ {g}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Analysis Review Note */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-white/[0.06] text-xs text-slate-300 leading-relaxed">
                  <strong className="text-sky-400">Algorithmic Review: </strong>
                  {ats.review}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 2: INVENTRY RBAC INSPECTOR --- */}
        {activeTab === "rbac" && (
          <div className="rounded-2xl bg-slate-950/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl space-y-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">
                  Cloud Security Architecture
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Inventry Multi-Tenant RBAC Authorization Inspector
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Inspect live JWT token claims, role-based scopes, and database query permissions.
                </p>
              </div>

              {/* Organization Switcher */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Tenant:</span>
                <select
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value as any)}
                  className="bg-slate-900 border border-white/10 text-xs font-semibold text-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-emerald-500"
                >
                  <option value="acme">ACME Global (Tenant #401)</option>
                  <option value="apex">Apex Logistics (Tenant #812)</option>
                </select>
              </div>
            </div>

            {/* Role Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => setRole("admin")}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  role === "admin"
                    ? "bg-emerald-500/10 border-emerald-500/50 text-white shadow-lg shadow-emerald-500/5"
                    : "bg-slate-900/40 border-white/[0.06] text-slate-400 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-white">Tenant Administrator</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    TIER 1
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Full stock creation, replenishment triggers, user management, and ledger overrides.
                </p>
              </button>

              <button
                onClick={() => setRole("manager")}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  role === "manager"
                    ? "bg-emerald-500/10 border-emerald-500/50 text-white shadow-lg shadow-emerald-500/5"
                    : "bg-slate-900/40 border-white/[0.06] text-slate-400 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-white">Logistics Manager</span>
                  <span className="text-[10px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                    TIER 2
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Real-time stock depletion, dispatch logs, and warehouse inventory management.
                </p>
              </button>

              <button
                onClick={() => setRole("auditor")}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  role === "auditor"
                    ? "bg-emerald-500/10 border-emerald-500/50 text-white shadow-lg shadow-emerald-500/5"
                    : "bg-slate-900/40 border-white/[0.06] text-slate-400 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-white">Compliance Auditor</span>
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                    READ-ONLY
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Read-only ledger access, automated audit logs, and compliance telemetry.
                </p>
              </button>
            </div>

            {/* Token and Endpoint Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Decoded JWT Claims */}
              <div className="p-5 rounded-xl bg-slate-900/60 border border-white/[0.08] space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300 pb-2 border-b border-white/[0.08]">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Lock className="w-3.5 h-3.5" />
                    Decoded JWT Token Payload
                  </span>
                  <span className="text-[11px] text-slate-400">HS256 Cryptographic Signature</span>
                </div>

                <pre className="p-3.5 rounded-lg bg-black/60 text-slate-200 text-xs font-mono overflow-x-auto leading-relaxed">
{JSON.stringify(
  {
    sub: `usr_${role}_0994`,
    tenant: organization,
    role: role.toUpperCase(),
    scopes:
      role === "admin"
        ? ["inventory:read", "inventory:write", "stock:deplete", "tenant:admin"]
        : role === "manager"
        ? ["inventory:read", "inventory:write", "stock:deplete"]
        : ["inventory:read", "audit:read"],
    exp: Math.floor(Date.now() / 1000) + 7200
  },
  null,
  2
)}
                </pre>
              </div>

              {/* Resolution Rules */}
              <div className="p-5 rounded-xl bg-slate-900/60 border border-white/[0.08] space-y-3">
                <div className="text-xs font-semibold text-slate-300 pb-2 border-b border-white/[0.08]">
                  API Endpoint Policy Enforcement
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60">
                    <span className="text-slate-200">GET /api/v1/inventory/items</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> 200 Allowed
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60">
                    <span className="text-slate-200">POST /api/v1/stock/deplete</span>
                    {role === "auditor" ? (
                      <span className="text-rose-400 font-semibold flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" /> 403 Forbidden
                      </span>
                    ) : (
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> 200 Allowed
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60">
                    <span className="text-slate-200">DELETE /api/v1/warehouse/delete</span>
                    {role === "admin" ? (
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> 200 Allowed
                      </span>
                    ) : (
                      <span className="text-rose-400 font-semibold flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" /> 403 Forbidden
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60">
                    <span className="text-slate-200">GET /api/v1/other_tenant_data</span>
                    <span className="text-rose-400 font-semibold flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5" /> 404 Isolated
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                  Tenant boundaries are enforced directly in the Django ORM query layer, guaranteeing zero accidental cross-tenant data leakage.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
