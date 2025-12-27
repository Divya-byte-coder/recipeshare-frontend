import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>RecipeShare</p>
      <ul className="footer-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/browse">Browse</Link></li>
        <li><Link to="/add-recipe">Add Recipe</Link></li>
      </ul>
    </footer>
  );
}

export default Footer;
