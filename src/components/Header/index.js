import { Link } from 'react-router-dom';
import { Code, Moon } from 'phosphor-react';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className="background text">
      <a href="/" className={styles['code-icon']}>
        <Code size={24} weight="bold" className={styles.code} />
        <span>Vinicius Braz</span>
      </a>
      <nav>
        <ul>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/stack">Tecnologias</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
        </ul>
      </nav>
      <div className={styles['toggle-theme']}>
        <Moon size={24} weight="duotone" />
      </div>
    </header>
  );
}
