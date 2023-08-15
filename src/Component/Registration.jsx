import React from "react";
import "../index.css";
import { useFormik } from "formik";
import * as yup from "yup";

const Registration = () => {
  const Formik = useFormik({
    initialValues: {
      fullname: "",
      age: "",
      gender: "",
      email: "",
      number: "",
      password: "",
      terms: "",
      parentname: "",
      cpassword: "",
      username: "",
      // terms:"false"
    },

    validationSchema: yup.object({
      fullname: yup.string().required(),
      age: yup.number().max(12, "Too Old").required("Age is Required"),
      email: yup.string().email("invalid email").required("Email is required"),
      number: yup
        .number()
        .typeError("Please enter a valid number")
        .integer("Please enter a whole number")
        .required("Number is required"),
      parentname: yup.string().required(),
      username: yup.string().required(),
      password: yup
        .string()
        .matches(/[0-9]/, "Password requires a number")
        .required("Password is required"),
      cpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], 'Must match "password" field value')
        .required("Confirm Password is required"),
      // terms: yup
      // .boolean()
      // .oneOf([true], "You must agree to the terms and conditions"),
      terms: yup.array().required(),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <main className="h-full bg flex items-center justify-center p-5">
        <form
          onSubmit={Formik.handleSubmit}
          className="w-[70%] h-[90%] bg-[#FFFFFF] p-10 shadow-lg rounded-lg"
        >
          <div className=" flex-col text-center text-black lg:text-[35px]">
            <div className="text-center  font-[caveat-300] animate-pulse text-cyan-950">
              🌟 Welcome to Kid Hive 🌟
            </div>
            <div className=" text-black  font-[caveat-300] text-[20px]">
              Student Registration Form
            </div>
          </div>

          {/* KID INFORMATION */}

          <div className="w-56 text-neutral-700 text-2xl  font-[caveat-300] font-semibold">
            👨🏿‍🦰 Kids Information
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="font-[poppins-bold]" >Full Name: </label>
            <input
              type="text"
              placeholder=""
              className=" w-full p-2 rounded-md outline-none border"
              value={Formik.values.fullname}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              name="fullname"
              title=""
              id="name"
            />
            <div className="text-red-500 text-[poppins-bold]">
              {Formik.touched.fullname && Formik.errors.fullname
                ? "A Name is Required"
                : ""}
            </div>
          </div>

          <div className="flex flex-row gap-5 w-full pt-3">
            <div className="flex flex-col w-[50%] ">
              <label htmlFor="age" className="font-[poppins-bold]" > 🎂 Age:</label>
              <input
                type="number"
                name=""
                id="age"
                className=" rounded-md p-1 outline-none border"
                value={Formik.values.age}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              <div className="text-red-500 font-[poppins-bold]">
                {Formik.touched.age && Formik.errors.age ? Formik.errors.age : ""}
              </div>
            </div>
            <div className="flex flex-col w-[50%]">
              <label htmlFor="gender" className="font-[poppins-bold]" >👫 Gender:</label>
              <select
                id="gender"
                name="gender"
                value={Formik.values.gender}
                onChange={Formik.handleChange}
                className=" rounded p-1 border"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="nonBinary">Non-binary</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* PARENT /GUARDIAN  INFORMATION */}
          <div className="   text-neutral-700 text-2xl  font-[caveat-300] font-semibold pt-5 pb-2">
            <h1> 👵 Parent/Guardian Information</h1>
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="font-[poppins-bold]"  > Parent/Guardian Full Name: </label>
            <input
              type="text"
              placeholder=" steven star"
              className=" w-full p-2 rounded-md outline-none border "
              name="parentname"
              value={Formik.values.parentname}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            <div className=" text-red-500 font-[poppins-bold]">
              {Formik.touched.parentname && Formik.errors.parentname ? "Parent Name is required" : ""}
            </div>
          </div>

          <div className="flex flex-row gap-5 w-full pt-3">
            <div className="flex flex-col w-[50%] ">
              <label htmlFor="email" className="font-[poppins-bold]" > 📧 Email Address:</label>
              <input
                type="email"
                name="email"
                placeholder="kideye@gamil.com"
                className="p-1 rounded outline-none border"
                value={Formik.values.email}
                onBlur={Formik.handleBlur}
                onChange={Formik.handleChange}
              />
              <div className=" text-red-500 font-[poppins-bold]">
                {Formik.touched.email && Formik.errors.email ? Formik.errors.email : ""}
              </div>
            </div>
            <div className="flex flex-col  w-[50%]">
              <label htmlFor="number" className="font-[poppins-bold]" > 📞 phone Number:</label>
              <input
                type="tel"
                name="number"
                placeholder="0709566499"
                value={Formik.values.number}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                className=" p-1 rounded outline-none border"
              />
              <div className="text-red-500 font-[poppins-bold]">
                {Formik.touched.number && Formik.errors.number ? Formik.errors.number : ""}
              </div>
            </div>
          </div>

          {/* LOGIN INFORMATION SECTION */}
          <div className=" w-[30%]  text-neutral-700 text-2xl  font-[caveat-300] font-semibold pt-5 pb-2">
            <h1> Login Information</h1>
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="font-[poppins-bold]" > Choose a Username: </label>
            <input
              type="text"
              placeholder=" steven star"
              className=" w-full p-2 rounded-md outline-none border"
              name="username"
              value={Formik.values.username}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            <div className=" text-red-500 font-[poppins-bold]">
              {Formik.touched.username && Formik.errors.parentname ? "Username is required" : ""}
            </div>
          </div>
          <div className="flex flex-row gap-5 w-full pt-3">
            <div className="flex flex-col w-[50%]">
              <label htmlFor="password" className="font-[poppins-bold]" > 🔒 Password:</label>
              <input
                type="password"
                name="password"
                value={Formik.values.password}
                onChange={Formik.handleChange}
                className=" rounded p-1 outline-none border"
              />
              {Formik.touched.password && Formik.errors.password && (
                <div className="text-red-500 font-[poppins-bold] ">{Formik.errors.password}</div>
              )}
            </div>
            <div className="flex flex-col  w-[50%]">
              <label htmlFor="confirm password" className="font-[poppins-bold]" > 🔒 Confirm Password:</label>
              <input
                type="password"
                name="cpassword"
                value={Formik.values.cpassword}
                onChange={Formik.handleChange}
                className="rounded p-1 outline-none border"
              />
              {Formik.touched.cpassword && Formik.errors.cpassword && (
                <div className="text-red-500 font-[poppins-bold]">{Formik.errors.cpassword}</div>
              )}
            </div>
          </div>

          {/* CHECK BOX */}
          <div className=" pt-3 font-[caveat-300]">
            <label htmlFor="terms" className=" font-semibold text-lg ">
              {" "}
              Terms and Condition
            </label>
            <div className=" flex gap-3">
              <input
                type="checkbox"
                name="terms"
                value=""
                onChange={Formik.handleChange}
              />{" "}
              <p className="text-[18px]">
                i have read and agreed to the terms and condition
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <div className=" flex justify-center items-center pt-5">
            <button
              type="submit"
              className="  p-2 w-32 font-[caveat-300] bg-green-600 text-white rounded-md"
            >
              Submit
            </button>
          </div>

          {/* AGREEMENT TEXT */}
          <p className="font-[caveat-300] pt-5">
            By submitting this form, you confirm that you are the parent or
            legal guardian of the child mentioned above. Thank you for joining
            Kid Hive! We're excited to embark on a learning journey together. 🚀
          </p>
        </form>
      </main>
    </>
  );
};

export default Registration;
