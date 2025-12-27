import React from "react";
import { FaClock, FaUsers, FaUtensils } from "react-icons/fa";
import "./Stats.css";

const statsData = [
  { id: 1, icon: <FaUtensils />, value: 6, label: "Total Recipes" },
  { id: 2, icon: <FaUsers />, value: "12K+", label: "Home Cooks" },
  { id: 3, icon: <FaClock />, value: "15min", label: "Avg. Prep Time" },
];

const Stats = () => {
  return (
    <div className="stats-wrapper">
      {statsData.map((stat) => (
        <div className="stat-card" key={stat.id}>
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;


