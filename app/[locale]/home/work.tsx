import WorkProjectShowcase from "./work-project-showcase";
import s from "./work.module.scss";
import bgDecal from "@/public/background-decals/bg-decal-1.png";
import images from "./work-project-imgs";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Work = () => {
  const pherraT = useTranslations("Work.projects.pherra");
  const portfolioT = useTranslations("Work.projects.portfolio");
  const mashdappT = useTranslations("Work.projects.mashdapp");
  const keeptrackT = useTranslations("Work.projects.keeptrack");
  const buttonsT = useTranslations("Work.buttons");

  return (
    <div className={s.main}>
      <WorkProjectShowcase
        title="MASHDAPP"
        subtitle={mashdappT("subtitle")}
        description={mashdappT("description")}
        liveLink="https://www.mashd.app/"
        githubLink={null}
        images={images.mashdapp}
        reverse={true}
        buttons={{ viewLive: buttonsT("viewLive"), code: buttonsT("code"), private: buttonsT("private") }}
      />
      <WorkProjectShowcase
        title="PHERRA"
        subtitle={pherraT("subtitle")}
        description={pherraT("description")}
        liveLink="https://pherra.vercel.app/"
        githubLink="https://github.com/jovand3v/PHERRA"
        images={images.pherra}
        reverse={false}
        buttons={{ viewLive: buttonsT("viewLive"), code: buttonsT("code"), private: buttonsT("private") }}
      />
      <WorkProjectShowcase
        title="PORTFOLIO"
        subtitle={portfolioT("subtitle")}
        description={portfolioT("description")}
        liveLink="/"
        githubLink="https://github.com/jovand3v/portfolio"
        images={images.portfolio}
        reverse={true}
        buttons={{ viewLive: buttonsT("viewLive"), code: buttonsT("code"), private: buttonsT("private") }}
      />
      <WorkProjectShowcase
        title="KEEPTRACK"
        subtitle={keeptrackT("subtitle")}
        description={keeptrackT("description")}
        liveLink="https://keep-track.netlify.app/"
        githubLink=""
        images={images.keep_track}
        reverse={false}
        buttons={{ viewLive: buttonsT("viewLive"), code: buttonsT("code"), private: buttonsT("private") }}
      />
      <Image src={bgDecal} className={`bgDecal ${s.bgDecal}`} alt="" quality={100} />
    </div>
  );
};

export default Work;
