/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

function Tarifs() {
  const [text, setText] = useState("");
  const fullText =
    "Votre vision, notre expertise : Des tarifs justes pour chaque projet Full Stack.";
  const delay = 50; // Délai en millisecondes entre chaque caractère

  useEffect(() => {
    let currentIndex = 0;
    let intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="tarifpage">
      <h1 className="tarifslogan">{text}</h1>
      <h2 className="tarif">Mes tarifs</h2>
      <div className="tjmcontainer">
        <h3>Taux Journalier Moyen</h3>
        <h4>
          <span className="montant">250 €</span>/jour
        </h4>
      </div>
    </div>
  );
}

export default Tarifs;
