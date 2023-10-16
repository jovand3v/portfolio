import s from "./page.module.scss";
import About from "./home/about";
import Contact from "./home/contact";
import Footer from "./home/footer";
import Hero from "./home/hero";
import Section from "./home/section";
import Work from "./home/work";
import { useTranslations } from "next-intl";

export default function Home() {
  const aboutT = useTranslations("About");
  const workT = useTranslations("Work");
  const contactT = useTranslations("Contact");

  return (
    <main className={s.main}>
      <Hero />
      <Section title={aboutT("header.title")} subtitle={aboutT("header.subtitle")}>
        <About />
      </Section>
      <Section title={workT("header.title")} subtitle={workT("header.subtitle")}>
        <Work />
      </Section>
      <Section title={contactT("header.title")} subtitle={contactT("header.subtitle")}>
        <Contact />
      </Section>
      <Footer />
    </main>
  );
}
