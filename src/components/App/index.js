import { HashRouter } from 'react-router-dom';

import Header from '../Header';
import PageContainer from '../PageContainer';
import Routes from '../../routes';
import Footer from '../Footer';

function App() {
  return (
    <HashRouter>
      <PageContainer>
        <Header />
        <Routes />
        <Footer />
      </PageContainer>
    </HashRouter>
  );
}

export default App;
