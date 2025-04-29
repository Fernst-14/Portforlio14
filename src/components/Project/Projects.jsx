import "react";
import projectData from "../data/project.json";
import { ProjectCard } from "./ProjectCard";
import styles from './Project.module.css';
import { useLanguage } from "../Context/LanguageContext";

export const Project = () => {
  const { lang } = useLanguage();
  const categories = ["University", "Workshop", "Professional"];

  return (
    <section className={styles.container} id="project">
      <h2 className={styles.title}>{}{lang === 'en' ? 'Projects' : 'โปรเจกต์'}</h2>
      {categories.map((category) => {
        // กรองโปรเจกต์ที่มี category ตรงกับหมวดหมู่
        const filteredProjects = projectData.filter(project => project.category === category);

        return (
          <div key={category} className={styles.categoryContainer}>
            <h3 className={styles.categoryTitle}>
              {category === 'University' ? (lang === 'en' ? 'University Projects' : 'โปรเจกต์มหาวิทยาลัย') :
               category === 'Workshop' ? (lang === 'en' ? 'Workshop Projects' : 'โปรเจกต์เวิร์กช็อป') :
               (lang === 'en' ? 'Professional Projects' : 'โปรเจกต์ในการทำงาน')}
            </h3>

            <div className={styles.projects}>
              {filteredProjects.map((project, id) => {
                return (
                  <ProjectCard key={id} project={project} />
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};