<<<<<<< Updated upstream
import React from "react";
=======
// Import Neccesary Dependencies and Components

import React, { useState, useEffect } from "react";
import { Spin, message } from "antd"; // Import message component
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
>>>>>>> Stashed changes
import loginImg from "../../Assets/Images/login-img.svg";
import bumblebeeImg from "../../Assets/Images/bumbleebee-img.svg";

// Define the LoginPage component
const LoginPage = () => {
<<<<<<< Updated upstream
  return (
=======
  const [signInLoading, setSignInLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setToken] = useState("");
  const navigate = useNavigate();

  // Consuming the Api for login provided by the Backend
  const url =
    "https://kidshive-user-creation-api.onrender.com/api/v1/auth/login";

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const credentials = { email, password };

    try {
      setSignInLoading(true);
      const response = await axios.post(url, credentials, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      // Set the JWT token in the state
      setToken(response.data.data.token);
      
      // Set the UserData in the state
      localStorage.setItem("username", response.data.data.username);
      localStorage.setItem("userId", response.data.data._id);
      localStorage.setItem("fullName", response.data.data.fullName);
      localStorage.setItem("age", response.data.data.age);
      localStorage.setItem("gender", response.data.data.gender);
      localStorage.setItem("email", response.data.data.email);
      localStorage.setItem("parentFullName", response.data.data.parentFullName);
      localStorage.setItem("phoneNumber", response.data.data.phoneNumber);

      localStorage.setItem("accessToken", response.data.data.token);
      localStorage.setItem("refreshToken", response.data.data.token);

      // Display success message
      message.success("Login successful!");
      console.log(response.data.data);

      // Navigate to the dashboard route
      navigate("/dashboard", {
        state: {
          username: response.data.data.username,
          fullName: response.data.data.fullName,
          age: response.data.data.age,
          gender: response.data.data.gender,
          parentFullname: response.data.data.parentFullName,
          phoneNumber: response.data.data.phoneNumber,
          email: response.data.data.email,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      // Display error message
      message.error("Login failed. Please check your credentials.");
    } finally {
      setSignInLoading(false); // Disable loading state
    }
  }

    // If page is loading, display a loading spinner in the center
  return isLoading ? (
    <div className="flex justify-center items-center min-h-screen w-full">
      <Spin size="large" />
    </div>
  ) : (

    // If page is done loading, display the main content of the Login page
>>>>>>> Stashed changes
    <React.Fragment>
      <div className="flex items-center min-h-screen px-[10%] bg-[#FFFDFC]">
        <div className=" w-[100%]  sm:w-[60%] sm:mt-[5rem]">
          <div className="flex w-full h-[auto] mb-[0.7rem] text-center items-center justify-center">
            <img src={bumblebeeImg} alt="BumblebeeImg" className="w-7 h-7 pr-[0.5rem]" />
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
              Full Name<span className="text-[#FF3D00]">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className=" border rounded-[1rem] w-40 text-[0.6rem] py-[0.5rem] mb-[1.5rem] px-[0.5rem] sm:w-60 sm:text-[0.7rem] md:w-70 lg:w-80"
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
              className=" border rounded-[1rem] mb-[1.5rem] w-40 text-[0.6rem] py-[0.5rem] px-[0.5rem] sm:w-60 sm:text-[0.7rem] md:w-70 lg:w-80"
            />

            <label className="flex text-[0.6rem] mb-[1.5rem] items-center gap-[0.5rem]">
              <input type="checkbox" name="subscribe" value="yes" /> I agree to
              the terms conditions
            </label>

            <input
              type="submit"
              value="Sign In"
              className=" border rounded-[1rem] bg-gradient-to-r from-green-700 via-green-500 to-yellow-200 cursor-pointer text-[#FFFFFF] mb-[1.5rem] w-40 text-[0.7rem] py-[0.5rem] px-[0.5rem] sm:w-60 sm:text-[0.8rem] md:w-70 lg:w-80"
            ></input>
          </form>
        </div>

        <div className="min-h-screen w-[100%]">
          <img
            src={loginImg}
            alt="login"
            className=" h-[100svh]  sm:w-100 md:w-100 lg:w-100 "
          />
        </div>
      </div>
    </React.Fragment>
  );
};

// Exporting the LoginPage component for use in other files
export default LoginPage;
