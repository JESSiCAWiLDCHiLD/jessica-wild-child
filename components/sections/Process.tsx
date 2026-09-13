import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { process } from '@/content/site';

export function Process() {
  return (
    <section id="process" className="room room--light">
      <SectionHeader title={process.heading} standfirst={process.standfirst} align="wide" />

      <ol className="mt-16 border-t border-ink/15">
        {process.steps.map((step) => (
          <Reveal as="li" key={step.index} className="grid-12 gap-y-3 border-b border-ink/15 py-8 md:py-10">
            <span className="tag col-span-4 pt-2 opacity-45 md:col-span-1">{step.index}</span>
            <h3 className="col-span-4 font-display text-big md:col-span-4">{step.title}</h3>
            <p className="col-span-4 max-w-reading text-lead opacity-70 md:col-span-6 md:col-start-7">
              {step.body}
            </p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
