import { Figure } from '@/components/ui/Figure';
import { Reveal } from '@/components/ui/Reveal';
import { geobitmine } from '@/content/projects';

export function GeoBitmineCaseStudy() {
  const p = geobitmine;

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

      <Reveal className="mt-14">
        <Figure src={p.hero.src} alt={p.hero.alt} ratio="16 / 10" sizes="100vw" />
      </Reveal>

      {/* No install shot yet — the mural hasn't been printed, so this
          runs as text only rather than a placeholder box next to it. */}
      <div className="mt-16 space-y-6">
        {p.body.map((para) => (
          <p key={para} className="max-w-reading text-lead opacity-75">
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}
