"use client";

import React, { useEffect, useState } from "react";

const HeroBanner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text to animate
  const titleText = "Discover Coding Insights";
  const characters = titleText.split("");

  return (
    <>
      <style>
        {`
          .dotted-bg {
            background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='%23f3a183'/%3E%3C/svg%3E");
            background-size: 20px 20px;
            transition: background-position 0.3s ease;
          }
          
          .char-appear {
            opacity: 0;
            transform: translateX(-15px);
            animation: slideIn 0.3s ease-out forwards;
            display: inline-block;
          }

          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.6s ease-out forwards;
          }

          .fade-in-delay-1 {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.6s ease-out 0.6s forwards;
          }

          .fade-in-delay-2 {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.6s ease-out 0.9s forwards;
          }

          @keyframes slideIn {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <section
        className="bg-orange-100 py-16 md:py-20 dotted-bg"
        style={{
          backgroundPositionY: `${scrollY * 0.2}px`,
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            {characters.map((char, index) => {
              const isCodingChar = index >= 9 && index <= 14;
              return (
                <span
                  key={index}
                  className="char-appear"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    color: isCodingChar ? "#0d9488" : "inherit",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 fade-in-delay-1">
            Discover insightful articles, expert tips, and the latest trends in
            development. Stay informed and inspired with our blog collection.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-500 transition-all duration-300 fade-in-delay-2"
          >
            Browse Blogs
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
