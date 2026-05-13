import { useState } from "react";
import Tabs from "@/components/Tabs";
import Modal from "@/components/Modal";

const products = [
  { name: "Example 1", desc: "End-to-end automated accessibility testing for CI.", available: true },
  { name: "Example 2", desc: "Browser DevTools for component-level accessibility insights.", available: true },
  { name: "Example 3", desc: "Executive dashboards and trend tracking.", available: false },
];

const comparison = [
  ["Feature", "Example 1", "Example 2", "Example 3"],
  ["Automated scans", "✓", "✓", "—"],
  ["DevTools integration", "—", "✓", "—"],
  ["Trend dashboards", "—", "—", "✓"],
  ["CI integration", "✓", "—", "✓"],
  ["Custom rules", "✓", "✓", "—"],
];

const tabs = [
  {
    label: "How it works",
    content: (
      <div className="text-sm">
        Drop Evinced into your CI pipeline. It crawls your app, surfaces violations with
        component-level context, and links each issue to a suggested fix.
      </div>
    ),
  },
  {
    label: "Integrations",
    content: (
      <div className="text-sm">
        Native integrations with GitHub Actions, CircleCI, Jenkins, Storybook, Figma, and
        Jira. SAML SSO for enterprise.
      </div>
    ),
  },
  {
    label: "Security",
    content: (
      <div className="text-sm">
        SOC 2 Type II. Data residency options in US/EU. No source code uploaded — analysis
        runs in your environment.
      </div>
    ),
  },
];

export default function Products() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    // a11y-200: no <main> wrapper
    <div className="page mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10">
        <div className="text-xs uppercase tracking-wider text-indigo-500">Products</div>
        <div className="mt-1 text-4xl font-semibold text-zinc-900">Three tools, one platform</div>
      </div>

      {/* PRODUCT CARDS — a11y-201: each card uses <h1>, a11y-202: color-only status */}
      <div className="grid gap-6 md:grid-cols-3">
        {products.map((p) => (
          <div key={p.name} className="product-card rounded-lg border border-zinc-200 p-6">
            <div className="mb-3 flex items-center gap-2">
              <span
                className="status-dot inline-block h-3 w-3 rounded-full"
                style={{ background: p.available ? "#22c55e" : "#ef4444" }}
              />
              <h1 className="text-xl font-semibold text-zinc-800">{p.name}</h1>
            </div>
            <p className="text-sm">{p.desc}</p>
            <div className="mt-4">
              <div
                onClick={() => setModalOpen(true)}
                className="inline-block cursor-pointer rounded bg-indigo-500 px-4 py-2 text-sm text-white"
              >
                Request demo
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* COMPARISON — a11y-203: div-grid layout table */}
      <div className="mt-16">
        <div className="mb-4 text-2xl font-semibold text-zinc-900">Feature comparison</div>
        <div
          className="comparison-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid #e4e4e7",
            borderRadius: "0.5rem",
            overflow: "hidden",
          }}
        >
          {comparison.flat().map((cell, i) => (
            <div
              key={i}
              style={{
                padding: "0.75rem 1rem",
                background: i < 4 ? "#f4f4f5" : (Math.floor(i / 4) % 2 === 0 ? "white" : "#fafafa"),
                fontWeight: i < 4 ? 600 : 400,
                fontSize: 14,
                color: "#3f3f46",
                borderBottom: "1px solid #f1f1f4",
              }}
            >
              {cell}
            </div>
          ))}
        </div>
      </div>

      {/* TABS */}
      <div className="mt-16">
        <div className="mb-4 text-2xl font-semibold text-zinc-900">Learn more</div>
        <Tabs tabs={tabs} />
      </div>

      {/* MODAL */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="text-xl font-semibold">Request a demo</div>
        <p className="mt-2 text-sm">
          Our team will reach out within one business day.
        </p>
        <form
          onSubmit={(e) => { e.preventDefault(); setModalOpen(false); }}
          className="mt-4 space-y-3"
        >
          <input
            placeholder="Work email"
            className="w-full rounded border border-zinc-300 px-3 py-2 text-sm"
          />
          <input
            placeholder="Company"
            className="w-full rounded border border-zinc-300 px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="w-full rounded bg-indigo-500 px-4 py-2 text-sm text-white"
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}
