import React from 'react'
import "./rightbar.css"
const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="birthday Img" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Nawaz Sermiki</b> and <b>3 other friends</b> have a birthday.
                    </span>
                </div>
                <img src="/assets/ad.png" alt="Ad img" className="rightbarAdd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarProfileFriendList">
                    <li className="rightbarFriendList">
                   <div className="rightbarProfileImgContainer">
                   <img src="/assets/person/3.jpeg" alt="Rigtbar img" className="rightbarProfileImg" />
                   <span className="rightbarOnline"></span>
                   </div>
                   <span className="rightbarUsername">Muhammad Ishaq</span>
                    </li>


                    <li className="rightbarFriendList">
                   <div className="rightbarProfileImgContainer">
                   <img src="/assets/person/3.jpeg" alt="Rigtbar img" className="rightbarProfileImg" />
                   <span className="rightbarOnline"></span>
                   </div>
                   <span className="rightbarUsername">Muhammad Ishaq</span>
                    </li>


                    <li className="rightbarFriendList">
                   <div className="rightbarProfileImgContainer">
                   <img src="/assets/person/3.jpeg" alt="Rigtbar img" className="rightbarProfileImg" />
                   <span className="rightbarOnline"></span>
                   </div>
                   <span className="rightbarUsername">Muhammad Ishaq</span>
                    </li>


                    <li className="rightbarFriendList">
                   <div className="rightbarProfileImgContainer">
                   <img src="/assets/person/3.jpeg" alt="Rigtbar img" className="rightbarProfileImg" />
                   <span className="rightbarOnline"></span>
                   </div>
                   <span className="rightbarUsername">Muhammad Ishaq</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Rightbar
