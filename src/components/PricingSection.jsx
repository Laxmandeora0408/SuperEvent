import React from "react";
import "../App.css";

const PricingSection = () => {
  const attendeesOptions = [50, 250, 500, 750, 1000, 1250];
  const [attendees, setAttendees] = React.useState(1250);
  const [price, setPrice] = React.useState(3999);

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setAttendees(value);

    if (value <= 50) setPrice(499);
    else if (value <= 250) setPrice(999);
    else if (value <= 500) setPrice(1999);
    else if (value <= 750) setPrice(2999);
    else if (value <= 1000) setPrice(3499);
    else setPrice(3999);
  };

  const logos = [
    "images/logo2.jpg",
    "images/logo2.jpg",
    "images/logo2.jpg",
    "images/logo2.jpg",
    "images/logo3.jpg",
    "images/logo4.jpg",
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-16 px-4">
      <div className="text-center mb-8">
        <p className="text-center text-1xl text-normal text-blue-900 mb-3">
          Pricing plans
        </p>
        <h2 className="text-5xl font-bold  text-blue-800 mb-2">
          Never stress{" "}
          <span className="text-blue-900">
            over planning <br></br>an event
          </span>{" "}
          ever again
        </h2>
        <p className="text-gray-600">
          Small events are always free, bigger ones are paid by size. Simple and
          fair.
        </p>
      </div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-8 w-full md:w-2/3">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Choose your Event Package
          </h3>
          <p className="text-gray-500 mb-6">
            Event packages are determined by the number of attendees at your
            event.
          </p>

          <div className="relative w-full mb-6">
            <input
              type="range"
              min="50"
              max="1250"
              step="50"
              value={attendees}
              onChange={handleSliderChange}
              className="w-full mb-4 star-slider mt-2 text-red-500"
              style={{ zIndex: 1, position: "relative" }}
            />

            <div
              className="text-lg font-semibold text-blue-700 text-center"
              style={{
                position: "absolute",
                left: `calc(${((attendees - 50) / 1200) * 100}% - 20px)`,
                bottom: "40px",
              }}
            >
              <span className="inline-block py-1 px-3 bg-blue-100 msgType mt-5">
                {attendees}
              </span>
            </div>

            <div className="absolute inset-0 flex justify-between mt-4 items-center pointer-events-none">
              {attendeesOptions.map((option, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="h-8 border-l border-gray-300"></div>
                  <span className="text-xs text-gray-500 mt-2">{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <ul className="text-left space-y-3 font-bold">
              <li className="flex items-center">
                <span className="text-blue-900 mr-2">✓</span> All features
                included
              </li>
              <li className="flex items-center">
                <span className="text-blue-900 mr-2">✓</span> Easily switch
                between in-person, hybrid, and virtual events
              </li>
              <li className="flex items-center">
                <span className="text-blue-900 mr-2">✓</span> Mobile and desktop
                versions
              </li>
              <li className="flex items-center">
                <span className="text-blue-900 mr-2">✓</span> Native iOS and
                Android container app
              </li>
              <li className="flex items-center">
                <span className="text-blue-900 font-bold mr-2">✓</span>{" "}
                Best-in-class support
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-900 text-white shadow-lg rounded-lg p-8 w-full md:w-1/3 flex flex-col items-center justify-center">
          <h3 className="text-xl font-medium mb-4">Event price</h3>
          <div className="text-5xl font-bold mb-2 mt-10 ">€{price}</div>
          <div className="text-lg mb-8 mt-10">{attendees}+ attendees</div>
          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full mb-4 hover:bg-gray-100 transition">
            Create Your Event
          </button>
          <button className=" px-6 py-3 ">Book a demo</button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
