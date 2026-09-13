'use client';

import { useState } from 'react';
import { disciplines } from '@/content/site';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { clsx } from '@/lib/clsx';

const accents = ['text-magenta', 'text-solar', 'text-acid', 'text-cyan'];

export function Disciplines() {
  const [open, setOpen] = useState<string | null>(disciplines[0].index);

  return (
    <section id="disciplines" className="room">
      <SectionHeader
        title="What I create"
        standfirst="Four disciplines that feed each other. Most commissions start in one and end up spanning three."
        align="wide"
      />

      <ul className="mt-14 border-t border-chalk/15">
        {disciplines.map((d, i) => {
          const isOpen = open === d.index;
          return (
            <li key={d.index} className="border-b border-chalk/15">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : d.index)}
                aria-expanded={isOpen}
                className="group flex w-full items-baseline gap-5 py-7 text-left md:gap-10"
              >
                <span className={clsx('tag w-8 shrink-0 opacity-50', isOpen && accents[i])}>{d.index}</span>
                <span
                  className={clsx(
                    'font-display text-big transition-colors duration-500',
                    isOpen ? accents[i] : 'group-hover:opacity-60',
                  )}
                >
                  {d.title}
                </span>
                <span className="ml-auto hidden max-w-measure text-right text-sm opacity-50 md:block">
                  {d.line}
                </span>
              </button>

              <div
                className="grid transition-[grid-template-rows] duration-700 ease-world"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <p className="max-w-reading pb-6 text-lead opacity-70 md:hidden">{d.line}</p>
                  <ul className="flex flex-wrap gap-x-6 gap-y-2 pb-8 md:pl-[calc(2rem+2.5rem)]">
                    {d.items.map((item) => (
                      <li key={item} className="text-sm opacity-65">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
