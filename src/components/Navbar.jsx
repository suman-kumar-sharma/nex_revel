import React from 'react';
import './Navbar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <img src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png" alt="Logo" className="logo" />
      </div>
      <div className="right">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
