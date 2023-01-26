import React from 'react'
import { Link } from 'react-router-dom'
const SignIn = () => {
  return (
    <div className='h-100'>
       
       <form action="" className=' d-flex flex-column gap-4 justify-content-center align-items-center w-100 text-light  ' style={{height:"100vh",background:"#0a2640"}}>
       <h1 className=' h1' style={{fontFamily:"serif"}}>Sign-In</h1>
        <div className='d-flex flex-column'>
            <label htmlFor="" className=''>Username</label>
           <input type="text" placeholder='Enter username' />
        </div>
        <div className='d-flex flex-column'>
            <label htmlFor="" className=''>Email</label>
           <input type="text" placeholder='Enter Email' />
        </div>
        <div className='d-flex flex-column'>
            <label htmlFor="">Password</label>
           <input type="password" placeholder='Enter Password' />
        </div>
        <input style={{borderRadius:"12px",background:"#65e4a3"}} class="btn  text-white" type="submit" />
           <div className=' d-flex gap-5'>
         
            <p>Already have existing account ? <Link className='text-danger' to="/sign-in"> Sign-In</Link></p>
           </div>
           
       </form>
    </div>
  )
}

export default SignIn
