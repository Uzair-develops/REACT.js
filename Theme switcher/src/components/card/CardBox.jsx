import React from "react";
import { useTheme } from "../context/ThemeContext.jsx";

import psc from "../assets/images/psc.jpg";

const CardBox = () => {
  const { darkMode } = useTheme();

  // ✅ Sample card data
  const cards = [
{ title: "Porsche 911 Gt3-RS", description: "The Porsche 911 GT3 RS is a marvel of engineering that combines exceptional speed, cutting-edge technology, and thrilling driving dynamics. Designed to tackle both the track and everyday roads, this car is an outstanding representation of Porsche ’s commitment to performance and innovation..", image: psc },
];


  return (
    <div className="grid grid-cols-300 md:grid-cols-200 lg:grid-cols-4 gap-8 p-8 place-items-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`group max-w-sm w-full rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-500 overflow-hidden place-items-center ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          }`}
        > 
          <div className="overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
 
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-sm mb-4 opacity-80">{card.description}</p>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                darkMode
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              Buy it!!!
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBox;
