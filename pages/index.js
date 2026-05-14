import Carousel from "@/components/Carousel";

const features = [
  { title: "Automated scanning", body: "Run accessibility checks across your entire app in CI." },
  { title: "Visual regression", body: "Catch contrast and focus issues before they ship." },
  { title: "Component-level fixes", body: "Granular suggestions for your design system." },
];

const testimonials = [
  { quote: "Evinced cut our backlog of issues in half.", author: "Jamie", role: "Head of Engineering, Acme" },
  { quote: "We went from 200 violations to 12 in two weeks.", author: "Priya", role: "Frontend Lead, Globex" },
  { quote: "Setup was effortless and our QA team loves it.", author: "Marcus", role: "VP Product, Initech" },
];

const logos = ["NorthCloud", "BlueRiver", "TerraDyne", "AltaPay", "Lumenly", "Quanta"];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero bg-gradient-to-b from-indigo-50 to-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold leading-tight text-zinc-900 md:text-5xl">
              Ship an accessible web — without the audit overhead.
            </h1>
            <p className="mt-4 text-lg">
              Evinced is the developer-first platform for finding and fixing accessibility
              issues across your codebase, automatically.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/products" className="rounded-md bg-indigo-500 px-5 py-3 text-sm text-white">
                Try the demo
              </a>
              <a href="/contact" className="rounded-md border border-zinc-300 px-5 py-3 text-sm text-zinc-700">
                Talk to sales
              </a>
            </div>
          </div>
          {/* a11y-100: redundant alt */}
          <img
            src="https://picsum.photos/seed/evinced-hero/640/400"
            alt="Image of the Evinced dashboard"
            className="rounded-lg shadow"
          />
        </div>
      </section>

      {/* LOGO WALL */}
      <section className="logo-wall mx-auto max-w-6xl px-6 py-12">
        <div className="mb-6 text-center text-sm uppercase tracking-wider">Trusted by 500+ teams</div>
        <div className="grid grid-cols-2 items-center justify-items-center gap-6 md:grid-cols-6">
          {logos.map((l, idx) => (
            // a11y-102: client logo imgs without alt
            <img
              key={l}
              src={`https://picsum.photos/seed/logo-${idx}/120/40`}
              className="opacity-70 grayscale"
              width={120}
              height={40}
            />
          ))}
        </div>
      </section>

      {/* FEATURES — a11y-101: heading levels skip from h1 to h3 */}
      <section className="features mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <div className="text-xs uppercase tracking-wider text-indigo-500">Features</div>
          <div className="mt-2 text-3xl font-semibold text-zinc-900">Built for engineering teams</div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-lg border border-zinc-200 p-6">
              <h3 className="mb-2 text-lg font-semibold text-zinc-800">{f.title}</h3>
              <p className="text-sm">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 text-center text-3xl font-semibold text-zinc-900">
          What our customers say
        </div>
        <Carousel slides={testimonials} />
      </section>

      {/* CTA */}
      <section className="cta bg-indigo-500 px-6 py-16 text-center text-white">
        <div className="text-3xl font-semibold">Ready to ship accessibly?</div>
        <p className="mt-3 text-white">Start a free 14-day trial — no credit card required.</p>
        {/* a11y-106: "Click here" link */}
        <a href="/contact" className="mt-6 inline-block rounded bg-white px-6 py-3 text-sm font-semibold text-indigo-600">
          Click here to learn more
        </a>
      </section>

      {/* a11y-107: autoplay audio with no controls */}
      <section className="music sr-only">
        <audio autoPlay loop>
          <source src="/silence.mp3" type="audio/mpeg" />
        </audio>
      </section>
    </main>
  );
}
