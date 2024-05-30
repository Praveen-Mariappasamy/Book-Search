import React from 'react'
import './Login.css'
import {auth , provider} from './config';
import {signInWithPopup} from 'firebase/auth'
import logo from '../../images/google.png'
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    signInWithPopup(auth,provider).then((data)=>{
      localStorage.setItem('email',data.user.email)
      navigate("/book");
    })
  }
  return (
      <div id="login-box">
      <div className="box">
      <p id="login-text">Login/Signup with Google</p>
      <img className="logo" onClick={handleClick} src={logo} alt="touch"/>
      <p className='para'>register with google</p>
      </div>
      </div>
  )
}

export default About
