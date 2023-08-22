import React from "react";
import WidgetCards from "../../Components/Cards/WidgetCards";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import VideoPlayer from "../../Components/Video/VideoPlayer";
import { Layout, Spin } from "antd";
import BackIcon from "../../Assets/Images/bx-arrow-back.svg";
import { motion } from "framer-motion";
import { Divider, Menu, Switch } from 'antd';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import WidgetCardsSmiley from "../../Components/Cards/WidgetCardsSmiley";

const { Header, Content, Sider } = Layout;
const storedUsername = localStorage.getItem("username") || "User";
const storedGender = localStorage.getItem("gender") || "";
const storedAge = localStorage.getItem("age") || "";
const storedFullName = localStorage.getItem("fullName") || "";
const storedEmail = localStorage.getItem("email") || "";
const storedParentFullName = localStorage.getItem("parentFullName") || "";

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

  getItem('HTML BASICS', 'sub1', <AppstoreOutlined />, [
    getItem('Lesson 1: Introduction to basic HTML', '1'),
    getItem('Lesson 2: HTML page structure', '2'),
    getItem('Lesson 3: H1 element', '3'),
    getItem('Lesson 4: Paragraph', '4'),
    getItem('Lesson 5: Image tag ', '5'),
    getItem('Lesson 6: Image height and width', '6'),
    getItem('Lesson 7: Link Tag', '7'),
    getItem('Lesson 8: Linking Images', '8'),
    getItem('Lesson 9: Div container', '8'),
    


  ])
];
const Profile = () => {
  const [mode, setMode] = useState("inline");
  const changeMode = (value) => {
    setMode(value ? "vertical" : "inline");
  };
  const [isLoading, setIsLoading] = useState(true);

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
        </Link> {/*bg-[rgba(155, 93, 230, 0.30)]*/}
        <Content className="h-full grid p-10 ">
          <motion.div className="w-full">
            <VideoPlayer />
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
          ></Menu>
        </Sider>
      </Layout>
    </div>
  );
};

export default Profile;
