import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import './SignInSignUp.css';
import Button from '@mui/material/Button';

function SignInSignupWithLocalStorage(){
   const name=useRef()
   const email=useRef()
   const phone=useRef()
   const password=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPhone=localStorage.getItem("phone")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")
   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })
   const handleClick=()=>{
       if(phone.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("phone",phone.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        // alert("Account created successfully!!")
        window.location.reload()
      }
   }

   const handleSignIn=()=>{
    if(email.current.value==localEmail&&password.current.value==localPassword&&phone.current.value==localPhone){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
   }
    return(
        <div>
            {showHome?<Home/>:
            (show?
                <div className="container">
                        <h1>Sign In Page</h1>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Phone Number" type='Phone' ref={phone} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <Button variant="contained" color="success" onClick={handleSignIn}>Sign In</Button>
                </div>
                :
                <div className="container">
                        <h1>SignUp Page</h1>
                        <div className="input_space">
                            <input placeholder="Name" type='text' ref={name} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Phone Number" type='Phone' ref={phone} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <Button variant="contained"  onClick={handleClick}>Sign Up</Button>
                </div>)
            }
        </div>
    );
}
export default SignInSignupWithLocalStorage;