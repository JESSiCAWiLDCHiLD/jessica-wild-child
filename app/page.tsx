import { Nav } from '@/components/sections/Nav';
import { Rail } from '@/components/sections/Rail';
import { Hero } from '@/components/sections/Hero';
import { Credentials } from '@/components/sections/Credentials';
import { Disciplines } from '@/components/sections/Disciplines';
import { StChristophersCaseStudy } from '@/components/sections/CaseStudy';
import { CharacterShowcase } from '@/components/sections/CharacterShowcase';
import { ExpansionMap } from '@/components/sections/ExpansionMap';
import { WildChildWorld } from '@/components/sections/WildChildWorld';
import { GeoBitmineCaseStudy } from '@/components/sections/GeoBitmine';
import { ConceptApplications } from '@/components/sections/ConceptApplications';
import { Process } from '@/components/sections/Process';
import { About } from '@/components/sections/About';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Footer } from '@/components/sections/Footer';

/**
 * Homepage order follows the brief exactly. Sections are independent
 * components reading from /content, so reordering is a matter of
 * moving a line here.
 */
export default function HomePage() {
  return (
    <>
      <Nav />
      <Rail />
      <main>
        <Hero />
        <Credentials />
        <Disciplines />
        <StChristophersCaseStudy />
        <CharacterShowcase />
        <ExpansionMap />
        <WildChildWorld />
        <GeoBitmineCaseStudy />
        <ConceptApplications />
        <Process />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
