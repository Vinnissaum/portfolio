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
        <h1>
          {text}
          <Cursor />
        </h1>
        <h2>Desenvolvedor Front-End</h2>
      </header>
      <p className={styles.info}>
        Fala ae, sou o Vinicius! Também conhecido como Vinissaum.
        <p>
          Um desenvolvedor Front-End e por incrível que possa parecer, aluno de
          Engenharia Mecânica, atualmente cursando o 8º semestre.
        </p>
        <p>
          Apesar desse contratempo com a faculdade agora o foco é me tornar um
          grande desenvolvedor, dando um passo de cada vez. Atualmente
          {' '}
          <i>Open to work!</i>
        </p>
      </p>
    </div>
  );
}
