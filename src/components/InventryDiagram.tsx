export function InventryDiagram() {
  return (
    <div
      className="w-full h-full bg-paper flex flex-col justify-between p-4 sm:p-5 select-none"
      role="img"
      aria-label="Architecture diagram showing two concurrent checkout requests serialized by a PostgreSQL SELECT FOR UPDATE row lock so Order A commits stock to zero and Order B receives a 409 Conflict instead of overselling"
    >
      <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
        <span>CONCURRENCY INVARIANT</span>
        <span className="tabular-nums text-[#0f766e] dark:text-[#34d399] font-medium">
          SKU-402 · qty = 1
        </span>
      </div>

      <svg
        viewBox="0 0 560 220"
        className="w-full h-auto max-h-[210px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Incoming Request A */}
        <rect
          x="6"
          y="22"
          width="150"
          height="58"
          rx="8"
          className="fill-surface stroke-line-strong"
          strokeWidth="1.2"
        />
        <text
          x="18"
          y="45"
          className="fill-ink font-mono"
          fontSize="12"
          fontWeight="600"
        >
          POST /orders (A)
        </text>
        <text x="18" y="65" className="fill-ink-muted font-mono" fontSize="11.5">
          t = 0ms · qty: -1
        </text>

        {/* Incoming Request B */}
        <rect
          x="6"
          y="138"
          width="150"
          height="58"
          rx="8"
          className="fill-surface stroke-line-strong"
          strokeWidth="1.2"
        />
        <text
          x="18"
          y="161"
          className="fill-ink font-mono"
          fontSize="12"
          fontWeight="600"
        >
          POST /orders (B)
        </text>
        <text x="18" y="181" className="fill-ink-muted font-mono" fontSize="11.5">
          t = 0ms · qty: -1
        </text>

        {/* Arrows into lock */}
        <path
          d="M156 51 H194 V86 H202"
          className="stroke-ink-muted"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M156 167 H194 V132 H202"
          className="stroke-ink-muted"
          strokeWidth="1.4"
          strokeDasharray="4 4"
          strokeLinecap="round"
        />

        {/* PostgreSQL Row Lock Box */}
        <rect
          x="204"
          y="48"
          width="160"
          height="122"
          rx="10"
          className="fill-surface"
          stroke="#0f766e"
          strokeWidth="1.5"
        />
        <text
          x="284"
          y="74"
          textAnchor="middle"
          fill="#0f766e"
          className="font-mono dark:fill-[#34d399]"
          fontSize="11.5"
          fontWeight="600"
        >
          POSTGRESQL TXN
        </text>
        <line
          x1="220"
          y1="86"
          x2="348"
          y2="86"
          className="stroke-line"
          strokeWidth="1"
        />
        <text
          x="284"
          y="110"
          textAnchor="middle"
          className="fill-ink font-mono"
          fontSize="12"
          fontWeight="600"
        >
          SELECT FOR UPDATE
        </text>
        <text
          x="284"
          y="131"
          textAnchor="middle"
          className="fill-ink-muted font-mono"
          fontSize="11.5"
        >
          Serializes writes
        </text>
        <text
          x="284"
          y="151"
          textAnchor="middle"
          className="fill-ink-muted font-mono"
          fontSize="11.5"
        >
          A locks · B waits
        </text>

        {/* Arrows out */}
        <path
          d="M364 86 H386 V51 H402"
          stroke="#0f766e"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M364 132 H386 V167 H402"
          className="stroke-accent"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeLinecap="round"
        />

        {/* Outcome A: Committed */}
        <rect
          x="404"
          y="22"
          width="150"
          height="58"
          rx="8"
          className="fill-surface"
          stroke="#0f766e"
          strokeWidth="1.3"
        />
        <text
          x="418"
          y="45"
          fill="#0f766e"
          className="font-mono dark:fill-[#34d399]"
          fontSize="12"
          fontWeight="600"
        >
          200 COMMITTED
        </text>
        <text x="418" y="65" className="fill-ink-muted font-mono" fontSize="11.5">
          qty: 1 → 0 · ok
        </text>

        {/* Outcome B: Rejected */}
        <rect
          x="404"
          y="138"
          width="150"
          height="58"
          rx="8"
          className="fill-surface stroke-accent"
          strokeWidth="1.3"
        />
        <text
          x="418"
          y="161"
          className="fill-accent font-mono"
          fontSize="12"
          fontWeight="600"
        >
          409 REJECTED
        </text>
        <text x="418" y="181" className="fill-ink-muted font-mono" fontSize="11.5">
          qty = 0 · blocked
        </text>
      </svg>

      <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
        <span>Django REST + Postgres</span>
        <span>Invariant: stock &ge; 0</span>
      </div>
    </div>
  );
}
