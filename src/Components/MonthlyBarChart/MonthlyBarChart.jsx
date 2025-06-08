import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import fertilizerData from "../../data/fertilizerData";
import "./MonthlyBarChart.css"; // Optional styling file

const months = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec"
];

const MonthlyBarChart = () => {
  const allProducts = [...new Set(fertilizerData.map((item) => item.name))];
  const allYears = [...new Set(fertilizerData.map((item) => item.year))];

  const [selectedProduct, setSelectedProduct] = useState(allProducts[0]);
  const [selectedYear, setSelectedYear] = useState(allYears[0]);

  const filteredData = fertilizerData.filter(
    (item) => item.name === selectedProduct && item.year === selectedYear
  );

  const chartData = months.map((month) => ({
    month: month.toUpperCase(),
    requirement: filteredData.reduce(
      (sum, item) => sum + (item.monthlyAvailability?.[month] || 0),
      0
    ),
    available: filteredData.reduce(
      (sum, item) => sum + (item.monthlyAvailability?.[month] || 0), // or separate if you have separate available
      0
    ),
  }));

  return (
    <div className="monthly-chart-container">
      <div className="monthly-chart-filters">
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          {allProducts.map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>

        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(parseInt(e.target.value))}
        >
          {allYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        >
          <defs>
            <linearGradient id="availableColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00bcd4" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00bcd4" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="requirement"
            stroke="#f44336"
            strokeWidth={2}
            fillOpacity={0}
            name="🔴 requirement"
          />
          <Area
            type="monotone"
            dataKey="available"
            stroke="#00bcd4"
            fill="url(#availableColor)"
            strokeWidth={2}
            name="🔵 available"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyBarChart;
