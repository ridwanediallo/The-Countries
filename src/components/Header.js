import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <nav className='container-fluid'>
      <h2>Home</h2>
      <p className="middle-text">Countries Info</p>
      <div className="icons">
        <span>icon 1</span>
        <span>icon 2</span>
      </div>
    </nav>
  );
}

export default Header
