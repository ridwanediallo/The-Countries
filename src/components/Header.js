import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {
  return (
    <nav>
      <Link to='/'>
        <h2>Home</h2>
      </Link>
      <p className="middle-text">Countries Info</p>
      <div className="icons">
        <span>icon 1</span>
        <span>icon 2</span>
      </div>
    </nav>
  );
}

export default Header
