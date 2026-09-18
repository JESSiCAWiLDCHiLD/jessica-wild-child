'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { expansion } from '@/content/expansion';
import { Reveal } from '@/components/ui/Reveal';
import { clsx } from '@/lib/clsx';

const HEX: Record<string, string> = {
  magenta: '#FF1E6F',
  acid: '#B9F227',
  cyan: '#19E0D2',
};

type Placed = {
  key: string;
  branch: string;
  colour: string;
  label: string;
  body: string;
  x: number;
  y: number;
};

/** The centre character — plays as video when one's set, otherwise the still. */
function CentreMedia({ className }: { className: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const tryPlay = () => el.play().catch(() => {});
    tryPlay();
    el.addEventListener('canplay', tryPlay);
    document.addEventListener('visibilitychange', tryPlay);
    return () => {
      el.removeEventListener('canplay', tryPlay);
      document.removeEventListener('visibilitychange', tryPlay);
    };
  }, []);

  if (expansion.centre.video) {
    return (
      <video ref={videoRef} autoPlay muted loop playsInline preload="auto" poster={expansion.centre.src ?? undefined} aria-label={expansion.centre.alt} className={className}>
        <source src={expansion.centre.video} type="video/quicktime" />
      </video>
    );
  }
  if (!expansion.centre.src) return null;
  return (
    <Image src={expansion.centre.src} alt={expansion.centre.alt} width={720} height={720} sizes="30vw" className={className} />
  );
}

/**
 * The page's one genuinely interactive moment: a single character at
 * the centre, with every format it could become radiating out. Hover
 * or focus a node and the line to it lights up and the caption below
 * changes. On small screens the same data becomes a tap-through list,
 * which is why the node data is computed once and shared.
 */
export function ExpansionMap() {
  const [active, setActive] = useState<string | null>(null);

  const placed = useMemo<Placed[]>(() => {
    const out: Placed[] = [];
    // Three arcs across the lower half of the circle, one per branch —
    // widened from the original 58-60° spans so labels have more room
    // between them and read as a calmer diagram, not a dense web.
    const arcs = [
      { start: 188, end: 258 }, // social, upper left
      { start: 262, end: 322 }, // space, bottom
      { start: 326, end: 388 }, // digital, upper right
    ];
    expansion.branches.forEach((branch, bi) => {
      const arc = arcs[bi];
      const n = branch.nodes.length;
      branch.nodes.forEach((node, ni) => {
        const t = n === 1 ? 0.5 : ni / (n - 1);
        const deg = arc.start + (arc.end - arc.start) * t;
        const rad = (deg * Math.PI) / 180;
        const radius = 40 + (ni % 2) * 7;
        out.push({
          key: `${branch.key}-${node.label}`,
          branch: branch.title,
          colour: branch.colour,
          label: node.label,
          body: node.body,
          x: 50 + Math.cos(rad) * radius,
          y: 50 + Math.sin(rad) * radius * 0.92,
        });
      });
    });
    return out;
  }, []);

  const current = placed.find((p) => p.key === active) ?? null;

  return (
    <section id={expansion.id} className="room overflow-hidden">
      <div className="grid-12 items-end gap-y-8">
        <h2 className="col-span-4 text-huge font-extrabold md:col-span-7">
          <span className="block">{expansion.heading}</span>
          <span className="block text-magenta">{expansion.heading2}</span>
        </h2>
        <p className="col-span-4 max-w-reading text-lead opacity-70 md:col-span-5">
          {expansion.standfirst}
        </p>
      </div>

      {/* Diagram — pointer devices and wider screens */}
      <Reveal className="mt-16 hidden md:block">
        <div className="relative mx-auto aspect-[16/11] w-full max-w-5xl">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            {placed.map((p) => {
              const on = active === p.key;
              return (
                <line
                  key={p.key}
                  x1="50"
                  y1="46"
                  x2={p.x}
                  y2={p.y}
                  stroke={on ? HEX[p.colour] : 'currentColor'}
                  strokeWidth={on ? 0.35 : 0.1}
                  className={clsx('text-chalk transition-all duration-500', on ? 'opacity-100' : 'opacity-10')}
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>

          {/* Centre character */}
          <div
            className="absolute left-1/2 top-[46%] w-[26%] -translate-x-1/2 -translate-y-1/2"
            style={{ filter: active ? 'saturate(0.55)' : 'none', transition: 'filter 600ms' }}
          >
            <CentreMedia className="h-auto w-full" />
            <span className="tag mt-2 block text-center opacity-60">One character</span>
          </div>

          {/* Branch titles */}
          {expansion.branches.map((b, i) => (
            <span
              key={b.key}
              className="tag absolute -translate-x-1/2 opacity-45"
              style={{
                left: `${[14, 50, 86][i]}%`,
                top: `${[40, 96, 40][i]}%`,
                color: HEX[b.colour],
              }}
            >
              {b.title}
            </span>
          ))}

          {/* Nodes */}
          {placed.map((p) => {
            const on = active === p.key;
            return (
              <button
                key={p.key}
                type="button"
                onMouseEnter={() => setActive(p.key)}
                onMouseLeave={() => setActive((cur) => (cur === p.key ? null : cur))}
                onFocus={() => setActive(p.key)}
                onBlur={() => setActive((cur) => (cur === p.key ? null : cur))}
                onClick={() => setActive((cur) => (cur === p.key ? null : p.key))}
                aria-pressed={on}
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap px-2 py-1 text-sm transition-all duration-500"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  color: on ? HEX[p.colour] : undefined,
                  opacity: on ? 1 : active ? 0.25 : 0.55,
                }}
              >
                {p.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Caption line, shared state with the diagram */}
      <p className="mx-auto mt-8 hidden min-h-[3.5rem] max-w-reading text-center text-lead opacity-75 md:block">
        {current ? (
          <>
            <span className="tag mr-3 opacity-60">{current.branch}</span>
            {current.body}
          </>
        ) : (
          expansion.idle
        )}
      </p>

      {/* Small screens: the same content as a tap-through list */}
      <div className="mt-12 md:hidden">
        <CentreMedia className="mx-auto h-auto w-1/2" />
        <span className="tag mb-8 mt-2 block text-center opacity-60">One character</span>

        {expansion.branches.map((b) => (
          <div key={b.key} className="mb-8">
            <h3 className="tag mb-3" style={{ color: HEX[b.colour] }}>
              {b.title}
            </h3>
            <ul className="border-t border-chalk/15">
              {b.nodes.map((node) => {
                const key = `${b.key}-${node.label}`;
                const on = active === key;
                return (
                  <li key={key} className="border-b border-chalk/15">
                    <button
                      type="button"
                      onClick={() => setActive(on ? null : key)}
                      aria-expanded={on}
                      className="w-full py-3 text-left"
                      style={{ color: on ? HEX[b.colour] : undefined }}
                    >
                      {node.label}
                    </button>
                    <div
                      className="grid transition-[grid-template-rows] duration-500 ease-world"
                      style={{ gridTemplateRows: on ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-4 text-sm opacity-70">{node.body}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
