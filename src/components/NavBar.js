import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css'

const Header = () => {
  return (
    <nav>
      <Link to="/" className="link-home">
        <h2 className="home">Home</h2>
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
