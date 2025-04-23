import "react";
import skills from "../data/skills.json";
import history from "../data/history.json";
import styles from './Experience.module.css';
import { useLanguage } from "../Context/LanguageContext";

export const Experience = () => {
  const { lang } = useLanguage();
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>{}{lang === 'en' ? 'Experience' : 'ประสบการณ์'}</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skills, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={`/images/skills/${skills.imageSrc}`} alt={skills.title} />
                </div>
                <p>{skills.title[lang]}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img src={`/images/history/${historyItem.imageSrc}`} alt={historyItem.organisation} />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role[lang]}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences[lang].map((experiences, id) => {
                        return (
                            <li key={id}>
                                {experiences}
                            </li>
                        );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
