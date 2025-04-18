import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-left">
            <span className="name">Fahad</span>
            <div className="status-indicator">
            <input type="checkbox" id="checkboxInput" />
            <label htmlFor="checkboxInput" className="toggleSwitch"></label>
            <div className="green-circle"></div>
            <span className="available-text">Available</span>
            </div>
        </div>
        <div className="gray-curved"></div>
        <div className="red-curved"></div>
        <div className="menu-text">Menu</div>
    </nav>
  );
};

export default Navbar;
