// src/components/YearlyBarChart.jsx
import  { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import fertilizerData from "../../data/fertilizerData";
import "./YearlyBarChart.css";

const YearlyBarChart = () => {
  const [selectedProduct, setSelectedProduct] = useState("UREA");
  const [selectedState, setSelectedState] = useState("Uttar Pradesh");

  const filteredData = fertilizerData.filter(
    (item) => item.name === selectedProduct && item.state === selectedState
  );

  const chartData = filteredData.map((item) => ({
    year: item.year,
    Requirement: item.totalRequirement,
    Availability: item.totalAvailable,
  }));

  const productOptions = [...new Set(fertilizerData.map((item) => item.name))];
  const stateOptions = [...new Set(fertilizerData.map((item) => item.state))];

  return (
    <div className="yearly-bar-chart-container">
      <div className="filter-bar">
        <div>
          <label>Product</label>
          <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
            {productOptions.map((product) => (
              <option key={product}>{product}</option>
            ))}
          </select>
        </div>
        <div>
          <label>State</label>
          <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
            {stateOptions.map((state) => (
              <option key={state}>{state}</option>
            ))}
          </select>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData} margin={{ top: 30, right: 30, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Requirement" fill="#4CAF50" barSize={30} radius={[6, 6, 0, 0]} />
          <Bar dataKey="Availability" fill="#FF7043" barSize={30} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YearlyBarChart;
