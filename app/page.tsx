import { Nav } from '@/components/sections/Nav';
import { Rail } from '@/components/sections/Rail';
import { Hero } from '@/components/sections/Hero';
import { Credentials } from '@/components/sections/Credentials';
import { Disciplines } from '@/components/sections/Disciplines';
import { StChristophersCaseStudy } from '@/components/sections/CaseStudy';
import { CharacterShowcase } from '@/components/sections/CharacterShowcase';
import { FoxCharacter } from '@/components/sections/FoxCharacter';
import { ExpansionMap } from '@/components/sections/ExpansionMap';
import { WildChildWorld } from '@/components/sections/WildChildWorld';
import { GeoBitmineCaseStudy } from '@/components/sections/GeoBitmine';
import { HungryHamstersCaseStudy } from '@/components/sections/HungryHamsters';
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
        <CharacterShowcase />
        <FoxCharacter />
        <ExpansionMap />
        <WildChildWorld />
        <StChristophersCaseStudy />
        <GeoBitmineCaseStudy />
        <HungryHamstersCaseStudy />
        <Process />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
