/**
 * @file Navbar component
 * @description This component represents the navigation bar of the application.
 */

import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="path/to/your/logo.png" alt="Logo" /> {/* Replace with your logo path */}
      </div>
      <div className="navbar-buttons">
        <button className="nav-button">Home</button>
        <button className="nav-button">About</button>
        <button className="nav-button">Services</button>
        <button className="nav-button">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
