import About from "./home/about";
import Contact from "./home/contact";
import Footer from "./home/footer";
import Hero from "./home/hero";
import Section from "./home/section";
import Work from "./home/work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Section title="About" subtitle="Experience & Skills">
        <About />
      </Section>
      <Section title="Work" subtitle="Personal & Work Projects">
        <Work />
      </Section>
      <Section title="Contact" subtitle="Let's talk">
        <Contact />
      </Section>
      <Footer />
    </main>
  );
}
