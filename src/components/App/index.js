import { BrowserRouter } from 'react-router-dom';

import Header from '../Header';
import PageContainer from '../PageContainer';
import Routes from '../../routes';
import Footer from '../Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PageContainer>
        <Routes />
      </PageContainer>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
