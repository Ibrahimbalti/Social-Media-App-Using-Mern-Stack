import React from 'react';
import Toolbar from '../../components/toolbars/Toolbar';
import Sidebar from '../../sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import './profile.css';

const Profile = () => {
  return (
    <>
      <Toolbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
              <div className="profileCover">
                  <img src="assets/post/3.jpeg" alt="" className="profileCoverImage" />
                  <img src="assets/person/7.jpeg" alt="" className="profileUserImage" />
              </div>
              <div className="profileInfo">
                  <h2 className='porfileInfoName'>Muhammad Razwan</h2>
                  <span className='profileInfoDsc'>I am bussiness developer</span>
              </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
