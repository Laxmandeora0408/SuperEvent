import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <footer className="footer text-white py-8 mb-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-2">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Get our updates</h2>
            <p className="text-normal">
              Stay informed with our latest news and updates
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 w-full md:w-auto"
                placeholder="Your email address"
              />
              <button
                type="submit"
                className="bg-white text-gray-700 font-medium px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <p className="text-xs mt-4 md:mt-0 text-center md:text-right">
          By subscribing, you agree to our
          <a href="#" className="text-white hover:underline ml-1">
            Privacy Policy
          </a>
        </p>
        <br />
        <hr />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          <div>
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Partners</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Press</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Support Center</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Video Tutorials</a>
              </li>
              <li>
                <a href="#">Webinars</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Forum</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Customer Stories</a>
              </li>
              <li>
                <a href="#">Success Stories</a>
              </li>
              <li>
                <a href="#">Chest Testimonials</a>
              </li>
              <li>
                <a href="#">Industry Insights</a>
              </li>
              <li>
                <a href="#">Expert Advice</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Culture</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Join Us</a>
              </li>
              <li>
                <a href="#">Follow Us</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8" />

        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="bg-blue-900 text-white rounded-full h-8 w-8 flex items-center justify-center mr-2">
              <FontAwesomeIcon icon={faStar} className="h-5 w-5" />
            </div>
            <span className="font-bold text-lg">SuperEvent</span>
          </div>

          <span className="text-sm">
            &copy; 2023 SuperEvent. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
