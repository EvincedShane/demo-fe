import { useState } from "react";

// a11y-503..504: div-based dropdown, no combobox semantics, mouse-only
export default function CustomDropdown({ options, value, onChange, placeholder = "Select…" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="custom-dropdown relative">
      <div
        className="flex cursor-pointer items-center justify-between rounded border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-700"
        onClick={() => setOpen(!open)}
      >
        <span>{value || placeholder}</span>
        <span className="text-xs">▾</span>
      </div>
      {open && (
        <div className="absolute left-0 right-0 top-full z-10 mt-1 rounded border border-zinc-200 bg-white shadow">
          {options.map((o) => (
            <div
              key={o}
              className="cursor-pointer px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
              onClick={() => { onChange(o); setOpen(false); }}
            >
              {o}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
