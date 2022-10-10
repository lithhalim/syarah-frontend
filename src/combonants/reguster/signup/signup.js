import React, {  useRef } from 'react'
import Signinform from '../signin/signin-form'
import Signininfo from '../signin/signin-info'
import Signupform from './signup-form'
import Signupinfo from './signup-info'

import "../signup/reduster.css"


function Signup() {
const leftText=useRef()
const overlay=useRef()
const rightText=useRef()



// The forms
const accountForm=useRef()
const signinForm=useRef()


const signin=()=>{
  // Remove classes so that animations can restart on the next 'switch'
  leftText.current.classList.remove("overlay-text-left-animation");
  overlay.current.classList.remove("open-sign-up");
  rightText.current.classList.remove("overlay-text-right-animation-out");
  // Add classes for animations
  signinForm.current.classList += " form-right-slide-out";
  leftText.current.className += " overlay-text-left-animation-out";
  overlay.current.className += " open-sign-in";
  rightText.current.className += " overlay-text-right-animation";
  // hide the sign in form once it is out of view
  setTimeout(function(){
    signinForm.current.classList.remove("form-right-slide-in")
    signinForm.current.style.display = "none";
    signinForm.current.classList.remove("form-right-slide-out")
  },700);
  // display the sign up form once the overlay begins moving left
  setTimeout(function(){
    accountForm.current.style.display = "flex";
    accountForm.current.classList += " form-left-slide-in";
  },200);
}

const signup=()=>{
  // Remove classes so that animations can restart on the next 'switch'
  leftText.current.classList.remove("overlay-text-left-animation-out");
  overlay.current.classList.remove("open-sign-in");
  rightText.current.classList.remove("overlay-text-right-animation");
  // Add classes for animations
  accountForm.current.className += " form-left-slide-out"
  rightText.current.className += " overlay-text-right-animation-out";
  overlay.current.className += " open-sign-up";
  leftText.current.className += " overlay-text-left-animation";
  // hide the sign up form once it is out of view
  setTimeout(function(){
    accountForm.current.classList.remove("form-left-slide-in");
    accountForm.current.style.display = "none";
    accountForm.current.classList.remove("form-left-slide-out");
  }, 700);
  // display the sign in form once the overlay begins moving right
  setTimeout(function(){
    signinForm.current.style.display = "flex";
    signinForm.current.classList += " form-right-slide-in";
  }, 200);

}

  return (
    <div className='allItem'>
        <div className="container-reguster">
            <div className="overlay-reguster" id="overlay" ref={overlay}>
                <div className="sign-in" id="sign-in" ref={leftText}>
                    <h1>Welcome Back!</h1>
                      <p>To keep connected with us please login with your personal info</p>
                    <button className="switch-button" id="slide-right-button" onClick={signin}>Sign In</button>
                </div>
                <div className="sign-up" id="sign-up" ref={rightText}>
                    <h1>Hello, Friend!</h1>
                      <p>Enter your personal details and start a journey with us</p>
                    <button className="switch-button" id="slide-left-button" onClick={signup}>Sign Up</button>
                </div>
            </div>


        <div className="form">
            <div className="sign-in" id="sign-in-info" ref={accountForm}>
                <Signininfo/>
                <Signinform/>
            </div>


            <div className="sign-up" id="sign-up-info" ref={signinForm}>
                <h1>Create Account</h1>
                <Signupinfo/>
                <Signupform/>
            </div>
            
        </div>
        </div>
      
    </div>
  )
}

export default Signup





