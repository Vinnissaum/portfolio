import { ArrowSquareOut } from 'phosphor-react';

import styles from './Projects.module.scss';
import projects from '../../data/projects';

export default function Projects() {
  return (
    <div className={`${styles.cardSection} text`}>
      <h1>Projects</h1>
      <div className={styles.line} />
      <div className={styles.cardContainer}>
        {projects.map(({
          name, description, technologies, screenshot, repository,
        }) => (
          <div className={styles.card} key={name + description}>
            <div className={styles.cardInfo}>
              <h2>{name}</h2>
              <p>{description}</p>
              <div className={styles.cardTechContainer}>
                {technologies.map((tech) => (
                  <div key={tech + Math.random()} className={styles.cardTech}>{tech}</div>
                ))}
              </div>
              <a href={repository} target="_blank" rel="noreferrer">
                <span>Repository</span>
                <ArrowSquareOut size={16} weight="bold" />
              </a>
            </div>
            <img src={screenshot} alt={name} />
          </div>
        ))}
      </div>
    </div>
  );
}
