import React from 'react'
import "./login.css";

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>FunWorld</h3>
                <span className="logindesc">Connect with friends and the world around you on FunWorld.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="Email" placeholder='Enter Your Email' className="loginInput" />
                    
                <input type="Password" placeholder='Password' className="loginInput" />
                <button className='loginButton'> Log In</button>
                <span className='loginForget'>Forget Password?</span>
                <button className="loginRegisterButton">Create a New Account</button>


                </div>
            </div>

        </div>
    </div>
  )
}
