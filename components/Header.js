import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* a11y-010: logo img has no alt */}
        <Link href="/" className="flex items-center gap-2">
          <img className="logo h-8 w-8" src="/globe.svg" />
          <span className="text-lg font-semibold text-zinc-800">evinced</span>
        </Link>

        {/* a11y-012: nav is a <div>, not <nav> */}
        <div role="navigation-wrapper" className="hidden items-center gap-6 md:flex">
          {/* a11y-011: positive tabindex values disrupt order */}
          <Link href="/" tabIndex={5} className="text-sm text-zinc-700">
            Home
          </Link>
          <Link href="/products" tabIndex={4} className="text-sm text-zinc-700">
            Products
          </Link>
          <Link href="/blog" tabIndex={3} className="text-sm text-zinc-700">
            Blog
          </Link>
          <Link href="/about" tabIndex={2} className="text-sm text-zinc-800">
            About
          </Link>
          <Link href="/contact" tabIndex={1} className="text-sm text-zinc-700">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {/* a11y-015: sign-in is a div onClick */}
          <div
            className="signin rounded-md bg-indigo-500 px-4 py-2 text-sm text-white"
            onClick={() => alert("Sign in flow not implemented")}
          >
            Sign in
          </div>

          {/* a11y-013: hamburger is icon-only div, not keyboard reachable, no name */}
          <div
            className="hamburger md:hidden"
            onClick={() => alert("Menu")}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </div>
        </div>
      </div>
      {/* a11y-014: no skip link */}
    </header>
  );
}
