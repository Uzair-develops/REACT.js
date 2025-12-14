import React from "react";
import { useTheme } from "./components/context/ThemeContext.jsx";
import SwitchButton from "./components/button/SwitchButton.jsx";
import Card from "./components/card/CardBox.jsx";

const App = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
       <h1 className="mt-6 text-3xl font-bold mb-3 text-gray-700">Switch Theme</h1> 
      <SwitchButton /> 
      <Card />
    </div>
  );
};

export default App;
