import React from "react";
import "./Pongal.css";
import pongalImg from "../assets/images/Pongal.webp";

function Pongal() {
  return (
    <div className="pongal-page">
      <div className="pongal-hero">
        <img src={pongalImg} alt="Pongal Breakfast" />
        <div className="pongal-overlay">
          <h1>Ven Pongal</h1>
          <p>
            A traditional South Indian breakfast made with rice, moong dal,
            ghee, black pepper, and cumin – comforting and nutritious.
          </p>
        </div>
      </div>
      <div className="pongal-content">
        <div className="pongal-card">
          <h2>Ingredients</h2>
          <ul>
            <li>1 cup Raw rice</li>
            <li>½ cup Moong dal</li>
            <li>4 cups Water</li>
            <li>2 tbsp Ghee</li>
            <li>1 tsp Black pepper (crushed)</li>
            <li>1 tsp Cumin seeds</li>
            <li>Cashews (optional)</li>
            <li>Salt to taste</li>
          </ul>
        </div>
        <div className="pongal-card">
          <h2>Preparation Steps</h2>
          <ol>
            <li>Dry roast moong dal until aromatic.</li>
            <li>Wash rice and dal together.</li>
            <li>Pressure cook with water and salt until soft.</li>
            <li>Heat ghee and add cumin, pepper, and cashews.</li>
            <li>Pour the seasoning over cooked rice-dal mixture.</li>
            <li>Mix well and serve hot with chutney or sambar.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Pongal;
