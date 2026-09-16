import { Figure } from '@/components/ui/Figure';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { concepts } from '@/content/concepts';

/**
 * Speculative propositions. Each one carries a persistent
 * "Concept application" label and an explicit disclaimer so it can
 * never be mistaken for delivered client work.
 */
export function ConceptApplications() {
  return (
    <section id={concepts.id} className="room">
      <SectionHeader title={concepts.heading} standfirst={concepts.standfirst} align="wide" />

      <div className="mt-14 space-y-16 md:space-y-24">
        {concepts.items.map((item, i) => (
          <article key={item.index} className="grid-12 items-start gap-y-8">
            <div
              className={
                i % 2 === 0 ? 'col-span-4 md:col-span-6' : 'col-span-4 md:col-span-6 md:col-start-7 md:order-2'
              }
            >
              <Reveal>
                <div className="relative">
                  <Figure
                    src={item.asset.src}
                    alt={item.asset.alt}
                    placeholder={item.asset.placeholder}
                    ratio="4 / 3"
                    sizes="(max-width: 768px) 100vw, 48vw"
                  />
                  <span className="absolute left-0 top-0 bg-magenta px-3 py-1.5 text-meta uppercase text-chalk">
                    {concepts.label}
                  </span>
                </div>
              </Reveal>
              <p className="mt-3 text-xs opacity-45">{concepts.disclaimer}</p>
            </div>

            <div
              className={
                i % 2 === 0
                  ? 'col-span-4 md:col-span-5 md:col-start-8'
                  : 'col-span-4 md:col-span-5 md:col-start-1 md:order-1'
              }
            >
              <span className="tag mb-4 block opacity-50">
                {item.index} — {item.sector}
              </span>
              <h3 className="font-display text-big">{item.title}</h3>
              <p className="mt-5 max-w-measure text-lead opacity-70">{item.body}</p>
              <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
                {item.applications.map((a) => (
                  <li key={a} className="text-sm opacity-55">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
