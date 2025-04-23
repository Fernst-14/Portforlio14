import "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
import aboutEn from "./about-en";
import aboutTh from "./about-th";
import { useLanguage } from "../Context/LanguageContext";

export const About = () => {
  const { lang } = useLanguage();
  const t = lang === "en" ? aboutEn : aboutTh;

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t.about.title}</h2>
      <div className={styles.content}>
        <img
          src="/images/about/code.jpg"
          alt="Me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>{t.about.name}</h3>
              <p>{t.about.dob}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src="/images/about/certificate.png"
              alt="Education"
              className={styles.aboutImages}
            ></img>
            <div className={styles.aboutItemText}>
              <h3>{t.about.educationTitle}</h3>
              <p>{t.about.educationDesc1}</p>
              <p>{t.about.educationDesc2}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src="/images/about/certificate.png"
              alt="Education"
              className={styles.aboutImages}
            ></img>
            <div className={styles.aboutItemText}>
              <h3>{t.about.devTitle}</h3>
              <p>{t.about.devDesc1}</p>
              <p>{t.about.devDesc2}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src="/images/about/soft skill.png"
              alt="Intership"
              className={styles.aboutImages}
            ></img>
            <div className={styles.aboutItemText}>
              <h3>{t.about.softTitle}</h3>
              {t.about.softSkillList.map((skill, idx) => (
                <p key={idx}>{skill}</p>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
