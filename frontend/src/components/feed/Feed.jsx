import React from 'react'
import Post from '../post/Post'
import "./feed.css"
import Share from '../../share/Share'
const Feed = () => {
    return (
        <div className="feed">
           <div className="feedwrapper">
<Share/>
<Post/>
<Post/>
<Post/>
<Post/>
<Post/>
<Post/>
           </div>
        </div>
    )
}

export default Feed
