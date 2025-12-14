import React from "react";
import { useTheme } from "../context/ThemeContext.jsx";

const SwitchButton = () => {
  const { darkMode, toggleTheme } = useTheme();
  
  // handleThemeChange function to toggle the theme
  const handleThemeChange = () => {
    console.log("Theme changed!");
    toggleTheme();
  };


  return (
    <div
       onClick={handleThemeChange}
      className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all duration-500 ${
        darkMode ? "bg-blue-600 justify-end" : "bg-gray-300 justify-start"
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full shadow-md bg-white transition-all duration-500`}
      ></div>
    </div>
  );
};

export default SwitchButton;
