import Header from './SemanticComponents/Header';
import Main from './SemanticComponents/Main';
import Footer from './SemanticComponents/Footer';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Main />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
