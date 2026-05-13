import { useEffect, useRef, useState } from "react";

const team = [
  { name: "Anna Mendoza", role: "CEO", seed: "anna" },
  { name: "Devansh Rao", role: "CTO", seed: "devansh" },
  { name: "Priya Iyer", role: "VP Engineering", seed: "priya" },
  { name: "Joaquin Park", role: "VP Product", seed: "joaquin" },
  { name: "Sara Cohen", role: "Head of Design", seed: "sara" },
  { name: "Marcus Levin", role: "Head of Sales", seed: "marcus" },
];

const milestones = [
  ["2021", "Founded", "Evinced incorporated in Tel Aviv."],
  ["2022", "Series A", "Raised $17M led by NorthCloud Ventures."],
  ["2023", "First 100 customers", "Onboarded our hundredth enterprise customer."],
  ["2024", "Series B", "Raised $38M to expand into the EMEA market."],
  ["2025", "Evinced Lens GA", "Launched our browser DevTools product."],
  ["2026", "Series C", "Raised $80M to build the accessibility cloud."],
];

function Counter({ target, suffix = "" }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    // a11y-406: animates regardless of prefers-reduced-motion
    let start = 0;
    const step = Math.max(1, Math.round(target / 60));
    const id = setInterval(() => {
      start += step;
      if (start >= target) {
        setN(target);
        clearInterval(id);
      } else {
        setN(start);
      }
    }, 30);
    return () => clearInterval(id);
  }, [target]);
  return <span className="stat-counter">{n.toLocaleString()}{suffix}</span>;
}

export default function About() {
  const videoRef = useRef(null);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* a11y-401..402: autoplay, no controls, no captions */}
      <video
        ref={videoRef}
        className="hero-video mb-12 w-full rounded-lg"
        autoPlay
        loop
        muted={false}
        src="/about-hero.mp4"
        poster="https://picsum.photos/seed/about-hero/1200/400"
      />

      {/* a11y-400: two <h1> on this page */}
      <section className="mission mb-16">
        <h1 className="mb-4 text-4xl font-semibold text-zinc-900">Our Mission</h1>
        <p className="text-lg">
          We believe the web should be usable by everyone. We started Evinced because the
          tooling for accessibility hadn't kept up with the tooling for everything else.
        </p>
        {/* a11y-405: tooltip on hover only */}
        <div className="mt-3 inline-block">
          <span className="tooltip relative cursor-help underline decoration-dotted text-zinc-700">
            Read our founding story
            <span
              className="invisible absolute left-0 top-full mt-2 w-72 rounded bg-zinc-900 px-3 py-2 text-xs text-white hover:visible group-hover:visible"
              style={{ visibility: undefined }}
            >
              Founded in 2021 after a discouraging accessibility audit at a previous company.
            </span>
          </span>
        </div>
      </section>

      <section className="mb-16 grid grid-cols-3 gap-6 text-center">
        <div>
          <div className="text-4xl font-semibold text-indigo-600">
            <Counter target={847} />
          </div>
          <div className="text-sm uppercase tracking-wider">Enterprise customers</div>
        </div>
        <div>
          <div className="text-4xl font-semibold text-indigo-600">
            <Counter target={4200000} />
          </div>
          <div className="text-sm uppercase tracking-wider">Scans per month</div>
        </div>
        <div>
          <div className="text-4xl font-semibold text-indigo-600">
            <Counter target={120} suffix="+" />
          </div>
          <div className="text-sm uppercase tracking-wider">Employees worldwide</div>
        </div>
      </section>

      {/* a11y-400 (cont): second <h1> */}
      <section className="team mb-16">
        <h1 className="mb-6 text-4xl font-semibold text-zinc-900">Our Team</h1>
        <div className="team-grid grid grid-cols-2 gap-6 md:grid-cols-3">
          {team.map((p) => (
            <div key={p.name} className="rounded-lg border border-zinc-200 p-4">
              {/* a11y-403: no alt on team photos */}
              <img
                src={`https://picsum.photos/seed/${p.seed}/200/200`}
                className="mb-3 h-32 w-full rounded object-cover"
              />
              <div className="text-base font-semibold text-zinc-800">{p.name}</div>
              <div className="text-sm">{p.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* a11y-404: real table, no <th>, no <caption>, no scope */}
      <section className="mb-16">
        <div className="mb-4 text-2xl font-semibold text-zinc-900">Milestones</div>
        <table className="timeline w-full text-sm">
          <tbody>
            {milestones.map(([year, title, body]) => (
              <tr key={year} className="border-b border-zinc-200">
                <td style={{ padding: "0.75rem 1rem", width: 80, color: "#6366f1", fontWeight: 600 }}>{year}</td>
                <td style={{ padding: "0.75rem 1rem", width: 200, color: "#27272a", fontWeight: 600 }}>{title}</td>
                <td style={{ padding: "0.75rem 1rem" }}>{body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
