import { Modal, Button } from 'antd';

const LogoutModal = ({ visible, handleLogout, handleClose }) => {
  return (
    <Modal
      open={visible}
      title="Logout"
      onCancel={handleClose}
      footer={[
        <Button key="cancel" onClick={handleClose}>
          Cancel
        </Button>,
        <Button key="logout" type="primary" className="text-black hover:"onClick={handleLogout}>
          Logout
        </Button>,
      ]}
    >
      <p>Are you sure you want to log out?</p>
    </Modal>
  );
};

export default LogoutModal;
