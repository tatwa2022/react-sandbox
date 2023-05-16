import React, { useEffect, useState } from 'react'
//  import { LocalStorage } from './components/localStorage'
// import { ApiCalling } from './components/apiCalling'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import Authentication from './components/Layout/Authentication'


const App = () => {
  return <>
    {/* <LocalStorage/> */}
    {/* <ApiCalling/> */}

    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route element={<Authentication><Layout /></Authentication>}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      {/* <Route path="/about-details/:id" element={<About/>} /> */}
      <Route path='*' element={<><div>Not found</div></>} />
    </Routes>
  </>
}

export default App