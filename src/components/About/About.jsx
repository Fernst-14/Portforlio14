import 'react'
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
  return (
  <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img 
        src="/images/about/code.jpg"
        alt="Me" 
        className={styles.aboutImage}
    />
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
                <h3>Sasithorn Techawannaphong (Fern)</h3>
                <p>August 14, 1998</p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src="/images/about/certificate.png" alt='Education'  className={styles.aboutImages}></img>
            <div className={styles.aboutItemText}>
                <h3>Education Background (AUG 2017 - JUNE 2021) </h3>
                <p>Bachelor&apos;s degree in Computer Science</p>
                <p>Khon Kaen University</p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src="/images/about/soft skill.png" alt='Intership'  className={styles.aboutImages}></img>
            <div className={styles.aboutItemText}>
                <h3>Soft Skills</h3>
                <p>Strong problem-solving & troubleshooting abilities</p>
                <p>Effective team collaboration & adaptability</p>
                <p>Good communication & active listening skills</p>
            </div>
        </li>
        
    </ul>
    </div>
  </section>
  );
};
