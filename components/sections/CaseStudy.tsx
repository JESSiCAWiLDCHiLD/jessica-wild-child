import { Figure } from '@/components/ui/Figure';
import { Reveal } from '@/components/ui/Reveal';
import { stChristophers } from '@/content/projects';

/**
 * The lead commercial proof. Deliberately structured as
 * brief → concept → world building → artwork → physical space
 * rather than a gallery of finished images.
 */
export function StChristophersCaseStudy() {
  const p = stChristophers;

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

      <Reveal className="mt-16">
        <Figure
          src={p.wide.src}
          alt={p.wide.alt}
          ratio="16 / 9"
          sizes="100vw"
          caption="Installed across the primary school"
        />
      </Reveal>

      {/* Process chain */}
      <ol className="mt-24 space-y-20 md:space-y-28">
        {p.stages.map((stage, i) => (
          <li key={stage.label} className="grid-12 items-center gap-y-8">
            <div
              className={
                i % 2 === 0
                  ? 'col-span-4 md:col-span-7'
                  : 'col-span-4 md:col-span-7 md:col-start-6 md:order-2'
              }
            >
              <Reveal>
                <Figure
                  src={stage.asset.src}
                  alt={stage.asset.alt}
                  placeholder={stage.asset.placeholder}
                  ratio={i === 3 ? '21 / 9' : '4 / 3'}
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </Reveal>
            </div>
            <div
              className={
                i % 2 === 0
                  ? 'col-span-4 md:col-span-4 md:col-start-9'
                  : 'col-span-4 md:col-span-4 md:col-start-1 md:order-1'
              }
            >
              <span className="tag mb-4 block opacity-45">
                {String(i + 1).padStart(2, '0')} — {stage.label}
              </span>
              <p className="max-w-measure text-lead opacity-75">{stage.body}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* The four murals */}
      <div className="mt-28">
        <h3 className="font-display text-big">Four year groups</h3>
        <div className="mt-10 space-y-10">
          {p.murals.map((m) => (
            <Reveal key={m.caption}>
              <Figure src={m.src} alt={m.alt} ratio="21 / 9" sizes="100vw" caption={m.caption} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Bahraini culture set */}
      <div className="mt-28 grid-12 gap-y-10">
        <div className="col-span-4 md:col-span-4">
          <h3 className="font-display text-big">{p.culture.title}</h3>
          <p className="mt-6 max-w-measure text-lead opacity-70">{p.culture.body}</p>
        </div>
        <div className="col-span-4 grid grid-cols-2 gap-4 md:col-span-7 md:col-start-6 md:grid-cols-4">
          {p.culture.images.map((img) => (
            <Reveal key={img.src}>
              <Figure src={img.src} alt={img.alt} ratio="3 / 4" sizes="(max-width: 768px) 45vw, 20vw" />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Departmental */}
      <div className="mt-24 grid-12 gap-y-8">
        <h3 className="col-span-4 font-display text-big md:col-span-3">{p.departmental.title}</h3>
        <div className="col-span-4 grid grid-cols-2 gap-4 md:col-span-6 md:col-start-7">
          {p.departmental.images.map((img) => (
            <Reveal key={img.src}>
              <Figure src={img.src} alt={img.alt} ratio="3 / 4" sizes="(max-width: 768px) 45vw, 28vw" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
