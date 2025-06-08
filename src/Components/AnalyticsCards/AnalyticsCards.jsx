import React from "react";
import "./AnalyticsCards.css";

const AnalyticsCards = ({ data }) => {
  // Calculate stats
  const totalFertilizers = data.length;
  const sortedByRequirement = [...data].sort((a, b) => b.totalRequirement - a.totalRequirement);
  const sortedByAvailability = [...data].sort((a, b) => a.totalAvailable - b.totalAvailable);
  const totalRequirement = data.reduce((sum, item) => sum + item.totalRequirement, 0);
  const totalAvailable = data.reduce((sum, item) => sum + item.totalAvailable, 0);

  return (
    <div className="analytics-cards">
      <div className="card green">
        <h3>Total Fertilizers</h3>
        <p>{totalFertilizers}</p>
      </div>

      <div className="card blue">
        <h3>Top 5 Required</h3>
        <ul>
          {sortedByRequirement.slice(0, 5).map((item) => (
            <li key={item.id}>{item.name} ({item.totalRequirement})</li>
          ))}
        </ul>
      </div>

      <div className="card red">
        <h3>Least 5 Available</h3>
        <ul>
          {sortedByAvailability.slice(0, 5).map((item) => (
            <li key={item.id}>{item.name} ({item.totalAvailable})</li>
          ))}
        </ul>
      </div>

      <div className="card orange">
        <h3>Total Summary</h3>
        <p>Requirement: {totalRequirement}</p>
        <p>Available: {totalAvailable}</p>
      </div>
    </div>
  );
};

export default AnalyticsCards;
