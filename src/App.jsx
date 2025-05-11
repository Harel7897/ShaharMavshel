
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Menu from './components/Menu.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';



import './App.css';

function App() {
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
}

export default App;
