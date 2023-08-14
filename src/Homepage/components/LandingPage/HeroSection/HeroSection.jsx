import React from 'react'
import "../../../../index.css"
import Navbar from '../../Navbar/Navbar'
import LandingPageText from './HeroSectionText'
import Arrow from './Arrow'

const HeroSection = () => {
  return (
    <div className=' h-[100svh] w-[100%] herobg pt-9'>
         <div>
      <Navbar/>
    </div>
    <div className='h-[50%] flex flex-col justify-center align-middle'>
    <LandingPageText/>
    </div>
    <div className=' flex justify-center'>
      <Arrow/>
    </div>
    </div>
  )
}

export default HeroSection