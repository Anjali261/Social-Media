import React from 'react'
import "./post.css"
import { MoreVert } from '@material-ui/icons' 

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src="/assets/person/1.jpg" alt="" />
                    <span className='postUsername'>Anjali Singh </span>
                    <span className='postDate'>5 mins ago </span>

                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>

            </div>
            <div className="postCenter">
                <span className="postText">Hey! Its my first Post :)</span>
                <img className='postImg' src="assets/post/post1.jpg" alt="" />
            </div>
            <div className="postButtom">
                <div className="postBottomLeft">
                    <img className="likeIcon"src="/assets/like.jpg" alt="" />
                    <img className='likeIcon' src="/assets/heart1.png" alt="" />
                </div>
            </div>
            <div className="postBottomRight"></div>

        </div>
    </div>
  )
}
