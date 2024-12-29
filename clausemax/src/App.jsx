import React, { useState } from 'react'
import {Contact,Footer,Copyright} from "./components"
import { Outlet } from 'react-router-dom';
import "./App.css"

function App() {


  return (
  <div className='space-y-4 flex flex-col ' >
    <div className='flex flex-col gap-8'>
       <Outlet/>
       <div className='p-4 gap-8 flex flex-col'>
       <Contact/>
       <Footer/>
       </div>
      
    </div>
      
    <div className='md:px-8'>
      <Copyright/> 
    </div>
  </div>
  
  )
}

export default App
