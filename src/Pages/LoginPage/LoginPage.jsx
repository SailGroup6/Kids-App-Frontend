import React from "react";
import loginImg from "../../Assets/Images/login-img.svg";
import bumblebeeImg from "../../Assets/Images/bumbleebee-img.svg";

const LoginPage = () => {
  return (
    <React.Fragment>
      <div className="flex items-center min-h-screen px-[10%] bg-[#FFFDFC]">
        <div className=" w-[100%]  sm:w-[60%] sm:mt-[5rem]">
          <div className="flex w-full h-[auto] mb-[0.7rem] text-center items-center justify-center">
            <img src={bumblebeeImg} className="w-7 h-7 pr-[0.5rem]" />
            <p className="font-[caveat-regular] text-center text-[1rem] sm:text-[1.7rem]">
              KidsHive
            </p>
          </div>
          <p className="font-[caveat-regular] text-center text-[1rem] sm:text-[1.5rem] ">
            Login your account
          </p>
          <p className="font-[caveat-regular] text-center text-[0.8rem] ">
            Don't have an account?{" "}
            <span className="text-[#bedc7cfc]">
              <a href="">Sign Up</a>
            </span>
          </p>

          <form
            action="/submit"
            method="get"
            className="grid place-content-center font-[poppins-regular] mt-[3rem]"
          >
            <label
              htmlFor="username"
              className="block text-[0.7rem] sm:text-[0.8rem]"
            >
              Username<span className="text-[#FF3D00]">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className=" border rounded-[1rem] shadow-md w-40 text-[0.6rem] py-[0.5rem] mb-[1.5rem] px-[0.5rem] sm:w-60 sm:shadow-md sm:text-[0.7rem] md:w-70 md:shadow-md lg:w-80 lg:shadow-md"
            />
            {/* Password */}
            <label
              htmlFor="password"
              className="block text-[0.7rem] sm:text-[0.8rem]"
            >
              Password<span className="text-[#FF3D00]">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className=" border rounded-[1rem] mb-[1.5rem] w-40 text-[0.6rem] py-[0.5rem] px-[0.5rem] sm:w-60 sm:text-[0.7rem] md:w-70 lg:w-80 shadow-md sm:shadow-md md:shadow-md lg:shadow-md"
            />

            <label className="flex text-[0.6rem] mb-[1.5rem] items-center gap-[0.5rem]">
              <input type="checkbox" name="subscribe" value="yes" /> I agree to
              the terms conditions
            </label>

            <input
              type="submit"
              value="Sign In"
              className=" border rounded-[1rem] bg-gradient-to-r from-green-700 via-green-500 to-yellow-200 cursor-pointer text-[#FFFFFF] mb-[1.5rem] w-40 text-[0.7rem] py-[0.5rem] px-[0.5rem] sm:w-60 sm:text-[0.8rem] md:w-70 lg:w-80 shadow-md sm:shadow-md md:shadow-md lg:shadow-md"
            ></input>
          </form>
        </div>

        <div className="min-h-screen w-[100%]">
          <img
            src={loginImg}
            alt="login"
            className=" h-[100svh]  sm:w-100 md:w-100 lg:w-100  "
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
