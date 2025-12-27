import React from "react";
import SearchBar from "../components/SearchBar";
import Stats from "../components/Stats";
import "./Home.css";
import breakfastImg from "../assets/categories/breakfast.jpg";
import lunchImg from "../assets/categories/lunch.jpg";
import snacksImg from "../assets/categories/snacks.jpg";
import dinnerImg from "../assets/categories/dinner.jpg";
function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Discover & Share Amazing Recipes</h1>
        <p>Explore thousands of delicious recipes from home cooks around the world</p>
        <div className="home-search">
          <SearchBar />
        </div>
      </section>
      <section className="home-stats">
        <Stats />
      </section>
      <section className="featured-wrapper">
        <h2>Categories</h2>
        <div className="featured-layout">
          <div className="featured-card">
            <img src={breakfastImg} alt="Breakfast" className="featured-image" />
            <span>Breakfast</span>
          </div>
          <div className="featured-card">
            <img src={lunchImg} alt="Lunch" className="featured-image" />
            <span>Lunch</span>
          </div>
          <div className="featured-card">
            <img src={snacksImg} alt="Evening Snacks" className="featured-image" />
            <span>Evening Snacks</span>
          </div>
          <div className="featured-card">
            <img src={dinnerImg} alt="Dinner" className="featured-image" />
            <span>Dinner</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
