import React from "react";
import Feed from "../../Components/feed/Feed";
import Header from "../../Components/header/Header";
import SideBar from "../../Components/siderbar/SideBar";
import Rightbar from "../../Components/rightbar/Rightbar";

import "./home.css";

export default function home() {
  return (
    <div>
      <Header />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}
