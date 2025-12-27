import React from "react";
import { useParams } from "react-router-dom";
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
    ingredients: ["Cheese", "Flour", "Tomato Sauce", "Mozzarella", "Basil"],
    instructions: [
      "Prepare the dough.",
      "Spread tomato sauce.",
      "Add mozzarella and bake for 15 minutes.",
    ],
  },
  {
    id: 2,
    title: "Thai Curry",
    category: "Thai",
    difficulty: "Easy",
    image: thaiCurryImg,
    ingredients: ["Coconut milk", "Chicken", "Chili", "Vegetables", "Spices"],
    instructions: [
      "Cook chicken with spices.",
      "Add coconut milk and vegetables.",
      "Simmer for 20 minutes.",
    ],
  },
  {
    id: 3,
    title: "Chocolate Brownie",
    category: "Dessert",
    difficulty: "Medium",
    image: brownieImg,
    ingredients: ["Chocolate", "Flour", "Eggs", "Butter", "Sugar"],
    instructions: ["Mix ingredients", "Bake at 180°C for 25 minutes", "Cool & serve"],
  },
  {
    id: 4,
    title: "Pasta",
    category: "Italian",
    difficulty: "Easy",
    image: pastaImg,
    ingredients: ["Pasta", "Tomato Sauce", "Cheese", "Basil"],
    instructions: ["Boil pasta", "Cook sauce", "Mix and serve"],
  },
  {
    id: 5,
    title: "Briyani",
    category: "Indian",
    difficulty: "Medium",
    image: briyaniImg,
    ingredients: ["Rice", "Chicken", "Spices", "Yogurt", "Onions"],
    instructions: ["Cook rice", "Cook chicken with spices", "Layer and cook together"],
  },
  {
    id: 6,
    title: "Tiramisu",
    category: "Dessert",
    difficulty: "Hard",
    image: tiramisuImg,
    ingredients: ["Mascarpone", "Coffee", "Eggs", "Sugar", "Cocoa Powder"],
    instructions: ["Prepare cream", "Layer with coffee-soaked biscuits", "Chill for 4 hours"],
  },
  {
    id: 7,
    title: "Pongal",
    category: "Indian",
    difficulty: "Easy",
    image: pongalImg,
    ingredients: ["Rice", "Lentils", "Ghee", "Pepper", "Cumin"],
    instructions: ["Cook rice and lentils", "Add seasoning", "Serve hot"],
  },
];

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return <div style={{ textAlign: "center", marginTop: "2rem" }}>Recipe not found!</div>;

  return (
    <div className="recipe-detail container">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="recipe-detail-img" />
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Difficulty:</strong> {recipe.difficulty}</p>

      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;
