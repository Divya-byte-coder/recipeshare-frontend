import React from "react";
import pizzaImg from "../assets/images/pizza2.webp";
import "./RecipeCard.css";
import { FaClock, FaStar } from "react-icons/fa";

function RecipeCard() {
  const recipe = {
    title: "Cheese Burst Pizza",
    description:
      "A delicious homemade cheesy pizza loaded with mozzarella, herbs, and fresh veggies.",
    prepTime: "30 min",
    rating: 4.8,
    image: pizzaImg, 
  };

  return (
    <div className="recipe-card">
      <img src={pizzaImg} alt="Pizza" className="recipe-image" />

      <div className="recipe-content">
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <div className="recipe-stats">
          <span>
            <FaClock /> {recipe.prepTime}
          </span>
          <span>
            <FaStar /> {recipe.rating}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;


