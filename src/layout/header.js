import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul id="navbar" className="menu">
          <li>
            <Link to="/food_photo_berlin/">Main</Link>
          </li>
          <li>
            <Link to="/food_photo_berlin/clients">Clients</Link>
          </li>
          <li>
            <Link to="/food_photo_berlin/about">About + Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
