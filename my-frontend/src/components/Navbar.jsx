import React from "react";
import { Link } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <FaUtensils className="nav-icon" />
        <span>RecipeShare</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/add-recipe">Add Recipe</Link>
      </div>
    </nav>
  );
}

export default Navbar;
