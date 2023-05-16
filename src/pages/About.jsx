import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='p-5'>
            <p>
                About  </p>
                <a href="/">Go to Home</a> 
                <br/>
                <Link to="/">Go to Home without page reloading</Link>
                </div>
    )
}

export default About