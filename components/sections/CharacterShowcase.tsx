import { Figure } from '@/components/ui/Figure';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { dimension } from '@/content/projects';

export function CharacterShowcase() {
  return (
    <section id={dimension.id} className="room">
      <SectionHeader title={dimension.heading} standfirst={dimension.standfirst} align="wide" />

      <Reveal delay={120}>
        <ol className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm opacity-55">
          {dimension.chain.map((step, i) => (
            <li key={step} className="flex items-center gap-3">
              <span>{step}</span>
              {i < dimension.chain.length - 1 ? (
                <span aria-hidden className="h-px w-6 bg-current opacity-40" />
              ) : null}
            </li>
          ))}
        </ol>
      </Reveal>

      {/* 4–8 hero projects, each given room. Not a thumbnail grid. */}
      <div className="mt-20 grid grid-cols-4 gap-x-4 gap-y-16 md:grid-cols-12 md:gap-x-6 md:gap-y-28">
        {dimension.projects.map((project, i) => {
          const wide = i % 3 === 0;
          return (
            <article
              key={project.name}
              className={
                wide
                  ? 'col-span-4 md:col-span-8'
                  : i % 3 === 1
                    ? 'col-span-4 md:col-span-5 md:col-start-2'
                    : 'col-span-4 md:col-span-5 md:col-start-8'
              }
            >
              <Reveal>
                <Figure
                  src={project.asset.src}
                  alt={project.asset.alt}
                  placeholder={project.asset.placeholder}
                  ratio={project.tall ? '3 / 4' : '4 / 3'}
                  sizes={wide ? '(max-width: 768px) 100vw, 62vw' : '(max-width: 768px) 100vw, 40vw'}
                />
              </Reveal>
              <h3 className="mt-6 font-display text-2xl md:text-3xl">{project.name}</h3>
              <p className="mt-3 max-w-measure text-sm leading-relaxed opacity-65">{project.note}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
