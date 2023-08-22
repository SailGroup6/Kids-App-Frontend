//import neccesary dependencies
import React, { createContext, useState, useContext } from 'react';

// Create a new Context for managing Dark Mode
const DarkModeContext = createContext();

// Create a provider component to manage the state and functionality of Dark Mode
export const DarkModeProvider = ({ children }) => {
  // State to track whether Dark Mode is enabled
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle Dark Mode
  const toggleDarkMode = () => {
    // Update the state using the previous state value
    setIsDarkMode(prevMode => !prevMode);
  };

  // Provide the state and function to children components
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to access Dark Mode state and function
export const useDarkMode = () => useContext(DarkModeContext);
