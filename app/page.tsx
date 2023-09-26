import About from "./home/about";
import Hero from "./home/hero";
import Section from "./home/section";

export default function Home() {
  return (
    <main>
      <Hero />
      <Section title="About" subtitle="Experience & Skills">
        <About />
      </Section>
    </main>
  );
}
