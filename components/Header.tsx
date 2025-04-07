"use client";

import { getSession, signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [userImage, setUserImage] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setUserImage(session?.user?.image || "");
    };
    fetchSession();
  }, []);

  return (
    <header
      className={`bg-orange-100 sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-extrabold text-gray-800"
          >
            Code<span className="text-teal-600">DEv</span>
          </Link>

          {/* Auth Section */}
          <div className="flex items-center space-x-2">
            {userImage ? (
              <>
                <img
                  src={userImage}
                  alt="User Avatar"
                  className="w-9 h-9 rounded-full border-2 border-teal-600"
                />
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="h-9 px-4 py-1 text-sm sm:text-base text-teal-600 hover:text-white bg-transparent hover:bg-teal-600 border-2 border-teal-600 font-semibold rounded-full transition-all duration-300 cursor-pointer"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-1 text-sm sm:text-base text-gray-700 hover:text-teal-600 hover:bg-teal-50 font-medium rounded-full transition-all duration-300"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-1 text-sm sm:text-base text-teal-600 hover:text-white hover:bg-teal-600 border-2 border-teal-600 font-semibold rounded-full transition-all duration-300"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
