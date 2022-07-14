import { Link, useLocation } from 'react-router-dom';
import {
  Terminal, Moon, Sun, List, X,
} from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import styles from './Header.module.scss';

export default function Header() {
  const { theme, onToggleTheme } = useContext(ThemeContext);
  const [toggleMenuNav, setToggleMenuNav] = useState(false);
  const { pathname } = useLocation();
  const links = [
    { path: '/', text: 'About' },
    { path: '/skills', text: 'Skills' },
    { path: '/projects', text: 'Projects' },
    { path: '/contact', text: 'Contact me' },
  ];

  function getElementByHref(path) {
    [...document.querySelectorAll('a')]
      .forEach((a) => (a.getAttribute('href') === path
        ? a.classList.add(styles.activeLink)
        : a.classList.remove(styles.activeLink)));
  }

  const handleToggleNav = () => {
    setToggleMenuNav(!toggleMenuNav);
    const nav = document.querySelector('nav');

    if (nav.classList.contains(styles.openedNav)) {
      nav.classList.remove(styles.openedNav);
    } else {
      nav.classList.add(styles.openedNav);
    }
  };

  useEffect(() => {
    getElementByHref(pathname);
  }, [pathname]);

  return (
    <header className={`${styles.header} background text`}>
      <Link to="/" className={`${styles['code-icon']} text`}>
        <Terminal size={36} weight="bold" className={styles.code} />
      </Link>
      <nav className="background">

        <ul>
          {links.map(({ path, text }) => (
            <li key={path}>
              <Link
                to={path}
                className="text"
                onClick={handleToggleNav}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.toggleIcons}>
        {theme === 'dark'
          ? <Moon size={24} weight="duotone" onClick={onToggleTheme} />
          : <Sun size={24} weight="duotone" onClick={onToggleTheme} />}
      </div>
      <div className={styles.toggleMenuNav}>
        {toggleMenuNav
          ? <X size={24} onClick={handleToggleNav} />
          : <List size={24} onClick={handleToggleNav} />}
      </div>
    </header>
  );
}
