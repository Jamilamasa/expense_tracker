import React from 'react'
import { useNavigate } from 'react-router-dom'

const Protect = ({ isLogged,setislogged, children }) => {

    const navigate = useNavigate()


    console.log(isLogged);
    if (isLogged){
        setislogged(true)
        return children
    }
    else {
        setislogged(false)
        navigate("/sign-in")
    }

}

export default Protect
