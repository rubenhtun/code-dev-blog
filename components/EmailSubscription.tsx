"use client";

import React, { useState } from "react";
import { subscribeToNewsletter } from "@/lib/actions";
import { toast } from "react-toastify";

const EmailSubscription = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await subscribeToNewsletter(email);
      if (response.success) {
        toast.success(response.message);
        setEmail("");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Subscription failed", error);
      alert("There was an error. Please try again later.");
    }
  };

  return (
    <>
      <style>
        {`
          .fade-in {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.6s ease-out forwards;
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <section className="bg-lime-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Stay Updated with <span className="text-teal-600">CodeDEv</span>
          </h2>

          <p
            className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto mb-6 fade-in"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Subscribe to our newsletter for the latest tutorials, tips, and
            coding resources.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 fade-in"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full sm:w-64 px-4 py-2 text-gray-700 bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:border-teal-600 transition-all duration-300"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-500 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default EmailSubscription;
