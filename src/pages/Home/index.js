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
        Hey 👋,
        {' '}
        <span>I&apos;m Vinicius!</span>
        {' '}
        a.k.a Vinissaum.
        <p>
          A Front-End developer and as incredible as it may seem, a mechanical
          engineering student, currently in the 8th period.
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
