import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";
const ContentPageJs = () => (
  <Result
    icon={<SmileOutlined />}
    title="Coming Soon !"
    extra={
      <Link to="/dashboard">
        {" "}
        <Button type="primary" className="font-[poppins-regular] bg-[#9B5DE6]">
          Dashboard
        </Button>{" "}
      </Link>
    }
    className="bg-[#FFFBF6] font-[poppins-regular] min-h-screen"
  />
);
export default ContentPageJs;
