import Nav from "@/components/Nav";
import Panel from "@/components/Panel";
import Stats from "@/components/Stats";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

const WORK = [
  {
    eyebrow: "Platform",
    title: "Orbit",
    blurb:
      "A scheduling and dispatch platform that replaced four spreadsheets and a whiteboard. Cut planning time from a full day to under an hour.",
  },
  {
    eyebrow: "Data",
    title: "Signal",
    blurb:
      "Ingest and reconciliation for a finance team drowning in exports. Every number now traces back to the row it came from.",
  },
  {
    eyebrow: "Interface",
    title: "Atlas",
    blurb:
      "An internal console used daily by operations. Built to be fast, boring, and learnable in an afternoon.",
  },
];

const APPROACH = [
  {
    step: "01",
    title: "Understand the system",
    body: "Before anything gets built, the constraints get written down: who does what today, what breaks, and what the deadline is really attached to.",
  },
  {
    step: "02",
    title: "Ship the thin slice",
    body: "The smallest version that touches every layer, in production, early. It surfaces the wrong assumptions while they are still cheap.",
  },
  {
    step: "03",
    title: "Harden and hand off",
    body: "Tests, docs, and a runbook. The work should keep running long after the engagement ends, without a phone call.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main id="top" className="snap-root">
        {/* HERO */}
        <Panel backdrop="orbit" className="!items-end">
          <div className="max-w-4xl">
            <p className="label">Kuhlman.co</p>
            <h1 className="mt-6 text-display font-light">
              Building things
              <br />
              that work.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-haze md:text-lg">
              Product and engineering for teams whose problems outgrew the tools they
              started with. Fewer moving parts, shipped sooner.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn-solid">
                Start a project
              </a>
              <a href="#work" className="btn-ghost">
                See the work
              </a>
            </div>
          </div>
        </Panel>

        <Stats />

        {/* WORK */}
        <Panel id="work" backdrop="deep" align="center">
          <div>
            <p className="label">Selected work</p>
            <h2 className="mt-6 max-w-3xl text-headline font-light">
              Systems that earn their keep.
            </h2>
            <div className="mt-16 grid gap-px border hairline bg-white/15 md:grid-cols-3">
              {WORK.map((item) => (
                <article key={item.title} className="bg-black p-8 md:p-10">
                  <p className="label">{item.eyebrow}</p>
                  <h3 className="mt-5 text-2xl font-light tracking-tight">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-haze">{item.blurb}</p>
                </article>
              ))}
            </div>
          </div>
        </Panel>

        {/* APPROACH */}
        <Panel id="approach" backdrop="dawn" align="center">
          <div>
            <p className="label">Approach</p>
            <h2 className="mt-6 max-w-3xl text-headline font-light">
              Three steps, no surprises.
            </h2>
            <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-16">
              {APPROACH.map((item) => (
                <li key={item.step} className="border-t hairline pt-6">
                  <p className="label">{item.step}</p>
                  <h3 className="mt-5 text-xl font-light tracking-tight md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-haze">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Panel>

        {/* ABOUT */}
        <Panel id="about" backdrop="orbit" align="center">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="label">About</p>
              <h2 className="mt-6 text-headline font-light">
                Ethan Kuhlman.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-haze md:pt-16">
              <p>
                I build software for teams that have outgrown the spreadsheet and are not
                ready for the enterprise suite. Most of that work lives in the unglamorous
                middle: data models, integrations, and the internal tools nobody puts on a
                landing page.
              </p>
              <p>
                The through-line is the same everywhere. Understand the system as it
                actually runs, remove the parts that do not need to exist, and leave behind
                something the team can maintain without me.
              </p>
            </div>
          </div>
        </Panel>

        {/* FAQ */}
        <section id="faq" className="snap-panel border-t hairline bg-ink py-24 md:py-32">
          <div className="shell">
            <p className="label">Questions</p>
            <h2 className="mb-14 mt-6 max-w-2xl text-headline font-light">
              The usual ones.
            </h2>
            <Faq />
          </div>
        </section>

        {/* CONTACT */}
        <Panel id="contact" backdrop="deep" align="center">
          <div className="max-w-3xl">
            <p className="label">Contact</p>
            <h2 className="mt-6 text-display font-light">
              Let&apos;s talk.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-haze md:text-lg">
              A paragraph about the problem and the date it needs to be solved by is
              enough to start.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="mailto:hello@kuhlman.co" className="btn-solid">
                hello@kuhlman.co
              </a>
              <a href="https://github.com/ethkuhl-max" className="btn-ghost">
                GitHub
              </a>
            </div>
          </div>
        </Panel>
      </main>

      <Footer />
    </>
  );
}
