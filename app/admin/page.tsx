"use client";

import React, { useState, useEffect } from "react";
import {
  getBlogs,
  deleteBlog,
  getSubscriptions,
  deleteSubscription,
} from "@/lib/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileAlt,
  faUser,
  faSignOutAlt,
  faEnvelopeCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const AdminPanel = () => {
  const [blogs, setBlogs] = useState<
    {
      id: string;
      title: string;
      description: string;
      category: string;
      createdAt: Date;
    }[]
  >([]);
  const [subscriptions, setSubscriptions] = useState<
    {
      email: string;
      createdAt: Date;
    }[]
  >([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [loadingSubscriptions, setLoadingSubscriptions] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("blogs");

  // Fetch blogs and subscriptions on mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const fetchedBlogs = await getBlogs();
        setBlogs(fetchedBlogs);
        setLoadingBlogs(false);
      } catch {
        setError("Failed to load blogs");
        setLoadingBlogs(false);
      }
    };

    const fetchSubscriptions = async () => {
      try {
        const fetchedSubscriptions = await getSubscriptions();
        setSubscriptions(fetchedSubscriptions);
        setLoadingSubscriptions(false);
      } catch {
        setError("Failed to load subscriptions");
        setLoadingSubscriptions(false);
      }
    };

    fetchBlogs();
    fetchSubscriptions();
  }, []);

  // Handle Blog Deletion
  const handleDeleteBlog = async (blogId: string) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      try {
        await deleteBlog(blogId);
        setBlogs(blogs.filter((blog) => blog.id !== blogId));
      } catch {
        toast.error("Failed to delete blog");
      }
    }
  };

  // Handle Subscription Deletion
  const handleDeleteSubscription = async (email: string) => {
    if (
      confirm(`Are you sure you want to delete the subscription for ${email}?`)
    ) {
      try {
        await deleteSubscription(email);
        setSubscriptions(subscriptions.filter((sub) => sub.email !== email));
      } catch {
        toast.error("Failed to delete subscription");
      }
    }
  };

  return (
    <div className="flex h-screen bg-orange-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-800">
            Code <span className="text-teal-600">DEv</span>
          </h1>
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
                  onClick={() => setActiveTab("dashboard")}
                  className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-orange-100"
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
                  onClick={() => setActiveTab("blogs")}
                  className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-orange-100"
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
                  onClick={() => setActiveTab("subscriptions")}
                  className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-orange-100"
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
                <button className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-orange-100 text-gray-700">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="mr-3 text-lg w-[16px] h-[16px]"
                  />
                  <span>Profile</span>
                </button>
              </li>
              <li className="mb-2">
                <button className="flex items-center w-full px-4 py-2 rounded-lg hover:bg-orange-100 text-gray-700">
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

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">
              {activeTab === "dashboard"
                ? "Dashboard"
                : activeTab === "blogs"
                ? "Blogs"
                : "Subscriptions"}
            </h2>
            <div className="flex items-center">
              {activeTab === "blogs" && (
                <a
                  href="admin/add-blog"
                  className="px-4 py-2 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-all duration-300"
                >
                  Add New Blog
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {activeTab === "dashboard" ? (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Welcome to the Admin Dashboard
              </h3>
              <p className="text-gray-600">
                Total Blogs: <span className="font-bold">{blogs.length}</span>
              </p>
            </div>
          ) : activeTab === "blogs" ? (
            <>
              {loadingBlogs ? (
                <p className="text-gray-600 text-center">Loading blogs...</p>
              ) : error ? (
                <p className="text-red-600 text-center">{error}</p>
              ) : blogs.length === 0 ? (
                <p className="text-gray-600 text-center">No blogs found</p>
              ) : (
                <div className="bg-white rounded-lg shadow">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-orange-100">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Title
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Category
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {blogs.map((blog) => (
                          <tr key={blog.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {blog.title}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-teal-100 text-teal-800">
                                {blog.category}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {new Date(blog.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                }
                              )}
                            </td>
                            <td className="py-4 px-4 flex space-x-2">
                              <a
                                href={`admin/edit-blog/${blog.id}`}
                                className="text-teal-600 hover:text-teal-500 font-medium"
                              >
                                Edit
                              </a>
                              <button
                                onClick={() => handleDeleteBlog(blog.id)}
                                className="text-red-600 hover:text-red-500 font-medium cursor-pointer"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          ) : activeTab === "subscriptions" ? (
            <>
              {loadingSubscriptions ? (
                <p className="text-gray-600 text-center">
                  Loading subscriptions...
                </p>
              ) : error ? (
                <p className="text-red-600 text-center">{error}</p>
              ) : subscriptions.length === 0 ? (
                <p className="text-gray-600 text-center">
                  No subscriptions found
                </p>
              ) : (
                <div className="bg-white rounded-lg shadow">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-orange-100">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Email
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {subscriptions.map((sub) => (
                          <tr key={sub.email}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {sub.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {new Date(sub.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                }
                              )}
                            </td>
                            <td className="py-4 px-4 flex space-x-2">
                              <button
                                onClick={() =>
                                  handleDeleteSubscription(sub.email)
                                }
                                className="text-red-600 hover:text-red-500 font-medium cursor-pointer"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          ) : null}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
