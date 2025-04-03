
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Menu from './components/Menu.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';
import About from './components/About.jsx';



import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/About" element={<About />} />


         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
