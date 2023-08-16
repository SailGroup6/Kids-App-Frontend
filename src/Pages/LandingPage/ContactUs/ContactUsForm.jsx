import React from "react";
import ContactInput from "./ContactInput";

const ContactUsForm = () => {
  return (
    <div className="grid gap-4 ">
      <div className=" flex flex-col gap-4 ">
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

      <div className=" flex flex-col gap-4 ">
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

      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your message
      </label>
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>

      <div className=" border-[0.5px] border-gray-400 rounded-md py-1 my-4 flex items-center justify-center bg-gradient-to-r from-[#1DA684] to-[#BEDC7CFC]">
        <button type="submit" className=" text-white ">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactUsForm;
