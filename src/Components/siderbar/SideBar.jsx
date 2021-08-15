import React from 'react'
import "./sidebar.css"
import {RssFeed,Chat,VideoLibrary,Save,Work} from "@material-ui/icons"

export default function SideBar() {
    return (
        <div className="SideBar">
          <div className="SideWrapper">
            <ul className="sidebarlist">
                <li className="sidebarListItem">
                <RssFeed  className="sidebarItemIcon"/>
                <span className="siderbarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                <Chat  className="sidebarItemIcon"/>
                <span className="siderbarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                <VideoLibrary  className="sidebarItemIcon"/>
                <span className="siderbarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                <Save  className="sidebarItemIcon"/>
                <span className="siderbarListItemText">Saved Items</span>
                </li>
                <li className="sidebarListItem">
                <Work  className="sidebarItemIcon"/>
                <span className="siderbarListItemText">Jobs</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFrndList">
             <li className="sidebarfrnd">
                 <img src="/assets/3.jpg" alt="" className="frndImg"/>
                 <span className="frndname">Sonia</span>
             </li>
             <li className="sidebarfrnd">
                 <img src="/assets/2.jpg" alt="" className="frndImg"/>
                 <span className="frndname">Antara</span>
             </li>
             <li className="sidebarfrnd">
                 <img src="/assets/3.jpg" alt="" className="frndImg"/>
                 <span className="frndname">Sumu</span>
             </li>
             <li className="sidebarfrnd">
                 <img src="/assets/4.jpg" alt="" className="frndImg"/>
                 <span className="frndname">Atri</span>
             </li>
             <li className="sidebarfrnd">
                 <img src="/assets/5.jpg" alt="" className="frndImg"/>
                 <span className="frndname">Naaz</span>
             </li>
            </ul>
          </div>
        </div>
    )
}
