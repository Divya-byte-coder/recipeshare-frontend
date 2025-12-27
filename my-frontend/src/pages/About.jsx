import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

function About() {
  return (
    <div>
      <Navbar />

      <header className="about-hero">
        <h1>About RecipeShare</h1>
        <p>Discover, share, and enjoy recipes from home cooks around the world.</p>
      </header>

      <main className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            RecipeShare aims to connect food lovers and home cooks by providing a platform to share delicious recipes,
            learn new cooking skills, and discover culinary inspiration every day.
          </p>
        </section>

        <section className="about-section">
          <h2>Features</h2>
          <ul>
            <li>Browse thousands of recipes</li>
            <li>Share your own recipes with the community</li>
            <li>Save favorite recipes for later</li>
            <li>Follow other cooks and see their creations</li>
            <li>Responsive design for all devices</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Meet the Team</h2>
          <p>Our passionate team of developers and food enthusiasts are dedicated to making RecipeShare your go-to recipe platform.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;
