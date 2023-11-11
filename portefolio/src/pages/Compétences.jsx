/* eslint-disable react/no-unescaped-entities */
import indesign from "../image/indesign.png";
import illustrator from "../image/illustrator.png";
import Photoshop from "../image/Photoshop.png";
import HTML from "../image/HTML.png";
import CSS from "../image/CSS.png";
import JS from "../image/js.png";
import react from "../image/react.png";
import node from "../image/node.png";
import expressjs from "../image/expressjs.png";
import mysql from "../image/mysql.png";
import json from "../image/json.png";
import git from "../image/git.png";
import github from "../image/github.png";

function Competences() {
  const lienPDF =
    "https://www.cjoint.com/doc/23_11/MKku5luQOtM_CV-Cdi-Freelance.pdf";
  return (
    <div className="competence-pages">
      <h2>
        De l'acquisition de compétences à la veille technologique,
        <br /> je m'élève pour guider chaque phase d'un projet avec expertise et
        engagement.
      </h2>

      <a href={lienPDF} target="_blank" rel="noopener noreferrer">
        <button
          style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}
        >
          Télécharger le CV
        </button>
      </a>
      <h1 className="title-adc"> Arbre de compétences</h1>
      <div className="arbre-competences">
        <div className="specialite design">
          <h2>Design</h2>
          <ul>
            <li>
              <img src={indesign} alt="fiable" className="logocomp" />
              Adobe InDesign
            </li>
            <li>
              <img src={illustrator} alt="fiable" className="logocomp" />
              Adobe Illustrator
            </li>
            <li>
              <img src={Photoshop} alt="fiable" className="logocomp" />
              Adobe Photoshop
            </li>
          </ul>
        </div>
        <div className="specialite frontend">
          <h2>Frontend</h2>
          <ul>
            <li>
              <img src={HTML} alt="fiable" className="logocomp" />
              HTML
            </li>
            <li>
              <img src={CSS} alt="fiable" className="logocomp" />
              CSS
            </li>
            <li>
              <img src={JS} alt="fiable" className="logocomp" />
              JavaScript
            </li>
            <li>
              <img src={react} alt="fiable" className="logocomp" />
              React
            </li>
          </ul>
        </div>
        <div className="specialite backend">
          <h2>Backend</h2>
          <ul>
            <li>
              <img src={node} alt="fiable" className="logocomp" />
              Node.js
            </li>
            <li>
              <img src={expressjs} alt="fiable" className="logocompex" />
              Express
            </li>
          </ul>
        </div>
        <div className="specialite base-donnees">
          <h2>Base de données</h2>
          <ul>
            <li>
              <img src={mysql} alt="fiable" className="logocompex" />
              MySQL
            </li>
            <li>
              <img src={json} alt="fiable" className="logocompex" />
              JSON
            </li>
          </ul>
        </div>
        <div className="specialite gestion-version">
          <h2>Gestion de Version</h2>
          <ul>
            <li>
              <img src={git} alt="fiable" className="logocomp" />
              Git
            </li>
            <li>
              <img src={github} alt="fiable" className="logocomp" />
              GitHub
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Competences;
