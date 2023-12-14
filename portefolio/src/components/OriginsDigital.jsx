import OD1 from "../image/origins_digital/OD1.png";
import OD2 from "../image/origins_digital/OD2.png";
import OD3 from "../image/origins_digital/OD3.png";
import OD4 from "../image/origins_digital/OD4.png";
import OD5 from "../image/origins_digital/OD5.png";
import OD6 from "../image/origins_digital/OD6.png";
import OD7 from "../image/origins_digital/OD7.png";
import OD8 from "../image/origins_digital/OD8.png";
import ODmobile from "../image/origins_digital/ODmobile1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const OriginsDigital = () => {
  const project = [
    {
      miniature1: OD1,
      miniature2: OD2,
      miniature3: OD3,
      miniature4: OD4,
      miniature5: OD5,
      miniature6: OD6,
      miniature7: OD7,
      miniature8: OD8,
      miniature9: ODmobile,
      title: "Origins Digital",
      mission:
        "Wild Clicker, un jeu de clicker créé pour la Wild Code School,s'inspire du concept de Cookie Clicker. Le jeu met en avant une expérience de clic engageante, accompagnée de quatre bonus automatisés pour faciliter l'accumulation de clics. Ces bonus, représentés par les développeurs, les PCs, le terminal et JavaScript, ajoutent une dimension stratégique au gameplay. Les joueurs peuvent explorer un monde numérique tout en cliquant pour obtenir des ressources, et les bonus automatisés offrent des avantages uniques pour optimiser la productivité. Wild Clicker, conçu dans le cadre de ma formation à la Wild Code School, reflète ma passion pour le développement de jeux et l'application pratique des compétences acquises.",
      nature: "Projet client, en équipe",
      ddl: "Mai 2023 / Juillet 2023",
      stack: "React, Express, Mysql",
      link: "",
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
        </div>
      ))}
    </div>
  );
};

export default OriginsDigital;
