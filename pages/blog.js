import { useState } from "react";
import Accordion from "@/components/Accordion";

const articles = [
  { id: 1, title: "Why accessibility belongs in CI", category: "Engineering", date: "Apr 28, 2026", excerpt: "Catching accessibility issues at build time turns audits into automated tests." },
  { id: 2, title: "Designing focus indicators that don't get removed", category: "Design", date: "Apr 19, 2026", excerpt: "Why outline:none is the most expensive line of CSS your team writes." },
  { id: 3, title: "The state of axe in 2026", category: "Engineering", date: "Apr 11, 2026", excerpt: "We benchmarked Evinced against the leading rule engines." },
  { id: 4, title: "Inside the Evinced design system update", category: "Design", date: "Apr 02, 2026", excerpt: "How we rewrote our components to default-accessible patterns." },
  { id: 5, title: "Accessibility KPIs that actually matter", category: "Product", date: "Mar 25, 2026", excerpt: "Three metrics that move the needle on a11y maturity." },
];

const categories = ["All", "Engineering", "Design", "Product"];

const faq = [
  { q: "Does Evinced replace manual testing?", a: "No — it surfaces the issues that automation can catch (~30-40% of WCAG), so manual testing can focus on the rest." },
  { q: "Is there a free tier?", a: "Yes, up to 1,000 page scans per month." },
  { q: "Which frameworks are supported?", a: "React, Vue, Angular, Svelte, Solid, and any framework that produces standard DOM." },
];

export default function Blog() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? articles : articles.filter((a) => a.category === filter);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* a11y-300: no <h1> — biggest text is a styled <div> */}
      <div className="mb-2 text-4xl font-semibold text-zinc-900">From the blog</div>
      <div className="mb-8 text-zinc-500">Field notes from teams shipping accessible products.</div>

      {/* a11y-301..302: div chips, not keyboard operable, no live region for changes */}
      <div className="filter-chips mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <div
            key={c}
            onClick={() => setFilter(c)}
            className={`cursor-pointer rounded-full px-4 py-1 text-sm ${
              filter === c ? "bg-indigo-500 text-white" : "bg-zinc-100 text-zinc-700"
            }`}
          >
            {c}
          </div>
        ))}
      </div>

      {/* a11y-303: layout table for article list */}
      <table className="layout-table w-full">
        <tbody>
          {filtered.map((a) => (
            <tr key={a.id} className="article-row">
              <td style={{ width: 140, padding: "1rem 1rem 1rem 0", verticalAlign: "top" }}>
                {/* a11y-306: no alt */}
                <img
                  src={`https://picsum.photos/seed/article-${a.id}/120/80`}
                  className="article-img rounded"
                  width={120}
                  height={80}
                />
              </td>
              <td style={{ padding: "1rem 0", borderBottom: "1px solid #f1f1f4" }}>
                <div className="text-xs uppercase tracking-wider text-indigo-500">
                  {a.category} · {a.date}
                </div>
                <div className="mt-1 text-lg font-semibold text-zinc-800">{a.title}</div>
                <div className="mt-1 text-sm">{a.excerpt}</div>
                {/* a11y-304: every "Read more" link has identical text */}
                <a href={`/blog/${a.id}`} className="mt-2 inline-block text-sm text-indigo-600">
                  Read more
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* FAQ */}
      <div className="mt-16">
        <div className="mb-4 text-2xl font-semibold text-zinc-900">Frequently asked</div>
        <Accordion items={faq} />
      </div>
    </main>
  );
}
