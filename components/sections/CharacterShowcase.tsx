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
                <Figure src={img.src} alt={img.alt} ratio="1 / 1" sizes="150px" caption={img.caption} />
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

          // Feral Baby and Strawbugs. Feral Baby renders at its own
          // natural (portrait) ratio, which sets the row's height;
          // Strawbugs stretches to that exact same height via flex,
          // staying square (its own aspect-ratio computes the width
          // that goes with that height — not a fixed box).
          //
          // Both media items get their height directly (md:h-[...]),
          // and compute their own width from it via `aspect-ratio` —
          // rather than one stretching to match the OTHER via flex
          // cross-axis stretch, which was pulling in the full height
          // of Feral Baby's column (image + heading + paragraph) and
          // making the square balloon far bigger than intended.
          if (project.layout === 'paired-originals' && project.left && project.right) {
            return (
              <article key={i} className="col-span-4 md:col-span-12">
                <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:items-start">
                  <div className="w-full md:min-w-[240px] md:flex-1">
                    <h3 className="font-display text-xl md:text-2xl">{project.left.name}</h3>
                    <Note note={project.left.note} />
                  </div>
                  <div className="w-full md:w-auto md:shrink-0">
                    <Reveal>
                      <div className="relative mx-auto md:mx-0 md:h-[520px]" style={{ aspectRatio: project.left.ratio }}>
                        <Figure src={project.left.asset.src} alt={project.left.asset.alt} fillHeight className="h-full" sizes="420px" />
                      </div>
                    </Reveal>
                  </div>
                  {/* Kept an exact square (not cropped to fit) — same
                      fixed height as Feral Baby, and `fit="contain"`
                      shows the whole clip inside it rather than
                      cropping, since the source isn't pixel-perfect
                      square (810x826). */}
                  <div className="w-full md:w-auto md:shrink-0">
                    <Reveal>
                      <div className="relative mx-auto md:mx-0 md:h-[520px]" style={{ aspectRatio: '1 / 1' }}>
                        <Figure
                          src={project.right.asset.src}
                          alt={project.right.asset.alt}
                          video={project.right.video}
                          fillHeight
                          fit="contain"
                          className="h-full"
                          sizes="520px"
                        />
                      </div>
                    </Reveal>
                  </div>
                  <div className="w-full md:min-w-[240px] md:flex-1">
                    <h3 className="font-display text-xl md:text-2xl">{project.right.name}</h3>
                    <Note note={project.right.note} />
                  </div>
                </div>
              </article>
            );
          }

          // Two Meta Quest results side by side, with the shared
          // "From 2D to 3D" text sitting to their right — it applies
          // to the pair as a whole, not stacked underneath both.
          if (project.layout === 'paired-videos' && project.pairedVideos) {
            return (
              <article key={i} className="col-span-4 md:col-span-12">
                <div className="grid gap-6 md:grid-cols-12 md:items-start">
                  {project.pairedVideos.map((v, j) => (
                    <div key={j} className="md:col-span-4">
                      <Reveal>
                        <Figure src={v.src} alt={v.alt} video={v.video} ratio="1 / 1" sizes="(max-width: 768px) 100vw, 28vw" />
                      </Reveal>
                    </div>
                  ))}
                  <div className="md:col-span-4">
                    <h3 className="font-display text-xl md:text-2xl">{project.name}</h3>
                    <Note note={project.note} />
                  </div>
                </div>
              </article>
            );
          }

          // Temple Tiger: video on the left; on the right, every
          // supporting shot stacked with the heading and note directly
          // underneath — the right side reads as one self-contained
          // banner (images + text together), rather than the text
          // spanning full-width below both columns.
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
                    <h3 className="mt-6 font-display text-xl md:text-2xl">{project.name}</h3>
                    <Note note={project.note} />
                  </div>
                </div>
              </article>
            );
          }

          // Meshy studies: video, the gallery of stills, and the text
          // all sit side by side in one row.
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

          // Every project currently declares one of the layouts above,
          // so this generic fallback is unreachable in practice — kept
          // as a safety net for a future item added without a `layout`.
          // The cast is needed because TS narrows `project` to `never`
          // here once every union member is eliminated by the checks
          // above.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const generic = project as any;
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
                  src={generic.asset.src}
                  alt={generic.asset.alt}
                  placeholder={generic.asset.placeholder}
                  video={generic.video}
                  ratio="1 / 1"
                  className={generic.smallVideo ? 'max-w-[360px]' : undefined}
                  sizes={wide ? '(max-width: 768px) 100vw, 46vw' : '(max-width: 768px) 100vw, 32vw'}
                />
              </Reveal>
              <SupportingMedia project={generic} />
              <h3 className="mt-5 font-display text-xl md:text-2xl">{generic.name}</h3>
              <Note note={generic.note} />
            </article>
          );
        })}
      </div>
    </section>
  );
}
