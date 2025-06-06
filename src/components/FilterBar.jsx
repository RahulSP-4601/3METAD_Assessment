import React from "react";
import './../css/FilterBar.css'

export default function FilterBar({ filters, setFilters }) {
  return (
    <div className="filter-bar">
      <button
        className={filters.tier === "All" ? "active" : ""}
        onClick={() => setFilters(f => ({ ...f, tier: "All" }))}
      >All</button>
      <button
        className={filters.tier === "Paid" ? "active" : ""}
        onClick={() => setFilters(f => ({ ...f, tier: "Paid" }))}
      >Paid</button>
      <button
        className={filters.tier === "Free" ? "active" : ""}
        onClick={() => setFilters(f => ({ ...f, tier: "Free" }))}
      >Free</button>
    </div>
  );
}
