import React, { useState } from "react";
import LogoutModal from "../Modal/LogoutModal";
import { Button } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import dashboardIcon from "../../Assets/Images/DashboardInactive.svg";
import smileyIcon from "../../Assets/Images/smile.svg";
import trendingIcon from "../../Assets/Images/TrendingActive.svg";
import clipboardIcon from "../../Assets/Images/ClipboardListOutline.svg";
import settingsIcon from "../../Assets/Images/settings.svg";
import logoutIcon from "../../Assets/Images/log-out.svg";
import { motion } from "framer-motion";

const WidgetCardsTrending = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout action
    // For example: Clear session, token, etc.

    console.log("Logout action triggered");
    setModalVisible(false);
    navigate("/");
  };

  const handleLogoutClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const images = [
    {
      name: dashboardIcon,
      style: "max-w-[80%] mb-[1.5rem] mt-[5rem]",
      link: "/dashboard",
      whileHover: { scale: 1.3, transition: { duration: 0.1 } },
      title: "My dashboard",
    },
    {
      name: smileyIcon,
      style: "max-w-[80%] mb-[1.5rem]",
      link: "/profile",
      whileHover: { scale: 1.3, transition: { duration: 0.1 } },
      title: "About Me",
    },
    {
      name: trendingIcon,
      style: "max-w-[80%] mb-[1.5rem]",
      link: "/trending",
      title: "Exciting Lessons",
    },
    {
      name: clipboardIcon,
      style: "max-w-[80%] mb-[15rem]",
      link: "/courses",
      whileHover: { scale: 1.3, transition: { duration: 0.1 } },
      title: "Lessons",
    },
    {
      name: settingsIcon,
      style: "max-w-[80%] mb-[1.5rem]",
      link: "/settings",
      whileHover: { scale: 1.3, transition: { duration: 0.1 } },
      title: "Settings",
    },
    {
      name: logoutIcon,
      style: "max-w-[80%] mb-[1.5rem]",
      whileHover: { scale: 1.3, transition: { duration: 0.1 } },
      title: "Logout",
      onClick: handleLogoutClick,
    },
  ];

  return (
    <div>
      {images.map((image, index) => (
        <div
          className=""
          key={index}
          title={image.title}
          onClick={image.onClick}
        >
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

export default WidgetCardsTrending;
