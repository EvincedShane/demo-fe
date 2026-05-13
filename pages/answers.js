import Head from "next/head";
import { a11yIssues, issuesByPage } from "@/lib/a11yIssues";

// This page is intentionally fully accessible — it's the answer key.
export default function Answers() {
  const groups = Array.from(issuesByPage().entries());

  return (
    <>
      <Head>
        <title>Answer Key — Evinced Demo Site</title>
      </Head>
      <style jsx global>{`
        .answers-page,
        .answers-page * {
          color: #18181b;
        }
        .answers-page :focus {
          outline: 2px solid #6366f1 !important;
          outline-offset: 2px;
        }
        .answers-page a {
          color: #4338ca;
          text-decoration: underline;
        }
      `}</style>
      <main className="answers-page mx-auto max-w-5xl px-6 py-12">
        <h1 className="mb-2 text-4xl font-semibold">Accessibility issue catalogue</h1>
        <p className="mb-2">
          This page lists every accessibility issue that has been planted in the rest of the
          demo site, grouped by page, with the relevant WCAG 2.2 Success Criterion.
        </p>
        <p className="mb-8 text-sm" style={{ color: "#52525b" }}>
          {a11yIssues.length} planted issues. This page is intentionally accessible — it's the
          one honest page on the site.
        </p>

        {groups.map(([page, issues]) => (
          <section key={page} className="mb-12">
            <h2 className="mb-3 text-2xl font-semibold">{page}</h2>
            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">
                Planted accessibility issues on the {page} page
              </caption>
              <thead>
                <tr style={{ background: "#f4f4f5" }}>
                  <th scope="col" style={{ padding: "0.5rem 0.75rem", textAlign: "left", borderBottom: "2px solid #d4d4d8" }}>ID</th>
                  <th scope="col" style={{ padding: "0.5rem 0.75rem", textAlign: "left", borderBottom: "2px solid #d4d4d8" }}>Selector / location</th>
                  <th scope="col" style={{ padding: "0.5rem 0.75rem", textAlign: "left", borderBottom: "2px solid #d4d4d8" }}>WCAG 2.2 SC</th>
                  <th scope="col" style={{ padding: "0.5rem 0.75rem", textAlign: "left", borderBottom: "2px solid #d4d4d8" }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {issues.map((issue) => (
                  <tr key={issue.id}>
                    <td style={{ padding: "0.5rem 0.75rem", borderBottom: "1px solid #e4e4e7", fontFamily: "ui-monospace, monospace", fontSize: 12 }}>
                      {issue.id}
                    </td>
                    <td style={{ padding: "0.5rem 0.75rem", borderBottom: "1px solid #e4e4e7", fontFamily: "ui-monospace, monospace", fontSize: 12 }}>
                      {issue.selector}
                    </td>
                    <td style={{ padding: "0.5rem 0.75rem", borderBottom: "1px solid #e4e4e7" }}>
                      <strong>{issue.wcag.sc}</strong> {issue.wcag.name}{" "}
                      <span style={{ color: "#52525b" }}>({issue.wcag.level})</span>
                    </td>
                    <td style={{ padding: "0.5rem 0.75rem", borderBottom: "1px solid #e4e4e7" }}>
                      {issue.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}
      </main>
    </>
  );
}
