"use client";
import s from "./work-project-showcase.module.scss";
import WorkProjectCarousel from "./work-project-carousel";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import CodeIcon from "@/public/icons/code.svg";
import EyeIcon from "@/public/icons/eye.svg";
import EyeOffIcon from "@/public/icons/eye-off.svg";
import { StaticImageData } from "next/image";
import { useState } from "react";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  liveLink?: Url;
  githubLink: Url | null;
  reverse?: boolean;
  images: StaticImageData[];
  buttons: { viewLive: string; code: string; codePrivate: string; viewLivePrivate: string };
};

const WorkProjectShowcase = (props: Props) => {
  const { title, subtitle, description, liveLink, githubLink, reverse, images, buttons } = props;
  const [selected, setSelected] = useState<StaticImageData>(images[0]);
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <div className={`${s.main} ${reverse ? s.reversed : ""}`}>
      <div className={s.content}>
        <header className={s.header}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.subtitle}>{subtitle}</p>
        </header>
        <p className={s.description}>{description}</p>
        <div className={s.btns}>
          {liveLink ? (
            <Link href={liveLink} target="_blank" className={s.btnLinkWrapper}>
              <button className={s.btn}>
                {buttons.viewLive} <EyeIcon className={s.btnIcon} />
              </button>
            </Link>
          ) : (
            <button className={`${s.btn} ${s.btnDisabled}`} disabled={true}>
              {buttons.viewLivePrivate} <EyeOffIcon className={s.btnIcon} />
            </button>
          )}
          {githubLink ? (
            <Link href={githubLink} target="_blank" className={s.btnLinkWrapper}>
              <button className={s.btn}>
                {buttons.code} <CodeIcon className={s.btnIcon} />
              </button>
            </Link>
          ) : (
            <button className={`${s.btn} ${s.btnDisabled}`} disabled={true}>
              {buttons.codePrivate} <CodeIcon className={s.btnIcon} />
            </button>
          )}
        </div>
      </div>
      <WorkProjectCarousel
        images={images}
        fullscreen={fullscreen}
        setFullscreen={setFullscreen}
        selected={selected}
        setSelected={setSelected}
      />
      {fullscreen && (
        <WorkProjectCarousel
          images={images}
          fullscreen={true}
          setFullscreen={setFullscreen}
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </div>
  );
};

export default WorkProjectShowcase;
