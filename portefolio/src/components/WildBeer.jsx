import { Link } from "react-router-dom";
import WB1 from "../image/wild_beer/WB1.png";
import WB2 from "../image/wild_beer/WB2.png";
import WB3 from "../image/wild_beer/WB3.png";
import WB4 from "../image/wild_beer/WB4.png";
import WB5 from "../image/wild_beer/WB5.png";
import WB6 from "../image/wild_beer/WB6.png";
import WBmobile1 from "../image/wild_beer/WBmobile1.png";
import WBmobile2 from "../image/wild_beer/WBmobile2.png";
import WBmobile3 from "../image/wild_beer/WBmobile3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const WildBeer = () => {
  const project = [
    {
      miniature1: WB1,
      miniature2: WB2,
      miniature3: WB3,
      miniature4: WB4,
      miniature5: WB5,
      miniature6: WB6,
      miniature7: WBmobile1,
      miniature8: WBmobile2,
      miniature9: WBmobile3,
      title: "Wild Beer",
      mission:
        "La Wild Code School a demandé la création d'un jeu de cartes novateur utilisant une API spécifique pour générer des cartes créatives. Le jeu se déroulera en cinq manches avec des duels entre les cartes des joueurs et une IA. La mission implique l'implémentation d'algorithmes techniques pour appliquer précisément les règles spécifiques du jeu, assurant une expérience stratégique et captivante.",
      nature: "Projet client, en équipe",
      ddl: "Avril 2023 / Mai 2023",
      stack: "React, Express",
      link: "https://wildbeerproject2.netlify.app/",
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
            <img
              src={project.miniature6}
              className="miniature-project"
              alt={project.title}
            />
            <img
              src={project.miniature7}
              className="miniature-project"
              alt={project.title}
            />
            <img
              src={project.miniature8}
              className="miniature-project"
              alt={project.title}
            />
            <img
              src={project.miniature9}
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
              padding: "10px 15px",
              textDecoration: "none",
              borderRadius: "5px",
            }}
          >
            Accedez au projet
          </Link>
        </div>
      ))}
    </div>
  );
};

export default WildBeer;
