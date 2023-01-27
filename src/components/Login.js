import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='h-100'>
       
       <form action="" className=' d-flex flex-column gap-4 justify-content-center align-items-center w-100 text-light  ' style={{height:"100vh",background:"#438ff3"}}>
       <h1 className=' h1' style={{fontFamily:"serif"}}>Sign Up</h1>
        <div className='d-flex flex-column'>
            <label htmlFor="" className=''>Username</label>
           <input type="text" placeholder='Enter username' />
        </div>
        <div className='d-flex flex-column'>
            <label htmlFor="">Password</label>
           <input type="password" placeholder='Enter Password' />
        </div>
        <input style={{borderRadius:"12px",background:"#8923cd"}} class="btn  text-white" type="submit" />
           <div className=' d-flex gap-5'>
         
            <p>If you dont have an acount ? <Link className='text-danger' to="/sign-up"> Sign Up</Link></p>
           </div>
           
       </form>
    </div>
  )
}

export default Login
