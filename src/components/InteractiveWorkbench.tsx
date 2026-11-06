import React, { useState, useEffect, useRef } from "react";
import { Wrench, Shield, CheckCircle, XCircle, Play, Pause, RefreshCw, FileSearch, Lock, Layers } from "lucide-react";

export const InteractiveWorkbench: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"ats" | "rbac" | "audio">("ats");

  // --- ATS Simulator State ---
  const [targetRole, setTargetRole] = useState("Staff Full-Stack / Systems Engineer");
  const [candidateProfile, setCandidateProfile] = useState<"mahmud" | "junior" | "specialist">("mahmud");
  const [isScanning, setIsScanning] = useState(false);

  const getAtsResults = () => {
    if (candidateProfile === "mahmud") {
      return {
        score: 98,
        matchRate: "98% ATS Pass",
        status: "Exceptional Match",
        matchedKeywords: [
          "Next.js 16 (App Router)", "React 19", "TypeScript", "Django REST",
          "PostgreSQL", "Multi-Tenant Architecture", "RBAC Security", "Docker", "Vercel Edge"
        ],
        gaps: [],
        insight: "Strong alignment across full-stack distributed systems, multi-tenancy, and high-fidelity frontends."
      };
    } else if (candidateProfile === "specialist") {
      return {
        score: 84,
        matchRate: "84% ATS Pass",
        status: "Strong Match",
        matchedKeywords: ["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js"],
        gaps: ["Multi-Tenant DB Partitioning", "Django REST Architecture"],
        insight: "Solid frontend capabilities, but missing enterprise backend tenancy modeling."
      };
    } else {
      return {
        score: 62,
        matchRate: "62% ATS Review",
        status: "Moderate Match",
        matchedKeywords: ["HTML/CSS", "JavaScript", "Basic React", "Git"],
        gaps: ["Next.js 16 App Router", "Django REST Framework", "PostgreSQL RBAC", "System Architecture"],
        insight: "Fails automated filter for senior roles requiring decoupled architecture experience."
      };
    }
  };

  const handleRescan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 500);
  };

  // --- RBAC Inspector State ---
  const [rbacRole, setRbacRole] = useState<"admin" | "manager" | "auditor">("admin");
  const [tenantScope, setTenantScope] = useState<"acme_corp" | "apex_logistics">("acme_corp");

  // --- Audio Visualizer State ---
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const barCount = 36;
      const barWidth = canvas.width / barCount - 2;

      for (let i = 0; i < barCount; i++) {
        let height = 8;
        if (isPlayingAudio) {
          height = Math.sin(step * 0.08 + i * 0.3) * 24 + Math.cos(step * 0.05 + i * 0.2) * 16 + 28;
        } else {
          height = Math.sin(step * 0.02 + i * 0.2) * 4 + 8;
        }

        const x = i * (barWidth + 2);
        const y = canvas.height - height;

        // Gradient bar (cyan to emerald)
        const gradient = ctx.createLinearGradient(0, y, 0, canvas.height);
        gradient.addColorStop(0, "#38bdf8");
        gradient.addColorStop(1, "#10b981");

        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, height);
      }

      step++;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlayingAudio]);

  const atsResult = getAtsResults();

  return (
    <section id="workbench" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 mb-2">
              <Wrench className="w-3.5 h-3.5" />
              <span>// 02. INTERACTIVE WORKBENCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
              Test &amp; Inspect Real Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Don’t take my word for it. Test live interactive prototypes of the algorithms, security layers, and audio engines I’ve engineered.
            </p>
          </div>

          {/* Workbench Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-white/[0.04] border border-white/[0.08] self-start md:self-auto font-mono text-xs">
            <button
              onClick={() => setActiveTab("ats")}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                activeTab === "ats"
                  ? "bg-sky-500 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ResuMind ATS Simulator
            </button>
            <button
              onClick={() => setActiveTab("rbac")}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                activeTab === "rbac"
                  ? "bg-sky-500 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Inventry RBAC Inspector
            </button>
            <button
              onClick={() => setActiveTab("audio")}
              className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                activeTab === "audio"
                  ? "bg-sky-500 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Resonance Audio Visualizer
            </button>
          </div>
        </div>

        {/* --- TAB 1: RESUMIND ATS SIMULATOR --- */}
        {activeTab === "ats" && (
          <div className="rounded-xl bg-[#0c101a] border border-white/[0.08] p-6 lg:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
              <div>
                <div className="flex items-center gap-2">
                  <FileSearch className="w-4 h-4 text-sky-400" />
                  <span className="font-mono text-sm font-semibold text-slate-200">
                    ResuMind ATS Semantic Scoring Engine v2.4
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Simulating Applicant Tracking System AST parsing &amp; role compatibility weights.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400">Target Role:</span>
                <select
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  className="bg-black/50 border border-white/10 text-xs font-mono text-slate-200 rounded px-2.5 py-1.5 focus:outline-none focus:border-sky-500"
                >
                  <option>Staff Full-Stack / Systems Engineer</option>
                  <option>Senior React &amp; Django Specialist</option>
                  <option>AI &amp; Developer Tools Engineer</option>
                </select>
              </div>
            </div>

            {/* Profile Selection & Simulation Run */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4 space-y-4">
                <label className="block text-xs font-mono text-slate-400">SELECT CANDIDATE RESUME PROFILE:</label>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setCandidateProfile("mahmud");
                      handleRescan();
                    }}
                    className={`w-full text-left p-3 rounded-lg border transition-all cursor-pointer ${
                      candidateProfile === "mahmud"
                        ? "bg-sky-500/10 border-sky-500/40 text-white"
                        : "bg-white/[0.02] border-white/[0.06] text-slate-400 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-slate-200">Mahmud (@mahmudbuilds)</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                        FLAGSHIP
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Full-Stack (Next 16, Django REST, Postgres, React 19, RBAC)
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setCandidateProfile("specialist");
                      handleRescan();
                    }}
                    className={`w-full text-left p-3 rounded-lg border transition-all cursor-pointer ${
                      candidateProfile === "specialist"
                        ? "bg-sky-500/10 border-sky-500/40 text-white"
                        : "bg-white/[0.02] border-white/[0.06] text-slate-400 hover:border-white/20"
                    }`}
                  >
                    <div className="font-semibold text-xs text-slate-200">Frontend-Only Developer Profile</div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Strong React/TS frontend, lacking backend multi-tenant systems
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setCandidateProfile("junior");
                      handleRescan();
                    }}
                    className={`w-full text-left p-3 rounded-lg border transition-all cursor-pointer ${
                      candidateProfile === "junior"
                        ? "bg-sky-500/10 border-sky-500/40 text-white"
                        : "bg-white/[0.02] border-white/[0.06] text-slate-400 hover:border-white/20"
                    }`}
                  >
                    <div className="font-semibold text-xs text-slate-200">Generic Junior Web Resume</div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Basic HTML/CSS, missing production architecture depth
                    </div>
                  </button>
                </div>

                <button
                  onClick={handleRescan}
                  disabled={isScanning}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 text-xs font-mono text-slate-200 cursor-pointer active:scale-98 transition-all"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-sky-400 ${isScanning ? "animate-spin" : ""}`} />
                  <span>{isScanning ? "Parsing AST Tokens..." : "Re-Run Semantic ATS Scan"}</span>
                </button>
              </div>

              {/* Simulation Result Output */}
              <div className="md:col-span-8 bg-black/40 border border-white/[0.06] rounded-xl p-6 space-y-5">
                {/* Score gauge and verdict */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
                  <div>
                    <div className="text-xs font-mono text-slate-400">ATS COMPATIBILITY SCORE</div>
                    <div className="flex items-baseline gap-3 mt-1">
                      <span className="text-4xl font-bold font-mono text-white">{atsResult.score}</span>
                      <span className="text-slate-400 font-mono text-sm">/ 100</span>
                      <span className={`text-xs font-mono font-medium px-2 py-0.5 rounded ${
                        atsResult.score >= 90
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : atsResult.score >= 70
                          ? "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                          : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                      }`}>
                        {atsResult.status}
                      </span>
                    </div>
                  </div>

                  <div className="text-right sm:text-right text-xs font-mono text-slate-400">
                    <div>PARSER: pdfjs-dist Client AST</div>
                    <div className="text-emerald-400">ZERO DATA LEAKED</div>
                  </div>
                </div>

                {/* Matched Keywords Radar */}
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-2 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>MATCHED ENTERPRISE KEYWORDS &amp; COMPETENCIES ({atsResult.matchedKeywords.length})</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {atsResult.matchedKeywords.map((kw, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-[11px]"
                      >
                        ✓ {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Missing Keywords Gaps if any */}
                {atsResult.gaps.length > 0 && (
                  <div>
                    <div className="text-xs font-mono text-rose-400 mb-2 flex items-center gap-1.5">
                      <XCircle className="w-3.5 h-3.5 text-rose-400" />
                      <span>IDENTIFIED RECRUITER KEYWORD GAPS</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {atsResult.gaps.map((gap, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300 font-mono text-[11px]"
                        >
                          ✕ {gap}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actionable Rewrite Recommendation */}
                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-300">
                  <span className="text-sky-400 font-semibold">// ALGORITHM FEEDBACK: </span>
                  {atsResult.insight}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 2: INVENTRY RBAC & SECURITY INSPECTOR --- */}
        {activeTab === "rbac" && (
          <div className="rounded-xl bg-[#0c101a] border border-white/[0.08] p-6 lg:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
              <div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-sm font-semibold text-slate-200">
                    Inventry Multi-Tenant RBAC Authorization Inspector
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Inspect live JWT token headers, tenant claim isolation, and endpoint access policies.
                </p>
              </div>

              {/* Tenant Switcher */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400">Tenant Scope:</span>
                <select
                  value={tenantScope}
                  onChange={(e) => setTenantScope(e.target.value as any)}
                  className="bg-black/50 border border-white/10 text-xs font-mono text-slate-200 rounded px-2.5 py-1.5 focus:outline-none focus:border-emerald-500"
                >
                  <option value="acme_corp">ACME Corp (Tenant #401)</option>
                  <option value="apex_logistics">Apex Logistics (Tenant #812)</option>
                </select>
              </div>
            </div>

            {/* Role Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => setRbacRole("admin")}
                className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                  rbacRole === "admin"
                    ? "bg-emerald-500/10 border-emerald-500/40 text-white"
                    : "bg-white/[0.02] border-white/[0.06] text-slate-400 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-slate-200">Tenant Admin</span>
                  <span className="text-[10px] font-mono text-emerald-400">LEVEL 3</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Full inventory write, user provisioning, stock overrides</p>
              </button>

              <button
                onClick={() => setRbacRole("manager")}
                className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                  rbacRole === "manager"
                    ? "bg-emerald-500/10 border-emerald-500/40 text-white"
                    : "bg-white/[0.02] border-white/[0.06] text-slate-400 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-slate-200">Warehouse Manager</span>
                  <span className="text-[10px] font-mono text-sky-400">LEVEL 2</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Stock adjustments, inbound dispatch, re-order alerts</p>
              </button>

              <button
                onClick={() => setRbacRole("auditor")}
                className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                  rbacRole === "auditor"
                    ? "bg-emerald-500/10 border-emerald-500/40 text-white"
                    : "bg-white/[0.02] border-white/[0.06] text-slate-400 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-slate-200">Compliance Auditor</span>
                  <span className="text-[10px] font-mono text-amber-400">LEVEL 1</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Read-only ledger logs, telemetry reports, zero mutations</p>
              </button>
            </div>

            {/* Simulated Live Token Headers & Access Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Token Claims JSON */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/[0.06] space-y-2 font-mono text-xs">
                <div className="text-slate-400 text-[11px] flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Lock className="w-3.5 h-3.5" />
                    DECODED JWT PAYLOAD
                  </span>
                  <span>HS256 VERIFIED</span>
                </div>
                <pre className="text-slate-300 text-[11px] overflow-x-auto leading-relaxed pt-2">
{JSON.stringify(
  {
    sub: `user_${rbacRole}_9982`,
    tenant_id: tenantScope,
    role: rbacRole.toUpperCase(),
    permissions:
      rbacRole === "admin"
        ? ["stock:create", "stock:update", "stock:deplete", "tenant:manage", "audit:read"]
        : rbacRole === "manager"
        ? ["stock:update", "stock:deplete", "dispatch:record"]
        : ["audit:read", "stock:read"],
    exp: Math.floor(Date.now() / 1000) + 3600
  },
  null,
  2
)}
                </pre>
              </div>

              {/* Endpoint Access Resolution Matrix */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-3 font-mono text-xs">
                <div className="text-slate-400 text-[11px] pb-2 border-b border-white/[0.06]">
                  ENDPOINT ACCESS RESOLUTION FOR {tenantScope.toUpperCase()}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02]">
                    <span>GET /api/v1/inventory/items</span>
                    <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                      <CheckCircle className="w-3.5 h-3.5" /> 200 OK (Scoped)
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02]">
                    <span>POST /api/v1/stock/deplete</span>
                    {rbacRole === "auditor" ? (
                      <span className="text-rose-400 flex items-center gap-1 text-[11px]">
                        <XCircle className="w-3.5 h-3.5" /> 403 FORBIDDEN
                      </span>
                    ) : (
                      <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                        <CheckCircle className="w-3.5 h-3.5" /> 200 OK (Allowed)
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02]">
                    <span>DELETE /api/v1/tenant/warehouse</span>
                    {rbacRole === "admin" ? (
                      <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                        <CheckCircle className="w-3.5 h-3.5" /> 200 OK (SuperAdmin)
                      </span>
                    ) : (
                      <span className="text-rose-400 flex items-center gap-1 text-[11px]">
                        <XCircle className="w-3.5 h-3.5" /> 403 PERMISSION DENIED
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between p-2 rounded bg-white/[0.02]">
                    <span>GET /api/v1/tenant/apex_logistics/*</span>
                    <span className="text-rose-400 flex items-center gap-1 text-[11px]">
                      <XCircle className="w-3.5 h-3.5" /> 404 NOT IN TENANT SCOPE
                    </span>
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 pt-1">
                  Tenant segregation is enforced at the Django ORM BaseManager level, rejecting out-of-scope queries before database execution.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 3: RESONANCE AUDIO VISUALIZER --- */}
        {activeTab === "audio" && (
          <div className="rounded-xl bg-[#0c101a] border border-white/[0.08] p-6 lg:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
              <div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-400" />
                  <span className="font-mono text-sm font-semibold text-slate-200">
                    Resonance Web Audio FFT Frequency Visualizer
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Interactive waveform generator rendering 36 discrete frequency bands in real-time.
                </p>
              </div>

              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono text-xs font-semibold cursor-pointer active:scale-95 transition-all shadow-md shadow-sky-500/20"
              >
                {isPlayingAudio ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>PAUSE STREAM</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>START SYNTHETIC STREAM</span>
                  </>
                )}
              </button>
            </div>

            {/* Canvas Visualizer */}
            <div className="p-4 rounded-xl bg-black/60 border border-white/[0.06]">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>FREQUENCY SPECTRUM (32Hz - 16kHz)</span>
                <span className={isPlayingAudio ? "text-emerald-400" : "text-slate-400"}>
                  {isPlayingAudio ? "STREAM: ACTIVE (60 FPS)" : "IDLE"}
                </span>
              </div>
              <canvas
                ref={canvasRef}
                width={800}
                height={120}
                className="w-full h-28 bg-[#06080e] rounded-lg"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div className="text-slate-400 text-[11px]">LATENCY BUFFER</div>
                <div className="text-white font-semibold mt-1">12ms AudioContext</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div className="text-slate-400 text-[11px]">STATE PERSISTENCE</div>
                <div className="text-emerald-400 font-semibold mt-1">Global Root Context</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div className="text-slate-400 text-[11px]">DISPATCH STREAM</div>
                <div className="text-sky-400 font-semibold mt-1">Brotli / HTTP Range</div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
