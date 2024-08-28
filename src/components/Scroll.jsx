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
    <div className="bg-white flex flex-col mt-10 items-center">
      <div className="relative mt-2 text-center">
        {" "}
        {/* Adjusted margin-top here */}
        <p className="text-gray-400 font-bold text-lg mb-4">
          Trusted by the world's best companies
        </p>
        <div className="overflow-hidden w-full max-w-8xl mx-auto">
          <div className="flex animate-scroll items-center">
            {duplicateLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 p-2">
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="w-full h-auto object-contain"
                  style={{ margin: 0, padding: 0 }}
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
