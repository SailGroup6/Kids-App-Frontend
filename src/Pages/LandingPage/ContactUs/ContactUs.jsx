import React from "react";
import ContactUsimage from "../../../Assets/Images/ContactUsImage.svg";
import { Element } from "react-scroll";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <Element name="contactUsLink">
      <div className="flex items-center justify-center h-screen w-full bg-[#FFFDFC]">
        <div className=" mt-6 m-auto w-[90%] md:w-[85%]  font-[caveat-regular] shadow-lg lg:shadow-none ">
          <header className=" flex flex-col justify-center items-center">
            <h1 className=" text-3xl md:text-6xl">Contact us</h1>
            <h3 className=" text-xl md:text-3xl">Where can you find us</h3>
          </header>

          <section className=" mt-5 flex flex-col sm:w-[auto] sm:h-[auto] lg:flex-row-reverse lg:h-[auto] lg:w-[auto] justify-around items-center gap-10 lg:justify-between lg:shadow-lg lg:rounded-md">
            <img
              src={ContactUsimage}
              alt="ContactUsimage"
              className=" h-[12rem] md:h-[15rem] sm:w-[auto] lg:h-[auto] lg:rounded-e-md "
            />

            <ContactUsForm />
          </section>
        </div>
      </div>
    </Element>
  );
};

export default ContactUs;
