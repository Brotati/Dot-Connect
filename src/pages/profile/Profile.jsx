import "./profile.css";
import Header from "../../Components/header/Header";
import SideBar from "../../Components/siderbar/SideBar";
import Feed from "../../Components/feed/Feed";
import Rightbar from "../../Components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Header />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets/p1.jpg" alt="" />
              <img className="profileUserImg" src="assets/avatar5.png" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Brotati Katha</h4>
              <span className="profileInfoDesc">Hello Dot-Connect!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}