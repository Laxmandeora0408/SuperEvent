import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 transition-shadow duration-300 ease-in-out">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center cursor-pointer hover:scale-105 transform transition-transform duration-300">
          <div className="bg-blue-900 text-white rounded-full h-8 w-8 flex items-center justify-center mr-2">
            <FontAwesomeIcon icon={faStar} className="h-5 w-5" />
          </div>
          <span className="font-bold text-lg text-gray-800">SuperEvent</span>
        </div>

        <div className="hidden md:flex space-x-10">
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-blue-500 hover:underline decoration-2 decoration-blue-500 underline-offset-8 transition duration-300 ease-in-out"
          >
            Features
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-blue-500 hover:underline decoration-2 decoration-blue-500 underline-offset-8 transition duration-300 ease-in-out"
          >
            Integrations
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-blue-500 hover:underline decoration-2 decoration-blue-500 underline-offset-8 transition duration-300 ease-in-out"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-blue-500 hover:underline decoration-2 decoration-blue-500 underline-offset-8 transition duration-300 ease-in-out"
          >
            Case Studies
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-blue-500 hover:underline decoration-2 decoration-blue-500 underline-offset-8 transition duration-300 ease-in-out"
          >
            Blog
          </a>
        </div>

        <div className="hidden md:flex space-x-4">
          <button className="border border-blue-500 text-blue-500 px-5 py-2 rounded-lg shadow-md hover:bg-blue-900 hover:text-white ">
            Log In
          </button>
          <button className="bg-blue-900 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-800 transition-all duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y">
            Get Started Free
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button className="border border-blue-500 text-blue-500 px-5 py-2 shadow-md hover:bg-blue-500 hover:text-white">
            Log In
          </button>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y">
            Get Started Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
