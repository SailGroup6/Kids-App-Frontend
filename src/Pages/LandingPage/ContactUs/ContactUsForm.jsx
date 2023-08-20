import React from "react";
import ContactInput from "./ContactInput";

const ContactUsForm = () => {
  return (
    <div className="flex flex-col gap-4 pl-8">
      <div className="flex flex-col gap-4 lg:flex-row">
        <ContactInput
          label={"First name"}
          arialLabel={"Firstname"}
          id={"name"}
          name={"name"}
          type={"text"}
          required
          className={``}
        />

        <ContactInput
          label={"Last name"}
          arialLabel={"Lastname"}
          id={"name"}
          name={"name"}
          type={"text"}
          required
          className={` `}
        />
      </div>

      <div className="flex flex-col gap-4 lg:flex-row">
        <ContactInput
          label={"Email"}
          arialLabel={"Email"}
          id={"email"}
          name={"email"}
          type={"email"}
          required
          className={` `}
        />
        <ContactInput
          label={"Phone number"}
          arialLabel={"Phonenumber"}
          id={"phonenumber"}
          name={"phonenumber"}
          type={"text"}
          required
          className={` `}
        />
      </div>

      <textarea
      className=" resize-none  block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-lg text-gray-900 border-0 border-b-2 bg-inherit border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#9B5DE6] peer"
        id="message"
        rows="4"
        placeholder="Write your message..."
      ></textarea>

      <div className=" rounded-md py-1 my-4 flex items-center justify-center bg-gradient-to-r from-[#1DA684] to-[#BEDC7CFC]">
        <button type="submit" className="text-white ">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactUsForm;
