import s from "./page.module.scss";
import About from "./home/about";
import Contact from "./home/contact";
import Footer from "./home/footer";
import Hero from "./home/hero";
import Section from "./home/section";
import Work from "./home/work";
import { useTranslations } from "next-intl";

export default function Home() {
  const heroT = useTranslations("Hero");
  const aboutT = useTranslations("About");
  const workT = useTranslations("Work");
  const contactT = useTranslations("Contact");

  return (
    <main className={s.main}>
      <Hero
        professionT={heroT("header.profession")}
        descriptionT={heroT("header.description")}
        resumeT={heroT("buttons.resume")}
        exploreT={heroT("nav.explore")}
        aboutT={heroT("nav.about")}
        navWorkT={heroT("nav.work")}
        navContactT={heroT("nav.contact")}
      />
      <Section titleT={aboutT("header.title")} subtitleT={aboutT("header.subtitle")} id="about">
        <About
          subsectionTitleT={aboutT("sub_section.title")}
          expT={{
            exp1: {
              date: aboutT("sub_section.experiences.exp1.date"),
              name: aboutT("sub_section.experiences.exp1.name"),
            },
            exp2: {
              date: aboutT("sub_section.experiences.exp2.date"),
              name: aboutT("sub_section.experiences.exp2.name"),
            },
            exp3: {
              date: aboutT("sub_section.experiences.exp3.date"),
              name: aboutT("sub_section.experiences.exp3.name"),
            },
          }}
          btnT={aboutT("sub_section.button")}
        />
      </Section>
      <Section titleT={workT("header.title")} subtitleT={workT("header.subtitle")} id="work">
        <Work />
      </Section>
      <Section titleT={contactT("header.title")} subtitleT={contactT("header.subtitle")} id="contact">
        <Contact />
      </Section>
      <Footer />
    </main>
  );
}
