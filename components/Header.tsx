"use client";

import { getSession, signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [userImage, setUserImage] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleToggleMenu = () => setMenuOpen((prev) => !prev);

  const handleSignOut = () => {
    setMenuOpen(false);
    signOut({ callbackUrl: "/" });
  };

  return (
    <header
      className={`bg-orange-100 sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl sm:text-2xl font-extrabold text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              Code<span className="text-teal-600">DEv</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden sm:flex space-x-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-teal-600 transition-colors duration-300 font-medium"
              >
                Home
              </Link>
              <Link
                href="/blogs"
                className="text-gray-700 hover:text-teal-600 transition-colors duration-300 font-medium"
              >
                Blogs
              </Link>
            </nav>
          </div>

          {/* Mobile Toggle Button */}
          <div className="sm:hidden">
            <button
              className="text-teal-700"
              onClick={handleToggleMenu}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
            </button>
          </div>

          {/* Auth Section */}
          <div className="hidden sm:flex items-center space-x-2">
            {userImage ? (
              <>
                <img
                  src={userImage}
                  alt="User Avatar"
                  className="w-9 h-9 rounded-full border-2 border-teal-600"
                />
                <button
                  onClick={handleSignOut}
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

        {/* Mobile Menu with Smooth Transition */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-3 pb-4">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-800 hover:text-teal-600 px-2 py-1 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/blogs"
              onClick={() => setMenuOpen(false)}
              className="text-gray-800 hover:text-teal-600 px-2 py-1 font-medium transition-colors duration-200"
            >
              Blogs
            </Link>
            {userImage ? (
              <div className="flex items-center space-x-3 px-2">
                <img
                  src={userImage}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full border-2 border-teal-600 transition-all duration-200"
                />
                <button
                  onClick={handleSignOut}
                  className="text-sm text-teal-600 hover:text-white hover:bg-teal-600 border-2 border-teal-600 rounded-full px-3 py-1 transition-all duration-200"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-gray-700 hover:text-teal-600 px-2 py-1 transition-colors duration-200"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-teal-600 hover:text-white hover:bg-teal-600 border-2 border-teal-600 rounded-full px-3 py-1 transition-all duration-200 w-fit"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
