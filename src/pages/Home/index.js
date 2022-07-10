import { useTypewriter, Cursor } from 'react-simple-typewriter';

import styles from './Home.module.scss';

export default function Home() {
  const { text } = useTypewriter({
    words: ['Vinicius Braz', 'Vinissaum'],
    loop: 1,
    typeSpeed: 50,
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>
            {text}
            <Cursor />
          </h1>
          <h2>Desenvolvedor Front-End</h2>
        </div>
      </header>
    </div>
  );
}
