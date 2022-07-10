import styles from './Stack.module.scss';
import stackIcons from '../../data/stackIcons';

export default function Stack() {
  return (
    <div className={styles.container}>
      <div className={styles.stackGrid}>
        {stackIcons.map(({ name, icon, color }) => (
          <div
            key={name}
            style={{ opacity: 1, color }}
            className={styles.stackIcon}
          >
            {icon}
            <span>
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
