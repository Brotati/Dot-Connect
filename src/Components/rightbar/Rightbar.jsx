import React from 'react'
import "./rightbar.css";

export default function Rightbar({ profile }) {
    const ProfileRightbar = () => {
        return (
          <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">New York</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">Bangladesh</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Profession:</span>
                <span className="rightbarInfoValue">Student</span>
              </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                <img
                  src="assets/avatar1.png"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Brotati</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/avatar2.png"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Brotati</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/avatar3.png"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Brotati</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/avatar4.png"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Brotati</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/avatar5.png"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Brotati</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src="assets/avatar3.png"
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">Brotati</span>
              </div>
            </div>
          </>
        );
      };
      return (
        <div className="rightbar">
          <div className="rightbarWrapper">
            {profile ? <ProfileRightbar /> : null}
          </div>
        </div>
      );
    }

