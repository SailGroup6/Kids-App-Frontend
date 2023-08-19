import React from "react";
import Layout from "antd/es/layout/layout";
import WidgetCards from "../../Components/Cards/WidgetCards";
const { Header, Content, Sider } = Layout;

const Profile = () => {
  return (
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
          <WidgetCards />
        </Sider>

        <Content className="h-full grid bg-[#FFFBF6] p-10 font-[caveat-regular]">
          
            <div className="border h-[150px] rounded shadow-md">
              <div className="border-b  ml-5 mr-5">
                <h1 className="mt-6">Login information</h1>
              </div>

              <div className="pl-5 pt-5 text-[30PX]">
                <h1> 🔑 Username : Udo God'slove</h1>
                <h1> 🔒 password : 123456</h1>
              </div>
            </div>
            <div className="border h-[150px] rounded shadow-md">
            <div className="border-b  ml-5 mr-5">
                <h1 className="mt-6">Personal information</h1>
              </div>
              <div className="pl-5 pt-5 text-[30PX]">
                <h1> 🧑 Full Name : Udo God'slove</h1>
                <h1> 🎂 Age  : 12 </h1>
                <h1> 👨‍🦱 Gender: Male </h1>
              </div>

            </div>
            <div className="border h-[150px] rounded shadow-md">
            <div className="border-b  ml-5 mr-5">
                <h1 className="mt-6">Parent/ Guardian information</h1>
              </div>
              <div className="pl-5 pt-5 text-[30PX] ">
                <h1> 🧑 Parent/Guardian Full Name : Udo God'slove</h1>
                <h1> 🎂 Email  : johndoe@gmail.com </h1>
                <h1> 👨‍🦱 Gender: Male </h1>
              </div>
        
            </div>
    
        </Content>
      </Layout>
           

    
    </div>
  );
};

export default Profile;
