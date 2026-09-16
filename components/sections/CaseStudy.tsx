import { Figure } from '@/components/ui/Figure';
import { Reveal } from '@/components/ui/Reveal';
import { stChristophers } from '@/content/projects';

/**
 * The lead commercial proof. The murals are the impressive part, so
 * everything that leads up to them — brief, site visit, research — is
 * condensed into one small section rather than given equal weight.
 * Each mural is paired with a real, matching on-site photo where one
 * exists, so it's obvious which mural is which in real life.
 */
export function StChristophersCaseStudy() {
  const p = stChristophers;

  return (
    <section id={p.id} className="room room--light">
      <div className="grid-12 items-start gap-y-8">
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

      {/* Process gets one line of credibility, not a section — the
          murals are the actual proof. The preliminary sketches and
          brainstorm boards are still shown, just kept to one small row. */}
      <p className="mt-6 max-w-reading text-sm opacity-50">{p.methodNote}</p>
      <div className="mt-4 grid max-w-md grid-cols-2 gap-3">
        {p.sketches.map((s) => (
          <Reveal key={s.src}>
            <Figure src={s.src} alt={s.alt} ratio="4 / 3" fit="contain" sizes="240px" caption={s.caption} />
          </Reveal>
        ))}
      </div>

      {/* The four murals — the lead work. */}
      <div className="mt-16">
        <h3 className="font-display text-big">Four year groups</h3>
        <p className="mt-3 max-w-measure text-sm opacity-60">
          Printed and installed across the primary school, where the children see their own curriculum on the
          walls every day.
        </p>
        <div className="mt-10 space-y-10">
          {p.murals.map((m) => (
            <Reveal key={m.caption}>
              <Figure src={m.src} alt={m.alt} ratio="21 / 9" sizes="100vw" caption={m.caption} />
            </Reveal>
          ))}
        </div>

        {/* Installed on site — grouped into one row since each photo is
            small on its own; captioned per year so it's still obvious
            which mural is which. */}
        <div className="mt-10">
          <span className="tag mb-4 block opacity-45">Installed on site</span>
          <div className="grid grid-cols-4 gap-3">
            {p.murals.map((m) => (
              <Reveal key={m.caption}>
                <Figure
                  src={m.installed.src}
                  alt={m.installed.alt}
                  placeholder={m.installed.placeholder}
                  ratio="4 / 3"
                  sizes="(max-width: 768px) 25vw, 160px"
                  caption={m.caption}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Also from this commission — culture set and departmental murals,
          deliberately condensed so the four year-group murals above read
          as the lead work rather than competing with it. */}
      <div className="mt-20 grid-12 items-start gap-y-6">
        <div className="col-span-4 md:col-span-3">
          <h3 className="tag opacity-50">Also from this commission</h3>
          <p className="mt-3 max-w-measure text-sm leading-snug opacity-60">{p.culture.body}</p>
        </div>
        <div className="col-span-4 grid grid-cols-3 gap-3 md:col-span-9 md:col-start-4 md:grid-cols-6">
          {[...p.culture.images, ...p.departmental.images].map((img) => (
            <Reveal key={img.src}>
              <Figure src={img.src} alt={img.alt} ratio="3 / 4" sizes="(max-width: 768px) 30vw, 14vw" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
