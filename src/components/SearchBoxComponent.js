import React from "react";
import lens from "./../assets/icons/lens.svg";
import "./../styles/SearchBoxComponent.css";

function SearchBoxComponent() {
  return (
    <div className="SearchBoxComponentContainer">
      <img src={lens} alt="Lens" className="SearchBoxComponentIcon" />
      <input
        type="text"
        placeholder="Search"
        className="SearchBoxComponentInput"
      />
    </div>
  );
}

export default SearchBoxComponent;
