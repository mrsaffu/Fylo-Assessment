import React from "react";
import fertilizerData from "../../data/fertilizerData";
import StatCard from "../../Components/StatCard";
import PieChartBox from "../../Components/PieChartBox";
import "./Home.css";
import YearlyBarChart from "../../Components/YearlyBarChart/YearlyBarChart";
import AnalyticsCards from "../../Components/AnalyticsCards/AnalyticsCards";
// import fertilizerData from "../../data/fertilizerData";
import filteredData from "../../data/fertilizerData";
import MonthlyBarChart from "../../Components/MonthlyBarChart/MonthlyBarChart";

const topRequired = [...fertilizerData]
  .sort((a, b) => b.totalRequirement - a.totalRequirement)
  .slice(0, 5);

const leastAvailable = [...fertilizerData]
  .sort((a, b) => a.totalAvailable - b.totalAvailable)
  .slice(0, 5);

const Home = () => {
  const totalStates = new Set(fertilizerData.map((item) => item.state)).size;
  const totalFertilizers = new Set(fertilizerData.map((item) => item.name))
    .size;

  const rowData = filteredData.map((item) => ({
    ...item,
    ...item.monthlyAvailability,
  }));

  return (
    <div className="home">
      <h2 className="dashboard-title">📈 Fertilizer Dashboard</h2>

      <AnalyticsCards data={rowData} />

      <div className="chart-row">
        <PieChartBox
          title="Top 5 Most Required Fertilizers"
          data={topRequired}
          dataKey="totalRequirement"
        />
        <PieChartBox
          title="Top 5 Least Available Fertilizers"
          data={leastAvailable}
          dataKey="totalAvailable"
        />
      </div>
      <div className="stats-section">
        <StatCard title="Total Fertilizers" value={totalFertilizers} />
        <StatCard title="Total States" value={totalStates} />
        <StatCard title="Total Records" value={fertilizerData.length} />
      </div>

      {/* 👇 Add this section below pie charts */}
      <div className="chart-section">
        <h3 style={{ margin: "2rem 1rem 1rem" }}>
          📊 Year-wise Requirement vs Availability
        </h3>
        <YearlyBarChart />
      </div>

      {/* 👇 Monthly chart section */}
      <div className="chart-section">
        <h3 style={{ margin: "2rem 1rem 1rem" }}>
          📅 Monthly Overview - Requirement vs Availability
        </h3>
        <MonthlyBarChart />
      </div>
    </div>
  );
};

export default Home;
