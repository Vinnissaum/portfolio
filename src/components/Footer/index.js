import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={`${styles.footer} background`}>
      <p>
        &copy; 2022 - Made with love ❤️ by Vinicius Braz using Javascript, React and Sass.
      </p>
    </footer>
  );
}
