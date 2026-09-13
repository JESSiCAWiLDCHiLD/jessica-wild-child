'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { hero, site } from '@/content/site';
import { wildChildWorld } from '@/content/projects';

/**
 * The one orchestrated page-load moment on the site. Two character
 * cut-outs drift with the cursor; everything below is quiet by
 * comparison. Parallax is pointer-only and disabled for touch and for
 * reduced-motion users.
 */
export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const fine = window.matchMedia('(pointer: fine)').matches;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setInteractive(fine && !still);
  }, []);

  useEffect(() => {
    if (!interactive) return;
    const onMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setPointer({ x, y });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [interactive]);

  const drift = (depth: number) => ({
    transform: `translate3d(${pointer.x * depth}px, ${pointer.y * depth}px, 0)`,
    transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
  });

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-[var(--gutter)] pb-12 pt-32 lg:pl-[calc(var(--gutter)+var(--rail))]"
    >
      {/* Character cut-outs, sitting behind the type */}
      <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden>
        <div
          className="absolute right-[-8%] top-[6%] w-[58vw] max-w-[620px] opacity-95 md:right-[2%] md:top-[8%] md:w-[38vw]"
          style={drift(26)}
        >
          <Image
            src={wildChildWorld.cutouts[0].src}
            alt=""
            width={720}
            height={720}
            priority
            className="h-auto w-full"
          />
        </div>
        <div
          className="absolute bottom-[16%] left-[-16%] w-[42vw] max-w-[420px] opacity-80 md:bottom-[10%] md:left-[26%] md:w-[22vw]"
          style={drift(-16)}
        >
          <Image
            src={wildChildWorld.cutouts[1].src}
            alt=""
            width={720}
            height={720}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="relative z-10">
        <span
          className="tag mb-8 block opacity-60 transition-opacity duration-1000"
          style={{ opacity: loaded ? 0.6 : 0 }}
        >
          {site.name} — {site.role}
        </span>

        <h1 className="text-mega font-extrabold">
          <span className="block overflow-hidden">
            <span
              className="block transition-transform duration-[1100ms] ease-world"
              style={{ transform: loaded ? 'translateY(0)' : 'translateY(110%)' }}
            >
              {hero.line1}
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="block transition-transform delay-150 duration-[1100ms] ease-world"
              style={{ transform: loaded ? 'translateY(0)' : 'translateY(110%)' }}
            >
              {hero.line2}
            </span>
          </span>
        </h1>

        <div
          className="mt-10 flex flex-col gap-8 transition-opacity delay-500 duration-1000 md:flex-row md:items-end md:justify-between"
          style={{ opacity: loaded ? 1 : 0 }}
        >
          <p className="max-w-reading text-lead opacity-75">{hero.standfirst}</p>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <a
              href={hero.primaryCta.href}
              className="bg-chalk px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-magenta hover:text-chalk"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="border border-chalk/40 px-6 py-3 text-sm transition-colors duration-300 hover:border-cyan hover:text-cyan"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
