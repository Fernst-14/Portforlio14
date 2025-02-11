import  'react'

import styles from './Hero.module.css';


export const Hero = () =>{
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I&apos;m Fern</h1>
            <p className={styles.description}>
                I&apos;m an IT Programmer with 2 years and 6 months of experience.
            </p>

            <a href="mailto:sasithorntechawannaphong@gmail.com" className={styles.contextBtn}>Contact me</a>
        </div>
        <img src={`/images/hero/heroImage2.png`} alt="Me" className={styles.heroImg} />
        {/* <img src="assets/hero/heroImage2.png" alt="Hero image of me" className={styles.heroImg} /> */}
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
    );
}