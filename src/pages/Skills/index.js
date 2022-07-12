import styles from './Skills.module.scss';
import skillsIcons from '../../data/skills';

export default function Skills() {
  return (
    <div className={`${styles.container} text`}>
      <h1>Skills</h1>
      <div className={styles.line} />
      <div className={styles.skillsGrid}>
        {skillsIcons.map(({ name, icon, color }) => (
          <div
            key={name}
            style={{ color, opacity: 1 }}
            className={styles.skillsIcon}
          >
            {icon}
            <span className="text">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
