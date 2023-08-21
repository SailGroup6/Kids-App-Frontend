import React from "react";
import WidgetCards from "../../Components/Cards/WidgetCards";
import { useState, useEffect } from "react";
import { Layout, Spin } from "antd";
import { motion } from "framer-motion";

import WidgetCardsSmiley from "../../Components/Cards/WidgetCardsSmiley";

const { Header, Content, Sider } = Layout;

const Profile = () => {
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
      <Layout className=" h-screen">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          width="7%"
          style={{
            backgroundColor: "white",
            height: "100svh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <WidgetCardsSmiley />
        </Sider>

        <Content className="h-full grid bg-[#FFFBF6] p-10 font-[caveat-regular]">
          <motion.div
            className="border h-[150px] rounded shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeIn",
              duration: 1.5,
            }}
          >
            <div className="border-b  ml-5 mr-5">
              <h1 className="mt-6">Login information</h1>
            </div>

            <div className="pl-5 pt-5 text-[30PX]">
              <h1> 🔑 Username : Udo God'slove</h1>
              <h1> 🔒 password : ********</h1>
            </div>
          </motion.div>
          <motion.div
            className="border h-[150px] rounded shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeIn",
              duration: 1.5,
            }}
          >
            <div className="border-b  ml-5 mr-5">
              <h1 className="mt-6">Personal information</h1>
            </div>
            <div className="pl-5 pt-5 text-[30PX]">
              <h1> 🧑 Full Name : Udo God'slove</h1>
              <h1> 🎂 Age : 12 </h1>
              <h1> 👨‍🦱 Gender: Male </h1>
            </div>
          </motion.div>
          <motion.div
            className="border h-[150px] rounded shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeIn",
              duration: 1.5,
            }}
          >
            <div className="border-b  ml-5 mr-5">
              <h1 className="mt-6">Parent/ Guardian information</h1>
            </div>
            <div className="pl-5 pt-5 text-[30PX] ">
              <h1> 🧑 Parent/Guardian Full Name : Udo God'slove</h1>
              <h1> 🎂 Email : johndoe@gmail.com </h1>
              <h1> 👨‍🦱 Gender: Male </h1>
            </div>
          </motion.div>
        </Content>
      </Layout>
    </div>
  );
};

export default Profile;
