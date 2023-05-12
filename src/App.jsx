 import React, { useEffect, useState } from 'react'
//  import { LocalStorage } from './components/localStorage'
import { ApiCalling } from './components/apiCalling'


const App = () => {
  return <>
    {/* <LocalStorage/> */}
    {/* <ApiCalling/> */}
    <div  className='flex flex-col lg:flex-row'>
      <p className='text-base font-bold text-blue-400 sm:text-yellow-400 lg:text-red-600 m-10'>Tailwind CSS</p>
      <p className='text-base font-bold text-blue-400 sm:text-yellow-400 lg:text-red-600 m-10'>Tailwind CSS</p>
      <p className='text-base font-bold text-blue-400 sm:text-yellow-400 lg:text-red-600 m-10'>Tailwind CSS</p>
    </div>
  </>
}

export default App