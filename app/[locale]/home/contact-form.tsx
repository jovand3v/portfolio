"use client";
import { useEffect, useRef, useState } from "react";
import { ValidationError, useForm } from "@formspree/react";
import s from "./contact.module.scss";
import Spinner from "../common/spinner";

type Props = {
  firstNameT: string;
  lastNameT: string;
  messageT: string;
  buttonT: string;
  messageSuccessT: string;
  messageErrorT: string;
};

const ContactForm = (props: Props) => {
  const { firstNameT, lastNameT, messageT, buttonT, messageSuccessT, messageErrorT } = props;
  const [state, handleSubmitForm] = useForm(process.env.NEXT_PUBLIC_FORM!);
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.result) {
      if (state.result.kind === "success") {
        setMessage(messageSuccessT);
        if (formRef.current) {
          formRef.current.reset();
        }
      }
      if (state.errors !== null) {
        setMessage(messageErrorT);
      }
    }
  }, [state]);

  return (
    <form className={s.form} onSubmit={handleSubmitForm} ref={formRef}>
      <div className={s.nameInputContainer}>
        <input className={`${s.input} ${s.nameInput}`} placeholder={firstNameT} name="first name" required />
        <input className={`${s.input} ${s.nameInput} `} placeholder={lastNameT} name="last name" required />
      </div>
      <input className={`${s.input} `} type="email" name="email" placeholder="E-mail" required />
      <textarea className={`${s.input} ${s.messageInput}`} placeholder={messageT} name="message" required />
      <div className={s.btnAndStateContainer}>
        <button className={s.formBtn} disabled={state.submitting} type="submit">
          {buttonT}
        </button>
        {state.submitting && <Spinner size={25} />}
        {<p className={s.message}>{message}</p>}
        <ValidationError errors={state.errors} />
      </div>
    </form>
  );
};
export default ContactForm;
