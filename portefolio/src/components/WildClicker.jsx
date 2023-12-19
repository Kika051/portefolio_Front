import { Link } from "react-router-dom";
import WC1 from "../image/wild_clicker/WC1.png";
import WC2 from "../image/wild_clicker/WC2.png";
import WC3 from "../image/wild_clicker/WC3.png";
import WC4 from "../image/wild_clicker/WC4.png";
import WCmobile1 from "../image/wild_clicker/WCmobile1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const WildClicker = () => {
  const project = [
    {
      miniature1: WC1,
      miniature2: WC2,
      miniature3: WC3,
      miniature4: WC4,
      miniature5: WCmobile1,
      title: "Wild Clicker",
      mission:
        "La Wild Code School avait exprimé le désir de créer un jeu de clickers, inspiré de Cookie Clicker, et personnalisé à l'image de l'école. La mission consistait à développer l'interface avec HTML, CSS et JavaScript, en intégrant des automatisations sous forme de bonus. Ces bonus, déclenchés par des événements spécifiques, offraient des avantages temporaires ou permanents, ajoutant une dimension stratégique au jeu. L'objectif était de fournir une expérience interactive, divertissante et représentative de l'esprit de la Wild Code School.",
      nature: "Projet client, en équipe",
      ddl: "Mars 2023",
      stack: "Html, Css, Javascript",
      link: "https://kika051.github.io/Projet-1-Wild-Clickers/",
    },
  ];

  return (
    <div className="details-container">
      {project.map((project) => (
        <div key={project.id} className="projecteuh">
          <Carousel>
            <img
              src={project.miniature1}
              className="miniature-project"
              alt={project.title}
            />
            <img
              src={project.miniature2}
              className="miniature-project"
              alt={project.title}
            />
            <img
              src={project.miniature3}
              className="miniature-project"
              alt={project.title}
            />
            <img
              src={project.miniature4}
              className="miniature-project"
              alt={project.title}
            />
            <img
              src={project.miniature5}
              className="miniature-project"
              alt={project.title}
            />
          </Carousel>
          <h2 className="projet-titre">{project.title}</h2>
          <div className="details-group">
            <h3 className="details">Mission : </h3>
            <p className="project-details">{project.mission}</p>
          </div>
          <div className="details-group">
            <h3 className="details">Nature du projet : </h3>
            <p className="project-details">{project.nature}</p>
          </div>
          <div className="details-group">
            <h3 className="details">Temps de production : </h3>
            <p className="project-details">{project.ddl}</p>
          </div>
          <div className="details-group">
            <h3 className="details">Stack utilisé : </h3>
            <p className="project-details">{project.stack}</p>
          </div>
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
            Accedez au projet
          </Link>
        </div>
      ))}
    </div>
  );
};

export default WildClicker;
