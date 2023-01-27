import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase';
import bg from "../Assets/bg.avif"
import { ToastContainer, toast } from 'react-toastify';
const SignIn = () => {
   const [email,setEmail]=useState("")
   const [password,setpassword]=useState("")
   const [errors,seterrors]=useState("")

   const navigate =useNavigate()

   const handleSubmit=(e)=>{
      e.preventDefault()
      signInWithEmailAndPassword(auth, email, password)
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
        console.log(user);
        navigate("/expense")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrors(errorCode)

      });
   }


  return (
    <div className='h-100' style={{background:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
       
       <form action="" className=' d-flex flex-column gap-4 justify-content-center align-items-center w-100 text-light  ' onSubmit={handleSubmit} style={{height:"100vh"}}>
       <h1 className=' h1' style={{fontFamily:"serif"}}>Sign-In</h1>
        <p className=' text-danger h3'>{errors}</p>
        <div className='d-flex flex-column'>
            <label htmlFor="" className=''>Email</label>
           <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter Email' />
        </div>
        <div className='d-flex flex-column'>
            <label htmlFor="">Password</label>
           <input type="password"  value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Enter Password' />
        </div>
        <input style={{borderRadius:"12px",background:"#65e4a3"}} class="btn  text-white" type="submit" />
           <div className=' d-flex gap-5'>
         
            <p>Already have existing account ? <Link className='text-danger' to="/sign-up"> Sign-Up</Link></p>
           </div>
           
       </form>
    </div>
  )
}

export default SignIn
