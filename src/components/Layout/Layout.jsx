import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'

const Layout = (props) => {
   
    return (
        <div className='flex h-screen w-full flex-col bg-slate-400'>
            <div className='h-12 w-full bg-blue-600'>
                <p>navbar</p>                
            </div>
            <div className="flex h-full w-full bg-slate-700">
               <div className=' hidden h-full w-[40%] border border-red-600 bg-red-200 p-5 sm:block'>
                    <p>sidebar</p>
               </div>
               <div className='block w-[10%] bg-red-500 sm:hidden'>
                <p>Icon</p>
               </div>
               <div className='w-full h-full bg-cyan-200 p-5'>
                    {/* {props.children} */}
                    <Outlet/>
               </div>
                
            </div>
            <div className='h-12 bg-blue-600 w-full'>
                <p>footer</p>
            </div>
        </div>
    )
}

export default Layout