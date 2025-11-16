import React from "react";
import "./../styles/InputBoxComponent.css";

function InputBoxComponent({ title, required, subTitle }) {
  return (
    <div className="containerInputBoxComponent">
      <p className="titleInputBoxComponent">
        {title}
        {required && "*"}
      </p>
      {subTitle && <p className="titleInputBoxComponent">{subTitle}</p>}
      <input type="text" className="inputBox" />
    </div>
  );
}

export default InputBoxComponent;
