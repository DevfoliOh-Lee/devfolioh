import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '@styles/GlobalStyles';
import Home from '@pages/Home';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Home />
    </BrowserRouter>
  );
}

export default App;
