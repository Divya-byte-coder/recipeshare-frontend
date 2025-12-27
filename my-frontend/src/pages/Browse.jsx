import React, { useState } from "react";
import "./Browse.css";
import { useNavigate } from "react-router-dom";
import pizzaImg from "../assets/images/pizza2.webp";
import thaiCurryImg from "../assets/images/ThaiCurry.webp";
import brownieImg from "../assets/images/brownie.webp";
import pastaImg from "../assets/images/pasta.webp";
import briyaniImg from "../assets/images/Briyani.webp";
import tiramisuImg from "../assets/images/Tiramisu.webp";
import pongalImg from "../assets/images/Pongal.webp";

const recipes = [
  {
    id: 1,
    title: "Cheese Burst Pizza",
    category: "Italian",
    difficulty: "Medium",
    image: pizzaImg,
    path: "/pizza",
  },
  {
    id: 2,
    title: "Thai Curry",
    category: "Thai",
    difficulty: "Easy",
    image: thaiCurryImg,
    path: "/thaicurry",
  },
  {
    id: 3,
    title: "Chocolate Brownie",
    category: "Dessert",
    difficulty: "Medium",
    image: brownieImg,
    path: "/brownie",
  },
  {
    id: 4,
    title: "Pasta",
    category: "Italian",
    difficulty: "Easy",
    image: pastaImg,
    path: "/pasta",
  },
  {
    id: 5,
    title: "Briyani",
    category: "Indian",
    difficulty: "Medium",
    image: briyaniImg,
    path: "/briyani",
  },
  {
    id: 6,
    title: "Tiramisu",
    category: "Dessert",
    difficulty: "Hard",
    image: tiramisuImg,
    path: "/tiramisu",
  },
  {
    id: 7,
    title: "Pongal",
    category: "Indian",
    difficulty: "Easy",
    image: pongalImg,
    path: "/pongal",
  },
];

function Browse() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [difficulty, setDifficulty] = useState("All Difficulties");

  const navigate = useNavigate();

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All Categories" || recipe.category === category) &&
      (difficulty === "All Difficulties" || recipe.difficulty === difficulty)
  );

  return (
    <div className="browse-page">
      <div className="filters">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All Categories</option>
          <option>Italian</option>
          <option>Indian</option>
          <option>Dessert</option>
          <option>Thai</option>
        </select>

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>All Difficulties</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>
      <div className="recipe-grid">
        {filteredRecipes.map((recipe) => (
          <div
            className="recipe-card"
            key={recipe.id}
            onClick={() => navigate(recipe.path)}
          >
            <div className="image-wrapper">
              <img src={recipe.image} alt={recipe.title} />
              <span
                className={`difficulty-badge ${recipe.difficulty.toLowerCase()}`}
              >
                {recipe.difficulty}
              </span>
            </div>

            <div className="recipe-info">
              <h3>{recipe.title}</h3>
              <span className="category">{recipe.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;
