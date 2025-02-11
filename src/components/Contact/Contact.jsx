import "react";
import { getImageUrl } from "../../utils";
import styles from './Contact.module.css';
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
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
