import React from "react";
import "./../styles/ButtonComponent.css";

function ButtonComponent({ title }) {
  return (
    <div className="buttonComponentContainer">
      <span className="buttonComponentTitle">{title}</span>
    </div>
  );
}

export default ButtonComponent;
