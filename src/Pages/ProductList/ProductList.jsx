import React, { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import fertilizerData from "../../data/fertilizerData";
import "./ProductList.css";
import AnalyticsCards from "../../Components/AnalyticsCards/AnalyticsCards";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // 🔍 Search logic
  const filteredData = useMemo(() => {
    return fertilizerData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.state.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const rowData = filteredData.map((item) => ({
    ...item,
    ...item.monthlyAvailability,
  }));

  const columnDefs = [
    { headerName: "ID", field: "id", sortable: true, filter: true },
    { headerName: "Fertilizer", field: "name", sortable: true, filter: true },
    { headerName: "State", field: "state", sortable: true, filter: true },
    { headerName: "Requirement", field: "totalRequirement", sortable: true, filter: true },
    { headerName: "Available", field: "totalAvailable", sortable: true, filter: true },
    ...["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"].map(
      (month) => ({
        headerName: month.toUpperCase(),
        field: month,
        sortable: true,
        filter: true,
      })
    ),
  ];

  return (
    <div className="product-List-Section">
    <div className="product-list-container">
      <h2 className="product-list-title">🌾 Fertilizer Dashboard</h2>

      <AnalyticsCards data={rowData} />

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search Fertilizer or State..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div
        className="ag-theme-alpine custom-ag-theme"
        style={{
          height: "70vh",
          width: "100%",  
        }}
      >
        <AgGridReact
        className="custom-ag-theme"
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={20}
          defaultColDef={{
            flex: 1,
            minWidth: 100,
            resizable: true,
          }}
        />
      </div>
    </div>
    </div>
  );
};

export default ProductList;
