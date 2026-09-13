import type { ReactNode } from 'react';
import { Reveal } from './Reveal';
import { clsx } from '@/lib/clsx';

export function SectionHeader({
  index,
  title,
  standfirst,
  align = 'left',
  children,
  className,
}: {
  index?: string;
  title: ReactNode;
  standfirst?: string;
  align?: 'left' | 'wide';
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header className={clsx('relative', className)}>
      {index ? <span className="tag mb-5 block opacity-50">{index}</span> : null}
      <Reveal as="h2" className={clsx('font-display', align === 'wide' ? 'text-huge' : 'text-big')}>
        {title}
      </Reveal>
      {standfirst ? (
        <Reveal delay={90}>
          <p className="mt-6 max-w-reading text-lead opacity-75">{standfirst}</p>
        </Reveal>
      ) : null}
      {children}
    </header>
  );
}
