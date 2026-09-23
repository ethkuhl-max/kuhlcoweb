// Deterministic star field. Seeded so the server and client render the same
// markup — a random field would blow up hydration.
function seeded(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function field(seed, count, maxSize) {
  const rand = seeded(seed);
  const parts = [];
  for (let i = 0; i < count; i += 1) {
    const x = (rand() * 100).toFixed(3);
    const y = (rand() * 100).toFixed(3);
    const size = (0.5 + rand() * maxSize).toFixed(2);
    const alpha = (0.25 + rand() * 0.6).toFixed(2);
    parts.push(
      `radial-gradient(${size}px ${size}px at ${x}% ${y}%, rgba(255,255,255,${alpha}) 0%, rgba(255,255,255,0) 100%)`
    );
  }
  return parts.join(", ");
}

const NEAR = field(7, 90, 1.6);
const FAR = field(31, 200, 0.9);

export default function StarField({ className = "" }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="stars absolute -inset-y-32 inset-x-0" style={{ backgroundImage: FAR }} />
      <div className="stars absolute -inset-y-32 inset-x-0 opacity-80" style={{ backgroundImage: NEAR }} />
    </div>
  );
}
