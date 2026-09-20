import { Figure } from '@/components/ui/Figure';
import { Reveal } from '@/components/ui/Reveal';
import { hungryHamsters } from '@/content/hungryHamsters';

/**
 * A real, dated, credited collaboration — same treatment as the other
 * two case studies (St Christopher's, GeoBitmine): process, the lead
 * work, then proof it actually happened (the exhibition itself).
 */
export function HungryHamstersCaseStudy() {
  const p = hungryHamsters;

  return (
    <section id={p.id} className="room room--light">
      <div className="grid-12 items-end gap-y-8">
        <div className="col-span-4 md:col-span-7">
          <span className="tag mb-5 block opacity-50">
            {p.client} · {p.place} · {p.year}
          </span>
          <Reveal as="h2" className="text-huge font-extrabold">
            {p.title}
          </Reveal>
        </div>
        <p className="col-span-4 max-w-reading text-lead opacity-70 md:col-span-5">{p.standfirst}</p>
      </div>

      {/* Process (portrait) matched to the same height as the square
          video next to it — each gets a fixed height directly and
          computes its own width from that via aspect-ratio, so
          neither depends on the other's full column (image + caption)
          the way Feral Baby/Strawbugs did before that was fixed. */}
      <div className="mt-14 flex flex-col gap-6 md:flex-row md:flex-wrap md:items-start">
        <div className="w-full md:w-auto md:shrink-0">
          <Reveal>
            <div className="relative mx-auto md:mx-0 md:h-[640px]" style={{ aspectRatio: '9 / 16' }}>
              <Figure
                src={p.process.src}
                alt={p.process.alt}
                video={p.process.video}
                fillHeight
                className="h-full"
                sizes="360px"
                caption="Process"
              />
            </div>
          </Reveal>
        </div>
        <div className="w-full md:w-auto md:shrink-0">
          <Reveal delay={80}>
            <div className="relative mx-auto md:mx-0 md:h-[640px]" style={{ aspectRatio: '1 / 1' }}>
              <Figure
                src={p.featured.src}
                alt={p.featured.alt}
                video={p.featured.video}
                fillHeight
                className="h-full"
                sizes="640px"
                caption="Finished design, close up"
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* One finished figure, shown from every side — then a second,
          differently painted figure directly underneath, same
          treatment. Plain fr-based grid columns, so doubling max-w
          just gives each tile more room rather than risking overflow. */}
      <div className="mt-14">
        <span className="tag mb-4 block opacity-50">One figure, four angles</span>
        <div className="grid max-w-[1700px] grid-cols-2 gap-5 md:grid-cols-4">
          {p.gallery.map((img) => (
            <Reveal key={img.src}>
              <Figure src={img.src} alt={img.alt} ratio="3 / 4" sizes="(max-width: 768px) 45vw, 400px" />
            </Reveal>
          ))}
        </div>
        <div className="mt-5 grid max-w-[1700px] grid-cols-2 gap-5 md:grid-cols-4">
          {p.secondGallery.map((img) => (
            <Reveal key={img.src}>
              <Figure src={img.src} alt={img.alt} ratio="3 / 4" sizes="(max-width: 768px) 45vw, 400px" />
            </Reveal>
          ))}
        </div>
      </div>

      {/* At the exhibition itself. */}
      <div className="mt-14">
        <span className="tag mb-4 block opacity-50">DesignerCon, Las Vegas</span>
        <div className="grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
          {p.exhibition.map((img) => (
            <Reveal key={img.src}>
              <Figure src={img.src} alt={img.alt} ratio="3 / 4" caption={img.caption} sizes="(max-width: 768px) 100vw, 45vw" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
