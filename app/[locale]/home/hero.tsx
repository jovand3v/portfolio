import Link from "next/link";
import Image from "next/image";
import s from "./hero.module.scss";
import LinkedInIcon from "@/public/icons/linked-in.svg";
import GithubIcon from "@/public/icons/github.svg";
import ResumeDownloadIcon from "@/public/icons/resume-download.svg";
import ArrowIcon from "@/public/icons/arrow.svg";
import bgDecal from "@/public/background-decals/bg-decal-1.png";
import HeroDropdown from "./hero-dropdown";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <header className={s.main}>
      <h1 className={s.title}>
        Jovan Ilić
        <div className={s.professionContainerMobile}>
          <span className={s.profession}>
            Front-end <br className={s.professionBr} />
            {t("header.profession")}
          </span>
          <HeroDropdown />
        </div>
      </h1>
      <div className={s.aboutContainer}>
        <div className={s.descriptionAndSocialsContainer}>
          <p className={s.description}>{t("header.description")}</p>
          <ul className={s.socials}>
            <li className={s.social}>
              <LinkedInIcon className={s.socialIcon} />
            </li>
            <li className={s.social}>
              <GithubIcon className={s.socialIcon} />
            </li>
            <li className={`${s.social} ${s.socialResume}`}>
              <span className={s.socialText}>{t("buttons.resume")}</span>
              <ResumeDownloadIcon className={`${s.socialIcon} ${s.resumeIcon}`} />
            </li>
          </ul>
        </div>
        <nav className={s.nav}>
          <span className={s.navTitle}>
            {t("nav.explore")} <div className={s.navTitleLine}></div>
          </span>
          <ul className={s.navList}>
            <li className={s.navItem}>
              <Link className={s.navLink} href="#about">
                {t("nav.about")}
              </Link>
            </li>
            <li className={s.navItem}>
              <Link className={s.navLink} href="#work">
                {t("nav.work")}
              </Link>
            </li>
            <li className={s.navItem}>
              <Link className={s.navLink} href="#contact">
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <ArrowIcon className={s.exploreIcon} />
      <Image src={bgDecal} className={`bgDecal ${s.bgDecal}`} quality={100} alt="" />
    </header>
  );
};

export default Hero;
