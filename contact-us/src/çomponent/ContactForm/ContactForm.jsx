import style from "./Contactform.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [text, setText] = useState();

  const onsubmit = (event)=>{
      event.preventDefault();
      setName(event.target[0].value);
      setEmail(event.target[1].value);
      setText(event.target[2].value);

    }

  return (
    <section className={style.container}>
      <div className={style.contact_form}>
        <div className={style.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="28px" />}
          />
          <Button
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="28px" />}
          />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<IoMdMail fontSize="28px" />}
        />
        <form onSubmit={onsubmit}>
          <div className={style.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={style.form_control}>
            <label htmlFor="Email">Email</label>
            <input type="Email" name="Email" />
          </div>
          <div className={style.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT " />
          </div>
          <div>{name + "  " + email + "  " + text}</div>
        </form>
      </div>

      <div className={style.contact_image}>
        <img src="/service.png" alt="aruuu" />
      </div>
    </section>
  );
};

export default ContactForm;
