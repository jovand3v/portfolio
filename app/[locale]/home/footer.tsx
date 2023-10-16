import s from "./footer.module.scss";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return <div className={s.main}>{t("copyright")}</div>;
};

export default Footer;
