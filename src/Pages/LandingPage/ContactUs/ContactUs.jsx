import React from 'react'
import ContactUsimage from '../../../Assets/Images/ContactUsImage.svg'
import ContactUsForm from './ContactUsForm'

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full sm:w-full sm:min-h-screen sm:flex sm:justify-center sm:items-center sm:h-full md:w-full md:flex md:justify-center md:items-center md:min-h-screen"  >
        <div className=" mt-8 m-auto w-[90%]  md:w-[70%]  font-[caveat-regular] ">
        <header className=" flex flex-col justify-center items-center">
          <h1 className=" text-3xl md:text-6xl">Contact us</h1>
          <h3 className=" text-xl md:text-3xl">Where can you find us</h3>
        </header>
        <section className=" mt-5 pt-2 flex flex-col lg:flex-row-reverse justify-around items-center gap-10 lg:justify-between  border-[0.4px] border-[#444444]">
        <img
            src={ContactUsimage}
            alt="ContactUsimage"
            className=" h-[7rem] md:h-[10rem] lg:h-[25rem]"
          />
          <ContactUsForm/>
          
          
        </section>
        </div>
    </div>
  )
}

export default ContactUs