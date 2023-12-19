import Navproject from "../components/Navproject";
import CC2022 from "../image/CC2022.png";
import WB2023 from "../image/WB2023.png";
import OD2023 from "../image/OD2023.png";
import { Link } from "react-router-dom";

function Allproject() {
  const projects = [
    {
      id: 1,
      image: CC2022,
      title: "Wild Clicker",
      description:
        "Wild Clicker, un jeu de clicker créé pour la Wild Code School, s'inspire du concept de Cookie Clicker. Le jeu met en avant une expérience de clic engageante, accompagnée de quatre bonus automatisés pour faciliter l'accumulation de clics. Ces bonus, représentés par les développeurs, les PCs, le terminal et JavaScript, ajoutent une dimension stratégique au gameplay. Les joueurs peuvent explorer un monde numérique tout en cliquant pour obtenir des ressources, et les bonus automatisés offrent des avantages uniques pour optimiser la productivité. Wild Clicker, conçu dans le cadre de ma formation à la Wild Code School, reflète ma passion pour le développement de jeux et l'application pratique des compétences acquises.",
      link: "/wildclicker",
    },
    {
      id: 2,
      image: WB2023,
      title: "Wild beer",
      description:
        "Le jeu de carte conçu pour la Wild Code School propose un duel entre un joueur et un ordinateur. Chacun commence avec 5 cartes bière, distribuées aléatoirement. Chaque carte possède des attributs bière liés aux thèmes des rounds. La partie se déroule en 5 rounds, chacun avec un thème spécifique. Après la sélection des cartes par les joueurs, le score le plus élevé pour le thème remporte un point cacahuète (round). Le joueur avec le plus de points cacahuète à la fin de la partie est déclaré vainqueur. Plongez dans ce jeu stratégique où la chance et la stratégie se combinent pour déterminer le roi des cacahuètes.",
      link: "/wildbeer",
    },
    {
      id: 3,
      image: OD2023,
      title: "Origins digital",
      description:
        "Origins Digital, une application développée exclusivement pour Origin Digital, offre une expérience de streaming de vidéos sportives diversifiées. Son interface intuitive propose une sélection soigneusement organisée de vidéos, avec des catégories pour une navigation rapide et un onglet de recherche pour une accessibilité maximale. L'application vise à simplifier l'expérience de streaming en fournissant du contenu varié pour tous les passionnés de sports. De plus, une identification personnelle débloque un accès étendu à une bibliothèque encore plus riche de vidéos. Origin Digital représente notre engagement à offrir une plateforme de streaming conviviale, adaptée à tous les amateurs de sports, et évoluant avec les préférences individuelles des utilisateurs.",
      link: "/originsdigital", // Mettez ici l'URL correcte vers votre composant OriginsDigital
    },
  ];

  return (
    <div className="portfoliopage">
      <Navproject />
      <div className="project-container">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <img
              src={project.image}
              className="image-project"
              alt={project.title}
            />
            <h2 className="projet-titre">{project.title}</h2>
            <p className="description">{project.description}</p>
            <Link
              to={project.link}
              style={{
                display: "inline-block",
                backgroundColor: "black",
                color: "white",
                padding: "10px 15px", // Ajustez selon vos préférences
                textDecoration: "none",
                borderRadius: "5px", // Pour arrondir les coins si nécessaire
              }}
            >
              Voir le projet
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Allproject;
