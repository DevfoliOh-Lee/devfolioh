import { BrowserRouter } from 'react-router-dom';
import Home from '@pages/Home';
import GlobalStyle from '@styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Home />
    </BrowserRouter>
  );
}

export default App;
