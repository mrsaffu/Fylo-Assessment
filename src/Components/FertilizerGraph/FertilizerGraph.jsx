import React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./FertilizerGraph.css";

const FertilizerGraph = ({ name, data }) => {
  return (
    <div className="graph-container">
      <h3 className="graph-title">{name} - Monthly Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="req" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff4c60" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ff4c60" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="avail" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#36cfc9" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#36cfc9" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="requirement" stroke="#ff4c60" fillOpacity={1} fill="url(#req)" />
          <Area type="monotone" dataKey="available" stroke="#36cfc9" fillOpacity={1} fill="url(#avail)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FertilizerGraph;
