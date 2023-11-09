/* eslint-disable react/no-unescaped-entities */
function Services() {
  return (
    <div className="servicepage">
      <div className="headservices">
        <h2 className="role">Développeur full-stack</h2>
        <h3 className="describrole">
          Je suis un développeur Full Stack enthousiaste, créatif et orienté
          solutions. Je maîtrise HTML, CSS, JavaScript, React, Node.js et MySQL.
          Mon expertise en sécurité et en gestion de bases de données garantit
          des applications performantes et sécurisées. Mon objectif en tant que
          développeur est de résoudre des problèmes techniques, d'innover et de
          fournir des solutions de qualité supérieure. Je suis déterminé à
          collaborer avec vous pour concrétiser vos projets web.
        </h3>
      </div>
      <div className="question">
        <h3>En quoi puis je vous etre utile ?</h3>
      </div>
      <div className="service-container">
        <div className="services">
          <h2>Développement Frontend</h2>
          <p>
            Création et intégration de l'interface utilisateur, expérience
            utilisateur (UI/UX), et optimisation de la performance du frontend.
          </p>
        </div>
        <div className="services">
          <h2>Développement Backend</h2>
          <p>
            Construction et gestion des serveurs, bases de données, logique
            métier, gestion des utilisateurs et des sessions.
          </p>
        </div>
        <div className="services">
          <h2>Base de Données</h2>
          <p>
            Conception, mise en place, optimisation et maintenance des bases de
            données.
          </p>
        </div>
        <div className="services">
          <h2>Intégration de Services et APIs</h2>
          <p>
            Intégration de services tiers via des API pour des fonctionnalités
            spécifiques.
          </p>
        </div>
        <div className="services">
          <h2>Déploiement et Hébergement :</h2>
          <p>
            Configuration et gestion de serveurs, déploiement des applications
            sur des serveurs web.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Services;
