import React from 'react'
import './post.css'
import {MoreVert} from '@material-ui/icons'
import { Users } from '../../dummyData'
const Post = ({post}) => {
    
    return (
        
        <div className="post">
            <div className="postWrapper">
                {/* ..................Post Top................. */}
                <div className="postTop">
                     {/* ..................Post Left................. */}
                    <div className="postLeft">
                        <img src="/assets/person/1.jpeg" alt="Post Profile" className="postProfileImg" />
                        <span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>

                     {/* ..................Post Right................. */}
                    <div className="postRight">
                        <MoreVert/>
                    </div>
                </div>

                {/* ..................Post Center................. */}
                <div className="postCenter">
                    <span className="postText">{post?.dsc}</span>
                    <img src={post.photo} alt="Post Img" className="postImg" />
                </div>

                {/* ..................Post  Bottom................. */}
                <div className="postBottom">

                     {/* ..................Post  Bottom Left................. */}
<div className="postBottomLeft">
    <img src="/assets/like.png" alt="Like" className="likeIcon" />
    <img src="/assets/heart.png" alt="Like" className="likeIcon" />
    <span className="postLikeCounter">{post.like} people like it</span>
</div>
                      {/* ..................Post  Bottom  Right................. */}
                      <div className="postBottomRight">
                          <span className="postCommentText">{post.comment} comment</span>
                      </div>
                </div>
            </div>
            
        </div>
    )
}

export default Post
