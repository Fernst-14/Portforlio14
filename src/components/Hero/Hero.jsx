import "react";

import styles from "./Hero.module.css";
import HeroTH from "./Hero-th";
import HeroEN from "./Hero-en";
import { useLanguage } from "../Context/LanguageContext";


export const Hero = () => {
    const { lang } = useLanguage();
    const t = lang === "en" ? HeroEN : HeroTH;

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> {t.hero.title} </h1>
        <p className={styles.description}>
            {t.hero.description}
        </p>

        <a
          href="mailto:sasithorntechawannaphong@gmail.com"
          className={styles.contextBtn}
        >
          {t.hero.contact}
        </a>
        {/* 📄 Resume & CV Buttons */}
        <div className={styles.buttonGroup}>
          <a href="/Sasithorn-Resume (TH&EN).zip" download className={styles.downloadBtn}>
            {t.hero.downloadResume}
          </a>
          <a href="/Sasithorn-CV (EN&TH).zip" download className={styles.downloadBtnAlt}>
            {t.hero.downloadCV}
          </a>
        </div>
      </div>
      <img
        src={`/images/hero/pic1 copy.png`}
        alt="Me"
        className={styles.heroImg}
      />
      {/* <img src="assets/hero/heroImage2.png" alt="Hero image of me" className={styles.heroImg} /> */}
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
