import React from "react";
import avatarPlaceholder from "./../assets/icons/avatarPlaceholder.svg";
import Arrow_right_circle from "./../assets/icons/Arrow_right-circle.svg";
import box from "./../assets/icons/Box.svg";
import whatsappLogo from "./../assets/icons/logos_whatsapp-icon.svg";
import "./../styles/LeadItem.css";

function LeadItem({ name, assignedTo, lastInteracted, eyeColor, id }) {
  return (
    <div className="leadItemContainer">
      <img src={avatarPlaceholder} alt="" />

      {/* <span>{id}</span> */}
      <span>{name}</span>
      <span>{eyeColor}</span>
      <span>{assignedTo}</span>
      <span>{lastInteracted}</span>

      <div className="leadItemActionContainer">
        <img src={whatsappLogo} alt="Whatsapp Logo" />
        <img src={Arrow_right_circle} alt="Arrow Right" />
        <img src={box} alt="Box" />
      </div>
    </div>
  );
}

export default LeadItem;
