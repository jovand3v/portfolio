import s from "./work-project-showcase.module.scss";
import WorkProjectCarousel from "./work-project-carousel";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import CodeIcon from "@/public/icons/code.svg";
import EyeIcon from "@/public/icons/eye.svg";
import { StaticImageData } from "next/image";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  liveLink: Url;
  githubLink: Url | null;
  reverse?: boolean;
  images: StaticImageData[];
};

const WorkProjectShowcase = (props: Props) => {
  const { title, subtitle, description, liveLink, githubLink, reverse, images } = props;

  return (
    <div className={`${s.main} ${reverse ? s.reversed : ""}`}>
      <div className={s.content}>
        <header className={s.header}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.subtitle}>{subtitle}</p>
        </header>
        <p className={s.description}>{description}</p>
        <div className={s.btns}>
          <Link href={liveLink} target="_blank" className={s.btnLinkWrapper}>
            <button className={s.btn}>
              View Live <EyeIcon className={s.btnIcon} />
            </button>
          </Link>
          {githubLink ? (
            <Link href={githubLink} target="_blank" className={s.btnLinkWrapper}>
              <button className={s.btn}>
                Code <CodeIcon className={s.btnIcon} />
              </button>
            </Link>
          ) : (
            <button className={s.btn}>
              Private <CodeIcon className={s.btnIcon} />
            </button>
          )}
        </div>
      </div>
      <WorkProjectCarousel images={images} />
    </div>
  );
};

export default WorkProjectShowcase;
