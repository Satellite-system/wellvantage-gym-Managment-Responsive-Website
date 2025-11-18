import React from "react";
import "./../styles/ButtonComponent.css";

function ButtonComponent({ title, onClick  }) {
  return (
    <div className="buttonComponentContainer" onClick={onClick}>
      <span className="buttonComponentTitle">{title}</span>
    </div>
  );
}

export default ButtonComponent;
