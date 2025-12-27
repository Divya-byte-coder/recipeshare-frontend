import React from "react";
import "./Pasta.css";
import pastaImg from "../assets/images/pasta.webp";

function Pasta() {
  return (
    <div className="pasta-page">
      
      <div className="pasta-hero">
        <img src={pastaImg} alt="Creamy Pasta" />
        <div className="pasta-overlay">
          <h1>Creamy Pasta</h1>
          <p>Rich, creamy and delicious pasta perfect for lunch or dinner.</p>
        </div>
      </div>
      <div className="pasta-content">
        <div className="pasta-card">
          <h2>Ingredients</h2>
          <ul>
            <li>2 cups pasta</li>
            <li>1 cup fresh cream</li>
            <li>2 cloves garlic (chopped)</li>
            <li>1 tbsp olive oil</li>
            <li>1/2 cup vegetables</li>
            <li>Salt to taste</li>
            <li>Black pepper</li>
            <li>Cheese (optional)</li>
          </ul>
        </div>
        <div className="pasta-card">
          <h2>Preparation Steps</h2>
          <ol>
            <li>Boil pasta in salted water until al dente.</li>
            <li>Heat olive oil and sauté garlic.</li>
            <li>Add vegetables and cook lightly.</li>
            <li>Add cream, salt, and pepper.</li>
            <li>Mix in cooked pasta and simmer for 2 minutes.</li>
            <li>Top with cheese and serve hot.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Pasta;
