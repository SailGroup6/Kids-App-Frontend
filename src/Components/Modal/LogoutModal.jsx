import { Modal, Button } from 'antd';

const LogoutModal = ({ visible, handleLogout, handleClose }) => {
  return (
    <Modal
      open={visible}
      title="Logout"
      onCancel={handleClose}
      className="font-[poppins-regular]"
      footer={[
        <Button key="cancel" onClick={handleClose} className="font-[poppins-regular]">
          Cancel
        </Button>,
        <Button key="logout" type="primary" className="font-[poppins-regular] bg-[#9B5DE6]"onClick={handleLogout}>
          Logout
        </Button>,
      ]}
    >
      <p>Are you sure you want to log out?</p>
    </Modal>
  );
};

export default LogoutModal;
