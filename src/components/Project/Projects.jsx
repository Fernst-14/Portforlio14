import "react";
import project from "../data/project.json";
import { ProjectCard } from "./ProjectCard";
import styles from './Project.module.css';

export const Project = () => {
  return (
    <section className={styles.container} id="project">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {project.map((project, id) => {
          return (
           <ProjectCard key={id} project={project}/>
          );
        })}
      </div>
    </section>
  );
};
