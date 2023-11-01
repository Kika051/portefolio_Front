import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/competences">Compétences</Link>
          </li>
          <li>
            <Link to="/tarifs">Tarifs</Link>
          </li>
          <li>
            <Link to="/avis">Avis</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="mobile-menu-button" onClick={toggleMenu}>
        ☰
      </div>
    </div>
  );
}

export default Navbar;
