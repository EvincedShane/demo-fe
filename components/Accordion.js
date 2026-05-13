import { useState } from "react";

// a11y-305: <div onClick> headers, no role=button, no aria-expanded
export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="faq divide-y divide-zinc-200 rounded border border-zinc-200">
      {items.map((it, i) => (
        <div key={it.q}>
          <div
            className="accordion-header flex cursor-pointer items-center justify-between px-4 py-3 text-zinc-800"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{it.q}</span>
            <span className="text-xs">{open === i ? "▴" : "▾"}</span>
          </div>
          {open === i && (
            <div className="px-4 pb-4 text-sm">{it.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
