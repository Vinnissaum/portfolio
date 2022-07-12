import { BrowserRouter } from 'react-router-dom';

import '../../assets/styles/global.scss';

import Header from '../Header';
import Routes from '../../routes';
import styles from './App.module.scss';
import Footer from '../Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="background">
        <Header />
        <div className={`${styles.container}`}>
          <Routes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
