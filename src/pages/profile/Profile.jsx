import "./profile.css";
import Header from '../../Components/header/Header'
import SideBar from '../../Components/siderbar/SideBar'
import Feed from '../../Components/feed/Feed'
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
              <img
                className="profileCoverImg"
                src="assets/2.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/5.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
          <Rightbar profile/>
            <Feed />
          </div>
        </div>
      </div>
    </>
  );
}