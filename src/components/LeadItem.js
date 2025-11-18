import React from "react";
import avatarPlaceholder from "./../assets/icons/avatarPlaceholder.svg";
import Arrow_right_circle from "./../assets/icons/Arrow_right-circle.svg";
import box from "./../assets/icons/Box.svg";
import whatsappLogo from "./../assets/icons/logos_whatsapp-icon.svg";
import "./../styles/LeadItem.css";

const InterestLevelComponent = ({ interest }) => {
  const className =
    interest === "Brown" || interest === "Green"
      ? `leadItem${interest}Container`
      : "leadItemOtherContainer";

  const label =
    interest === "Brown"
      ? "🔥Hot"
      : interest === "Green"
      ? "❄️ Cold"
      : "🌡️Warm";

  return (
    <div className={className}>
      <span className="leadItemColorTxt"></span>
      {label}
    </div>
  );
};

function LeadItem({ name, assignedTo, lastInteracted, eyeColor, id }) {
  return (
    <div className="leadItemContainer">
      {/* <span>{id}</span> */}
      <div className="leadItemNameContainer">
        <img
          src={avatarPlaceholder}
          alt="avatar"
          className="leadItemAvatarImg"
        />
        <span className="leadItemFieldName">{name}</span>
      </div>
      <InterestLevelComponent interest={eyeColor} />
      <span className="leadItemField">{assignedTo}</span>
      <span className="leadItemFieldDate">26 Oct 2025</span>

      <div className="leadItemFieldFollowUpBox">
        <span className="leadItemFieldFollowUpBoxTxt">Need Follow Up</span>
      </div>

      <div className="leadItemActionContainer">
        <img src={whatsappLogo} alt="Whatsapp Logo" />
        <img src={Arrow_right_circle} alt="Arrow Right" />
        <img src={box} alt="Box" />
      </div>
    </div>
  );
}

export default LeadItem;
