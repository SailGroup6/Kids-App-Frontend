<<<<<<< Updated upstream
import React from "react";
import { NavLink } from "react-router-dom"
=======
//import neccesary dependencies and components
import React, { useState } from "react";
import LogoutModal from "../Modal/LogoutModal";
import { NavLink, useNavigate } from "react-router-dom";
>>>>>>> Stashed changes
import dashboardIcon from "../../Assets/Images/Vector (1).svg";
import smileyIcon from "../../Assets/Images/smile.svg";
import trendingIcon from "../../Assets/Images/TrendingUpOutline.svg";
import clipboardIcon from "../../Assets/Images/ClipboardListOutline.svg";
import settingsIcon from "../../Assets/Images/settings.svg";
import logoutIcon from "../../Assets/Images/log-out.svg";

const WidgetCards = () => {
<<<<<<< Updated upstream
=======
 // State to manage visibility of the logout modal
 const [modalVisible, setModalVisible] = useState(false);

 // Hook for programmatic navigation
  const navigate = useNavigate();

  // Perform logout action
  const handleLogout = () => {

    console.log("Logout action triggered");
    setModalVisible(false);
    navigate("/");
  };

  // Function to handle logout icon click
  const handleLogoutClick = () => {
    setModalVisible(true);
  };

  // Function to close the logout modal
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // Array of image data for each widget card
>>>>>>> Stashed changes
  const images = [
    { name: dashboardIcon, style: "max-w-[80%] mb-[1.5rem] mt-[5rem]", link:"/dashboard", title:"Dashboard" },
    { name: smileyIcon, style: "max-w-[80%] mb-[1.5rem]", link:"/Profile", title:"Profile" },
    { name: trendingIcon, style: "max-w-[80%] mb-[1.5rem]", link:"/trending", title:"Progress" },
    { name: clipboardIcon, style: "max-w-[80%] mb-[15rem]", link:"/clipboard", title: "Clipboard" },
    { name: settingsIcon, style: "max-w-[80%] mb-[1.5rem]", link:"/settings", title: "setting" },
    { name: logoutIcon, style: "max-w-[80%] mb-[1.5rem]", link:"/logout", title: "Log out" }
  ];
  return (
    <div>
       {/* Map over the images array and render each widget card */}
      {images.map((image, index) => (
<<<<<<< Updated upstream
        <div className="">
          <NavLink to={image.link} >
            <img
              key={index}
=======
        <div
          className=""
          key={index}
          title={image.title}
          onClick={image.onClick}
        >
          {/* NavLink to the specified widget link */}
          <NavLink to={image.link}>
            {/* Animate the image with framer-motion */}
            <motion.img
>>>>>>> Stashed changes
              src={image.name}
              alt="Icon"
              className={image.style}
              title={image.title}
    
             
            />
          </NavLink>
        </div>
      ))}
<<<<<<< Updated upstream
=======

      {/* Render the LogoutModal component */}
      <LogoutModal
        visible={modalVisible}
        handleLogout={handleLogout}
        handleClose={handleCloseModal}
      />
>>>>>>> Stashed changes
    </div>
  );
};

// Export the WidgetCards component for use in other parts of the application
export default WidgetCards;
