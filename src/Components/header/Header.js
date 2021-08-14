import React from "react";
import "./header.css";
import SearchIcon  from "@material-ui/icons/Search";
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function Header() {
  return (
    <div className="HeaderContainer">
      <div className="HeaderLeft">
        <span className="logo">.Connect</span>
      </div>
      <div className="HeaderCenter">
        <div className="search">
          <SearchIcon className="srch-icon" />
          <input placeholder="Search for Friends" className="searchInput" />
        </div>
      </div>
      <div className="HeaderRight">
        <div className="HeaderLinks">
          <span className="HeaderLink">Home</span>
          <span className="HeaderLink">TimeLine</span>
        </div>
        <div className="HeaderIcons">
         <div className="HeaderIconItem">
             <PersonIcon />
             <span className="HeaderIconBadge">1</span>
         </div>
         <div className="HeaderIconItem">
             <ChatIcon />
             <span className="HeaderIconBadge">1</span>
         </div>
         <div className="HeaderIconItem">
             <NotificationsIcon />
             <span className="HeaderIconBadge">1</span>
         </div>
        </div>
        <img src="/assets/person1.jpg" alt="" className="Header-img"/>
      </div>
    </div>
  );
}

