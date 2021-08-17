import "./post.css";
import { MoreVert } from "@material-ui/icons";
import React, { useState, useEffect } from "react";

export default function Post() {
  const [data, setData] = useState([]);
  const [errors , setErrors] = useState("");
  useEffect(() => {
    getData();
  }, []);
  async function deleteproduct(id) {
    setErrors("Post deleted!");
    let result = await fetch("http://localhost:8000/api/delete/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    console.warn(result);
    getData();
  }
  async function getData() {
    let result = await fetch("http://localhost:8000/api/list");
    result = await result.json();
    setData(result);
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" alt="" src="assets/avatar2.png" />
            <span className="postUsername"></span>
            
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        {data.map((item) => (
          <div className="postCenter">
            <h2 style={{ color: "Green" }}>{errors}</h2>
            <span className="postText" >{item.post}</span>
            <img
              className="postImg"
              src={"http://localhost:8000/" + item.file_path}
              alt=""
            />
            <span className="postDate">{item.created_at}</span>
            <span onClick={()=>{deleteproduct(item.id)}} className="delete">Delete</span>
          </div>
        ))}

        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like1.png"
        
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              
              alt=""
            />
            <span className="postLikeCounter"> people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
