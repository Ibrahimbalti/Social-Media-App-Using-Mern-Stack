import React from 'react'
import "./sidebar.css"
import {RssFeed,Chat,PlayCircleFilled,Group,Bookmark,HelpOutline,WorkOutline,Event,School} from "@material-ui/icons"
const Sidebar = () => {
    return (
        <div className="sidebar">
           <div className="sidebarwrapper">
               <ul className="sidebarlist">
                   <li className="sidebarlistitem">
                       <RssFeed className="sidebaricon" />
                       <span className="sidebarlistitme">Feed</span>
                   </li>
                   <li className="sidebarlistitem">
                       <Chat className="sidebaricon" />
                       <span className="sidebarlistitme">Chat</span>
                   </li>
                   <li className="sidebarlistitem">
                       <PlayCircleFilled className="sidebaricon" />
                       <span className="sidebarlistitme">Videos</span>
                   </li>
                   <li className="sidebarlistitem">
                       <Group className="sidebaricon" />
                       <span className="sidebarlistitme">Group</span>
                   </li>
                   <li className="sidebarlistitem">
                       <Bookmark className="sidebaricon" />
                       <span className="sidebarlistitme">Bookmark</span>
                   </li>
                   <li className="sidebarlistitem">
                       <HelpOutline className="sidebaricon" />
                       <span className="sidebarlistitme">Question</span>
                   </li>
                   <li className="sidebarlistitem">
                       <WorkOutline className="sidebaricon" />
                       <span className="sidebarlistitme">Jobs</span>
                   </li>
                   <li className="sidebarlistitem">
                       <Event className="sidebaricon" />
                       <span className="sidebarlistitme">Events</span>
                   </li>
                   <li className="sidebarlistitem">
                       <School className="sidebaricon" />
                       <span className="sidebarlistitme">Courses</span>
                   </li>
               </ul>

               <button className="sidebarButton">Show More</button>
               <hr  className="sidebarHR"/>
               <ul className="sidebarFriendList">
                   <li className="sidebarFriend">
                       <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                       <span className="sidebarFriendName">Nawaz Sermiki</span>
                   </li>

                   <li className="sidebarFriend">
                       <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                       <span className="sidebarFriendName">Nawaz Sermiki</span>
                   </li>


                   <li className="sidebarFriend">
                       <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                       <span className="sidebarFriendName">Nawaz Sermiki</span>
                   </li>

                   <li className="sidebarFriend">
                       <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                       <span className="sidebarFriendName">Nawaz Sermiki</span>
                   </li>


                   <li className="sidebarFriend">
                       <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                       <span className="sidebarFriendName">Nawaz Sermiki</span>
                   </li>

                   <li className="sidebarFriend">
                       <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                       <span className="sidebarFriendName">Nawaz Sermiki</span>
                   </li>
                   <li className="sidebarFriend">
                       <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                       <span className="sidebarFriendName">Nawaz Sermiki</span>
                   </li>
               </ul>
           </div>
        </div>
    )
}

export default Sidebar
