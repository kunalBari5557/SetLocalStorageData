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

    const [input, setInput] = useState({
        username: '',
        password: '',
        confirmPassword: ''
      });
     
      const [error, setError] = useState({
        username: '',
        password: '',
        confirmPassword: ''
      })
     
      const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
          ...prev,
          [name]: value
        }));
        validateInput(e);
      }
     
      const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
          const stateObj = { ...prev, [name]: "" };
     
          switch (name) {
            case "username":
              if (!value) {
                stateObj[name] = "Please enter Username.";
              }
              break;
     
            case "password":
              if (!value) {
                stateObj[name] = "Please enter Password.";
              } else if (input.confirmPassword && value !== input.confirmPassword) {
                stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
              } else {
                stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
              }
              break;
     
            case "confirmPassword":
              if (!value) {
                stateObj[name] = "Please enter Confirm Password.";
              } else if (input.password && value !== input.password) {
                stateObj[name] = "Password and Confirm Password does not match.";
              }
              break;
     
            default:
              break;
          }
     
          return stateObj;
        });
      }
      
   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })
   const handleClick=(e)=>{
       if(phone.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("phone",phone.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        // alert("Account created successfully!!")
        window.location.reload()
      }
      onInputChange(e)
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
                            <input placeholder="Password" name="password" type='password' ref={password} />
                        </div>
                        <Button variant="contained" color="success" onClick={handleSignIn}>Sign In</Button>
                </div>
                :
                <div className="container">
                        <h1>SignUp Page</h1>
                        <div className="input_space">
                            <input placeholder="Name" type='text' name="username" ref={name} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Phone Number" type='Phone' ref={phone} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" name="password" type='password' ref={password}
                            value={input.password}
                            onChange={onInputChange}
                            onBlur={validateInput}
                            /><br></br>
                            {error.password && <span className='err' style={{color:"red"}}>{error.password}</span>}
                        </div>
                        <div className="input_space">
                            <input placeholder="Confirm Password" type='password' ref={password}
                            name="confirmPassword"
                            onChange={onInputChange}
                            onBlur={validateInput}
                            /><br></br>
                             {error.confirmPassword && <span className='err' style={{color:"red"}}>{error.confirmPassword}</span>}
                        </div>
                        <Button variant="contained"  onClick={handleClick}>Sign Up</Button>
                </div>)
            }
        </div>
    );
}
export default SignInSignupWithLocalStorage;