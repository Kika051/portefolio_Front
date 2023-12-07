import { Link } from "react-router-dom";
function Navproject() {
  return (
    <div>
      <ul className="navbar_project">
        <li className="navbar_item">
          <Link
            to="/allprojects"
            className="navbar_link"
            style={{ textDecoration: "none", color: "Black" }}
          >
            Tout les projets
          </Link>
        </li>
        <li className="navbar_item">
          <Link
            to="/personalprojects"
            className="navbar_link"
            style={{ textDecoration: "none", color: "Black" }}
          >
            Projet perso
          </Link>
        </li>
        <li className="navbar_item">
          <Link
            to="/customerprojects"
            className="navbar_link"
            style={{ textDecoration: "none", color: "Black" }}
          >
            Projets clients
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Navproject;
