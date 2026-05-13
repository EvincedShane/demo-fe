// a11y-505: div pretending to be a checkbox, no role/aria-checked
export default function CustomCheckbox({ checked, onChange, label }) {
  return (
    <div
      className="custom-checkbox flex cursor-pointer items-center gap-2 text-sm text-zinc-700"
      onClick={() => onChange(!checked)}
    >
      <div
        className={`flex h-4 w-4 items-center justify-center rounded border ${
          checked ? "border-indigo-500 bg-indigo-500 text-white" : "border-zinc-400 bg-white"
        }`}
      >
        {checked ? "✓" : ""}
      </div>
      <span>{label}</span>
    </div>
  );
}
