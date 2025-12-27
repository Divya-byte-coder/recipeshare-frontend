import React, { useState } from "react";
import "./AddRecipe.css";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); 
  const [category, setCategory] = useState("Indian");
  const [difficulty, setDifficulty] = useState("Easy");
  const [image, setImage] = useState("");
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !image) {
      alert("Please fill all fields");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      description, 
      category,
      difficulty,
      image,
    };

    const existingRecipes =
      JSON.parse(localStorage.getItem("recipes")) || [];

    existingRecipes.push(newRecipe);

    localStorage.setItem("recipes", JSON.stringify(existingRecipes));

    alert("Recipe added successfully!");
    setTitle("");
    setDescription(""); 
    setCategory("Indian");
    setDifficulty("Easy");
    setImage("");

    navigate("/browse");
  };

  return (
    <div className="add-recipe-page">
      <h1>Add New Recipe</h1>

      <form className="add-recipe-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Recipe Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Indian</option>
          <option>Italian</option>
          <option>Dessert</option>
          <option>Thai</option>
        </select>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && (
          <img src={image} alt="preview" className="preview-image" />
        )}

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
