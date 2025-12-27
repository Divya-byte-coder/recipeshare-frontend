import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Browse from "./pages/Browse";
import AddRecipe from "./pages/AddRecipe";

import Briyani from "./pages/Briyani";
import Brownie from "./pages/Brownie";
import Pasta from "./pages/Pasta";
import ThaiCurry from "./pages/ThaiCurry";
import CheeseBurstPizza from "./pages/CheeseBurstPizza";
import Tiramisu from "./pages/Tiramisu";
import Pongal from "./pages/Pongal";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/add-recipe" element={<AddRecipe />} />

        <Route path="/briyani" element={<Briyani />} />
        <Route path="/brownie" element={<Brownie />} />
        <Route path="/pasta" element={<Pasta />} />
        <Route path="/thaicurry" element={<ThaiCurry />} />
        <Route path="/pizza" element={<CheeseBurstPizza />} />
        <Route path="/tiramisu" element={<Tiramisu />} />
        <Route path="/pongal" element={<Pongal />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
