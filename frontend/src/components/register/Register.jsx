import React from 'react'
import "./register.css"



export default function Register() {
    return (
      <div className="login">
          <div className="loginWrapper">
              <div className="loginLeft">
                  <h3 className='loginLogo'>FunWorld</h3>
                  <span className="logindesc">Connect with friends and the world around you on FunWorld.</span>
              </div>
              <div className="loginRight">
                  <div className="loginBox">
                  <input type="Email" placeholder='Enter the Username' className="loginInput" />

                      <input type="Email" placeholder='Enter Your Email' className="loginInput" />
                      <input type="Email" placeholder='Enter Your Email' className="loginInput" />

                      
                  <input type="Password" placeholder='Password Again' className="loginInput" />
                  <button className='loginButton'> Sign Up</button>
                  <button className="loginRegisterButton">Log into Account</button>
  
  
                  </div>
              </div>
  
          </div>
      </div>
    )
  }