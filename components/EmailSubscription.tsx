"use client";

import React, { useEffect, useState, useRef } from "react";

const EmailSubscription = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <>
      <style>
        {`
          .fade-in-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }

          .fade-in-scroll.visible {
            opacity: 1;
            transform: translateY(0);
          }

          .fade-in-delay {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s;
          }

          .fade-in-scroll.visible .fade-in-delay {
            opacity: 1;
            transform: translateY(0);
          }

          .fade-in-delay-2 {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s;
          }

          .fade-in-scroll.visible .fade-in-delay-2 {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
      <section
        ref={sectionRef}
        className={`bg-lime-50 py-12 fade-in-scroll ${
          isVisible ? "visible" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4">
            Stay Updated with <span className="text-teal-600">CodeDEv</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto mb-6 fade-in-delay">
            Subscribe to our newsletter for the latest tutorials, tips, and
            coding resources.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4 fade-in-delay-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-64 px-4 py-2 text-gray-700 bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:border-teal-600 transition-all duration-300"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-500 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default EmailSubscription;
