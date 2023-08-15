import React from "react";
import { useState, useEffect } from "react";
import { Layout, Spin, notification } from "antd";
import CustomCalendar from "../../Components/Calendar/CustomCalendar";
import Button from "../../Components/Button/Button";
import ProgressCards from "../../Components/Cards/ProgressCards";
import WidgetCards from "../../Components/Cards/WidgetCards";
import bellIcon from "../../Assets/Images/bell.svg";
import taskGirlIcon from "../../Assets/Images/task-girl.svg";
import taskBoyIcon from "../../Assets/Images/task-boy.svg";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: <div>
        <p>Notification Title</p>
      </div>,
      description:
        "I will never close automatically. This is a purposely very very long description that has many many characters and words.",
      duration: 0,
    });
  };

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
              <WidgetCards />
            </Sider>
            <Layout>
              <Header
                style={{
                  padding: 0,
                }}
              />
              <Content className="bg-[#FFFBF6] w-full h-[60rem] sm:h-screen">
                <section className="px-[10%] py-[5%] md:px-[7%] lg:px-[10%]">
                  <div className="flex items-center font-[poppins-regular] justify-between">
                    <p className="font-[poppins-regular] text-[0.7rem] mr-[0.5rem] sm:mr-[0.5rem] md:text-[1rem]">
                      Hi User , Welcome
                    </p>
                    <div className="flex font-[poppins-regular] justify-between">
                      <input
                        type="text"
                        placeholder="Search"
                        className="h-[2rem] shadow-sm rounded-lg pl-[1rem] pr-[1rem] text-black placeholder-black w-[60%] font-[0.4rem]"
                      />

                      {contextHolder}
                      <div
                        className="bg-white rounded-full font-[poppins-regular] ml-[0.5rem] flex items-center justify-center cursor-pointer w-10 h-8"
                        onClick={openNotification}
                      >
                        <img
                          src={bellIcon}
                          alt="bell Icon"
                          className="w-6 h-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-around w-full h-[20svh] bg-white md:h-[20svh] shadow-md mt-[2rem] rounded-lg ">
                    <div className="flex flex-col h-[20svh] w-[50%] justify-around pl-[1rem] md:pl[0] ">
                      <p className="font-[caveat-regular] text-[1.2rem] md:text-[1.5rem]">
                        Today's Task
                      </p>
                      <p className="font-[poppins-regular] text-[0.7rem]">
                        check your daily tasks and schedules
                      </p>
                      <Button type="purple" text="View all tasks" />
                    </div>
                    <div className="flex w-[auto]">
                      <img
                        src={taskGirlIcon}
                        className="w-[50%] bg-white md:w-full"
                      />
                      <img src={taskBoyIcon} className="w-[50%] md:w-full" />
                    </div>
                  </div>

                  <div className="px-[6%] py-[5%] md:px-[7%]">
                    <p className="flex flex-col font-[caveat-regular] text-[1.2rem] text-center sm:flex-row sm:text-[1.5rem] sm:pl-[0.5rem]">
                      Overview
                    </p>
                  </div>
                  <div>
                    <ProgressCards />
                  </div>
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
                  <div className="h-[30vh] justify-between align-center border border-2 border-slate-500 rounded-lg bg-[#FCEDDA] w-[70%]">
                    <CustomCalendar />
                  </div>

                  <div className="h-[50vh] border border-2 border-slate-500 rounded-lg bg-[#FCEDDA] px-[4%] w-[70%]">
                    <p className="font-[poppins-regular] font-semibold text-[0.8rem] text-center pt-[2rem]">
                      Upcoming Courses
                    </p>
                    <div className="border-l-4 px-[0.5rem] border-[#1DA684] font-[poppins-regular] text-[0.7rem] mt-[2rem] mb-[1rem]">
                      <p>Advanced HTML</p>
                      <p className="text-[#00000066]">Sep 2023</p>
                    </div>
                    <div className="border-l-4 px-[0.5rem] border-[#9B5DE6] font-[poppins-regular] text-[0.7rem] mb-[1rem]">
                      <p>Advanced CSS</p>
                      <p className="text-[#00000066]">Oct 2023</p>
                    </div>
                    <div className="border-l-4 px-[0.5rem] border-[#EB7D0C] font-[poppins-regular] text-[0.7rem] mb-[1rem]">
                      <p>Advanced Javascript</p>
                      <p className="text-[#00000066]">Jan 2024</p>
                    </div>
                  </div>
                </div>
              </Sider>
            </Layout>
          </Layout>
        </div>
      )}
    </React.Fragment>
  );
};

export default Dashboard;
