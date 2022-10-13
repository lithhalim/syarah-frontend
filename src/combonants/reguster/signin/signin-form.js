import React, { useRef, useState } from 'react'
//The Decoded File
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';

import { Login_Create_Context } from '../../../context-api/all-Post-data';
import { useContext } from 'react';




function Signinform() {
  const form=useRef();
  const Navi=useNavigate();

  const loginContext=useContext(Login_Create_Context);

  //if the input is wrong like emoty filed 
  const [errorInput,seterrorInput]=useState(false)
  const [wrongEmailOrPass,setwrongEmailOrPass]=useState()
  const [verificationProblem,setVerificationProblem]=useState(false)


  







  const verifyEmail=()=>{    
    axios.post(`${process.env.REACT_APP_API}Nodemailer`,{
        headers:{'Content-Type':'application/json;charset=utf-8'},
        body:verificationProblem
    })
    Navi("/Verification")
}




  const signin=(e)=>{
    e.preventDefault()
     const email= form.current.email.value
     const password= form.current.password.value
        if(email.length<1||password.length<1){
          errorInput==false?seterrorInput(true):seterrorInput(false)
        }else{
              //Use To Decoded The Baseic Auth To Be `BASIC 5464d5s45d454s55dsdsadsa` And Send In Header
              const decoded=btoa(`${email}:${password}`)

              axios.post(`${process.env.REACT_APP_API}signin`,{
                headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json',"authorization":`BASIC ${decoded}` }
              }).then((x)=>{
                //to verify the code 
                        if(x.data.varification=="You Are Not Verify") {
                            setVerificationProblem(x.data)
                            return
                        }
                    if(x.data.accessToken!="There Is Problem In SignIn"&&x.data.varificationPass!=="done"){
                      loginContext.setToken(x.data.accessToken)
                      window.location.href="/"
                    }                

                }).catch((errors)=>{
                    //if The Email Or The Password ARE WRONG
                    setwrongEmailOrPass(errors.response.data)
                });


        }
  }









  

  return (
    <div>
            <p className="small">or use your email account:</p>
            {errorInput==true?<p style={{padding:"10px 0px",color:"red",fontWeight:"bold" }}>All Filed Are Required Section </p>:<></>}
            <form id="sign-in-form" ref={form}>      
                <input type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name='email' required/>
                <input type="password" placeholder="Password" name='password' required/>
                <p className="forgot-password">Forgot your password?</p>
                <button className="control-button in" onClick={signin}>Sign In</button>
            </form>
            {verificationProblem!==false?<Button variant="outlined" color="error" sx={{marginBottom:"15px"}} onClick={verifyEmail}> Press Here To Verify</Button>:<></>}

    </div>
  )
}

export default Signinform
