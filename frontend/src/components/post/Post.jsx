import React from 'react'
import "./post.css"
import { MoreVert , FavoriteBorderOutlined  ,  ThumbUpAltRounded} from '@material-ui/icons' 
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
                <img className='postImg' src="assets/post/post4.jpg"  alt="" />
            </div>
            <div className="postButtom">
                <div className="postBottomLeft">
                 {/* < FavoriteBorderRounded /> */}
                 < FavoriteBorderOutlined className='likeIcon' htmlColor='red' />
                 <ThumbUpAltRounded className='likeIcon' htmlColor='blue'/>
                 <span className='postLikeCounter'> 32 people like it</span>
                    {/* <img className="likeIcon" width="35px" height="25px" src="/assets/like4.png" alt="" /> */}
                    {/* <img className='likeIcon' width="35px" height="30px" src="/assets/heart1.png" alt="" /> */}
                </div>
            
            <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
            </div>
            </div>

        </div>
    </div>
  )
}
