import "./post.css";
import { MoreVert } from "@material-ui/icons";
//import { Users } from "../../dummyData";
import React, { useState } from "react";

export default function Post({ post }) {
    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)
  
    const likeHandler =()=>{
      setLike(isLiked ? like-1 : like+1)
      setIsLiked(!isLiked)
    }
   
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/avatar5.png"
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
          <img className="postImg" src="/assets/p4.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like1.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assets/heart.png"  onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}