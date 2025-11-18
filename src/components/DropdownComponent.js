import React, { useState } from "react";
import "./../styles/DropdownComponent.css";

function DropdownComponent({ placeholder, width }) {
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { label: "Fast", value: "fast" },
    { label: "Random", value: "random" },
    { label: "H1BC", value: "h1bc" },
  ];
  return (
    <select
      id="dropdown"
      value={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
      className="DropdownComponentContainer"
      style={{ width: width ? width : "100px" }}
    >
      <option className="DropdownComponentLabel" value="" disabled hidden>
        {placeholder}
      </option>
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default DropdownComponent;
