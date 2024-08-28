import React from "react";

const AddsSection = () => {
  const addons = [
    {
      icon: "🌐",
      title: "Branded Mobile App",
      description:
        "Want to upgrade from our Superevent container app to your own branded app on iOS and Android? You will have your own app in the stores with fully customized icons and splash screens.",
      price: "€998",
    },
    {
      icon: "🎥",
      title: "Livestreaming",
      description:
        "Our livestreaming platform is super reliable, robust, and fully integrated within your event platform. Choose one of our standard packages or let us customize one for you.",
      priceOptions: [
        {
          size: "Small",
          price: "€499",
          description: "Includes 20 hours of streaming and 2000 hours viewed",
        },
        {
          size: "Medium",
          price: "€999",
          description: "Includes 50 hours of streaming and 4000 hours viewed",
        },
        {
          size: "Large",
          price: "€1499",
          description: "Includes 100 hours of streaming and 6000 hours viewed",
        },
      ],
      startingAt: "€499",
    },
    {
      icon: "📱",
      title: "Multi-event Branded App",
      description:
        "Keep your attendees and community engaged all year round with your own branded multi-event app. You can organize multiple events with this one app.",
      price: "€250",
      additionalInfo: "Per Month",
    },
    {
      icon: "💻",
      title: "Group Video Rooms",
      description: `Our Group Video Rooms are a huge success for virtual and hybrid events. Use them for panel discussions, networking get-togethers, or other interactive moments. All integrated in your platform.`,
      price: "€0,24",
      additionalInfo: "Per participant, per hour",
    },
    {
      icon: "📝",
      title: "Data-Entry Service",
      description:
        "In a time crunch? Our team can help you configure and prepare your event platform for you. We make sure that your full schedule and all other information is uploaded to the platform.",
      price: "€500",
    },
  ];

  return (
    <div className="bg-green-50 py-12 px-4 border border-[#88C0A6]">
      <div className="max-w-4xl mx-auto mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Add-ons to power up your event
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addons.map((addon, index) => (
            <div
              key={index}
              className="border border-[#88C0A6] rounded-lg p-4  bg-white"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="w-20 h-20 rounded-full bg-[#F1F7F4] flex items-center justify-center text-xl">
                    {addon.icon}
                  </div>
                </div>

                <div className="text-lg font-bold text-green-700">
                  <div className="flex flex-col items-end">
                    <span>{addon.price || addon.startingAt}</span>
                    {addon.additionalInfo && (
                      <p className="text-gray-600 text-sm mt-1 font-normal">
                        {addon.additionalInfo}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {addon.title}
              </h3>

              <p className="text-gray-600 text-sm">{addon.description}</p>

              {addon.priceOptions && (
                <div className="mt-4">
                  <ul className="space-y-2">
                    {addon.priceOptions.map((option, i) => (
                      <li key={i} className="flex justify-between text-sm">
                        <div>
                          <p className="font-semibold">{option.size}</p>
                          <p className="text-gray-500">{option.description}</p>
                        </div>
                        <span className="font-semibold text-gray-800">
                          {option.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddsSection;
