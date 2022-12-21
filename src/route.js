
import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'


export default function Routes() {
  return (

    <Routes>
      
          <Route  path="*" element={<Home />}/>
          <Route  path="/home" element={<Home />}/>
          
  </Routes>

  )
}