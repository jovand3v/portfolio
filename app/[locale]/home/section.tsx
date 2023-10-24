import { ReactNode } from "react";
import s from "./section.module.scss";

type Props = {
  titleT: string;
  subtitleT: string;
  children: ReactNode;
  id: string;
};

const Section = (props: Props) => {
  const { titleT, subtitleT, children, id } = props;

  return (
    <section className={s.main} id={id}>
      <header className={s.header}>
        <h2 className={s.title}>{titleT}</h2>
        <p className={s.subtitle}>{subtitleT}</p>
      </header>
      <div className={s.content}>{children}</div>
    </section>
  );
};

export default Section;
