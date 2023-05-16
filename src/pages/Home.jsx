import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate= useNavigate();
    const handleLogout= ()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }


  return (
    <div className='p-5'>
        <p className='text-red-600'>Home</p>
        <a href="/about">Go to About</a>
        <br/>
        <Link to="/about">Go to About without page reloading</Link>

        <button
        className='m-5 py-4 px-4  bg-slate-600 rounded-md text-white'
        onClick={()=>{
            handleLogout()
        }}>Logout</button>
    </div>
  )
}

export default Home