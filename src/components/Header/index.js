import { Link } from 'react-router-dom';
import { Code, Moon, Sun } from 'phosphor-react';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={`${styles.header} background text`}>
      <Link to="/" className={styles['code-icon']}>
        <Code size={24} weight="bold" className={styles.code} />
        <span>Vinicius Braz</span>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Sobre</Link>
          </li>
          <li>
            <Link to="/stack">Tecnologias</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
      <div className={styles['toggle-theme']}>
        <Moon size={24} weight="duotone" />
        <Sun size={24} weight="duotone" />
      </div>
    </header>
  );
}
