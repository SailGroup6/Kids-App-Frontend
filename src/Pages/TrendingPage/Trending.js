import React from "react";
import { useState, useEffect } from "react";
import { Layout, Spin } from "antd";
import { motion } from "framer-motion";
import CustomCalendar from "../../Components/Calendar/CustomCalendar";
import ProgressCards from "../../Components/Cards/ProgressCards";
import UpcomingCoursesCards from "../../Components/Cards/UpcomingCoursesCards";
import WidgetCardsTrending from "../../Components/Cards/WidgetCardsTrending";
import Chart from "../../Assets/Images/chart.svg"


const { Header, Content, Sider } = Layout;

const Trending = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);


  return (
    <React.Fragment>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen w-full">
          <Spin size="large" />
        </div>
      ) : (
        <div className="w-full">
          <Layout className="h-screen">
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
              <WidgetCardsTrending />
            </Sider>
            <Layout>
              <Header
                style={{
                  padding: 0,
                }}
              />
              <Content className="bg-[#FFFBF6] w-full h-[60rem] sm:h-screen">
                <section className="px-[10%] py-[5%] md:px-[7%] lg:px-[10%]">

                  <div
                    initial={{ opacity: 0.4, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                  >
                    <ProgressCards />
                  </div>

                  <div className="px-[6%] py-[5%] md:px-[7%]">
                    <motion.p
                      className="flex flex-col font-[caveat-regular] text-[1.2rem] border-b-2 sm:border-b-2 sm:flex-row sm:text-[1.4rem] sm:pl-[0.5rem] md:border-b-2 md:text-[1.6rem]"
                      initial={{ opacity: 0.4 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        ease: "easeIn",
                        duration: 3,
                      }}
                    >
                      Your Progress
                    </motion.p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0.4, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                  >
                    <img src = {Chart} />
                  </motion.div>
                </section>
              </Content>

              <Sider
                breakpoint="md"
                collapsedWidth="0"
                width="30%"
                style={{
                  backgroundColor: "white",
                  height: "100svh",
                }}
              >
                <div className="flex flex-col w-full h-[100svh] justify-around items-center">
                  <motion.div
                    className="h-[30vh] justify-between align-center border border-2 border-slate-500 rounded-lg bg-[#FCEDDA] w-[70%]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeIn", duration: 2 }}
                  >
                    <CustomCalendar />
                  </motion.div>

                  <motion.div
                    className="h-[50vh] border border-2 border-slate-500 rounded-lg bg-[#FCEDDA] px-[4%] w-[70%]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeIn", duration: 2 }}
                  >
                    <p className="font-[poppins-regular] font-semibold text-[0.9rem] text-center pt-[2rem]">
                      Upcoming Courses
                    </p>
                    <div className="border-l-4 px-[0.5rem] border-[#1DA684] font-[poppins-regular] text-[0.7rem] md:text-[0.9rem] mt-[2rem] mb-[1rem]">
                      <p>Advanced HTML</p>
                      <p className="text-[#00000066]">Sep 2023</p>
                    </div>
                    <div className="border-l-4 px-[0.5rem] border-[#9B5DE6] font-[poppins-regular] text-[0.7rem] md:text-[0.9rem] mb-[1rem]">
                      <p>Advanced CSS</p>
                      <p className="text-[#00000066]">Oct 2023</p>
                    </div>
                    <div className="border-l-4 px-[0.5rem] border-[#EB7D0C] font-[poppins-regular] text-[0.7rem] md:text-[0.9rem] mb-[1rem]">
                      <p>Advanced Javascript</p>
                      <p className="text-[#00000066]">Jan 2024</p>
                    </div>
                  </motion.div>
                </div>
              </Sider>
            </Layout>
          </Layout>
        </div>
      )}
    </React.Fragment>
  );
};

export default Trending;
