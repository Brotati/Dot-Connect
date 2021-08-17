import "./share.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"

export default function Share() {
  const [post, setPost] = useState("");
  const [file, setFile] = useState("");
  const [errors, setErrors] = useState("");
  
  async function Post() {
    const formdata = new FormData();
    setErrors("Post Shared");
    formdata.append("file", file);
    formdata.append("post", post);
    
    let result = await fetch("http://localhost:8000/api/post", {
      method: "POST",
      body: formdata,
    });
    
  }
  
  return (
    <div className="share">
       <h2 style={{ color: "Green" }}>{errors}</h2>
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/avatar5.png" alt="" />
          <input
            placeholder="Share your idea Brotati?"
            className="shareInput"
            value={post}
            onChange={(e)=> setPost(e.target.value)}
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <input className="shareOptionText" type="file" onChange={(e)=> setFile(e.target.files[0])}/>Photo or Video
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <Link to="/homepage">
            <button className="shareButton" onClick={Post}>Share</button>
            </Link>
        </div>
      </div>
    </div>
  );
}