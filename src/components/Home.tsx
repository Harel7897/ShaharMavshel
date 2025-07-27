import React from 'react';
import NavBar from './NavBar';
import '../styles/Home.css';
import Gallery from './Gallery';

const Home: React.FC = () => {
  return (
    <div>
      <div className='allHome'>
        <NavBar />
        <h1 className="title1">שחר מבשל</h1>
        <h1 className="title2">
          שחר מבשל מהלב – קייטרינג איכותי לאירועים עם טעם של בית, שירות מכל הלב ואוכל שלא שוכחים
        </h1>
        <Gallery />
        <h1 className='phonNumber'>ניתן ליצור קשר 054-231-2663</h1>
      </div>
    </div>
  );
};

export default Home;
