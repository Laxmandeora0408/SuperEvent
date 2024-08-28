import React from "react";
import "../App.css";

const Scroll = () => {
  const logos = [
    "images/logo2.jpg",
    "images/logo2.jpg",
    "images/logo2.jpg",
    "images/logo2.jpg",
    "images/logo3.jpg",
    "images/logo4.jpg",
  ];

  const duplicateLogos = [...logos, ...logos];

  return (
    <div className=" bg-white flex flex-col items-center">
      <div className="relative mt-8 text-center">
        <p className="text-gray-400 font-bold text-lg mb-4">
          Trusted by the world's best companies
        </p>
        <div className="overflow-hidden w-full max-w-8xl mx-auto">
          <div className="flex animate-scroll">
            {duplicateLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0  p-2">
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
