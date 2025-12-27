import React from "react";
import { FaSearch } from "react-icons/fa"; 
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-container">
      <FaSearch className="search-icon" />
      <input type="text" placeholder="Search here..." />
    </div>
  );
};

export default SearchBar;

