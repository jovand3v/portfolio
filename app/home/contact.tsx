import s from "./contact.module.scss";
import GithubIcon from "@/public/icons/github.svg";
import LinkedInIcon from "@/public/icons/linked-in.svg";

const Contact = () => {
  return (
    <div className={s.main}>
      <div className={s.textContainer}>
        <header className={s.header}>
          <h3 className={s.title}>Get in touch</h3>
          <span className={s.subtitle}>Let's work together</span>
        </header>
        <p className={s.description}>Feel free to contact me at any time. I'll respond as soon as possible.</p>
        <div className={s.socialIcons}>
          <LinkedInIcon className={s.socialIcon} />
          <GithubIcon className={s.socialIcon} />
        </div>
      </div>
      <form className={s.form}>
        <div className={s.nameInputContainer}>
          <input className={`${s.input} ${s.nameInput}`} placeholder="First name" />
          <input className={`${s.input} ${s.nameInput}`} placeholder="Last name" />
        </div>
        <input className={s.input} placeholder="E-mail" />
        <textarea className={`${s.input} ${s.messageInput}`} placeholder="Message" />
        <button className={s.formBtn}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
