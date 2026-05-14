import { useEffect, useState } from "react";

// a11y-103..105: autoplay no pause, prev/next icon-only no labels, no live region
export default function Carousel({ slides }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setI((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div className="carousel relative overflow-hidden rounded-lg bg-white p-8 shadow-sm">
      <div className="min-h-[140px]">
        <blockquote className="text-lg text-zinc-700">
          "{slides[i].quote}"
        </blockquote>
        <div className="mt-3 text-sm text-zinc-500">
          — {slides[i].author}, {slides[i].role}
        </div>
      </div>
      <div className="carousel-controls absolute right-4 top-1/2 flex -translate-y-1/2 gap-2">
        <button
          onClick={() => setI((i - 1 + slides.length) % slides.length)}
          className="rounded-full bg-zinc-100 p-2"
          aria-label="Previous"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={() => setI((i + 1) % slides.length)}
          className="rounded-full bg-zinc-100 p-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
