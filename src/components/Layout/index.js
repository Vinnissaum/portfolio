import styles from './Layout.module.scss';
import Header from '../Header';

export default function Layout() {
  return (
    <div className={`${styles.container} light`}>
      <Header />
    </div>
  );
}
