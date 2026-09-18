import { Figure } from '@/components/ui/Figure';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { dimension } from '@/content/projects';

type Project = (typeof dimension.projects)[number];

/** Detail / gallery / process / reference rows shared by every card. */
function SupportingMedia({ project }: { project: Project }) {
  return (
    <>
      {project.detail ? (
        <div className="mt-5">
          <span className="tag mb-2 block opacity-45">Detail</span>
          <div className="grid max-w-[640px] grid-cols-2 gap-2 md:grid-cols-4">
            {project.detail.map((img) => (
              <Reveal key={img.src}>
                <Figure src={img.src} alt={img.alt} ratio="1 / 1" sizes="150px" />
              </Reveal>
            ))}
          </div>
        </div>
      ) : null}
      {project.gallery ? (
        <div className="mt-3 grid max-w-[560px] grid-cols-2 gap-3">
          {project.gallery.map((img) => (
            <Reveal key={img.src}>
              <Figure src={img.src} alt={img.alt} ratio="1 / 1" sizes="(max-width: 768px) 42vw, 220px" />
            </Reveal>
          ))}
        </div>
      ) : null}
      {project.process ? (
        <div className="mt-5">
          <span className="tag mb-2 block opacity-45">Process</span>
          <div className="grid max-w-[320px] grid-cols-2 gap-2">
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
          <div className="grid max-w-[640px] grid-cols-2 gap-2 md:grid-cols-4">
            {project.inspiration.items.map((img, j) => (
              <Reveal key={`${img.src}-${j}`}>
                <Figure src={img.src} alt={img.alt} video={img.video} ratio="1 / 1" sizes="150px" caption={img.caption} />
              </Reveal>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

/** A project's note can be one paragraph or several. */
function Note({ note }: { note: Project['note'] }) {
  const paragraphs = Array.isArray(note) ? note : [note];
  return (
    <>
      {paragraphs.map((para, k) => (
        <p key={k} className="mt-2 max-w-measure text-sm leading-relaxed opacity-65">
          {para}
        </p>
      ))}
    </>
  );
}

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
          // Small native exports (the "From 2D to 3D" rotation is
          // 480x480, the Meshy studies clip is a 480x848 screen
          // recording) never get the wide slot, and are capped below
          // their card so they aren't stretched past their real
          // resolution.
          const wide = project.forceWide || (i % 3 === 0 && !project.smallVideo);

          // Temple Tiger: video on the left, every supporting shot
          // stacked in a column on the right; heading and note run as
          // one full-width banner below everything.
          if (project.layout === 'split-bottom') {
            return (
              <article key={i} className="col-span-4 md:col-span-12">
                <div className="grid gap-8 md:grid-cols-12 md:items-start">
                  <div className="md:col-span-7">
                    <Reveal>
                      <Figure
                        src={project.asset.src}
                        alt={project.asset.alt}
                        placeholder={project.asset.placeholder}
                        video={project.video}
                        ratio="1 / 1"
                        sizes="(max-width: 768px) 100vw, 54vw"
                      />
                    </Reveal>
                  </div>
                  <div className="md:col-span-5">
                    <SupportingMedia project={project} />
                  </div>
                </div>
                <h3 className="mt-6 font-display text-xl md:text-2xl">{project.name}</h3>
                <Note note={project.note} />
              </article>
            );
          }

          // Meshy studies: video, the gallery of stills, and the text
          // all sit side by side in one row rather than the video and
          // gallery stacking above the text.
          if (project.layout === 'split-right') {
            return (
              <article key={i} className="col-span-4 md:col-span-12">
                <div className="grid gap-6 md:grid-cols-12 md:items-start">
                  <div className="md:col-span-3">
                    <Reveal>
                      <Figure
                        src={project.asset.src}
                        alt={project.asset.alt}
                        placeholder={project.asset.placeholder}
                        video={project.video}
                        ratio="1 / 1"
                        sizes="(max-width: 768px) 100vw, 24vw"
                      />
                    </Reveal>
                  </div>
                  <div className="md:col-span-4">
                    <SupportingMedia project={project} />
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="font-display text-xl md:text-2xl">{project.name}</h3>
                    <Note note={project.note} />
                  </div>
                </div>
              </article>
            );
          }

          return (
            <article
              key={i}
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
              <SupportingMedia project={project} />
              <h3 className="mt-5 font-display text-xl md:text-2xl">{project.name}</h3>
              <Note note={project.note} />
            </article>
          );
        })}
      </div>
    </section>
  );
}
