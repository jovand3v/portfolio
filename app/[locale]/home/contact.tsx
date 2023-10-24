import s from "./contact.module.scss";
import GithubIcon from "@/public/icons/github.svg";
import LinkedInIcon from "@/public/icons/linked-in.svg";
import bgDecal from "@/public/background-decals/bg-decal-1.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <div className={s.main}>
      <div className={s.textContainer}>
        <header className={s.header}>
          <h3 className={s.title}>{t("sub_section.title")}</h3>
          <span className={s.subtitle}>{t("sub_section.subtitle")}</span>
        </header>
        <p className={s.description}>{t("sub_section.description")}</p>
        <div className={s.socialIcons}>
          <LinkedInIcon className={s.socialIcon} />
          <GithubIcon className={s.socialIcon} />
        </div>
      </div>
      <form className={s.form}>
        <div className={s.nameInputContainer}>
          <input className={`${s.input} ${s.nameInput}`} placeholder={t("form.firstName")} />
          <input className={`${s.input} ${s.nameInput}`} placeholder={t("form.lastName")} />
        </div>
        <input className={s.input} placeholder="E-mail" />
        <textarea className={`${s.input} ${s.messageInput}`} placeholder={t("form.message")} />
        <button className={s.formBtn}>{t("form.button")}</button>
      </form>
      <Image src={bgDecal} alt="" className={`bgDecal ${s.bgDecal}`} quality={100} />
    </div>
  );
};

export default Contact;
