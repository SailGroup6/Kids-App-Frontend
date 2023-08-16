import React from "react";
import { motion } from "framer-motion";
import ArrowImage from "../../../Assets/Images/arrow.svg";

const Arrow = () => {
  return (
    <div>
      <motion.button
        className="rounded-full"
        onClick ={()=>{}}
        whileHover={{
          scale: "1.1",
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(0,0,255)",
        }}
      >
        <img src={ArrowImage} />
      </motion.button>
    </div>
  );
};

export default Arrow;
