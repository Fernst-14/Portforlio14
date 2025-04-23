/* eslint-disable react/prop-types */
import "react";

import styles from "./ProjectCard.module.css";
import { useLanguage } from "../Context/LanguageContext";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo },
}) => {
  const { lang } = useLanguage();

  return (
    <div className={styles.container}>
      <img src={`/images/project/${imageSrc}`} alt={title} className={styles.imagesPro}/>
      <h3 className={styles.title}>{title[lang]}</h3>
      <p className={styles.description}>{description[lang]}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill} >
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a
          href={demo}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
      </div>
    </div>
  );
};
