import React from 'react'
import background from "../Assets/backgroun.png"
import Navbar from './Navbar'

const LandingPage = () => {
  return (
    <div className=' h-[100svh] w-[screen]'>
         <div style={{ backgroundImage: `url(${background})`}}
     className=' h-[100%] w-[100%] bg-no-repeat bg-cover'>
      <Navbar/>
    </div>
    </div>
  )
}

export default LandingPage