import React, { useState } from "react";
import Compétent from "../image/Compétent.png";
import créatif from "../image/créatif.png";
import Fiable from "../image/Fiable.png";
import FR from "../image/FR.png";

function Home() {
  const [showDescrib, setShowDescrib] = useState(false);
  const [showDescrib2, setShowDescrib2] = useState(false);
  const [showDescrib3, setShowDescrib3] = useState(false);
  const [showDescrib4, setShowDescrib4] = useState(false);

  return (
    <div className="homepage">
      <h1 className="slogan">Transformez votre vision en réalité numérique.</h1>
      <div className="atouts-container">
        <div
          className="atouts"
          onMouseEnter={() => setShowDescrib(true)}
          onMouseLeave={() => setShowDescrib(false)}
        >
          {showDescrib ? (
            <div>
              <h4 className="describ">
                Bénéficiez de mon expertise en développement web pour des
                solutions exceptionnelles.
              </h4>
            </div>
          ) : (
            <div>
              <img src={Compétent} alt="compétent" className="logoatout" />
              <h3 className="atout">Compétent</h3>
            </div>
          )}
        </div>
        <div
          className="atouts"
          onMouseEnter={() => setShowDescrib2(true)}
          onMouseLeave={() => setShowDescrib2(false)}
        >
          {showDescrib2 ? (
            <div>
              <h4 className="describ">
                Compétence en action : je fais de vos visions une réalité
                numérique.
              </h4>
            </div>
          ) : (
            <div>
              <img src={Fiable} alt="fiable" className="logoatout" />
              <h3 className="atout">Fiable</h3>
            </div>
          )}
        </div>
        <div
          className="atouts"
          onMouseEnter={() => setShowDescrib3(true)}
          onMouseLeave={() => setShowDescrib3(false)}
        >
          {showDescrib3 ? (
            <div>
              <h4 className="describ">
                Mon esprit créatif donne vie à des solutions web uniques et
                innovantes.
              </h4>
            </div>
          ) : (
            <div>
              <img src={créatif} alt="créatif" className="logoatout" />
              <h3 className="atout">Créatif</h3>
            </div>
          )}
        </div>
        <div
          className="atouts"
          onMouseEnter={() => setShowDescrib4(true)}
          onMouseLeave={() => setShowDescrib4(false)}
        >
          {showDescrib4 ? (
            <div>
              <h4 className="describ">
                Travaillez avec moi en toute liberté, où que vous soyez. Je suis
                100% full remote.
              </h4>
            </div>
          ) : (
            <div>
              <img src={FR} alt="full-remote" className="logoatout" />
              <h3 className="atout">Full Remote</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Home;
