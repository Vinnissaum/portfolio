import { BrowserRouter } from 'react-router-dom';

import '../../assets/styles/global.scss';
import Header from '../Header';
import Routes from '../../routes';
import styles from './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="light">
        <Header />
        <div className={styles.container}>
          <Routes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
