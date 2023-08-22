import React from 'react';
import { Button } from 'antd';
import { useDarkMode } from './DarkModeContext';

const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Button onClick={toggleDarkMode}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </Button>
  );
};

export default DarkModeButton;
