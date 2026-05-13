// Single source of truth for the planted a11y issues across the site.
// Used by /answers to render the answer key.

export const a11yIssues = [
  // ---------- GLOBAL (styles/globals.css) ----------
  {
    id: "a11y-001",
    page: "Global",
    selector: "*:focus (styles/globals.css)",
    wcag: { sc: "2.4.7", name: "Focus Visible", level: "AA" },
    description: "outline:none !important is applied to every element — no visible focus indicator anywhere on the site.",
  },
  {
    id: "a11y-002",
    page: "Global",
    selector: "a",
    wcag: { sc: "1.4.1", name: "Use of Color", level: "A" },
    description: "Links are the same color as body text and have no underline by default — distinguishable from text by color alone (and even that fails since they share the color).",
  },
  {
    id: "a11y-003",
    page: "Global",
    selector: "body",
    wcag: { sc: "1.4.3", name: "Contrast (Minimum)", level: "AA" },
    description: "Body text color #999 on #fff (~2.85:1) fails AA 4.5:1 minimum.",
  },

  // ---------- HEADER ----------
  {
    id: "a11y-010",
    page: "All pages (Header)",
    selector: "header > div > img.logo",
    wcag: { sc: "1.1.1", name: "Non-text Content", level: "A" },
    description: "Logo <img> has no alt attribute.",
  },
  {
    id: "a11y-011",
    page: "All pages (Header)",
    selector: "header nav a[tabindex]",
    wcag: { sc: "2.4.3", name: "Focus Order", level: "A" },
    description: "Nav links use positive tabindex values (1,2,3,4,5) — disrupts natural tab order.",
  },
  {
    id: "a11y-012",
    page: "All pages (Header)",
    selector: "header div[role=navigation-wrapper]",
    wcag: { sc: "1.3.1", name: "Info and Relationships", level: "A" },
    description: "Primary navigation uses a <div> rather than <nav> — landmark missing.",
  },
  {
    id: "a11y-013",
    page: "All pages (Header)",
    selector: "header .hamburger",
    wcag: { sc: "4.1.2", name: "Name, Role, Value", level: "A" },
    description: "Mobile hamburger menu is an icon-only <div onClick> — no accessible name, no button role, not keyboard reachable.",
  },
  {
    id: "a11y-014",
    page: "All pages (Header)",
    selector: "(missing)",
    wcag: { sc: "2.4.1", name: "Bypass Blocks", level: "A" },
    description: "No skip-to-content link.",
  },
  {
    id: "a11y-015",
    page: "All pages (Header)",
    selector: "header .signin",
    wcag: { sc: "4.1.2", name: "Name, Role, Value", level: "A" },
    description: "Sign-in control is a <div onClick> styled like a button.",
  },

  // ---------- FOOTER ----------
  {
    id: "a11y-020",
    page: "All pages (Footer)",
    selector: "footer a.click-here",
    wcag: { sc: "2.4.4", name: "Link Purpose (In Context)", level: "A" },
    description: 'Privacy policy link text is "click here" — purpose unclear out of context.',
  },
  {
    id: "a11y-021",
    page: "All pages (Footer)",
    selector: 'footer a[target="_blank"]',
    wcag: { sc: "3.2.2", name: "On Input", level: "A" },
    description: "External links open in a new window with no rel=noopener and no advance warning to the user.",
  },
  {
    id: "a11y-022",
    page: "All pages (Footer)",
    selector: "footer .social-icons button",
    wcag: { sc: "4.1.2", name: "Name, Role, Value", level: "A" },
    description: "Social media icon buttons render an SVG only — no aria-label, no text alternative.",
  },
  {
    id: "a11y-023",
    page: "All pages (Footer)",
    selector: "footer .lang-switcher",
    wcag: { sc: "3.1.2", name: "Language of Parts", level: "AA" },
    description: "Footer 'language' switcher changes label text only; the document lang attribute never updates.",
  },
  {
    id: "a11y-024",
    page: "All pages (Footer)",
    selector: "footer form input[type=email]",
    wcag: { sc: "3.3.2", name: "Labels or Instructions", level: "A" },
    description: "Email subscribe input uses placeholder as the only label.",
  },

  // ---------- HOME (/) ----------
  {
    id: "a11y-100",
    page: "Home",
    selector: "main > section.hero img",
    wcag: { sc: "1.1.1", name: "Non-text Content", level: "A" },
    description: 'Hero screenshot has redundant alt "Image of the Evinced dashboard".',
  },
  {
    id: "a11y-101",
    page: "Home",
    selector: "section.features h3",
    wcag: { sc: "1.3.1", name: "Info and Relationships", level: "A" },
    description: "Heading levels skip from h1 (hero) to h3 (features), no h2.",
  },
  {
    id: "a11y-102",
    page: "Home",
    selector: "section.logo-wall img",
    wcag: { sc: "1.1.1", name: "Non-text Content", level: "A" },
    description: 'Client logo wall uses <img> elements without alt or with alt="".',
  },
  {
    id: "a11y-103",
    page: "Home",
    selector: "section.testimonials .carousel",
    wcag: { sc: "2.2.2", name: "Pause, Stop, Hide", level: "A" },
    description: "Testimonial carousel autoplays with no pause/stop control.",
  },
  {
    id: "a11y-104",
    page: "Home",
    selector: "section.testimonials .carousel-controls button",
    wcag: { sc: "4.1.2", name: "Name, Role, Value", level: "A" },
    description: "Carousel prev/next buttons are icon-only with no accessible name.",
  },
  {
    id: "a11y-105",
    page: "Home",
    selector: "section.testimonials .carousel",
    wcag: { sc: "4.1.3", name: "Status Messages", level: "AA" },
    description: "Carousel slide changes are not announced to assistive tech (no live region).",
  },
  {
    id: "a11y-106",
    page: "Home",
    selector: "section.cta a",
    wcag: { sc: "2.4.4", name: "Link Purpose (In Context)", level: "A" },
    description: 'CTA link text is "Click here to learn more".',
  },
  {
    id: "a11y-107",
    page: "Home",
    selector: "section.music audio",
    wcag: { sc: "1.4.2", name: "Audio Control", level: "A" },
    description: "Background ambience audio autoplays with no built-in pause.",
  },
  {
    id: "a11y-108",
    page: "Home",
    selector: "title",
    wcag: { sc: "2.4.2", name: "Page Titled", level: "A" },
    description: 'Page <title> is just "Evinced" — same on every page.',
  },

  // ---------- PRODUCTS ----------
  {
    id: "a11y-200",
    page: "Products",
    selector: "div.page (no <main>)",
    wcag: { sc: "1.3.1", name: "Info and Relationships", level: "A" },
    description: "Products page has no <main> landmark.",
  },
  {
    id: "a11y-201",
    page: "Products",
    selector: ".product-card h1",
    wcag: { sc: "1.3.1", name: "Info and Relationships", level: "A" },
    description: "Each product card uses <h1> — multiple h1 elements on one page.",
  },
  {
    id: "a11y-202",
    page: "Products",
    selector: ".product-card .status-dot",
    wcag: { sc: "1.4.1", name: "Use of Color", level: "A" },
    description: 'Product availability is conveyed only by a colored dot (green=available, red=sold-out) — no text label.',
  },
  {
    id: "a11y-203",
    page: "Products",
    selector: ".comparison-grid",
    wcag: { sc: "1.3.1", name: "Info and Relationships", level: "A" },
    description: "Comparison table is a CSS grid of <div>s — no <table>, <th>, or row/column semantics.",
  },
  {
    id: "a11y-204",
    page: "Products",
    selector: ".tabs",
    wcag: { sc: "4.1.2", name: "Name, Role, Value", level: "A" },
    description: 'Custom tabs use <div> elements, no role="tab"/"tablist"/"tabpanel", no aria-selected, no aria-controls.',
  },
  {
    id: "a11y-205",
    page: "Products",
    selector: ".tabs",
    wcag: { sc: "2.1.1", name: "Keyboard", level: "A" },
    description: "Tabs are mouse-only — arrow keys do not switch, Tab does not focus tabs.",
  },
  {
    id: "a11y-206",
    page: "Products",
    selector: ".tabs .tab-panel",
    wcag: { sc: "1.3.1", name: "Info and Relationships", level: "A" },
    description: "All tab panels are present in DOM with content visible to screen readers but visually hidden via display:none on siblings — no proper hidden/aria-hidden coordination.",
  },
  {
    id: "a11y-207",
    page: "Products",
    selector: ".modal",
    wcag: { sc: "2.1.2", name: "No Keyboard Trap (inverse)", level: "A" },
    description: "Request Demo modal has no focus trap; Tab escapes back to page behind the modal.",
  },
  {
    id: "a11y-208",
    page: "Products",
    selector: ".modal",
    wcag: { sc: "2.1.1", name: "Keyboard", level: "A" },
    description: "Modal does not close on Escape key.",
  },
  {
    id: "a11y-209",
    page: "Products",
    selector: ".modal",
    wcag: { sc: "4.1.2", name: "Name, Role, Value", level: "A" },
    description: 'Modal is a <div> with no role="dialog", no aria-modal, no aria-labelledby.',
  },
  {
    id: "a11y-210",
    page: "Products",
    selector: ".modal .close",
    wcag: { sc: "2.5.5", name: "Target Size (Enhanced) / AA Minimum", level: "AAA" },
    description: "Modal close button is 16×16px — well below the recommended 24×24 minimum target size.",
  },
  {
    id: "a11y-211",
    page: "Products",
    selector: ".modal",
    wcag: { sc: "2.4.3", name: "Focus Order", level: "A" },
    description: "On modal close, focus does not return to the trigger button.",
  },

  // ---------- BLOG ----------
  {
    id: "a11y-300",
    page: "Blog",
    selector: "main (heading)",
    wcag: { sc: "2.4.6", name: "Headings and Labels", level: "AA" },
    description: "Blog page has no h1 — the visually-largest text is a <div> styled as a heading.",
  },
  {
    id: "a11y-301",
    page: "Blog",
    selector: ".filter-chips",
    wcag: { sc: "2.1.1", name: "Keyboard", level: "A" },
    description: "Filter chips are <div> elements with onClick handlers, not focusable, not keyboard operable.",
  },
  {
    id: "a11y-302",
    page: "Blog",
    selector: ".filter-chips",
    wcag: { sc: "4.1.3", name: "Status Messages", level: "AA" },
    description: "Selecting a filter chip changes the article list without announcing to assistive tech.",
  },
  {
    id: "a11y-303",
    page: "Blog",
    selector: "table.layout-table",
    wcag: { sc: "1.3.1", name: "Info and Relationships", level: "A" },
    description: "Blog article list is laid out in a <table> used for visual layout (no headers, no semantic meaning).",
  },
  {
    id: "a11y-304",
    page: "Blog",
    selector: ".article-row a",
    wcag: { sc: "2.4.4", name: "Link Purpose (In Context)", level: "A" },
    description: 'Every "Read more" link has the same text — destinations indistinguishable from link text alone.',
  },
  {
    id: "a11y-305",
    page: "Blog",
    selector: ".faq .accordion-header",
    wcag: { sc: "4.1.2", name: "Name, Role, Value", level: "A" },
    description: "FAQ accordion headers are <div onClick> with no button role and no aria-expanded.",
  },
  {
    id: "a11y-306",
    page: "Blog",
    selector: ".article-img",
    wcag: { sc: "1.1.1", name: "Non-text Content", level: "A" },
    description: "Article thumbnails use <img> with no alt attribute.",
  },

  // ---------- ABOUT ----------
  {
    id: "a11y-400",
    page: "About",
    selector: "h1",
    wcag: { sc: "1.3.1", name: "Info and Relationships", level: "A" },
    description: 'Two <h1> elements on the page ("Our Mission" and "Our Team").',
  },
  {
    id: "a11y-401",
    page: "About",
    selector: "video.hero-video",
    wcag: { sc: "1.4.2", name: "Audio Control", level: "A" },
    description: "Hero video autoplays with sound and has no controls.",
  },
  {
    id: "a11y-402",
    page: "About",
    selector: "video.hero-video",
    wcag: { sc: "1.2.2", name: "Captions (Prerecorded)", level: "A" },
    description: "Hero video has no captions / no <track> element.",
  },
  {
    id: "a11y-403",
    page: "About",
    selector: ".team-grid img",
    wcag: { sc: "1.1.1", name: "Non-text Content", level: "A" },
    description: "Team member photos have no alt text.",
  },
  {
    id: "a11y-404",
    page: "About",
    selector: "table.timeline",
    wcag: { sc: "1.3.1", name: "Info and Relationships", level: "A" },
    description: "Timeline <table> has no <th>, no <caption>, no scope attributes.",
  },
  {
    id: "a11y-405",
    page: "About",
    selector: ".mission .tooltip",
    wcag: { sc: "1.4.13", name: "Content on Hover or Focus", level: "AA" },
    description: "Mission tooltip appears on hover only — not on focus, not dismissible.",
  },
  {
    id: "a11y-406",
    page: "About",
    selector: ".stat-counter",
    wcag: { sc: "2.3.3", name: "Animation from Interactions", level: "AAA" },
    description: "Stat counters animate from 0 with no respect for prefers-reduced-motion.",
  },

  // ---------- CONTACT ----------
  {
    id: "a11y-500",
    page: "Contact",
    selector: "form input, form textarea",
    wcag: { sc: "3.3.2", name: "Labels or Instructions", level: "A" },
    description: "Form fields rely on placeholder text instead of <label> elements.",
  },
  {
    id: "a11y-501",
    page: "Contact",
    selector: "form .required",
    wcag: { sc: "1.3.3", name: "Sensory Characteristics", level: "A" },
    description: "Required fields indicated only by a red asterisk — no text alternative, no aria-required.",
  },
  {
    id: "a11y-502",
    page: "Contact",
    selector: "form .error",
    wcag: { sc: "3.3.1", name: "Error Identification", level: "A" },
    description: "Validation errors are visual text below the field but not associated via aria-describedby or aria-invalid.",
  },
  {
    id: "a11y-503",
    page: "Contact",
    selector: "form .custom-dropdown",
    wcag: { sc: "4.1.2", name: "Name, Role, Value", level: "A" },
    description: "Custom dropdown is a <div>+<span> implementation with no combobox/listbox semantics.",
  },
  {
    id: "a11y-504",
    page: "Contact",
    selector: "form .custom-dropdown",
    wcag: { sc: "2.1.1", name: "Keyboard", level: "A" },
    description: "Custom dropdown is mouse-only — not focusable, no arrow-key/Enter handling.",
  },
  {
    id: "a11y-505",
    page: "Contact",
    selector: "form .custom-checkbox",
    wcag: { sc: "4.1.2", name: "Name, Role, Value", level: "A" },
    description: "Custom checkbox is a <div> toggling a class — no checkbox role, no aria-checked.",
  },
  {
    id: "a11y-506",
    page: "Contact",
    selector: "form .captcha",
    wcag: { sc: "1.1.1", name: "Non-text Content", level: "A" },
    description: "CAPTCHA is an <img> of text with no audio alternative and no aria-label describing it.",
  },
  {
    id: "a11y-507",
    page: "Contact",
    selector: "form .submit-button",
    wcag: { sc: "4.1.2", name: "Name, Role, Value", level: "A" },
    description: 'Submit "button" is a <div onClick>, not a <button>, with no role.',
  },
  {
    id: "a11y-508",
    page: "Contact",
    selector: ".toast",
    wcag: { sc: "4.1.3", name: "Status Messages", level: "AA" },
    description: "Success toast appears as a plain <div> with no role=status/alert and no aria-live region.",
  },
  {
    id: "a11y-509",
    page: "Contact",
    selector: "form label[for]",
    wcag: { sc: "1.3.1", name: "Info and Relationships", level: "A" },
    description: 'The one <label> on the form has for="wrong-id" pointing at a non-existent input.',
  },
];

export function issuesByPage() {
  const groups = new Map();
  for (const issue of a11yIssues) {
    if (!groups.has(issue.page)) groups.set(issue.page, []);
    groups.get(issue.page).push(issue);
  }
  return groups;
}
