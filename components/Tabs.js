import { useState } from "react";

// a11y-204..206: no aria roles, no keyboard, panels all in DOM
export default function Tabs({ tabs }) {
  const [active, setActive] = useState(0);
  return (
    <div className="tabs">
      <div className="flex gap-2 border-b border-zinc-200">
        {tabs.map((t, i) => (
          <div
            key={t.label}
            onClick={() => setActive(i)}
            className={`cursor-pointer px-4 py-2 text-sm ${
              i === active ? "border-b-2 border-indigo-500 text-indigo-600" : "text-zinc-500"
            }`}
          >
            {t.label}
          </div>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.label}
          className="tab-panel py-6"
          style={{ display: i === active ? "block" : "none" }}
        >
          {t.content}
        </div>
      ))}
    </div>
  );
}
