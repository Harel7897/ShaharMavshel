import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import About from './components/About';

import './App.css';
import { JSX } from 'react';

const App = (): JSX.Element => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
