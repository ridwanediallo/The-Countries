import React from 'react';
import './Hero.css';
import Globe from '../globe.png'

const Hero = () => {
  return (
    <header>
      <img className="globe" src={Globe} alt="globe" />
      <h2 className="title">The entire world</h2>
    </header>
  );
}

export default Hero
