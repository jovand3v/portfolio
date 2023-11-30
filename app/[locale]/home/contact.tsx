import s from "./contact.module.scss";
import GithubIcon from "@/public/icons/github.svg";
import LinkedInIcon from "@/public/icons/linked-in.svg";
import bgDecal from "@/public/background-decals/bg-decal-1.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ContactForm from "./contact-form";

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
          <a href="https://www.linkedin.com/in/jovanilic23/" target="_blank">
            <LinkedInIcon className={s.socialIcon} />
          </a>
          <a href="https://www.linkedin.com/in/jovanilic23/" target="_blank">
            <GithubIcon className={s.socialIcon} />
          </a>
        </div>
      </div>
      <ContactForm
        firstNameT={t("form.firstName")}
        lastNameT={t("form.lastName")}
        messageT={t("form.message")}
        buttonT={t("form.button")}
        messageSuccessT={t("form.message_success")}
        messageErrorT={t("form.message_error")}
      />
      <Image src={bgDecal} alt="" className={`bgDecal ${s.bgDecal}`} quality={100} />
    </div>
  );
};

export default Contact;
