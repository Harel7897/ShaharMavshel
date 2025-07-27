import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const gotomenu = (): void => {
    navigate('/Menu');
  };

  const gotoContact = (): void => {
    navigate('/contact');
  };

  const gotoabout = (): void => {
    navigate('/About');
  };

  return (
    <div>
      <div className="navbar">
        <button className="nav-btn" onClick={gotoabout}>המלצות</button>
        <button className="nav-btn" onClick={gotomenu}>תפריט</button>
        <button className="nav-btn" onClick={gotoContact}>צור קשר</button>
      </div>
    </div>
  );
};

export default NavBar;
