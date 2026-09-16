import { credentials } from '@/content/site';
import { Reveal } from '@/components/ui/Reveal';

export function Credentials() {
  return (
    <section id="credentials" className="room border-t border-chalk/15 !py-12 md:!py-16">
      <div className="grid-12 gap-y-12">
        <div className="col-span-4 md:col-span-5">
          <h2 className="tag mb-6 opacity-50">{credentials.heading}</h2>
          <ul className="space-y-5">
            {credentials.clients.map((c) => (
              <li key={c.name} className="flex flex-wrap items-baseline gap-x-3">
                <span className="font-display text-xl md:text-2xl">{c.name}</span>
                <span className="text-sm opacity-55">
                  {c.place} · {c.year} · {c.note}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <dl className="col-span-4 grid grid-cols-2 gap-x-6 gap-y-8 md:col-span-4 md:col-start-7">
          {credentials.facts.map((f) => (
            <div key={f.label}>
              <dt className="font-display text-2xl leading-none md:text-3xl">{f.value}</dt>
              <dd className="mt-2 text-sm leading-snug opacity-55">{f.label}</dd>
            </div>
          ))}
        </dl>

        <div className="col-span-4 md:col-span-2 md:col-start-11">
          <h3 className="tag mb-4 opacity-50">Exhibited</h3>
          <ul className="space-y-2 text-sm opacity-60">
            {credentials.exhibitions.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      </div>
      <Reveal className="mt-12">
        <hr className="rule" />
      </Reveal>
    </section>
  );
}
