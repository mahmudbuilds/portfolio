export function PhilosophySection() {
  const principles = [
    {
      title: "Enforce invariants at the database layer",
      description:
        "Application checks alone race under concurrent load. Critical business rules belong inside atomic transactions and schema constraints.",
      example:
        "Inventry serializes conflicting warehouse checkouts inside PostgreSQL transactions so stock counts can never go negative.",
    },
    {
      title: "Design for upstream failure, not the happy path",
      description:
        "Third-party APIs hit quotas and rate limits in production. Failover and usage metering belong in the server layer from day one.",
      example:
        "Resonance detects upstream TTS quota errors, rotates to a healthy key, and re-clones custom voices from cached audio buffers.",
    },
    {
      title: "Keep state where it belongs",
      description:
        "Not every workflow needs a server round-trip. Picking the right execution boundary cuts latency, cost, and privacy exposure.",
      example:
        "ResuMind parses resumes entirely in-browser with zero PII storage; Flow Batch Automator isolates its UI in a closed Shadow DOM.",
    },
  ];

  return (
    <section id="approach" className="space-y-8 scroll-mt-24">
      <div className="space-y-2">
        <h2 className="font-serif text-2xl sm:text-3xl tracking-[-0.02em] font-normal text-ink text-balance">
          Engineering Approach
        </h2>
        <p className="text-sm sm:text-[15px] text-ink-muted max-w-[60ch]">
          The trade-offs I prioritize when designing systems, grounded in shipped work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 pt-8 border-t border-line">
        {principles.map((principle) => (
          <div
            key={principle.title}
            className="flex flex-col justify-between space-y-5"
          >
            <div className="space-y-2.5">
              <h3 className="font-serif text-xl text-ink tracking-[-0.015em] leading-snug text-balance">
                {principle.title}
              </h3>
              <p className="text-sm sm:text-[15px] text-ink-secondary leading-relaxed">
                {principle.description}
              </p>
            </div>
            <p className="text-[13px] text-ink-muted leading-relaxed pt-4 border-t border-line">
              {principle.example}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
