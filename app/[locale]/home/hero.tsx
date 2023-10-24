"use client";
import Image from "next/image";
import s from "./hero.module.scss";
import LinkedInIcon from "@/public/icons/linked-in.svg";
import GithubIcon from "@/public/icons/github.svg";
import ResumeDownloadIcon from "@/public/icons/resume-download.svg";
import ArrowIcon from "@/public/icons/arrow.svg";
import bgDecal from "@/public/background-decals/bg-decal-1.png";
import HeroDropdown from "./hero-dropdown";
import useScroll from "@/app/hooks/useScroll";

type Props = {
  professionT: string;
  descriptionT: string;
  resumeT: string;
  exploreT: string;
  aboutT: string;
  navWorkT: string;
  navContactT: string;
};

const Hero = (props: Props) => {
  const { professionT, descriptionT, resumeT, exploreT, aboutT, navWorkT, navContactT } = props;

  return (
    <header className={s.main}>
      <h1 className={s.title}>
        Jovan Ilić
        <div className={s.professionContainerMobile}>
          <span className={s.profession}>
            Front-end <br className={s.professionBr} />
            {professionT}
          </span>
          <HeroDropdown />
        </div>
      </h1>
      <div className={s.aboutContainer}>
        <div className={s.descriptionAndSocialsContainer}>
          <p className={s.description}>{descriptionT}</p>
          <ul className={s.socials}>
            <li className={s.social}>
              <LinkedInIcon className={s.socialIcon} />
            </li>
            <li className={s.social}>
              <GithubIcon className={s.socialIcon} />
            </li>
            <li className={`${s.social} ${s.socialResume}`}>
              <span className={s.socialText}>{resumeT}</span>
              <ResumeDownloadIcon className={`${s.socialIcon} ${s.resumeIcon}`} />
            </li>
          </ul>
        </div>
        <nav className={s.nav}>
          <span className={s.navTitle}>
            {exploreT} <div className={s.navTitleLine}></div>
          </span>
          <ul className={s.navList}>
            <li className={s.navItem} onClick={() => useScroll("about")}>
              {aboutT}
            </li>
            <li className={s.navItem} onClick={() => useScroll("work")}>
              {navWorkT}
            </li>
            <li className={s.navItem} onClick={() => useScroll("contact")}>
              {navContactT}
            </li>
          </ul>
        </nav>
      </div>
      <ArrowIcon className={s.exploreIcon} onClick={() => useScroll("about")} />
      <Image src={bgDecal} className={`bgDecal ${s.bgDecal}`} quality={100} alt="" priority={true} />
    </header>
  );
};

export default Hero;
