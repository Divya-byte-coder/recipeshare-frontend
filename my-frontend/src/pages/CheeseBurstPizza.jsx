import React from "react";
import "./CheeseBurstPizza.css";
import pizzaImg from "../assets/images/pizza2.webp";

function CheeseBurstPizza() {
  return (
    <div className="pizza-page">
      <div className="pizza-hero">
        <img src={pizzaImg} alt="Cheese Burst Pizza" />
        <div className="pizza-overlay">
          <h1>Cheese Burst Pizza</h1>
          <p>Loaded with molten cheese, crispy crust, and rich Italian flavors</p>
        </div>
      </div>
      <div className="pizza-content">
        <div className="pizza-card">
          <h2>🧀 Ingredients</h2>
          <ul>
            <li>Pizza base</li>
            <li>Mozzarella cheese</li>
            <li>Cheese spread</li>
            <li>Pizza sauce</li>
            <li>Capsicum, onion</li>
            <li>Oregano & chili flakes</li>
            <li>Olive oil</li>
          </ul>
        </div>
        <div className="pizza-card">
          <h2>🍕 Preparation Steps</h2>
          <ol>
            <li>Spread cheese mixture inside the pizza base</li>
            <li>Apply pizza sauce evenly</li>
            <li>Add vegetables and mozzarella cheese</li>
            <li>Sprinkle oregano and chili flakes</li>
            <li>Bake at 220°C for 12–15 minutes</li>
            <li>Serve hot with extra cheese pull 😋</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default CheeseBurstPizza;
