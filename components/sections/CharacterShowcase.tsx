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

      {/* Hero projects, each given room but not oversized — smaller cards
          and tighter gaps than before, so more of the section is visible
          at once. */}
      <div className="mt-14 grid grid-cols-4 gap-x-4 gap-y-10 md:grid-cols-12 md:gap-x-6 md:gap-y-16">
        {dimension.projects.map((project, i) => {
          // Small native exports (the OpenBrush rotation is 480x480, the
          // Meshy experiments clip is a 480x848 screen recording) never
          // get the wide slot, and are capped below their card so they
          // aren't stretched past their real resolution.
          const wide = project.forceWide || (i % 3 === 0 && !project.smallVideo);
          return (
            <article
              key={project.name}
              className={
                wide
                  ? 'col-span-4 md:col-span-6'
                  : i % 3 === 1
                    ? 'col-span-4 md:col-span-4 md:col-start-2'
                    : 'col-span-4 md:col-span-4 md:col-start-8'
              }
            >
              <Reveal>
                <Figure
                  src={project.asset.src}
                  alt={project.asset.alt}
                  placeholder={project.asset.placeholder}
                  video={project.video}
                  ratio="1 / 1"
                  className={project.smallVideo ? 'max-w-[360px]' : undefined}
                  sizes={wide ? '(max-width: 768px) 100vw, 46vw' : '(max-width: 768px) 100vw, 32vw'}
                />
              </Reveal>
              {project.detail ? (
                <div className="mt-5">
                  <span className="tag mb-2 block opacity-45">Detail</span>
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-4 max-w-[640px]">
                    {project.detail.map((img) => (
                      <Reveal key={img.src}>
                        <Figure src={img.src} alt={img.alt} ratio="1 / 1" sizes="150px" />
                      </Reveal>
                    ))}
                  </div>
                </div>
              ) : null}
              {project.gallery ? (
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {project.gallery.map((img) => (
                    <Reveal key={img.src}>
                      <Figure src={img.src} alt={img.alt} ratio="1 / 1" sizes="(max-width: 768px) 28vw, 120px" />
                    </Reveal>
                  ))}
                </div>
              ) : null}
              {project.process ? (
                <div className="mt-5">
                  <span className="tag mb-2 block opacity-45">Process</span>
                  <div className="grid grid-cols-2 gap-2 max-w-[320px]">
                    {project.process.map((img) => (
                      <Reveal key={img.src}>
                        <Figure src={img.src} alt={img.alt} ratio="1 / 1" sizes="150px" caption={img.caption} />
                      </Reveal>
                    ))}
                  </div>
                </div>
              ) : null}
              {project.inspiration ? (
                <div className="mt-5">
                  <span className="tag mb-2 block opacity-45">{project.inspiration.heading}</span>
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-4 max-w-[640px]">
                    {project.inspiration.items.map((img, j) => (
                      <Reveal key={`${img.src}-${j}`}>
                        <Figure
                          src={img.src}
                          alt={img.alt}
                          video={img.video}
                          ratio="1 / 1"
                          sizes="150px"
                          caption={img.caption}
                        />
                      </Reveal>
                    ))}
                  </div>
                </div>
              ) : null}
              <h3 className="mt-5 font-display text-xl md:text-2xl">{project.name}</h3>
              <p className="mt-2 max-w-measure text-sm leading-relaxed opacity-65">{project.note}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
