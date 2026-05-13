import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* a11y-108: same title across every page */}
        <title>Evinced</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        role="note"
        style={{
          background: "#b45309",
          color: "#ffffff",
          textAlign: "center",
          padding: "6px 12px",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.04em",
        }}
      >
        THIS IS A DEMO SITE, IT DOES NOT HAVE REAL DATA, BUT IT HAS REAL ACCESSIBILITY ISSUES
      </div>
      <Header />
      {children}
      <Footer />
    </>
  );
}
