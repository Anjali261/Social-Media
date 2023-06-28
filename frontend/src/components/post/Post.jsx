import React from 'react'
import "./post.css"
import { Users } from '../../dummyData'

import { MoreVert , FavoriteBorderOutlined  ,  ThumbUpAltRounded} from '@material-ui/icons' 
export default function Post({post}) {

// 

    return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={Users.filter((u) => u.id === post?.userId)[0]?.profilePicture} alt="" />
                    <span className='postUsername'>{Users.filter((u) => u.id === post?.userId)[0]?.username} </span>
                    <span className='postDate'>{post?.date}</span>

                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>

            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className='postImg' src={post?.photo} alt="" />
            </div>
            <div className="postButtom">
                <div className="postBottomLeft">
                 {/* < FavoriteBorderRounded /> */}
                 < FavoriteBorderOutlined className='likeIcon' htmlColor='red' />
                 <ThumbUpAltRounded className='likeIcon' htmlColor='blue'/>
                 <span className='postLikeCounter'> {post?.like} pople like it</span>
                    {/* <img className="likeIcon" width="35px" height="25px" src="/assets/like4.png" alt="" /> */}
                    {/* <img className='likeIcon' width="35px" height="30px" src="/assets/heart1.png" alt="" /> */}
                </div>
            
            <div className="postBottomRight">
                <span className="postCommentText">{post?.comment} comments</span>
            </div>
            </div>

        </div>
    </div>
  )
}
