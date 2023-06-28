import React from 'react'
import "./closeFriend.css";
export default function CloseFriend({user}) {
  return (
    <li className='sidebarFriend'>
<img classNamesrc="sidebarFriendImg" src={user?.profilePicture}  style={{"width":"32px", "height":"32px","border-radius":"50%", "objectFit":"cover","marginRight":"10px"}} alt="" />
<span className='sidebarFriendName'>{user?.username}</span>
</li>
  )
}
