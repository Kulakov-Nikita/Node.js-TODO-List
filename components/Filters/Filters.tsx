import React, { useState } from "react";
import "./Filters.css";

export default function Filters({
  onFiltersSubmit,
}: {
  onFiltersSubmit: (filter: string) => void;
}) {

  const [activeFilter, setActiveFilter] = useState("all");

  function handleButtonClick(status: string) {
    setActiveFilter(status);
    onFiltersSubmit(status);
  }

  return (
    <form className="filters-form" action="GET">
      <div className="card-status-select form-input-container">
        <label htmlFor="status">Кринжометр</label>
        <div className="button-group">
          <button
            type="button"
            className={`filter-button ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => handleButtonClick("all")}
          >
            Все
          </button>
          <button
            type="button"
            className={`filter-button ${activeFilter === "true" ? "active" : ""}`}
            onClick={() => handleButtonClick("true")}
          >
            Ну такое...
          </button>
          <button
            type="button"
            className={`filter-button ${activeFilter === "false" ? "active" : ""}`}
            onClick={() => handleButtonClick("false")}
          >
            Лютый Кринж
          </button>
        </div>
      </div>
    </form>
  );
}
