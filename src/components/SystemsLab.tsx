import React, { useState } from "react";
import { Play, RotateCcw, AlertTriangle, CheckCircle, ShieldAlert, Cpu, Database, Network } from "lucide-react";

export const SystemsLab: React.FC = () => {
  const [activeLab, setActiveLab] = useState<"concurrency" | "ast" | "topology">("concurrency");

  // --- Lab 1: Concurrency Simulator State ---
  const [lockingEnabled, setLockingEnabled] = useState(true);
  const [simulationState, setSimulationState] = useState<"idle" | "running" | "completed">("idle");
  const [stockHistory, setStockHistory] = useState<number[]>([6]);
  const [orderALog, setOrderALog] = useState<string>("Ready to dispatch Order A (qty: 5)");
  const [orderBLog, setOrderBLog] = useState<string>("Ready to dispatch Order B (qty: 5)");
  const [finalResult, setFinalResult] = useState<string | null>(null);

  const runConcurrencySim = () => {
    setSimulationState("running");
    setStockHistory([6]);
    setFinalResult(null);

    setOrderALog("Order A (qty: 5): Requesting lock on item #42...");
    setOrderBLog("Order B (qty: 5): Requesting lock on item #42...");

    setTimeout(() => {
      if (lockingEnabled) {
        // Safe with row-level locking
        setOrderALog("Order A: [Lock Acquired] Stock = 6. Deducting 5 -> Stock = 1. Committing.");
        setOrderBLog("Order B: [Waiting for Lock release on item #42]...");
        setStockHistory([6, 1]);

        setTimeout(() => {
          setOrderBLog("Order B: [Lock Acquired] Stock = 1. Requested 5 -> Fails check. ROLLBACK (409 Conflict).");
          setSimulationState("completed");
          setFinalResult("Safe: Atomic transaction prevented overselling. Stock correctly remains at 1.");
        }, 1100);
      } else {
        // Race condition bug without locking
        setOrderALog("Order A: [No Lock] Reads Stock = 6. Deducting 5 -> writes 1.");
        setOrderBLog("Order B: [No Lock] Reads Stock = 6 concurrently! Deducting 5 -> writes 1 - 5 = -4!");
        setStockHistory([6, 1, -4]);
        setSimulationState("completed");
        setFinalResult("CRITICAL BUG: Race condition allowed negative inventory (-4 units sold).");
      }
    }, 900);
  };

  const resetConcurrencySim = () => {
    setSimulationState("idle");
    setStockHistory([6]);
    setOrderALog("Ready to dispatch Order A (qty: 5)");
    setOrderBLog("Ready to dispatch Order B (qty: 5)");
    setFinalResult(null);
  };

  // --- Lab 2: AST Security Scanner State ---
  const [selectedSnippet, setSelectedSnippet] = useState<"sql_injection" | "eval_rce" | "safe_query">("sql_injection");
  const [astAnalysisState, setAstAnalysisState] = useState<"idle" | "analyzing" | "analyzed">("analyzed");

  const snippets = {
    sql_injection: {
      name: "SQL String Interpolation (Vulnerable)",
      code: `def get_user_by_email(request):\n    user_email = request.GET.get('email')\n    # Insecure: String formatting inside SQL execute\n    query = f"SELECT * FROM users WHERE email = '{user_email}'"\n    cursor.execute(query)\n    return cursor.fetchone()`,
      astTree: [
        { node: "Module", type: "root", desc: "Top-level Python file scope" },
        { node: "FunctionDef (get_user_by_email)", type: "func", desc: "Function definition with request argument" },
        { node: "Assign (query)", type: "assign", desc: "Variable assignment with JoinedStr (f-string)" },
        {
          node: "Call -> cursor.execute(query)",
          type: "vulnerable",
          cwe: "CWE-89: SQL Injection",
          reason: "SQL query string derived from JoinedStr dynamic interpolation rather than parameterized arguments."
        }
      ],
      remediation: `cursor.execute("SELECT * FROM users WHERE email = %s", [user_email])`
    },
    eval_rce: {
      name: "Dynamic eval() Execution (Vulnerable)",
      code: `def calculate_discount(request):\n    formula = request.POST.get('custom_rule')\n    # Insecure: executing user-supplied string\n    result = eval(formula)\n    return JsonResponse({'discount': result})`,
      astTree: [
        { node: "Module", type: "root", desc: "Top-level Python file scope" },
        { node: "FunctionDef (calculate_discount)", type: "func", desc: "Function definition" },
        {
          node: "Call -> eval(formula)",
          type: "vulnerable",
          cwe: "CWE-95: Improper Neutralization (RCE)",
          reason: "Direct invocation of eval() on unvalidated HTTP POST payload."
        }
      ],
      remediation: `import ast\nresult = ast.literal_eval(formula) # Or a restricted math parser`
    },
    safe_query: {
      name: "Parameterized SQL Query (Secure)",
      code: `def get_user_by_email(request):\n    user_email = request.GET.get('email')\n    # Secure: Parameters passed separately to database adapter\n    query = "SELECT * FROM users WHERE email = %s"\n    cursor.execute(query, [user_email])\n    return cursor.fetchone()`,
      astTree: [
        { node: "Module", type: "root", desc: "Top-level Python file scope" },
        { node: "FunctionDef (get_user_by_email)", type: "func", desc: "Function definition" },
        { node: "Assign (query)", type: "assign", desc: "Constant string without variable interpolation" },
        {
          node: "Call -> cursor.execute(query, [user_email])",
          type: "safe",
          cwe: "Pass: Secure Parameterization",
          reason: "Database driver treats user_email strictly as literal data, preventing query hijacking."
        }
      ],
      remediation: "No remediation required. Parameterized binding correctly implemented."
    }
  };

  const handleRunAstAnalysis = () => {
    setAstAnalysisState("analyzing");
    setTimeout(() => {
      setAstAnalysisState("analyzed");
    }, 400);
  };

  // --- Lab 3: Topology Inspector State ---
  const [selectedRoute, setSelectedRoute] = useState<"read_inventory" | "write_order" | "cross_tenant">("read_inventory");

  const topologyRoutes = {
    read_inventory: {
      method: "GET",
      path: "/api/v1/warehouses/alpha/stock",
      tenant: "org_acme_corp",
      statusCode: 200,
      statusText: "200 OK",
      latencyMs: "38ms",
      flow: [
        { step: "Client Request", desc: "Next.js 16 Edge proxy validates cached session token" },
        { step: "API Middleware", desc: "Django REST extracts tenant 'org_acme_corp' from JWT claims" },
        { step: "Database Query", desc: "PostgreSQL index scan: WHERE tenant_id = 'org_acme_corp'" }
      ],
      response: {
        warehouse: "Warehouse Alpha",
        total_skus: 412,
        active_allocations: 18,
        server_timing: "edge: 4ms, api: 21ms, db: 13ms"
      }
    },
    write_order: {
      method: "POST",
      path: "/api/v1/orders/dispatch",
      tenant: "org_acme_corp",
      statusCode: 201,
      statusText: "201 Created",
      latencyMs: "64ms",
      flow: [
        { step: "Client Request", desc: "Order payload validated against JSON schema" },
        { step: "API Transaction", desc: "Django opens transaction.atomic() with select_for_update()" },
        { step: "Database Write", desc: "Neon PostgreSQL updates inventory ledger and records audit event" }
      ],
      response: {
        order_id: "ord_918204",
        status: "CONFIRMED",
        units_allocated: 5,
        remaining_stock: 1,
        transaction_hash: "tx_0x9a8f11c"
      }
    },
    cross_tenant: {
      method: "GET",
      path: "/api/v1/warehouses/apex_logistics/stock",
      tenant: "org_acme_corp (Mismatched)",
      statusCode: 403,
      statusText: "403 Forbidden",
      latencyMs: "19ms",
      flow: [
        { step: "Client Request", desc: "Client attempts to request resources belonging to apex_logistics" },
        { step: "Tenant Guard", desc: "TenantFilteredManager detects tenant_id mismatch" },
        { step: "Early Termination", desc: "Request rejected before any database read occurs" }
      ],
      response: {
        error: "Forbidden",
        detail: "Tenant isolation policy rejects cross-organization resource access.",
        code: "TENANT_ACCESS_DENIED"
      }
    }
  };

  const routeData = topologyRoutes[selectedRoute];

  return (
    <section id="systems-lab" className="py-24 border-t border-white/[0.08] relative text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-medium text-sky-400">
              <Cpu className="w-3.5 h-3.5" />
              <span>Interactive Architecture Lab</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Systems &amp; Architecture Playground
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              Inspect interactive simulations of the concurrency algorithms, AST static analysis, and multi-tenant pipelines running in my systems.
            </p>
          </div>

          {/* Lab Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-white/[0.08] text-xs">
            <button
              onClick={() => setActiveLab("concurrency")}
              className={`px-3.5 py-2 rounded-lg font-medium transition-all cursor-pointer ${
                activeLab === "concurrency"
                  ? "bg-sky-500 text-slate-950 shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Concurrency &amp; Locks
            </button>
            <button
              onClick={() => setActiveLab("ast")}
              className={`px-3.5 py-2 rounded-lg font-medium transition-all cursor-pointer ${
                activeLab === "ast"
                  ? "bg-sky-500 text-slate-950 shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              AST Security Analyzer
            </button>
            <button
              onClick={() => setActiveLab("topology")}
              className={`px-3.5 py-2 rounded-lg font-medium transition-all cursor-pointer ${
                activeLab === "topology"
                  ? "bg-sky-500 text-slate-950 shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Decoupled Pipeline
            </button>
          </div>
        </div>

        {/* --- LAB 1: Concurrency & Database Locking --- */}
        {activeLab === "concurrency" && (
          <div className="rounded-2xl bg-slate-900/40 border border-white/[0.08] p-6 sm:p-8 space-y-8 backdrop-blur-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span>Inventry: Row-Level Concurrency &amp; Race Condition Engine</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                  Simulate two warehouse operators attempting to allocate 5 units simultaneously when only 6 are in stock. Toggle database row-level locking to observe how <code className="text-sky-300">select_for_update()</code> prevents inventory overselling.
                </p>
              </div>

              {/* Mode Toggle & Run Action */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-white/[0.08] text-xs text-slate-300">
                  <span>Locking:</span>
                  <button
                    onClick={() => {
                      setLockingEnabled(!lockingEnabled);
                      resetConcurrencySim();
                    }}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                      lockingEnabled
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                    }`}
                  >
                    {lockingEnabled ? "Active (SELECT FOR UPDATE)" : "Disabled (Race Bug)"}
                  </button>
                </div>

                <button
                  onClick={runConcurrencySim}
                  disabled={simulationState === "running"}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-slate-950 font-semibold text-xs transition-all shadow-md cursor-pointer active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run Concurrent Orders</span>
                </button>

                <button
                  onClick={resetConcurrencySim}
                  className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Reset Simulation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Visual Concurrency Ledger */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Operator A */}
              <div className="p-5 rounded-xl bg-slate-950/60 border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-sky-400">Operator Thread A</span>
                  <span className="text-slate-500 font-mono">PID: 8812</span>
                </div>
                <div className="text-xs text-slate-300">
                  Action: <strong className="text-white">Order 5 units</strong> of SKU-42
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04] text-[11px] font-mono text-slate-300 min-h-[64px] flex items-center">
                  {orderALog}
                </div>
              </div>

              {/* Warehouse Inventory State */}
              <div className="p-5 rounded-xl bg-slate-950/60 border border-white/[0.06] space-y-3 text-center">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  PostgreSQL Neon Stock Balance
                </div>
                <div className="py-2">
                  <span
                    className={`text-4xl font-extrabold font-mono transition-colors ${
                      stockHistory[stockHistory.length - 1] < 0
                        ? "text-rose-400 animate-pulse"
                        : "text-emerald-400"
                    }`}
                  >
                    {stockHistory[stockHistory.length - 1]}
                  </span>
                  <span className="text-xs text-slate-500 ml-2">units remaining</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Initial stock: 6 units • Target SKU: #42
                </div>
              </div>

              {/* Operator B */}
              <div className="p-5 rounded-xl bg-slate-950/60 border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-indigo-400">Operator Thread B</span>
                  <span className="text-slate-500 font-mono">PID: 8819</span>
                </div>
                <div className="text-xs text-slate-300">
                  Action: <strong className="text-white">Order 5 units</strong> of SKU-42
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04] text-[11px] font-mono text-slate-300 min-h-[64px] flex items-center">
                  {orderBLog}
                </div>
              </div>
            </div>

            {/* Simulation Diagnostic Output */}
            {finalResult && (
              <div
                className={`p-4 rounded-xl text-xs flex items-center gap-3 border ${
                  lockingEnabled
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                    : "bg-rose-500/10 border-rose-500/20 text-rose-300"
                }`}
              >
                {lockingEnabled ? (
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                )}
                <span>{finalResult}</span>
              </div>
            )}

            {/* Django Implementation Code */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-400 flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-sky-400" />
                <span>Production Django ORM Implementation (Inventry)</span>
              </div>
              <div className="p-4 rounded-xl bg-[#03060c] border border-white/[0.06] font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed">
                <pre>{`from django.db import transaction
from rest_framework.exceptions import ValidationError

@transaction.atomic
def allocate_warehouse_stock(item_id, requested_qty, tenant):
    # Acquires exclusive row-level database lock on this specific inventory row
    item = InventoryItem.objects.select_for_update().get(id=item_id, tenant=tenant)
    
    if item.stock < requested_qty:
        raise ValidationError({"error": "Insufficient inventory available."})
        
    item.stock -= requested_qty
    item.save()
    
    AuditLog.objects.create(tenant=tenant, action="STOCK_ALLOCATED", item=item, qty=requested_qty)
    return item.stock`}</pre>
              </div>
            </div>
          </div>
        )}

        {/* --- LAB 2: AST Security Scanner --- */}
        {activeLab === "ast" && (
          <div className="rounded-2xl bg-slate-900/40 border border-white/[0.08] p-6 sm:p-8 space-y-8 backdrop-blur-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Code Auditor: Python Abstract Syntax Tree (AST) Security Scanner
                </h3>
                <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                  Inspect how Python’s native <code className="text-sky-300">ast.NodeVisitor</code> detects dangerous function calls and SQL string interpolation vulnerabilities without executing untrusted code.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleRunAstAnalysis}
                  disabled={astAnalysisState === "analyzing"}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-slate-950 font-semibold text-xs transition-all shadow-md cursor-pointer"
                >
                  <Cpu className={`w-3.5 h-3.5 ${astAnalysisState === "analyzing" ? "animate-spin" : ""}`} />
                  <span>{astAnalysisState === "analyzing" ? "Parsing Syntax Nodes..." : "Parse AST Tree"}</span>
                </button>
              </div>
            </div>

            {/* Snippet Picker */}
            <div className="flex flex-wrap gap-2">
              {(Object.keys(snippets) as Array<keyof typeof snippets>).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedSnippet(key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedSnippet === key
                      ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                      : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.05]"
                  }`}
                >
                  {snippets[key].name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left: Input Python Code */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-slate-400">Analyzed Python Source Code</span>
                <div className="p-4 rounded-xl bg-[#03060c] border border-white/[0.06] font-mono text-xs text-slate-300 overflow-x-auto min-h-[190px]">
                  <pre>{snippets[selectedSnippet].code}</pre>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/[0.06] space-y-1">
                  <div className="text-[11px] font-semibold text-slate-400">Security Recommendation / Fix:</div>
                  <div className="font-mono text-xs text-emerald-400 break-all">
                    {snippets[selectedSnippet].remediation}
                  </div>
                </div>
              </div>

              {/* Right: Parsed AST Nodes */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-slate-400">Traversed AST Syntax Nodes</span>
                <div className="space-y-2 min-h-[190px]">
                  {snippets[selectedSnippet].astTree.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border text-xs transition-all ${
                        item.type === "vulnerable"
                          ? "bg-rose-500/10 border-rose-500/30 text-rose-200"
                          : item.type === "safe"
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-200"
                          : "bg-slate-950/60 border-white/[0.06] text-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between font-mono font-medium">
                        <span className="flex items-center gap-1.5">
                          {item.type === "vulnerable" && <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />}
                          {item.type === "safe" && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                          <span>{item.node}</span>
                        </span>
                        {item.cwe && (
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                              item.type === "vulnerable"
                                ? "bg-rose-500/20 text-rose-300"
                                : "bg-emerald-500/20 text-emerald-300"
                            }`}
                          >
                            {item.cwe}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">{item.desc || item.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- LAB 3: Decoupled Topology & Live Pipeline --- */}
        {activeLab === "topology" && (
          <div className="rounded-2xl bg-slate-900/40 border border-white/[0.08] p-6 sm:p-8 space-y-8 backdrop-blur-xl">
            <div className="pb-6 border-b border-white/[0.08]">
              <h3 className="text-lg font-semibold text-white">
                Decoupled Cloud Architecture &amp; Multi-Tenant Routing
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                Observe how incoming client requests flow across Vercel Edge, Django REST Framework on Render, and PostgreSQL on Neon with cryptographic tenant context validation.
              </p>
            </div>

            {/* Route Selector */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedRoute("read_inventory")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedRoute === "read_inventory"
                    ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                    : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.05]"
                }`}
              >
                GET /warehouses/alpha/stock (Normal Read)
              </button>
              <button
                onClick={() => setSelectedRoute("write_order")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedRoute === "write_order"
                    ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                    : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.05]"
                }`}
              >
                POST /orders/dispatch (Atomic Write)
              </button>
              <button
                onClick={() => setSelectedRoute("cross_tenant")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedRoute === "cross_tenant"
                    ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                    : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.05]"
                }`}
              >
                GET /warehouses/apex/stock (Cross-Tenant Block)
              </button>
            </div>

            {/* Architecture Steps Flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {routeData.flow.map((f, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-950/60 border border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-sky-400">
                    <span className="w-5 h-5 rounded-full bg-sky-500/10 flex items-center justify-center text-[10px]">
                      {i + 1}
                    </span>
                    <span>{f.step}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Live Response Payload Inspector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                <span className="flex items-center gap-2">
                  <Network className="w-3.5 h-3.5 text-sky-400" />
                  <span>Telemetry &amp; JSON Payload Inspector</span>
                </span>
                <span className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                      routeData.statusCode === 200 || routeData.statusCode === 201
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-rose-500/20 text-rose-400"
                    }`}
                  >
                    {routeData.statusText}
                  </span>
                  <span className="font-mono text-slate-400 text-[11px]">{routeData.latencyMs}</span>
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#03060c] border border-white/[0.06] font-mono text-xs text-slate-300 overflow-x-auto">
                <pre>{JSON.stringify(routeData.response, null, 2)}</pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
