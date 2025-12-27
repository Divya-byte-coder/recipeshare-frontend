import React from "react";
import "./ThaiCurry.css";
import thaiCurryImg from "../assets/images/ThaiCurry.webp";

function ThaiCurry() {
  return (
    <div className="thaicurry-page">
      <div className="thaicurry-hero">
        <img src={thaiCurryImg} alt="Thai Curry" />
        <div className="thaicurry-overlay">
          <h1>Thai Curry</h1>
          <p>Authentic Thai curry packed with rich flavors and spices.</p>
        </div>
      </div>
      <div className="thaicurry-content">
        <div className="thaicurry-card">
          <h2>Ingredients</h2>
          <ul>
            <li>2 tbsp Thai curry paste</li>
            <li>1 cup coconut milk</li>
            <li>1 cup mixed vegetables</li>
            <li>1 tbsp oil</li>
            <li>1 tsp soy sauce</li>
            <li>1 tsp sugar</li>
            <li>Salt to taste</li>
            <li>Fresh basil leaves</li>
          </ul>
        </div>
        <div className="thaicurry-card">
          <h2>Preparation Steps</h2>
          <ol>
            <li>Heat oil in a pan and sauté curry paste.</li>
            <li>Add coconut milk and simmer gently.</li>
            <li>Add vegetables, soy sauce, sugar, and salt.</li>
            <li>Cook until vegetables are tender.</li>
            <li>Garnish with basil leaves and serve hot.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ThaiCurry;
