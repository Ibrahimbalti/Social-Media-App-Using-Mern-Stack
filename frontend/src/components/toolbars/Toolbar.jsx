import React from 'react';
import './topbar.css';
import {Search,Person,Chat,Notifications} from "@material-ui/icons"

const Toolbar = () => {
  return (
    <div className="topbarContainer">

      {/* ........................Topbar Left......................... */}
      <div className="topbarleft">
        <span className="logo">Skardusocial</span>
      </div>

       {/* ........................Center Left......................... */}
      <div className="topbarcenter">
    <div className="searchbar">
    <Search className="searchbaricon"/>
        <input type="text" placeholder="Search friend videos and photos" className="searchinput"/>
      </div>
      </div>


       {/* ........................Right Left......................... */}
    <div className="topbarright">
      <div className="topbarlinks">
        <span className="topbarlink">Home page</span>
        <span className="topbarlink">Timelines</span>
      </div>
      <div className="topbarIcons">
        <div className="topbariconitem">
          <Person/>
          <span className="topbarIconBadge">1</span>
        </div>

        <div className="topbariconitem">
          <Chat/>
          <span className="topbarIconBadge">1</span>
        </div>

        <div className="topbariconitem">
          <Notifications/>
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
      <img src="/assets/person/1.jpeg" alt="" className="topbarimg" />
    </div>
    </div>
  )
};

export default Toolbar;
