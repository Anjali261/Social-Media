import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData' 
import Online from '../online/Online'

export default function Rightbar({profile}) {
  const HomeRightbar =() =>{
    return(
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/gift.png" alt="" />
          <span className='birthdayText'> <b>Pola Foster </b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img  className="rightbarAd" src="assets/add.jpg" alt="" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>

                 {/*  pasted in online*/}
                 {Users.map(u=>(
                  <Online key={u.id} user={u} />
                 ))}
        </ul>
      
      </>
    )
  }

  const ProfileRightbar =() =>{
    return(
      <>
      <h4 className='rightbarTitle'>User information</h4>
      <div className="rightbarInfo">
      <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">India</span>

        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Patna</span>

        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>

        </div>
      </div>
      <h4 className='rightbarTitle'>User friends</h4>
      <div className="rightbarFoolowings">
        <div className="rightbarFollowing">
          <img src="assets/person/person.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Anjali Singh</span>
        </div>

        <div className="rightbarFollowing">
          <img src="assets/person/person2.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Anjali Singh</span>
        </div>

        <div className="rightbarFollowing">
          <img src="assets/person/person3.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Anjali Singh</span>
        </div>

        <div className="rightbarFollowing">
          <img src="assets/person/leminho.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Anjali Singh</span>
        </div>

        <div className="rightbarFollowing">
          <img src="assets/person/cool.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Anjali Singh</span>
        </div>

        <div className="rightbarFollowing">
          <img src="assets/person/actres.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Anjali Singh</span>
        </div>
      </div>

      </>
    )
  }
  
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar />
      
      </div>
    </div>
  )
}
