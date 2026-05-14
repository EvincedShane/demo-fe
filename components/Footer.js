import { useState } from "react";

export default function Footer() {
  const [lang, setLang] = useState("English");
  const [langOpen, setLangOpen] = useState(false);

  return (
    <footer className="mt-24 border-t border-zinc-200 bg-zinc-50 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-4">
        <div>
          <div className="mb-2 text-lg font-semibold text-zinc-800">evinced</div>
          <p className="text-sm">Automated accessibility testing for the modern web.</p>
        </div>

        <div>
          <div className="mb-2 font-semibold text-zinc-700">Company</div>
          <ul className="space-y-1 text-sm">
            <li><a href="/about">About</a></li>
            <li>
              {/* a11y-021: external link, target=_blank, no rel=noopener, no warning */}
              <a href="https://example.com/careers" target="_blank">Careers</a>
            </li>
            <li>
              {/* a11y-020: "click here" link text */}
              For our privacy policy <a href="/privacy" className="click-here">click here</a>.
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-2 font-semibold text-zinc-700">Subscribe</div>
          {/* a11y-024: placeholder-as-label */}
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded border border-zinc-300 px-3 py-2 text-sm text-zinc-700"
            />
            <button
              type="submit"
              className="rounded bg-indigo-500 px-3 py-2 text-sm text-white"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div>
          <div className="mb-2 font-semibold text-zinc-700">Follow</div>
          {/* a11y-022: icon-only buttons, no aria-label */}
          <div className="social-icons flex gap-2">
            <button className="rounded p-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 5.8a8.5 8.5 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.3 8.3 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.7A11.7 11.7 0 0 1 3 4.7a4.1 4.1 0 0 0 1.3 5.5 4.1 4.1 0 0 1-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.9 2.9A8.3 8.3 0 0 1 2 18.4a11.7 11.7 0 0 0 6.3 1.9c7.5 0 11.7-6.2 11.7-11.7v-.5A8.4 8.4 0 0 0 22 5.8z" />
              </svg>
            </button>
            <button className="rounded p-1" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9z" />
              </svg>
            </button>
            <button className="rounded p-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2 0 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.4-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-start gap-3 px-6 text-xs md:flex-row md:items-center md:justify-between">
        <div>© 2026 Evinced demo. All wrongs reserved.</div>
        {/* a11y-023: language switcher doesn't change document lang */}
        <div className="lang-switcher relative">
          <span
            onClick={() => setLangOpen(!langOpen)}
            className="cursor-pointer rounded border border-zinc-300 px-2 py-1"
          >
            {lang} ▾
          </span>
          {langOpen && (
            <div className="absolute right-0 top-full mt-1 rounded border border-zinc-200 bg-white">
              {["English", "Español", "日本語", "Deutsch"].map((l) => (
                <div
                  key={l}
                  className="cursor-pointer px-3 py-1 hover:bg-zinc-100"
                  onClick={() => { setLang(l); setLangOpen(false); }}
                >
                  {l}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
