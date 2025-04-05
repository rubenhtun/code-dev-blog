"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add shadow when scroll position is greater than 0
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-orange-100 sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-extrabold text-gray-800"
            >
              Code<span className="text-teal-600">DEv</span>
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-1 md:space-x-2">
            <Link
              href="/login"
              className="px-4 py-1 text-sm sm:text-base text-gray-700 hover:text-teal-600 hover:bg-teal-50 border-2 border-transparent font-medium rounded-full transition-all duration-300 cursor-pointer"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-1 text-sm sm:text-base text-teal-600 hover:text-white bg-transparent hover:bg-teal-600 border-2 border-teal-600 font-semibold rounded-full transition-all duration-300 cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
