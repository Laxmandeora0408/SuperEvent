import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 transition-shadow duration-300 ease-in-out">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer hover:scale-105 transform transition-transform duration-300">
          <div className="bg-blue-900 text-white rounded-full h-8 w-8 flex items-center justify-center mr-2">
            <FontAwesomeIcon icon={faStar} className="h-5 w-5" />
          </div>
          <span className="font-bold text-lg text-gray-800">SuperEvent</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8">
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Features
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Integrations
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Case Studies
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Blog
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-4">
          <button className="border border-blue-500 text-blue-500 px-5 py-2 rounded-lg shadow-md hover:bg-blue-900 hover:text-white transition duration-300">
            Log In
          </button>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y">
            Get Started Free
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="h-6 w-6 text-blue-900"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-6 py-4 bg-white shadow-md">
          <a
            href="#"
            className="block text-gray-700 font-medium py-2 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Features
          </a>
          <a
            href="#"
            className="block text-gray-700 font-medium py-2 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Integrations
          </a>
          <a
            href="#"
            className="block text-gray-700 font-medium py-2 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Pricing
          </a>
          <a
            href="#"
            className="block text-gray-700 font-medium py-2 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Case Studies
          </a>
          <a
            href="#"
            className="block text-gray-700 font-medium py-2 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Blog
          </a>
          <div className="flex space-x-4 mt-4">
            <button className="border border-blue-500 text-blue-500 px-5 py-2 rounded-lg shadow-md hover:bg-blue-900 hover:text-white w-full transition duration-300">
              Log In
            </button>
            <button className="bg-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y w-full">
              Get Started Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
