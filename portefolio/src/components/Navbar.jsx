import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import { useState } from "react";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar_links">
        <li className="navbar_item">
          <Link
            to="/"
            className="navbar_link"
            style={{ textDecoration: "none", color: "Black" }}
          >
            Accueil
          </Link>
        </li>
        <li className="navbar_item">
          <Link
            to="/services"
            className="navbar_link"
            style={{ textDecoration: "none", color: "Black" }}
          >
            Services
          </Link>
        </li>
        <li className="navbar_item">
          <Link
            to="/portfolio"
            className="navbar_link"
            style={{ textDecoration: "none", color: "Black" }}
          >
            Portfolio
          </Link>
        </li>
        <li className="navbar_item">
          <Link
            to="/competences"
            className="navbar_link"
            style={{ textDecoration: "none", color: "Black" }}
          >
            Compétences
          </Link>
        </li>
        <li className="navbar_item">
          <Link
            to="/tarifs"
            className="navbar_link"
            style={{ textDecoration: "none", color: "Black" }}
          >
            Tarifs
          </Link>
        </li>
        <li className="navbar_item">
          <Link
            to="/avis"
            className="navbar_link"
            style={{ textDecoration: "none", color: "Black" }}
          >
            Avis
          </Link>
        </li>
        <li className="navbar_item">
          <Link
            to="/contact"
            className="navbar_link"
            style={{ textDecoration: "none", color: "Black" }}
          >
            Contact
          </Link>
        </li>
      </ul>
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </div>
  );
}

export default Navbar;
