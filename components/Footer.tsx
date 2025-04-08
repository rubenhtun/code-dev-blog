import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between md:items-start">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-extrabold text-gray-800">
              Code<span className="text-teal-600">DEv</span>
            </span>
          </div>
          <p className="text-sm text-gray-600 text-center md:text-left">
            Empowering developers with tools, resources, and community support.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Quick Links
          </h3>
          <ul className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-6">
            <li>
              <a
                href="/"
                className="text-gray-700 hover:text-teal-600 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/blogs"
                className="text-gray-700 hover:text-teal-600 transition-colors duration-200"
              >
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Mail */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Connect With Us
          </h3>
          <p className="text-sm text-gray-600 text-center md:text-left">
            codedev@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-orange-300 mt-8 pt-4 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-600">
            © {new Date().getFullYear()} CodeDEv. All rights reserved.
          </p>
          <a
            href="/terms-and-conditions"
            className="mt-2 md:mt-0 text-gray-700 transition-colors duration-200 hover:text-teal-600"
          >
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
