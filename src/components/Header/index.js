import { Link } from 'react-router-dom';
import {
  Terminal, Moon, Sun, List, X,
} from 'phosphor-react';
import { useContext, useState, useRef } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import styles from './Header.module.scss';

export default function Header() {
  const { theme, onToggleTheme } = useContext(ThemeContext);
  const navElement = useRef();
  const [toggleMenuNav, setToggleMenuNav] = useState(false);
  const links = [
    { path: '/', text: 'About' },
    { path: '/skills', text: 'Skills' },
    { path: '/projects', text: 'Projects' },
    { path: '/contact', text: 'Contact me' },
  ];

  const handleToggleNav = () => {
    setToggleMenuNav(!toggleMenuNav);

    navElement.current.classList.toggle(styles.openedNav, !toggleMenuNav);
  };

  return (
    <header className={`${styles.header} background text`}>
      <Link to="/" className={`${styles['code-icon']} text`}>
        <Terminal size={36} weight="bold" className={styles.code} />
      </Link>
      <nav className="background" ref={navElement}>

        <ul>
          {links.map(({ path, text }) => (
            <li key={path}>
              <Link
                onFocus={({ target }) => target.classList.add(styles.activeLink)}
                onBlur={({ target }) => target.classList.remove(styles.activeLink)}
                to={path}
                className="text"
                onClick={() => handleToggleNav()}
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
