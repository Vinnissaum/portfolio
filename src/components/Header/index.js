import { Link, useLocation } from 'react-router-dom';
import { Terminal, Moon, Sun } from 'phosphor-react';
import { useContext, useEffect } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import styles from './Header.module.scss';

export default function Header() {
  const { theme, onToggleTheme } = useContext(ThemeContext);
  const { pathname } = useLocation();

  function getElementByHref(path) {
    [...document.querySelectorAll('a')]
      .forEach((a) => (a.getAttribute('href') === path
        ? a.classList.add(styles.activeLink)
        : a.classList.remove(styles.activeLink)));
  }

  useEffect(() => {
    getElementByHref(pathname);
  }, [pathname]);

  return (
    <header className={`${styles.header} background text`}>
      <Link to="/" className={`${styles['code-icon']} text`}>
        <Terminal size={36} weight="bold" className={styles.code} />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/" className="text">About</Link>
          </li>
          <li>
            <Link to="/stack" className="text">Skills</Link>
          </li>
          <li>
            <Link to="/projects" className="text">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="text">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={styles['toggle-theme']}>
        {theme === 'dark'
          ? <Moon size={24} weight="duotone" onClick={onToggleTheme} />
          : <Sun size={24} weight="duotone" onClick={onToggleTheme} />}
      </div>
    </header>
  );
}
