import React, { useState } from "react";
import "../App.css";

function FaqPage() {
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (question) => {
    setShowAnswers((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  return (
    <div className="container max-w-xl  mx-auto px-4 py-16">
      <h2 className="text-5xl text-blue-900 font-bold mb-8 text-center">
        FAQs
      </h2>
      <p className="text-blue-900 mb-10 text-center">
        Find answers to frequently asked questions about Supervent and our event
        platform.
      </p>
      <hr />
      <div className="space-y-4">
        <div
          className="bg-white-100 rounded-lg p-4 flex items-center justify-between cursor-pointer"
          onClick={() => toggleAnswer("How do I create an event?")}
        >
          <span className="font-medium text-color-900">
            How do I create an event?
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <hr />
        {showAnswers["How do I create an event?"] && (
          <div className="bg-white-200 rounded-lg p-4">
            <p className="text-color-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sagittis, velit id laoreet imperdiet, lectus urna egestas quam,
              sed lobortis lorem libero eu nisl.
            </p>
          </div>
        )}

        <div
          className="bg-white-100 rounded-lg p-4 flex items-center justify-between cursor-pointer"
          onClick={() => toggleAnswer("How can attendees register?")}
        >
          <span className="font-medium text-color-900">
            How can attendees register?
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {showAnswers["How can attendees register?"] && (
          <div className="bg-white-200 rounded-lg p-4">
            <p className="text-color-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sagittis, velit id laoreet imperdiet, lectus urna egestas quam,
              sed lobortis lorem libero eu nisl.
            </p>
          </div>
        )}
        <hr />
        <div
          className="bg-white-100 rounded-lg p-4 flex items-center justify-between cursor-pointer"
          onClick={() => toggleAnswer("Can I customize event branding?")}
        >
          <span className="font-medium text-color-900">
            Can I customize event branding?
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {showAnswers["Can I customize event branding?"] && (
          <div className="bg-white-200 rounded-lg p-4">
            <p className="text-color-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sagittis, velit id laoreet imperdiet, lectus urna egestas quam,
              sed lobortis lorem libero eu nisl.
            </p>
          </div>
        )}
        <hr />
        <div
          className="bg-white-100 rounded-lg p-4 flex items-center justify-between cursor-pointer"
          onClick={() => toggleAnswer("How can I track event engagement?")}
        >
          <span className="font-medium text-color-900">
            How can I track event engagement?
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {showAnswers["How can I track event engagement?"] && (
          <div className="bg-white-200 rounded-lg p-4">
            <p className="text-color-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sagittis, velit id laoreet imperdiet, lectus urna egestas quam,
              sed lobortis lorem libero eu nisl.
            </p>
          </div>
        )}
        <hr />
        <div
          className="bg-white-100 rounded-lg p-4 flex items-center justify-between cursor-pointer"
          onClick={() => toggleAnswer("Question text goes here")}
        >
          <span className="font-medium  text-color-900">
            Question text goes here
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <hr />
        {showAnswers["Question text goes here"] && (
          <div className="bg-white-200 rounded-lg p-4">
            <p className="text-color-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sagittis, velit id laoreet imperdiet, lectus urna egestas quam,
              sed lobortis lorem libero eu nisl.
            </p>
          </div>
        )}
      </div>
      <h3 className="text-4xl text-blue-900 font-bold gap-8 mt-16 text-center">
        Still have a question?
      </h3>
      <p className="text-blue-900 overText gap-6 mt-4 text-center text-2xl bold">
        Send us a message and we'll get back to you
      </p>
      <button className="py-2 px-8 rounded mt-6 block font-bold mx-auto border border-blue-900  hover:bg-blue-500 hover:text-white text-blue-900">
        Contact
      </button>
    </div>
  );
}

export default FaqPage;
