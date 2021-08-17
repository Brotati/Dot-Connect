import React from "react";
import "./header.css";
import { Link,useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

export default function Header() {
  const user = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();

  function logout() {
    localStorage.clear();
    history.push("/register");
  }
  
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
          <Link to="/homepage" style={{ textDecoration: "none" }}>
            <span className="HeaderLink">Home</span>
          </Link>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <span className="HeaderLink">Profile</span>
          </Link>
            <span className="HeaderLink" onClick={logout}>Logout</span>
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
        <img src="/assets/avatar1.png" alt="" className="Header-img" />
      </div>
    </div>
  );
}
