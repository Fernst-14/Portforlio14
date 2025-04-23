import "react";
import { getImageUrl } from "../../utils";
import styles from './Contact.module.css';
import contactEn from "./contact-en";
import contactTh from "./contact-th";
import { useLanguage } from "../Context/LanguageContext";

export const Contact = () => {
  const { lang } = useLanguage();
  const t = lang === "en" ? contactEn : contactTh;


  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{t.contact.title}</h2>
        <p>{t.contact.subtitle}</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/email.png")} alt="email" />
          <a href="mailto:sasithorntechawannaphong@gmail.com" target="_blank" rel="noopener noreferrer">
            sasithorntechawannaphong@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github.png")} alt="github" />
          <a href="https://github.com/Fernst-14" target="_blank" rel="noopener noreferrer">
            github.com/Fernst-14
          </a>
        </li>
      </ul>
    </footer>
  );
};
