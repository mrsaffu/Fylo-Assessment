import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
  Label,
} from "recharts";
import "./Components.css";

// Colors for pie slices
const COLORS = ["#4caf50", "#ff9800", "#2196f3", "#f44336", "#9c27b0"];

// Label with percentage
const renderCustomizedLabel = ({ percent }) =>
  `${(percent * 100).toFixed(0)}%`;

const PieChartBox = ({ title, data, dataKey }) => {
  return (
    <div className="pie-chart-box">
      <h3 className="chart-header">{title}</h3>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            labelLine={false}
            label={renderCustomizedLabel}
            isAnimationActive={true}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartBox;
