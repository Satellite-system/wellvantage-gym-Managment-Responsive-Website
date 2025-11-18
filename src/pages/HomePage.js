import React, { useEffect, useState } from "react";
import LeftNavigationBar from "../components/LeftNavigationBar";
import axios from "axios";
import LeadItem from "../components/LeadItem";
import "./../styles/HomePage.css";
import addItem from "./../assets/icons/addItem.svg";
import SearchBoxComponent from "../components/SearchBoxComponent";
import DropdownComponent from "../components/DropdownComponent";
import SortItemsComponent from "../components/SortItemsComponent";
import crossIcon from "./../assets/icons/cross.svg";

function HomePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users?limit=20&skip=0")
      .then((res) => {
        console.log("Response: ", res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      <LeftNavigationBar />
      <div className="rightSection">
        <div className="homePageTitleBox">
          <p className="homePageTitle">Lead Management</p>
          <img src={addItem} alt="Add Item" className="homePageAddItem" />
        </div>

        <div className="homePageSecondaryTitleContainer">
          <p className="homePageSecondaryTitleActive">Active</p>
          <p className="homePageSecondaryTitleInActive">Archieved</p>
        </div>

        <div className="homePageSingleRow">
          <SearchBoxComponent />
          <DropdownComponent
            placeholder="Last interaction : 1 June 2025"
            width="30%"
          />
        </div>

        <div className="homePageSingleRow">
          <div className="homePageSingleRowInner">
            <DropdownComponent placeholder="Interest Level" width="18%" />
            <DropdownComponent placeholder="Assigned to" width="18%" />
            <SortItemsComponent label="Created At" width="18%" />
            <SortItemsComponent label="Name Alphabetical" width="30%" />
          </div>
          <img src={crossIcon} alt="cancel" />
        </div>

        {user && (
          <div className="homePageUserCounts">
            {user.limit} of {user.total} leads selected
          </div>
        )}

        <div className="homePageUserTable">
          <div className="homePageUserTableTitle">
            <p className="homePageUserTableTitleTxt">Name</p>
            <p className="homePageUserTableTitleTxt">Interest Level</p>
            <p className="homePageUserTableTitleTxt">Assigned to</p>
            <p className="homePageUserTableTitleTxt">Last Intraction</p>
            <p className="homePageUserTableTitleTxt">Follow Up</p>
            <p className="homePageUserTableTitleTxt">Action</p>
          </div>
          {user &&
            user.users &&
            user.users.map((item) => (
              <LeadItem
                id={item.id}
                name={item.firstName}
                key={item.email}
                assignedTo={item.username}
                lastInteracted={item.birthDate}
                eyeColor={item.eyeColor}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
