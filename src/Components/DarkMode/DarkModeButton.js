//import neccesary components and dependencies
import React from 'react';
import { Button } from 'antd';
import { useDarkMode } from './DarkModeContext';

// Define the DarkModeButton component
const DarkModeButton = () => {
  // Access the state and function from the DarkModeContext
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    // Render a Button component from Ant Design
    <Button onClick={toggleDarkMode}>
      {/* Display appropriate text based on dark mode state */}
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </Button>
  );
};

// Export the DarkModeButton component for use in other parts of the application
export default DarkModeButton;
