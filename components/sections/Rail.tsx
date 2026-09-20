'use client';

import { useEffect, useState } from 'react';

const marks = [
  { id: 'disciplines', label: 'What I create' },
  { id: 'dimension', label: 'Characters' },
  { id: 'expansion', label: 'One character' },
  { id: 'wild-child-world', label: 'Wild Child World' },
  { id: 'st-christophers', label: "St Christopher's" },
  { id: 'geobitmine', label: 'GeoBitmine' },
  { id: 'hungry-hamsters', label: 'Hungry Hamsters' },
  { id: 'process', label: 'Process' },
  { id: 'about', label: 'About' },
];

/**
 * A fixed index down the left edge. Structural, not decorative: it
 * tells you where you are in a long single-page scroll.
 */
export function Rail() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = marks
      .map((m) => document.getElementById(m.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.2, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const index = marks.findIndex((m) => m.id === active);
  const current = index >= 0 ? marks[index] : null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-40 hidden h-screen w-[var(--rail)] lg:flex lg:items-center lg:justify-center"
    >
      <div
        className="flex items-center gap-4 whitespace-nowrap text-meta uppercase mix-blend-difference"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        <span className="text-chalk/90">{current ? current.label : 'Jessica Wild Child'}</span>
        <span className="text-chalk/45">
          {current ? String(index + 1).padStart(2, '0') : '—'} / {String(marks.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}
