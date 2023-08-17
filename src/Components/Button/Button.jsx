import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Button = ({ type, text, onClick }) => {
  switch (type.toLowerCase()) {
    case "purple":
      return (
        <NavLink to="" target="_blank">
          <motion.button
            className="flex gap-[1rem] items-center bg-[#9B5DE6] px-[0.6rem] py-[0.3rem]  mb-[1rem] font-[poppins-regular] text-[#FFFFFF] text-[0.7rem] rounded-lg"
            onClick={onClick}
            whileHover={{
              scale: "1.1",
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(0,0,255)",
            }}
          >
            {text}
          </motion.button>
        </NavLink>
      );
      break;
    case "default":
      break;
  }
};

export default Button;
