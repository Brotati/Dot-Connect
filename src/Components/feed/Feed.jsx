import React from 'react'
import "./feed.css";
import Share from "../share/Share";
import {Posts} from "../../dummyData";
import Post from "../post/Post"

export default function Feed() {
    return (
        <div className="Feed">
           <div className="feedwrapper">
           <Share />  
               {Posts.map((p) =>(
                   <Post key={p.id} post={p}/>
               ))}     
           </div>
        </div>
    )
}
