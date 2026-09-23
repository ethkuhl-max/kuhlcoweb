const COLUMNS = [
  {
    heading: "Site",
    links: [
      { href: "#work", label: "Work" },
      { href: "#approach", label: "Approach" },
      { href: "#about", label: "About" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    heading: "Elsewhere",
    links: [
      { href: "https://github.com/ethkuhl-max", label: "GitHub" },
      { href: "https://www.linkedin.com", label: "LinkedIn" },
      { href: "mailto:hello@kuhlman.co", label: "Email" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t hairline bg-ink">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1fr_auto_auto] md:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em]">Kuhlman</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-haze">
            Product, engineering, and the systems in between.
          </p>
        </div>
        {COLUMNS.map((column) => (
          <nav key={column.heading}>
            <p className="label">{column.heading}</p>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="shell flex flex-col gap-3 border-t hairline py-7 text-label uppercase tracking-label text-white/45 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} Kuhlman</p>
        <p>Made in Ohio</p>
      </div>
    </footer>
  );
}
