import React from "react";
import "./Brownie.css";

import brownieImg from "../assets/images/brownie.webp";

function Brownie() {
  return (
    <div className="brownie-page">
      <div className="brownie-hero">
        <img src={brownieImg} alt="Chocolate Brownie" />
        <div className="brownie-overlay">
          <h1>Chocolate Brownie</h1>
          <p>Delicious chocolate brownie perfect for dessert lovers!</p>
        </div>
      </div>
      <div className="brownie-content">
        <div className="brownie-card">
          <h2>Ingredients</h2>
          <ul>
            <li>1/2 cup butter</li>
            <li>1 cup sugar</li>
            <li>2 eggs</li>
            <li>1 tsp vanilla extract</li>
            <li>1/3 cup cocoa powder</li>
            <li>1/2 cup all-purpose flour</li>
            <li>1/4 tsp salt</li>
            <li>1/4 tsp baking powder</li>
          </ul>
        </div>
        <div className="brownie-card">
          <h2>Preparation Steps</h2>
          <ol>
            <li>Preheat oven to 350°F (175°C) and grease a baking pan.</li>
            <li>Melt butter and mix with sugar, eggs, and vanilla.</li>
            <li>Stir in cocoa powder, flour, salt, and baking powder.</li>
            <li>Pour batter into prepared pan and bake for 25-30 minutes.</li>
            <li>Let it cool, cut into squares, and serve.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Brownie;
