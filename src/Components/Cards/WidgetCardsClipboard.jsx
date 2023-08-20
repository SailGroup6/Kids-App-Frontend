import React from "react";
import { NavLink } from "react-router-dom";
import dashboardIcon from "../../Assets/Images/DashboardInactive.svg";
import smileyIcon from "../../Assets/Images/smile.svg";
import trendingIcon from "../../Assets/Images/TrendingUpOutline.svg";
import clipboardIcon from "../../Assets/Images/ClipboardActive.svg";
import settingsIcon from "../../Assets/Images/settings.svg";
import logoutIcon from "../../Assets/Images/log-out.svg";
import { motion } from "framer-motion"

const WidgetCardsClipboard = () => {
  const images = [
    {
      name: dashboardIcon,
      style: "max-w-[80%] mb-[1.5rem] mt-[5rem]",
      link: "/dashboard",
      whileHover: { scale: 1.3, transition: { duration: 0.1 } },
      title: "My Dashboard"
    },
    {
      name: smileyIcon,
      style: "max-w-[80%] mb-[1.5rem]",
      link: "/profile",
      whileHover: { scale: 1.3, transition: { duration: 0.1 } },
      title: "About me"
    },
    {
      name: trendingIcon,
      style: "max-w-[80%] mb-[1.5rem]",
      link: "/trending",
      whileHover: { scale: 1.3, transition: { duration: 0.1 } },
      title: "Exciting lessons"
    },
    { name: clipboardIcon, style: "max-w-[80%] mb-[15rem]", link: "/courses" , title:"Lessons"},
    {
      name: settingsIcon,
      style: "max-w-[80%] mb-[1.5rem]",
      link: "/settings",
      whileHover: { scale: 1.3, transition: { duration: 0.1 } },
      title: "Settings"
    },
    {
      name: logoutIcon,
      style: "max-w-[80%] mb-[1.5rem]",
      link: "/logout",
      whileHover: { scale: 1.3, transition: { duration: 0.1 } },
      title: "Logout"
    },
  ];

  return (
    <div>
      {images.map((image, index) => (
        <div className="" key={index} title={image.title}>
          <NavLink to={image.link} activeClassName="">
            <motion.img
              src={image.name}
              whileHover={image.whileHover}
              alt="Icon"
              className={`${image.style} transition duration-300 ease-in-out fill-current text-orange-500`}
            />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default WidgetCardsClipboard;
