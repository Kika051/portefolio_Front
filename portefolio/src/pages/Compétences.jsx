/* eslint-disable react/no-unescaped-entities */
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
            <li>Adobe InDesign</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
          </ul>
        </div>
        <div className="specialite frontend">
          <h2>Frontend</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="specialite backend">
          <h2>Backend</h2>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </div>
        <div className="specialite base-donnees">
          <h2>Base de données</h2>
          <ul>
            <li>MySQL</li>
            <li>JSON</li>
          </ul>
        </div>
        <div className="specialite gestion-version">
          <h2>Gestion de Version</h2>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Competences;
