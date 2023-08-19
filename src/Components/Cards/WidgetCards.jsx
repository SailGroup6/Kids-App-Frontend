import React from "react";
import { NavLink } from "react-router-dom"
import dashboardIcon from "../../Assets/Images/Vector (1).svg";
import smileyIcon from "../../Assets/Images/smile.svg";
import trendingIcon from "../../Assets/Images/TrendingUpOutline.svg";
import clipboardIcon from "../../Assets/Images/ClipboardListOutline.svg";
import settingsIcon from "../../Assets/Images/settings.svg";
import logoutIcon from "../../Assets/Images/log-out.svg";

const WidgetCards = () => {
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
      {images.map((image, index) => (
        <div className="">
          <NavLink to={image.link} >
            <img
              key={index}
              src={image.name}
              alt="Icon"
              className={image.style}
              title={image.title}
    
             
            />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default WidgetCards;
