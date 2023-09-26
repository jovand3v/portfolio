import { ReactNode } from "react";
import s from "./section.module.scss";

type Props = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

const Section = (props: Props) => {
  const { title, subtitle, children } = props;

  return (
    <div className={s.main}>
      <header className={s.header}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.subtitle}>{subtitle}</p>
      </header>
      <div className={s.content}>{children}</div>
    </div>
  );
};

export default Section;
