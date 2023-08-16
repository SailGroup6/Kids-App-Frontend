import React from 'react'
import ContactInput from './ContactInput'

const ContactUsForm = () => {
  return (
    <div className="grid md:gap-12">
        <div className=' flex flex-col'>
        <ContactInput
            label={"First name"}
            arialLabel={"Firstname"}
            id={"name"}
            name={"name"}
            type={"text"}
            required
            className={` px-6 py-4`}
          />
    
          <ContactInput
            label={"Last name"}
            arialLabel={"Lastname"}
            id={"email"}
            name={"email"}
            type={"email"}
            required
            className={` px-6 py-4`}
          />
        </div>

          <div className=' flex flex-col '>
          <ContactInput
            label={"Email"}
            arialLabel={"Email"}
            id={"email"}
            name={"email"}
            type={"email"}
            required
            className={` px-6 py-4 `}
          />
           <ContactInput
            label={"Phone number"}
            arialLabel={"Phonenumber"}
            id={"phonenumber"}
            name={"phonenumber"}
            type={"text"}
            required
            className={` px-6 py-4`}
          />
          </div>
    </div>
  )
}


export default ContactUsForm