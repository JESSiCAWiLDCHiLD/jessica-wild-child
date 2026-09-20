import { Figure } from '@/components/ui/Figure';
import { Reveal } from '@/components/ui/Reveal';
import { about } from '@/content/site';

export function About() {
  return (
    <section id="about" className="room">
      <div className="grid-12 gap-y-12">
        <div className="col-span-4 md:col-span-5">
          <Reveal>
            <Figure
              src="/images/studio/photo-of-me.jpg"
              alt="Portrait of Jessica Mannings"
              ratio="4 / 5"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </Reveal>
        </div>

        <div className="col-span-4 md:col-span-6 md:col-start-7">
          <h2 className="font-display text-huge">{about.heading}</h2>
          <div className="mt-8 space-y-5">
            {about.body.map((para) => (
              <p key={para} className="max-w-reading text-lead opacity-75">
                {para}
              </p>
            ))}
          </div>

          <ul className="mt-12 space-y-3 border-t border-chalk/15 pt-8">
            {about.credentials.map((c) => (
              <li key={c} className="text-sm opacity-60">
                {c}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-reading text-sm leading-relaxed opacity-40">{about.background}</p>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">
        <Reveal className="col-span-2 md:col-span-4">
          <Figure src="/images/studio/degree-show-2019.jpg" alt="Degree show, oil on canvas, 2.1m" ratio="1 / 1" sizes="(max-width: 768px) 45vw, 30vw" caption="Degree show, 2019 — oil on canvas, 2.1m" />
        </Reveal>
        <Reveal className="col-span-2 md:col-span-4" delay={80}>
          <Figure
            src="/images/studio/solo-exhibition-vietnam-paint-jam.jpg"
            alt="Solo exhibition in Vietnam and paint jam"
            ratio="1 / 1"
            sizes="(max-width: 768px) 45vw, 30vw"
            caption="Solo exhibition in Vietnam and paint jam"
          />
        </Reveal>
        <Reveal className="col-span-4 md:col-span-4" delay={160}>
          <Figure src="/images/studio/exhibition-gm-vietnam.jpg" alt="Bored Minds exhibition, New York" ratio="1 / 1" sizes="(max-width: 768px) 90vw, 30vw" caption="Bored Minds exhibition, New York" />
        </Reveal>
      </div>
    </section>
  );
}
