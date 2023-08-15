import React from "react";
import dashboardIcon from "../../Assets/Images/Vector (1).svg";
import smileyIcon from "../../Assets/Images/smile.svg";
import trendingIcon from "../../Assets/Images/TrendingUpOutline.svg";
import clipboardIcon from "../../Assets/Images/ClipboardListOutline.svg";
import settingsIcon from "../../Assets/Images/settings.svg";
import logoutIcon from "../../Assets/Images/log-out.svg";

const WidgetCards = () => {
  const images = [
    { name: dashboardIcon, style: "max-w-[80%] mb-[1.5rem] mt-[5rem]" },
    { name: smileyIcon, style: "max-w-[80%] mb-[1.5rem]" },
    { name: trendingIcon, style: "max-w-[80%] mb-[1.5rem]" },
    { name: clipboardIcon, style: "max-w-[80%] mb-[15rem]" },
    { name: settingsIcon, style: "max-w-[80%] mb-[1.5rem]" },
    { name: logoutIcon, style: "max-w-[80%] mb-[1.5rem]" }
  ];
  return (
    <div>
      {images.map((image, index) => (
        <div className="">
          <a href="">
            <img
              key={index}
              src={image.name}
              alt="Icon"
              className={image.style}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default WidgetCards;
