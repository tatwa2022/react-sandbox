import React from 'react'

const Layout = (props) => {
    return (
        <div className='min-h-screen h-full w-full flex flex-col'>
            <div className='bg-red-200 w-full h-16'>
                <p>Navbar</p>
            </div>
            <div className='h-full'>
                <div className='bg-red-600 w-32'>
                    <p>Sidebar</p>
                </div>
                {/* <div className='bg-slate-200'>
                    {props.children}
                </div> */}

            </div>

            <div className='bg-blue-400 w-full h-14 mt-auto'>
                <p>Footer</p>
            </div>

        </div>
    )
}

export default Layout