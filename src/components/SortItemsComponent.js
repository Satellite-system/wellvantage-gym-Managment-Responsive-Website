import React, { useState } from "react";
import "./../styles/SortItemsComponent.css";

function SortItemsComponent({ label, width }) {
  const [order, setOrder] = useState("asc"); // asc | desc

  const onSortChange = (order) => {
    console.log("Sorted:", order);
  };

  const toggleSort = () => {
    const newOrder = order === "asc" ? "desc" : "asc";
    setOrder(newOrder);
    if (onSortChange) onSortChange(newOrder);
  };

  return (
    <div
      className="containerSortItemsComponent"
      onClick={toggleSort}
      style={width && { width: width }}
    >
      <span className="labelSortItemsComponent">{label}</span>

      <span className="iconSortItemsComponent">
        {order === "asc" ? "↑↓" : "↓↑"}
      </span>
    </div>
  );
}

export default SortItemsComponent;
