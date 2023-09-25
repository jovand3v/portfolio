import Link from "next/link";
import s from "./hero.module.scss";
import LinkedInIcon from "@/public/icons/linked-in.svg";
import GithubIcon from "@/public/icons/github.svg";
import ResumeDownloadIcon from "@/public/icons/resume-download.svg";
import ArrowIcon from "@/public/icons/arrow.svg";
import ArrowShortIcon from "@/public/icons/arrow-short.svg";
import BgDecal from "@/public/background-decals/bg-decal-1.svg";

const Hero = () => {
  return (
    <header className={s.main}>
      <h1 className={s.title}>
        Jovan Ilić <span className={s.profession}>Front-end Developer</span>
      </h1>
      <div className={s.bottom}>
        <div className={s.descriptionAndSocialsContainer}>
          <p className={s.description}>
            Hi, my name is Jovan Ilić. I'm a front-end developer, from Serbia, with back-end experience and a passion
            for design. Explore my portfolio or download my resume to learn more.
          </p>
          <ul className={s.socials}>
            <li className={s.social}>
              <LinkedInIcon className={s.socialIcon} />
            </li>
            <li className={s.social}>
              <GithubIcon className={s.socialIcon} />
            </li>
            <li className={`${s.social} ${s.socialResume}`}>
              <span className={s.socialText}>Resume</span>
              <ResumeDownloadIcon className={s.socialIcon} />
            </li>
          </ul>
        </div>
        <nav className={s.nav}>
          <span className={s.navTitle}>
            Explore <div className={s.navTitleLine}></div>
          </span>
          <ul className={s.navList}>
            <li className={s.navItem}>
              <Link className={s.navLink} href="#about">
                About
              </Link>
            </li>
            <li className={s.navItem}>
              <Link className={s.navLink} href="#work">
                Work
              </Link>
            </li>
            <li className={s.navItem}>
              <Link className={s.navLink} href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <ArrowIcon className={s.exploreIcon} />
      <div className={s.lang}>
        <span className={s.langSelected}>EN</span>
        <ArrowShortIcon className={s.langIcon} />
      </div>
      <BgDecal className={s.bgDecal} />
    </header>
  );
};

export default Hero;
