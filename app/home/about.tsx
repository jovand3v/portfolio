import s from "./about.module.scss";
import HtmlIcon from "@/public/icons/technologies/html.svg";
import CssIcon from "@/public/icons/technologies/css.svg";
import JavaScriptIcon from "@/public/icons/technologies/javascript.svg";
import SqlIcon from "@/public/icons/technologies/sql.svg";
import NextJsIcon from "@/public/icons/technologies/nextjs.svg";
import TypeScriptIcon from "@/public/icons/technologies/typescript.svg";
import NodeJsIcon from "@/public/icons/technologies/nodejs.svg";
import ExpressIcon from "@/public/icons/technologies/express.svg";
import FigmaIcon from "@/public/icons/technologies/figma.svg";
import NetlifyIcon from "@/public/icons/technologies/netlify.svg";
import SassIcon from "@/public/icons/technologies/sass.svg";
import ReactIcon from "@/public/icons/technologies/react.svg";
import ReduxIcon from "@/public/icons/technologies/redux.svg";
import GitIcon from "@/public/icons/technologies/git.svg";
import RestIcon from "@/public/icons/technologies/rest.svg";
import ArrowIcon from "@/public/icons/arrow.svg";
import BgDecal from "@/public/background-decals/bg-decal-1.svg";

const About = () => {
  return (
    <div className={s.main}>
      <div className={s.exp}>
        <h3 className={s.expTitle}>Experience</h3>
        <ul className={s.expList}>
          <li className={s.expItem}>
            <span className={s.expItemDate}>JAN 2021 - MARCH 2022</span>
            <span className={s.expItemTitle}>Front-end Developer • Freelance</span>
          </li>
          <li className={s.expItem}>
            <span className={s.expItemDate}>MARCH 2022 - NOV 2022</span>
            <span className={s.expItemTitle}>Full-stack Developer • Nephalum Ltd.</span>
          </li>
          <li className={s.expItem}>
            <span className={s.expItemDate}>APRIL 2023 - SEP 2023</span>
            <span className={s.expItemTitle}>Front-end Developer • Nephalum Ltd.</span>
          </li>
        </ul>
        <button className={s.expBtn}>
          Learn more <ArrowIcon className={s.expBtnArrowIcon} />
        </button>
      </div>
      <ul className={s.skills}>
        <li className={s.skill}>
          <HtmlIcon className={s.skillIcon} />
          <span className={s.skillName}>HTML</span>
        </li>
        <li className={s.skill}>
          <CssIcon className={s.skillIcon} />
          <span className={s.skillName}>CSS</span>
        </li>
        <li className={s.skill}>
          <JavaScriptIcon className={s.skillIcon} />
          <span className={s.skillName}>JavaScript</span>
        </li>
        <li className={s.skill}>
          <SqlIcon className={s.skillIcon} />
          <span className={s.skillName}>SQL</span>
        </li>
        <li className={s.skill}>
          <NextJsIcon className={s.skillIcon} />
          <span className={s.skillName}>NextJS</span>
        </li>
        <li className={s.skill}>
          <TypeScriptIcon className={s.skillIcon} />
          <span className={s.skillName}>TypeScript</span>
        </li>
        <li className={s.skill}>
          <NodeJsIcon className={s.skillIcon} />
          <span className={s.skillName}>NodeJS</span>
        </li>
        <li className={s.skill}>
          <ExpressIcon className={s.skillIcon} />
          <span className={s.skillName}>Express</span>
        </li>
        <li className={s.skill}>
          <FigmaIcon className={s.skillIcon} />
          <span className={s.skillName}>Figma</span>
        </li>
        <li className={s.skill}>
          <NetlifyIcon className={s.skillIcon} />
          <span className={s.skillName}>Netlify</span>
        </li>
        <li className={s.skill}>
          <SassIcon className={s.skillIcon} />
          <span className={s.skillName}>SCSS</span>
        </li>
        <li className={s.skill}>
          <ReactIcon className={s.skillIcon} />
          <span className={s.skillName}>React</span>
        </li>
        <li className={s.skill}>
          <ReduxIcon className={s.skillIcon} />
          <span className={s.skillName}>Redux</span>
        </li>
        <li className={s.skill}>
          <GitIcon className={s.skillIcon} />
          <span className={s.skillName}>Git</span>
        </li>
        <li className={s.skill}>
          <RestIcon className={s.skillIcon} />
          <span className={s.skillName}>RESTful APIs</span>
        </li>
      </ul>
      <BgDecal className={`bgDecal ${s.bgDecal}`} />
    </div>
  );
};

export default About;
