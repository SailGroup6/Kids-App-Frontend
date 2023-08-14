import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import AboutUs from './AboutUs/AboutUs'
import ContactUs from './ContactUs/ContactUs'

const LandingPage = () => {
  return (
    <div className=" bg-[#FFFDFC]">
        <HeroSection/>
        <AboutUs/>
        <ContactUs/>
    </div>
  )
}

export default LandingPage