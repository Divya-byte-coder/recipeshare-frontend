import React from "react";
import "./Tiramisu.css";
import tiramisuImg from "../assets/images/Tiramisu.webp";

function Tiramisu() {
  return (
    <div className="tiramisu-page">
      <div className="tiramisu-hero">
        <img src={tiramisuImg} alt="Tiramisu Dessert" />
        <div className="tiramisu-overlay">
          <h1>Tiramisu</h1>
          <p>
            A classic Italian dessert layered with coffee-soaked ladyfingers,
            mascarpone cream, and cocoa powder.
          </p>
        </div>
      </div>
      <div className="tiramisu-content">
        <div className="tiramisu-card">
          <h2>Ingredients</h2>
          <ul>
            <li>200 g Ladyfinger biscuits</li>
            <li>250 g Mascarpone cheese</li>
            <li>3 Eggs (separated)</li>
            <li>100 g Sugar</li>
            <li>1 cup Strong brewed coffee (cooled)</li>
            <li>2 tbsp Cocoa powder</li>
            <li>1 tsp Vanilla essence</li>
          </ul>
        </div>
        <div className="tiramisu-card">
          <h2>Preparation Steps</h2>
          <ol>
            <li>Whisk egg yolks with sugar until creamy.</li>
            <li>Add mascarpone cheese and vanilla, mix gently.</li>
            <li>Beat egg whites until stiff and fold into the mixture.</li>
            <li>Dip ladyfingers briefly in coffee.</li>
            <li>Layer biscuits and cream in a dish.</li>
            <li>Repeat layers and finish with cream.</li>
            <li>Dust cocoa powder on top.</li>
            <li>Refrigerate for at least 4 hours before serving.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Tiramisu;
