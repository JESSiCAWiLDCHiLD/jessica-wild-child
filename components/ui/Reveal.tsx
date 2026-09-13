'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { clsx } from '@/lib/clsx';

/**
 * The site's single reveal device: content is masked from the bottom
 * and wipes up once, when it first enters the viewport. Deliberately
 * the only entrance animation used, rather than a fade-and-slide on
 * every element.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'figure' | 'h2' | 'p';
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      data-shown={shown}
      style={{ transitionDelay: `${delay}ms` }}
      className={clsx('reveal-mask', className)}
    >
      {children}
    </Tag>
  );
}
