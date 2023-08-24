import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const SettingsPage = () => (
  <Result
    status="warning"
    title="We are still fixing this page, try again later."
    extra={
      <Link to="/dashboard">
        {" "}
        <Button
          type="primary"
          key="Dashboard"
          className="font-[poppins-regular] bg-[#9B5DE6]"
        >
          Dashboard
        </Button>
      </Link>
    }
    className="font-[poppins-regular] bg-[#FFFBF6] min-h-screen"
  />
);
export default SettingsPage;
