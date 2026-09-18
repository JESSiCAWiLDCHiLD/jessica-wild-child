import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { concepts } from '@/content/concepts';

/**
 * Speculative propositions, kept deliberately text-only and compact —
 * one line per concept — so they read as quick sparks rather than
 * competing with the delivered work shown elsewhere on the site.
 */
export function ConceptApplications() {
  return (
    <section id={concepts.id} className="room">
      <SectionHeader title={concepts.heading} standfirst={concepts.standfirst} align="wide" />
      <p className="mt-4 text-xs opacity-45">{concepts.disclaimer}</p>

      <ol className="mt-10 border-t border-chalk/15">
        {concepts.items.map((item) => (
          <Reveal key={item.index} as="li" className="border-b border-chalk/15 py-6">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="tag shrink-0 opacity-50">
                {item.index} — {item.sector}
              </span>
              <h3 className="font-display text-big">{item.title}</h3>
            </div>
            <p className="mt-3 max-w-reading text-lead opacity-70">{item.body}</p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {item.applications.map((a) => (
                <li key={a} className="text-sm opacity-55">
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
