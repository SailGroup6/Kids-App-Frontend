import React from "react";
import { useState, useEffect } from "react"
import { Spin } from "antd";
import HeroSection from "./HeroSection/HeroSection";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

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
    <div className=" bg-[#FFFEFC]">
      <HeroSection />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default LandingPage;
