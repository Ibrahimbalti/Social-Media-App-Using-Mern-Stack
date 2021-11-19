import React from 'react'
import './post.css'
import {MoreVert} from '@material-ui/icons'
const Post = () => {
    return (
        <div className="post">
            <div className="postWrapper">
                {/* ..................Post Top................. */}
                <div className="postTop">
                     {/* ..................Post Left................. */}
                    <div className="postLeft">
                        <img src="/assets/person/1.jpeg" alt="Post Profile" className="postProfileImg" />
                        <span className="postUsername">Nawaz Sermiki</span>
                        <span className="postDate">5 minut ago</span>
                    </div>

                     {/* ..................Post Right................. */}
                    <div className="postRight">
                        <MoreVert/>
                    </div>
                </div>

                {/* ..................Post Center................. */}
                <div className="postCenter">
                    <span className="postText">Hi ! This is my first post :)</span>
                    <img src="/assets/post/1.jpeg" alt="Post Img" className="postImg" />
                </div>

                {/* ..................Post  Bottom................. */}
                <div className="postBottom">

                     {/* ..................Post  Bottom Left................. */}
<div className="postBottomLeft">
    <img src="/assets/like.png" alt="Like" className="likeIcon" />
    <img src="/assets/heart.png" alt="Like" className="likeIcon" />
    <span className="postLikeCounter">32 people like it</span>
</div>
                      {/* ..................Post  Bottom  Right................. */}
                      <div className="postBottomRight">
                          <span className="postCommentText">9 comments</span>
                      </div>
                </div>
            </div>
            
        </div>
    )
}

export default Post
