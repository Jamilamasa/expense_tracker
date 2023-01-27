import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase';
import bg from "../Assets/bg.jpeg"
import NavBar from './NavBar';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
   
const navigate=useNavigate() 

const [email,setEmail]=useState("")
const [password,setpassword]=useState("")
const [errrors,seterrors]=useState("")
 
  const handlesubmit= (e)=>{
   
     e.preventDefault()
    //  alert()
   
      
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
     
      toast.info('☑️ Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        const user = userCredential.user;
      navigate("/sign-in")
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      seterrors(errorCode)

      toast.error("invalid authentication ",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      // return errorMessage;
      // ..
    });
  
  } 
 
 
 
  return (
    <div style={{background:`url(${bg})`,backgroundSize:"cover"}} className='h-100'>

       <NavBar/>
       <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
       <form  onSubmit={handlesubmit} action=""  className=' d-flex flex-column gap-4 justify-content-center align-items-center w-100 text-light  ' style={{height:"100vh",backdropFilter:"200x", backgroundColor:"rgba(0,0,0,0.65)"}}>
       <h1 className=' h1' style={{fontFamily:"sans-serif"}}>Sign Up</h1>
       <p className=' text-danger h3'>{errrors}</p>
        <div className='d-flex flex-column'>
            <label htmlFor="" className=''>Username</label>
           <input type="text"  className='p-2'  placeholder='Enter username' />
        </div>
        <div className='d-flex flex-column'>
            <label htmlFor="" className=''>Email</label>
           <input type="email"  className='p-2' value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter email' />
        </div>
        <div className='d-flex flex-column'>
            <label htmlFor="">Password</label>
           <input type="password"  className='p-2'  value={password} onChange={(e)=>setpassword(e.target.value)}  placeholder='Enter Password' />
        </div>
        <input style={{borderRadius:"12px",background:"#8923cd"}}  class="btn  text-white" type="submit" />
           <div className=' d-flex gap-5'>
         
            <p>If you dont have an acount ? <Link className='text-danger' to="/sign-in"> Sign In</Link></p>
           </div>
           
       </form>
    </div>
  )
}

export default Login
