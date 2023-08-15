import React from 'react'
import ContactUsimage from '../../../../Assets/Images/ContactUsImage.png'
import ContactUsForm from './ContactUsForm'

const ContactUs = () => {
  return (
    <div>
        <div className=" mt-8 m-auto w-[90%] md:w-[70%] border-[0.4px] border-[#444444]">
        <header className=" flex flex-col justify-center items-center">
          <h1 className=" text-4xl md:text-6xl">Contact us</h1>
          <h3 className=" text-2xl md:text-4xl">Where can you find us</h3>
        </header>
        <section className=" pt-5 flex flex-col md:flex-row justify-around items-center gap-10">
        <img
            src={ContactUsimage}
            alt="ContactUsimage"
            className=" h-[7rem] md:h-[10rem] lg:h-[20rem]"
          />
          <ContactUsForm/>
        </section>
        </div>
    </div>
  )
}

export default ContactUs