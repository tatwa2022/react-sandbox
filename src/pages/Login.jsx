import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
    const navigate= useNavigate();
    const handleLogin= ()=>{
        localStorage.setItem('token', JSON.stringify(true));
        navigate('/')
    }

    useEffect(()=>{
        let loginState= JSON.parse(localStorage.getItem('token'));
        if(loginState){
            navigate('/')
        }
    },[])

  return (
    <div><button  className='m-5 py-3 px-5 bg-slate-600 rounded-md text-white' onClick={()=> handleLogin()}>Login</button></div>
  )
}

export default Login