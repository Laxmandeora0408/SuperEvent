import React from "react";

const Section = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:flex md:flex-row flex-col">
        <div className="p-8 bg-blue-900 text-white md:w-1/2 w-full">
          <h2 className="text-5xl font-bold">
            Ready to take a closer look at Superevent?
          </h2>
          <p className="mt-4">
            Maximize engagement and connect with your audience like never
            before.
          </p>
          <ul className="mt-10 space-y-2">
            <li>✅ No credit card required</li>
            <li>✅ Simple, transparent pricing</li>
            <li>✅ Best-in-class support</li>
          </ul>
          <div className="mt-10 flex space-x-4">
            <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started Free
            </button>
            <button className="font-bold py-2 border text-white px-4 rounded">
              Book a demo
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            src="https://i.pinimg.com/originals/75/64/aa/7564aa9d89c3310660440ea32d0ef7f6.jpg"
            alt="Event"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
