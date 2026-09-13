'use client';

import { useEffect, useState } from 'react';
import { nav, site } from '@/content/site';
import { clsx } from '@/lib/clsx';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        solid && !open ? 'bg-ink/80 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <div className="flex items-center justify-between gap-4 px-[var(--gutter)] py-4 md:py-5">
        <a href="#top" className="font-display text-base leading-none tracking-tight md:text-lg">
          {site.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Sections">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="link-underline text-sm opacity-75 hover:opacity-100">
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-chalk/40 px-4 py-2 text-sm transition-colors duration-300 hover:border-magenta hover:text-magenta"
          >
            Start a project
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="relative z-50 md:hidden"
        >
          <span className="tag">{open ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-40 flex flex-col justify-center gap-6 bg-ink px-[var(--gutter)] md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-big"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 font-display text-big text-magenta"
          >
            Start a project
          </a>
        </div>
      ) : null}
    </header>
  );
}
