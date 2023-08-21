import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Result } from "antd";

const SuccessPage = () => (
  <React.Fragment>
    <div className="bg-[#FFFBF6] min-h-screen w-full flex flex-row items-center justify-center">
      <Result
        status="success"
        title="Thank you for joining Kid's Hive. Let's Learn"
        subTitle=""
        className="font-[poppins-regular]"
        extra={[
          <Link to="/login">
            {" "}
            <Button
              type="primary"
              key="console"
              className="bg-[#9B5DE6] font-[poppins-regular]"
            >
              Continue
            </Button>
          </Link>,
        ]}
      />
    </div>
  </React.Fragment>
);
export default SuccessPage;
