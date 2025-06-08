import React, { useState } from "react";
import fertilizerData from "../../data/fertilizerData";
import FertilizerGraph from "../../Components/FertilizerGraph/FertilizerGraph";
import "./GraphPage.css"

const GraphPage = () => {
  const monthKeys = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

  const [selectedFertilizer, setSelectedFertilizer] = useState(fertilizerData[0]);

  const handleChange = (e) => {
    const selected = fertilizerData.find((item) => item.name === e.target.value);
    setSelectedFertilizer(selected);
  };

  const prepareData = (fertilizer) => {
    return monthKeys.map((month) => ({
      month: month.toUpperCase(),
      requirement: fertilizer.monthlyAvailability?.[month] || 0,
      available: fertilizer.monthlyAvailability?.[month] || 0,
    }));
  };

  return (
    <div  className="graphSec" style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>📊 Fertilizer Monthly Insights</h2>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <select
          value={selectedFertilizer.name}
          onChange={handleChange}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            background: "#f5f5f5",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          {fertilizerData.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <FertilizerGraph name={selectedFertilizer.name} data={prepareData(selectedFertilizer)} />
    </div>
  );
};

export default GraphPage;
