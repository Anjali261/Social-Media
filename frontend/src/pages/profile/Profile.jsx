import React from 'react'
//shortcut frc
import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'


export default function Profile() {
  return (
    <>
   
    <Topbar /> 
    <div className="profile">
    
    <Sidebar />
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img className='profileCoverImg' src="assets/post/happy.jpg" alt="" />
            <img className='profileUserImg' src="assets/person/person.jpg" alt="" />

            </div>
            <div className="profileInfo">
                <h4 className='ProfileInfoName'>Anjali Singh</h4>
                <span className='ProfileInfoDesc'>Be the procrastinator to failure !</span>

            </div>

        </div>
        <div className="profileRightBottom">
        <Feed />
        <Rightbar profile />

        </div>
    
    </div>
    
    </div>
    </>
  )
}
