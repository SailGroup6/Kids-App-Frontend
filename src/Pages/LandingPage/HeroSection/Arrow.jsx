import React from "react";
import { Link } from "react-scroll";

import { motion } from "framer-motion";
import ArrowImage from "../../../Assets/Images/arrow.svg";

const Arrow = () => {
  return (
    <div>
      <motion.div
        className="rounded-full cursor-pointer"
        href="#aboutUsId"
        whileHover={{
          scale: "1.1",
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(0,0,255)",
        }}
      >
        <Link to="aboutUsLink" smooth={true} duration={1500}>
          <img src={ArrowImage} />
        </Link>
      </motion.div>
    </div>
  );
};

export default Arrow;
