import React from "react";
import WidgetCards from "../../Components/Cards/WidgetCards";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Layout, Spin } from "antd";
import BackIcon from "../../Assets/Images/bx-arrow-back.svg";
import { motion } from "framer-motion";
import { Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";

const { Content, Sider } = Layout;

//const videos = [{ src: "" }];

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("HTML BASICS", "sub1", <AppstoreOutlined />, [
    getItem("Lesson 1: Introduction to basic HTML", "1"),
    getItem("Lesson 2: HTML page structure", "2"),
    getItem("Lesson 3: H1 element", "3"),
    getItem("Lesson 4: Paragraph", "4"),
    getItem("Lesson 5: Image tag ", "5"),
    getItem("Lesson 6: Image height and width", "6"),
    getItem("Lesson 7: Link Tag", "7"),
    getItem("Lesson 8: Linking Images", "8"),
    getItem("Lesson 9: Div container", "9"),
  ]),
];
const videoId = `MskilKYVKOs`
const videoSources = [
  { name: "lesson1", path: `https://www.youtube.com/embed/${videoId}`},
  { name: "lesson2", path: "https://www.youtube.com/watch?v=MskilKYVKOs" },
  { name: "lesson3", path: "https://www.youtube.com/watch?v=P6CUDf-bu5A" },
  { name: "lesson4", path: "https://www.youtube.com/watch?v=LIj5w7gAmXc" },
  { name: "lesson5", path: "https://www.youtube.com/watch?v=2KGR6tQ5B0U" },
  { name: "lesson6", path: "https://www.youtube.com/watch?v=LmoMDpEncEE" },
  { name: "lesson7", path: "https://www.youtube.com/watch?v=vq_QwWhlHhc" },
  { name: "lesson8", path: "https://www.youtube.com/watch?v=ed7iFE7VavI" },
];
const ContentPage = () => {
  const [mode, setMode] = useState("inline");
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Initialize with the first video link
  const changeMode = (value) => {
    setMode(value ? "vertical" : "inline");
  };

  const changeVideo = (index) => {
    setSelectedVideoIndex(index);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

  return isLoading ? (
    <div className="flex justify-center items-center min-h-screen w-full">
      <Spin size="large" />
    </div>
  ) : (
    <div>
      <Layout className=" h-screen bg-[#FFFBF6]">
        <Link to="/dashboard">
          <motion.img
            src={BackIcon}
            alt="previous"
            title="previous"
            whileHover={{ scale: 1.3, transition: { duration: 0.1 } }}
            className="p-[1rem]"
          />
        </Link>{" "}
        {/*bg-[rgba(155, 93, 230, 0.30)]*/}
        <Content className="h-full grid p-10 ">
          <motion.div className="w-full">
            <iframe
              width="100%"
              height="50%"
              src={videoSources[selectedVideoIndex].path}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-[100%] h-full object-cover rounded-xl"
              allowFullScreen
            ></iframe>
            {console.log(videoSources[selectedVideoIndex].path)}

            <p className="font-[poppins-regular] p-[1rem]">
              Uploaded by <span className="font-bold">Godslove Udo</span>
            </p>
            <p className="font-[poppins-regular] px-[1rem] font-bold text-[1.5rem] border-b-2">
              INTRODUCTION TO BASIC HTML - LESSON ONE
            </p>
          </motion.div>
          <div></div>
        </Content>
        <Sider
          collapsedWidth="0"
          width="25%"
          style={{
            backgroundColor: "#fafafa",
            height: "100svh",
          }}
        >
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode={mode}
            items={items}
            className="font-[poppins-regular] "
            onClick={(e) => {
              const selectedIndex = videoSources.findIndex(
                (video) => video.name === e.key
              );
              if (selectedIndex !== -1) {
                changeVideo(selectedIndex);
              }
            }}
          >
            {videoSources.map((video) => (
              <Menu.Item key={video.name}>{video.name}</Menu.Item>
            ))}
          </Menu>
        </Sider>
      </Layout>
    </div>
  );
};

export default ContentPage;
