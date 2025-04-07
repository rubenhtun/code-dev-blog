"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileAlt,
  faUser,
  faSignOutAlt,
  faEnvelopeCircleCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileSidebarOpen: boolean;
  toggleMobileSidebar: () => void;
}

const Sidebar = ({
  activeTab,
  setActiveTab,
  isMobileSidebarOpen,
  toggleMobileSidebar,
}: SidebarProps) => {
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (window.innerWidth < 768) {
      toggleMobileSidebar();
    }
  };

  return (
    <div
      className={`fixed md:relative z-50 w-64 bg-white shadow-md h-full transition-all duration-300 ${
        isMobileSidebarOpen ? "left-0" : "-left-64 md:left-0"
      }`}
    >
      <div className="p-6 flex justify-between items-center">
        <Link
          href={"/"}
          className="text-xl font-bold text-gray-800 cursor-pointer"
        >
          Code <span className="text-teal-600">DEv</span>
        </Link>
        <button
          onClick={toggleMobileSidebar}
          className="md:hidden text-gray-500 hover:text-gray-700"
        >
          <FontAwesomeIcon icon={faTimes} className="text-lg" />
        </button>
      </div>
      <div className="px-4">
        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-400 uppercase mb-4 ml-4">
            Main
          </p>
          <ul>
            <li
              className={`mb-2 ${
                activeTab === "dashboard"
                  ? "bg-teal-50 text-teal-600"
                  : "text-gray-700"
              }`}
            >
              <button
                onClick={() => handleTabClick("dashboard")}
                className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-orange-100 cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faHome}
                  className="mr-3 text-lg w-[16px] h-[16px]"
                />
                <span>Dashboard</span>
              </button>
            </li>
            <li
              className={`mb-2 ${
                activeTab === "blogs"
                  ? "bg-teal-50 text-teal-600"
                  : "text-gray-700"
              }`}
            >
              <button
                onClick={() => handleTabClick("blogs")}
                className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-orange-100 cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faFileAlt}
                  className="mr-3 text-lg w-[16px] h-[16px]"
                />
                <span>Blogs</span>
              </button>
            </li>
            <li
              className={`mb-2 ${
                activeTab === "subscriptions"
                  ? "bg-teal-50 text-teal-600"
                  : "text-gray-700"
              }`}
            >
              <button
                onClick={() => handleTabClick("subscriptions")}
                className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-orange-100 cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faEnvelopeCircleCheck}
                  className="mr-3 text-lg w-[16px] h-[16px]"
                />
                <span>Subscriptions</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-400 uppercase mb-4 ml-4">
            Account
          </p>
          <ul>
            <li className="mb-2">
              <button className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-orange-100 text-gray-700 cursor-pointer">
                <FontAwesomeIcon
                  icon={faUser}
                  className="mr-3 text-lg w-[16px] h-[16px]"
                />
                <span>Profile</span>
              </button>
            </li>
            <li className="mb-2">
              <button className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-orange-100 text-gray-700 cursor-pointer">
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className="mr-3 text-lg w-[16px] h-[16px]"
                />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
