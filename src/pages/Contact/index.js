import { SiWhatsapp, SiLinkedin, SiGithub } from 'react-icons/si';

import styles from './Contact.module.scss';

export default function Contact() {
  const ContactWays = [
    {
      name: 'Whatsapp', path: 'https://wa.me/5512997400357', icon: <SiWhatsapp />, color: '#3CAF29',
    },
    {
      name: 'Linkedin', path: 'https://www.linkedin.com/in/vinicius-braz-2052/', icon: <SiLinkedin />, color: '#2867B2',
    },
    {
      name: 'Github', path: 'https://github.com/Vinnissaum', icon: <SiGithub />, color: '#000000',
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Contact me</h1>
      <div className={styles.line} />
      <p>Get in touch!</p>
      <div className={styles.iconsContainer}>
        {ContactWays.map(({
          name, path, icon, color,
        }) => (
          <a
            key={name}
            className={styles.icon}
            href={path}
            target="_blank"
            style={{ color }}
            rel="noreferrer"
          >
            {icon}
            <span>{name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
