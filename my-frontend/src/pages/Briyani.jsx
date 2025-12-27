import React from "react";
import "./Briyani.css";
import briyaniImg from "../assets/images/Briyani.webp";

function Briyani() {
  return (
    <div className="briyani-page">
      <div className="briyani-hero">
        <img src={briyaniImg} alt="Chicken Briyani" />
        <div className="briyani-overlay">
          <h1>Chicken Briyani</h1>
          <p>Authentic, aromatic & flavorful Indian dish</p>
        </div>
      </div>
      <div className="briyani-content">
        <div className="briyani-card">
          <h2>Ingredients</h2>
          <ul>
            <li>2 cups basmati rice</li>
            <li>500g chicken</li>
            <li>1 cup curd (yogurt)</li>
            <li>2 onions (sliced)</li>
            <li>2 tomatoes</li>
            <li>2 tbsp ginger garlic paste</li>
            <li>2 tbsp briyani masala</li>
            <li>Whole spices</li>
            <li>Mint & coriander leaves</li>
            <li>Salt as needed</li>
          </ul>
        </div>
        <div className="briyani-card">
          <h2>Preparation Steps</h2>
          <ol>
            <li>Wash and soak rice for 30 minutes.</li>
            <li>Marinate chicken with curd and spices.</li>
            <li>Fry onions till golden brown.</li>
            <li>Add chicken and cook until tender.</li>
            <li>Cook rice till 70% done.</li>
            <li>Layer rice and chicken.</li>
            <li>Cook on low flame for 20 minutes.</li>
            <li>Garnish with mint and coriander.</li>
            <li>Serve hot with raita.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Briyani;
