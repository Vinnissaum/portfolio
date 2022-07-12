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
      <header className={`${styles.header} text`}>
        <h1>
          {text}
          <Cursor />
        </h1>
        <h2>Front-End developer</h2>
      </header>
      <div className={styles.line} />
      <div className={`${styles.info} text`}>
        Hey 👋, I&apos;m Vinicius! a.k.a Vinissaum.
        <p>
          Um desenvolvedor Front-End e por incrível que possa parecer, aluno de
          Engenharia Mecânica, atualmente cursando o 8º semestre.
        </p>
        <p>
          Despite this setback with college now my focus is on becoming a great
          developer, taking one step at a time. Currently
          {' '}
          <i>Open to work!</i>
        </p>
      </div>
    </div>
  );
}
