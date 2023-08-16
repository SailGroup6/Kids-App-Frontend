import React from "react";
import "../../../index.css";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import LandingPageText from "./HeroSectionText";
import Arrow from "./Arrow";

const HeroSection = () => {
  return (
    <motion.div
      className="h-[100svh] w-[100%] herobg pt-9"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 3 }}
    >
      <div>
        <Navbar />
      </div>
      <div className="h-[50%] flex flex-col justify-center ">
        <LandingPageText />
      </div>
      <motion.div
        className=" flex justify-center"
        initial={{ y: 0 }}
        animate={{
          y: [-10, 10, -10],
          transition: { duration: 1.5, repeat: Infinity },
        }}
      >
        <Arrow />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
