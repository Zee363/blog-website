import React from "react";
import './Navbar.css';

const Navbar= () => {
  return (
    <nav className="navigation">
      <ul className="nav-menu">
        <li className="nav-item">HOME</li>
        <li className="nav-item">BEAUTY</li>
        <li className="nav-item">LIFESTYLE</li>
        <li className="nav-item">ABOUT</li>
        <li className="nav-item">CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navbar;