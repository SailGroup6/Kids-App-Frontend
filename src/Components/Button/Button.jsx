import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ type, text, onClick }) => {
  switch (type.toLowerCase()) {
    case "purple":
      return (
        <NavLink to="" target="_blank">
          <button
            className="flex gap-[1rem] items-center bg-[#9B5DE6] px-[0.6rem] py-[0.3rem]  mb-[1rem] font-[poppins-regular] text-[#FFFFFF] text-[0.6rem] rounded-lg"
            onClick={onClick}
          >
            {text} 
          </button>
        </NavLink>
      );
      break;
    case "default":
      break;
  }
};

export default Button;
