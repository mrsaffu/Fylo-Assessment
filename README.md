<div id="top"></div>

<br />
<div align="center">
  <h1 style="color: #60AC4A;">
    Fyllo Interview Task
  </h1>

  <p align="center">
    A Dashboard for chemical fertilizer company
    <br />
    <br />

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The project is to create a dashboard for fyllo, displaying the table, which contains the list of fertilizer and their details like availability, requirements etc. And the analytics which is shown in graph so the user can easily know about the insights.Finally this project contains some dummy placeholders to make it look good eg: Navbar.

<!-- GETTING STARTED -->

# 🌱 Fertilizer Supply Chain Dashboard

A dynamic, interactive, and data-driven **Fertilizer Dashboard** built using **React.js**, **Recharts**, and **AG Grid** to visualize and analyze fertilizer requirement and availability across Indian states over months and years.

> 🚀 This dashboard is designed for internal analytics and decision-making to help improve supply chain planning in a fertilizer company.

---

## 📊 Features

- 📌 **Dashboard Overview Cards**

  - Total Fertilizers
  - Total States Covered
  - Total Records Tracked

- 🥇 **Top Fertilizers Analysis (Pie Charts)**

  - Top 5 Most Required Fertilizers
  - Top 5 Least Available Fertilizers

- 📅 **Year-wise Comparison (Bar Chart)**

  - Filter by **Fertilizer Product** and **State**
  - Visualize total **Requirement vs Availability** per year

- 📆 **Month-wise Comparison (Area Chart)**

  - Filter by **Fertilizer Product** and **Year**
  - Beautiful smooth area chart to show monthly **Requirement vs Availability**

- 📋 **AG Grid Table View**
  - Fully sortable and searchable data table
  - Column-wise filtering
  - Highly responsive and customizable

---

## 🛠️ Tech Stack Used

| Technology           | Description                                      |
| -------------------- | ------------------------------------------------ |
| **React.js**         | UI library for building reusable components      |
| **Recharts**         | Charting library used for all beautiful charts   |
| **AG Grid**          | Professional data table to manage large datasets |
| **CSS3**             | Clean and responsive styling                     |
| **JavaScript (ES6)** | Functional and modern code                       |
| **Fake JSON Data**   | Randomly generated realistic fertilizer dataset  |

---

## 🧠 Smart UI Highlights

- ✅ **Reusable Chart Components**
- 🎨 Clean, responsive, and modern design
- 🌐 Filters that provide real-time chart updates
- 🧩 Modular folder structure (easy to maintain and extend)
- ⚙️ Simple and readable code logic (interviewer-friendly)

---

## 📁 Folder Structure

```
fertilizer/
├── node_modules/                # Project dependencies
├── public/                      # Public assets like index.html, favicon etc.
├── src/                         # Source code
│   ├── Components/              # Reusable components
│   │   ├── AnalyticsCards/      # Cards showing analytics
│   │   ├── FertilizerGraph/     # Graph-related components
│   │   ├── MonthlyBarChart/     # Monthly bar chart component
│   │   ├── Sidebar/             # Sidebar navigation
│   │   ├── Topbar/              # Top navigation bar
│   │   ├── YearlyBarChart/      # Year-wise bar chart component
│   │   ├── Components.css       # Shared CSS for components
│   │   ├── PieChartBox.jsx      # Pie chart box component
│   │   └── StatCard.jsx         # Statistics card component
│   ├── Pages/                   # Page components for routing
│   │   ├── GraphPage/           # Page for displaying various graphs
│   │   ├── Home/                # Homepage component
│   │   └── ProductList/         # Product listing table (AG Grid)
│   ├── data/                    # Static/fake JSON data
│   ├── App.js                   # Root app component
│   ├── App.css                  # Global styles
│   ├── index.js                 # Entry point of React app
│   ├── utils.js                 # Utility/helper functions
│   ├── result.js                # Data processing logic
│   └── output.mjs               # Final output module (ES Module)
├── .gitignore                   # Git ignored files
├── package.json                 # Project metadata and scripts
├── package-lock.json            # Exact dependency tree
├── README.md                    # Interview-ready main README file
```

### Installation and Setup

1. Clone the repo
   ```sh
   git remote add origin https://github.com/mrsaffu/Fylo-Assessment.git
   ```
   ```
   git branch -M main
   ```
2. Install packages
   ```sh
   npm install or yarn install
   ```
3. To start server
   ```sh
    npm start or yarn start
   ```
4. To visit App
   ```sh
   localhost:3000
   ```

## 🙋 About Me

I am a passionate Full Stack Developer familiar with both frontend and backend technologies. This dashboard showcases my skills in building clean UI, reusable components, and working with data visualizations.

## 📞 Contact

- Name: Safwan Ahmad
<!-- - LinkedIn: [LinkedIn](https://www.linkedin.com/in/mrrsaffu/) -->
- Email: ahmadsafwan034@gmail.com
- Phone: ( +91 9546948075 )

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mrrsaffu/)  
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mrsaffu)
