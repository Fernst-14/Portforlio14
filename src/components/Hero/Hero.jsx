import "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, I&apos;m Fern</h1>
        <p className={styles.description}>
        Developer with 2.5 years of experience in IT support,
        automation, and software development. Skilled in both web technologies and process improvement, and open to diverse opportunities.
        </p>

        <a
          href="mailto:sasithorntechawannaphong@gmail.com"
          className={styles.contextBtn}
        >
          Contact me
        </a>
        {/* 📄 Resume & CV Buttons */}
        <div className={styles.buttonGroup}>
          <a href="/Sasithorn_Resume(TH&EN).zip" download className={styles.downloadBtn}>
            Download Resume
          </a>
          <a href="/Sasithorn_CV_(TH&EN).zip" download className={styles.downloadBtnAlt}>
            Download CV
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
