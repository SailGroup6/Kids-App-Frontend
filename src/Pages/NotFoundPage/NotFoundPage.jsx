import React from "react";
import { motion } from "framer-motion";
import { Result, Button } from "antd";
import { useNavigate , Link} from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <motion.div
        className="bg-[#FFFBF6]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          className="font-[poppins-regular]"
          extra={
            <Link to="/">
              <Button
                type="primary"
                className="font-[poppins-regular] bg-[#9B5DE6]"
              >
                Back Home
              </Button>
            </Link>
          }
        />
        
      </motion.div>
    </React.Fragment>
  );
};
export default NotFoundPage;
