import React from "react";
import "../../index.css";
import { useState, useEffect } from "react";
import { Spin } from "antd";
import { NavLink } from "react-router-dom"
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const Registration = () => {
  const [isLoading, setIsLoading] = useState(true);
  const Formik = useFormik({
    initialValues: {
      fullName: "",
      age: "",
      gender: "",
      email: "",
      phoneNumber: "",
      password: "",
      parentFullName: "",
      cpassword: "",
      username: "",
      // terms:"false"
    },

    validationSchema: yup.object({
      fullName: yup.string(),
      age: yup.number().max(12, "Too Old").required("Age is Required"),
      email: yup.string().email("invalid email").required("Email is required"),
      phoneNumber: yup
        .number()
        .typeError("Please enter a valid number")
        .integer("Please enter a whole number")
        .required("Number is required"),
      parentFullName: yup.string().required(),
      username: yup.string().required(),
      password: yup.string().matches().required("Password is required"),
      cpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], 'Must match "password" field value')
        .required("Confirm Password is required"),
      // terms: yup
      // .boolean()
      // .oneOf([true], "You must agree to the terms and conditions"),
      // terms: yup.array().required(),
    }),

    onSubmit: (Values) => {
      axios
        .post(
          "https://kidshive-user-creation-api.onrender.com/api/v1/auth/signup",
          Values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          if (error.response && error.response.data) {
            console.error(error.response.data);
          } else {
            console.error(error.message);
          }
        });
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);


  return isLoading ? (
    <div className="flex justify-center items-center min-h-screen w-full">
      <Spin size="large" />
    </div>
  ) : (
    <>
      <main className="h-full bg flex items-center justify-center p-5">
        <form
          onSubmit={Formik.handleSubmit}
          className="w-[70%] h-[90%] bg-[#FFFFFF] p-10 shadow-2xl rounded-lg"
        >
          <div className=" flex-col text-center text-black text-[1rem] md:text-[1.5rem]">
            <div className="text-center  font-[caveat-regular]  animate-pulse md:text-cyan-[0.9rem]">
               Welcome to Kid Hive 
            </div>
            <div className=" text-black  font-[caveat-regular]  text-[1.2rem]">
              Student Registration Form
            </div>
          </div>

          {/* KID INFORMATION */}

          <div className="w-56 text-md  font-[poppins-bold]  ">
            Kids Information
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="font-[poppins-regular] text-[0.8rem]">
            🧒 Full Name *
            </label>
            <input
              type="text"
              placeholder=""
              className=" w-full p-1 rounded-md shadow-md font-[poppins-regular] text-[0.8rem] outline-none border"
              value={Formik.values.fullName}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              name="fullName"
              title=""
              id="name"
            />
            <div className="text-red-500 font-[poppins-bold] text-[0.8rem]">
              {Formik.touched.fullName && Formik.errors.fullName
                ? "A Name is Required"
                : ""}
            </div>
          </div>

          <div className="flex flex-row gap-5 w-full pt-3">
            <div className="flex flex-col w-[50%] ">
              <label htmlFor="age" className="font-[poppins-bold] text-[0.8rem]">
              🎂 Age *
              </label>
              <input
                type="number"
                name=""
                id="age"
                className=" rounded-md p-1 shadow-md font-[poppins-regular] text-[0.8rem] outline-none border"
                value={Formik.values.age}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              <div className="text-red-500 font-[poppins-bold] text-[0.8rem]">
                {Formik.touched.age && Formik.errors.age
                  ? Formik.errors.age
                  : ""}
              </div>
            </div>
            <div className="flex flex-col w-[50%]">
              <label htmlFor="gender" className="font-[poppins-bold] text-[0.8rem]">
              👦 Gender *
              </label>
              <select
                id="gender"
                name="gender"
                value={Formik.values.gender}
                onChange={Formik.handleChange}
                className=" rounded shadow-md font-[poppins-regular] text-[0.8rem] p-1 border"
              >
                <option value="Select">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          {/* PARENT /GUARDIAN  INFORMATION */}
          <div className=" text-md  font-[poppins-bold] pt-5 pb-2">
            <h1>Parent/Guardian Information</h1>
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="font-[poppins-bold]  text-[0.8rem]">
              {" "}
              Parent/Guardian Full Name:{" "}
            </label>
            <input
              type="text"
              placeholder=" steven star"
              className=" w-full p-1 shadow-md font-[poppins-regular] text-[0.8rem] rounded-md outline-none border "
              name="parentFullName"
              value={Formik.values.parentFullName}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            <div className=" text-red-500 font-[poppins-bold]  text-[0.8rem]">
              {Formik.touched.parentFullName && Formik.errors.parentFullName
                ? "Parent Name is required"
                : ""}
            </div>
          </div>

          <div className="flex flex-row gap-5 w-full pt-3">
            <div className="flex flex-col w-[50%] ">
              <label htmlFor="email" className="font-[poppins-bold]  text-[0.8rem]">
                {" "}
                Email Address:
              </label>
              <input
                type="email"
                name="email"
                placeholder="kideye@gamil.com"
                className="p-1 rounded shadow-md font-[poppins-regular] text-[0.8rem] outline-none border"
                value={Formik.values.email}
                onBlur={Formik.handleBlur}
                onChange={Formik.handleChange}
              /> 
              <div className=" text-red-500 font-[poppins-bold]  text-[0.8rem]">
                {Formik.touched.email && Formik.errors.email
                  ? Formik.errors.email
                  : ""}
              </div>
            </div>
            <div className="flex flex-col  w-[50%]">
              <label htmlFor="number" className="font-[poppins-bold]  text-[0.8rem]">
                {" "}
                Phone Number:
              </label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="0709566499"
                value={Formik.values.number}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                className=" p-1 rounded shadow-md font-[poppins-regular] text-[0.8rem] outline-none border"
              />
              <div className="text-red-500 font-[poppins-bold]  text-[0.8rem]">
                {Formik.touched.phoneNumber && Formik.errors.phoneNumber
                  ? Formik.errors.phoneNumber
                  : ""}
              </div>
            </div>
          </div>

          {/* LOGIN INFORMATION SECTION */}
          <div className=" w-[30%] text-md  font-[poppins-bold]  pt-5 pb-2">
            <h1> Login Information</h1>
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="font-[poppins-bold]  text-[0.8rem]">
              {" "}
              Choose a Username:{" "}
            </label>
            <input
              type="text"
              placeholder=" steven star"
              className=" w-full p-1 rounded-md font-[poppins-regular] text-[0.8rem] shadow-md outline-none border"
              name="username"
              value={Formik.values.username}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            <div className=" text-red-500 font-[poppins-bold]  text-[0.8rem]">
              {Formik.touched.username && Formik.errors.parentname
                ? "Username is required"
                : ""}
            </div>
          </div>
          <div className="flex flex-row gap-5 w-full pt-3">
            <div className="flex flex-col w-[50%]">
              <label htmlFor="password" className="font-[poppins-bold]  text-[0.8rem]">
                {" "}
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={Formik.values.password}
                onChange={Formik.handleChange}
                className=" rounded p-1 shadow-md font-[poppins-regular] text-[0.8rem] outline-none border"
              />
              {Formik.touched.password && Formik.errors.password && (
                <div className="text-red-500 font-[poppins-bold]  text-[0.8rem]">
                  {Formik.errors.password}
                </div>
              )}
            </div>
            <div className="flex flex-col  w-[50%]">
              <label htmlFor="confirm password" className="font-[poppins-bold]  text-[0.8rem]">
                {" "}
                Confirm Password:
              </label>
              <input
                type="password"
                name="cpassword"
                value={Formik.values.cpassword}
                onChange={Formik.handleChange}
                className="rounded p-1 shadow-md font-[poppins-regular] text-[0.8rem] outline-none border"
              />
              {Formik.touched.cpassword && Formik.errors.cpassword && (
                <div className="text-red-500 font-[poppins-bold]  text-[0.8rem]">
                  {Formik.errors.cpassword}
                </div>
              )}
            </div>
          </div>

          {/* CHECK BOX */}
          {/* <div className=" pt-3 font-[caveat-300]">
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
          </div> */}

          {/* BUTTON */}
          <div className=" flex justify-center items-center pt-5">
            <button
              type="submit"
              className="  p-2 w-32 font-[caveat-300] bg-green-600 text-white transition-all duration-400 hover:scale-110 shadow-md rounded-md"
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
