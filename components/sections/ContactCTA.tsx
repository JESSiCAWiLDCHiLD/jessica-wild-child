import { contact, site } from '@/content/site';

export function ContactCTA() {
  return (
    <section id="contact" className="room room--light">
      <div className="grid-12 gap-y-12">
        <div className="col-span-4 md:col-span-7">
          <h2 className="font-display text-mega font-extrabold">{contact.heading}</h2>
          <p className="mt-8 max-w-reading text-lead opacity-70">{contact.standfirst}</p>

          <a
            href={`mailto:${site.email}`}
            className="link-underline mt-12 inline-block font-display text-big text-magenta"
          >
            {site.email}
          </a>

          <p className="mt-8 max-w-measure text-sm opacity-55">{contact.availability}</p>

          <ul className="mt-8 flex gap-6">
            {site.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="link-underline text-sm opacity-70" target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-4 md:col-span-4 md:col-start-9">
          <h3 className="tag mb-6 opacity-50">Things people ask for</h3>
          <ul className="border-t border-ink/15">
            {contact.prompts.map((p) => (
              <li key={p} className="border-b border-ink/15 py-4 text-lead opacity-75">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
