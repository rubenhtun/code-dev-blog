"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  activeTab: string;
  toggleMobileSidebar: () => void;
}

const Header = ({ activeTab, toggleMobileSidebar }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={toggleMobileSidebar}
            className="md:hidden mr-4 text-gray-500 hover:text-gray-700"
          >
            <FontAwesomeIcon icon={faBars} className="text-lg" />
          </button>
          <h2 className="text-xl font-semibold text-gray-800">
            {activeTab === "dashboard"
              ? "Dashboard"
              : activeTab === "blogs"
              ? "Blogs"
              : "Subscriptions"}
          </h2>
        </div>
        <div className="flex items-center">
          {activeTab === "blogs" && (
            <Link
              href="admin/add-blog"
              className="px-4 py-1 text-sm sm:text-base bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all duration-300"
            >
              Add New Blog
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
