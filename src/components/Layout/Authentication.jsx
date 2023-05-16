import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router';

const Authentication = (props) => {
    const navigate= useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(()=>{
        let loginState= JSON.parse(localStorage.getItem('token'));
        if(!loginState){
            setIsLoggedIn(false)
            navigate('/login')
        }else{
            setIsLoggedIn(true)
        }
    },[])
  return (
    isLoggedIn && props.children
  )
}

export default Authentication