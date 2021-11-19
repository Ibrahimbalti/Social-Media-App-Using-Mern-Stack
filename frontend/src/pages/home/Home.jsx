import React from 'react';
import Toolbar from '../../components/toolbars/Toolbar';
import Sidebar from '../../sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import './home.css'
const Home = () => {
  return (
    <div>
      <Toolbar />
    <div className="homecontainer">
    <Sidebar />
    <Feed/>
    <Rightbar/>
    </div>
      
    </div>
  );
};

export default Home;
