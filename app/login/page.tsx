"use client";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Heading */}
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Choose your preferred sign-in method
          </p>
        </div>

        {/* Google Sign In */}
        <div className="mt-6">
          <button
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200 cursor-pointer"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <FontAwesomeIcon
              icon={faGoogle}
              className="w-5 h-5 mr-2 text-red-500"
            />
            Sign in with Google
          </button>
        </div>

        {/* Separator */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-50 text-gray-500">OR</span>
          </div>
        </div>

        {/* Email/Password Form */}
        <form className="mt-8 space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Letters, numbers, and underscores only"
              pattern="^[a-zA-Z0-9_]+$"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Minimum 8 characters"
              minLength={8}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Error Message */}
          {/* {error && (
            <div className="text-sm text-red-600 text-center">{error}</div>
          )} */}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200 cursor-pointer"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="text-sm text-center">
          Don&apos;t have an account?{" "}
          <a
            href="/signup"
            className="font-medium text-teal-600 hover:text-teal-500 hover:underline"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
