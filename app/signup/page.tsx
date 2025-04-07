import Link from "next/link";

export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Branding/Visual */}
      <div className="w-full md:w-1/2 bg-orange-100 flex items-center justify-center p-8">
        <div className="text-center text-gray-800">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Join <span className="text-teal-600">Code DEv</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Become part of a thriving developer community.
          </p>
        </div>
      </div>

      {/* Right Section - Sign-Up Form */}
      <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          {/* Form Header */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Sign Up</h2>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-teal-600 hover:underline">
                Login
              </Link>
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div className="flex space-x-4">
              {/* First Name */}
              <div className="w-1/2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="w-1/2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="e.g., johndoe@gmail.com"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Username */}
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
              <p className="mt-1 text-xs text-gray-500">
                Only letters, numbers, and underscores
              </p>
            </div>

            {/* Password */}
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
              <p className="mt-1 text-xs text-gray-500">Minimum 8 characters</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition duration-200"
            >
              Sign Up
            </button>

            {/* Terms and Conditions */}
            <p className="text-center text-sm text-gray-600">
              By joining, you agree to the{" "}
              <Link
                href="/terms-and-conditions"
                className="text-teal-600 hover:underline"
              >
                Terms and Conditions
              </Link>{" "}
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
