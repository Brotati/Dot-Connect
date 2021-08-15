import "./post.css";
import { MoreVert } from "@material-ui/icons";
//import { Users } from "../../dummyData";
//import { useState } from "react";

export default function Post() {
  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/4.jpg"
              alt=""
            />
            <span className="postUsername">
             
            </span>
            <span className="postDate"></span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey its my 1st post</span>
          <img className="postImg" src="/assets/4.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like1.png"  alt="" />
            <img className="likeIcon" src="assets/heart.png"  alt="" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}