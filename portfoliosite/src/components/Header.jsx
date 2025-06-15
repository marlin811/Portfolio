import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
    <header>
      <div className="header">
        <h1><a href="/"><img src="images/logo.png" alt="MRLNPORTFOLIO" /></a></h1>
        <div className="link">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><a href="#aboutme">Aboutme</a></li>
          </ul>
        </div>
      </div>
    </header>
    </>
  );
}

export default Header;

