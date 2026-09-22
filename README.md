# kuhlman.co

Personal site for Ethan Kuhlman. Next.js 14 (App Router) + Tailwind CSS.

Design language is modeled on starlink.com: pure black, full-viewport
scroll-snapped panels, full-bleed backdrops with a bottom scrim, oversized
light-weight display type, uppercase micro-labels, and white pill CTAs.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Deploy (Cloudflare Pages)

The site is a static export (`output: "export"` in `next.config.mjs`), so
Pages serves it as plain files with no server runtime.

Connect the repo in the Cloudflare dashboard and set:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | 20 or newer (`NODE_VERSION` env var) |

`public/_headers` sets security headers and long-lived caching for hashed
`/_next/static` assets; Pages reads it from the build output automatically.

Point `kuhlman.co` at the project under **Custom domains** once the first
deploy is green.

## Structure

| Path | Purpose |
| --- | --- |
| `app/page.js` | All page content — copy lives in the arrays at the top |
| `app/globals.css` | Design tokens as component classes (`.shell`, `.label`, `.btn-*`) |
| `tailwind.config.js` | Type scale (`text-display`, `text-headline`, `text-label`) and palette |
| `components/Panel.js` | Full-viewport section wrapper; `BACKDROPS` holds the gradient art |
| `components/StarField.js` | Seeded CSS star field (deterministic, hydration-safe) |

## Replacing the placeholder art

`components/Panel.js` uses CSS gradients as stand-ins for photography. To use
real images, swap the backdrop `<div>` for `next/image` with `fill` — the
scrim, layout, and type positioning do not need to change.

## Content to replace

The copy is plausible placeholder, not fact. Before launch, update:

- `WORK`, `APPROACH` and the about copy in `app/page.js`
- `STATS` in `components/Stats.js` (the numbers are invented)
- `ITEMS` in `components/Faq.js`
- The `hello@kuhlman.co` address and the LinkedIn URL in `components/Footer.js`
