const STATS = [
  { value: "12+", label: "Years shipping" },
  { value: "40+", label: "Projects delivered" },
  { value: "6", label: "Industries" },
  { value: "100%", label: "Referral rate" },
];

export default function Stats() {
  return (
    <div className="border-y hairline">
      <dl className="shell grid grid-cols-2 divide-white/15 md:grid-cols-4 md:divide-x">
        {STATS.map((stat) => (
          <div key={stat.label} className="px-0 py-10 md:px-10 md:first:pl-0 md:last:pr-0">
            <dt className="label">{stat.label}</dt>
            <dd className="mt-3 text-4xl font-light tracking-tight md:text-5xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
