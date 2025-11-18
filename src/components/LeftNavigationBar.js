import React from "react";
import wellvantageImg from "./../assets/images/wellvantage.svg";
import "./../styles/LeftNavigationBar.css";
import icon1 from "./../assets/icons/material-symbols_dashboard-2-outline-rounded.svg";
import icon2 from "./../assets/icons/Vector.png";
import icon3 from "./../assets/icons/fa6-solid_user-tie.svg";
import icon4 from "./../assets/icons/fluent-mdl2_recruitment-management.svg";
import icon11 from "./../assets/icons/icon-park-outline_file-staff.svg";
import icon5 from "./../assets/icons/iconoir_notes.png";
import icon6 from "./../assets/icons/lsicon_marketing-outline.svg";
import icon8 from "./../assets/icons/mdi_tick.svg";
import icon9 from "./../assets/icons/streamline-plump_graph-bar-increase.svg";
import icon10 from "./../assets/icons/tdesign_member.svg";
import avatar from "./../assets/icons/Avatar.svg";
import logoutIcon from "./../assets/icons/logout.svg";

function LeftNavigationBar() {
  const listItems = [
    {
      icon: icon1,
      title: "Dashboard",
    },
    {
      icon: icon4,
      title: "Lead Management",
    },
    {
      icon: icon8,
      title: "WellVantage Leads",
    },
    {
      icon: icon10,
      title: "Member Management",
    },
    {
      icon: icon3,
      title: "Membership Management",
    },
    {
      icon: icon5,
      title: "Attendance Tracking",
    },
    {
      icon: icon11,
      title: "Employee Management",
    },
    {
      icon: icon9,
      title: "Revenue Management",
    },
    {
      icon: icon6,
      title: "Expense Management & Profit",
    },
    {
      icon: icon2,
      title: "Workout Management",
    },
  ];

  return (
    <div className="leftNavigationContainer">
      <img
        src={wellvantageImg}
        alt="wellvantage logo"
        className="wellvantageLogoLeftNavigation"
      />

      <div className="leftNavigationBarlistItemContainerBox">
        {listItems.map((item) => (
          <div className="listItemContainer">
            <img
              src={item.icon}
              alt="Item"
              className="leftNavigationListItemIcon"
            />
            <p className="leftNavigationListItemTitle">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="leftNavigationBarUserBox">
        <img
          src={avatar}
          alt="User Avatar"
          className="leftNavigationBarAvatar"
        />
        <p className="leftNavigationBarUserName">David Smith</p>
      </div>

      <div className="leftNavigationBarLogoutBox">
        <img src={logoutIcon} alt="" className="leftNavigationBarlogoutIcon" />
        <p className="leftNavigationBarlogoutTxt">Logout</p>
      </div>
    </div>
  );
}

export default LeftNavigationBar;
