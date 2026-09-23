const ITEMS = [
  {
    q: "What kind of work do you take on?",
    a: "Product and platform work where the hard part is the system, not the screen: architecture, data models, internal tooling, and the interfaces that sit on top of them.",
  },
  {
    q: "Do you work solo or with a team?",
    a: "Both. Solo for discovery, prototypes, and tightly scoped builds. Embedded with an existing team when the work needs to outlive the engagement.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "A short paid discovery to agree on scope and risk, then two-week increments with something demoable at the end of each one. No six-month reveals.",
  },
  {
    q: "How do we start?",
    a: "Send a paragraph about the problem and the deadline attached to it. If it is a fit, you get a scope and a number within a week.",
  },
];

export default function Faq() {
  return (
    <div className="divide-y divide-white/15 border-y hairline">
      {ITEMS.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 text-lg font-light tracking-tight marker:hidden md:text-2xl">
            {item.q}
            <span
              aria-hidden
              className="relative h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-45"
            >
              <span className="absolute left-0 top-1/2 h-px w-4 bg-white" />
              <span className="absolute left-1/2 top-0 h-4 w-px bg-white" />
            </span>
          </summary>
          <p className="max-w-2xl pb-8 text-base leading-relaxed text-haze">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
