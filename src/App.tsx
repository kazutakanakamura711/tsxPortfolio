import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Menu } from './components/Menu';
import { Profile } from './components/Profile';
import { Top } from './components/Top';
import { Works } from './components/Works';

function App() {
  return (
    <>
      <ChakraProvider>
        <Menu />
        <div className="mx-8 mb-80">
          <Top />
        </div>
        <div className="mx-8 mb-80">
          <Profile />
        </div>
        <div className="mb-80">
          <Works />
        </div>
        <div className="mx-8 mb-80">
          <Gallery />
        </div>
        <div className="mb-40">
          <Contact />
        </div>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
