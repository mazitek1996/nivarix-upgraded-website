
"use client";
import React from "react";
import { FiFeather, FiShield, FiZap } from "react-icons/fi";

function Introduction() {
  return (
    <div className="container mx-auto py-12 text-center relative">
      {/* Radial gradient for the container to give a modern, dynamic look */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-96 h-96 bg-gradient-to-br from-transparent via-blue-200 to-blue-500 opacity-30 dark:opacity-20 rounded-full animate-pulse"></div>
      </div>
      <h2 className="text-4xl font-extrabold text-neutral-800 dark:text-neutral-200 mb-6 relative z-10">
        Discover Nivarix Technologies
      </h2>
      <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-10 max-w-3xl mx-auto relative z-10">
        At Nivarix Technologies, we are dedicated to crafting innovative software solutions and digital services that empower businesses across Africa. Our mission is to leverage cutting-edge technology to help companies reach new heights and achieve their goals with unparalleled efficiency and creativity.
      </p>
      <div className="flex flex-wrap justify-center gap-8 relative z-10">
        {/* Customer-Centricity */}
        <div className="flex flex-col items-start max-w-sm bg-white dark:bg-neutral-800 p-6 rounded-md">
          <div className="flex items-center mb-4">
            <div className="bg-green-200 dark:bg-green-700 px-4 py-1 rounded-full text-sm font-semibold text-green-700 dark:text-green-200 flex items-center">
              <FiZap className="text-green-700 dark:text-green-200 mr-2" />
              Customer-Centricity
            </div>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400">
            Putting our customers at the heart of everything we do, we strive to deliver exceptional experiences and personalized solutions.
          </p>
        </div>

        {/* Data Security */}
        <div className="flex flex-col items-start max-w-sm bg-white dark:bg-neutral-800 p-6 rounded-md ">
          <div className="flex items-center mb-4">
            <div className="bg-blue-200 dark:bg-blue-700 px-4 py-1 rounded-full text-sm font-semibold text-blue-700 dark:text-blue-200 flex items-center">
              <FiShield className="text-blue-700 dark:text-blue-200 mr-2" />
              Data Security
            </div>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400">
            Ensuring the highest level of security for your data, protecting your business and its valuable information.
          </p>
        </div>

        {/* Innovation */}
        <div className="flex flex-col items-start max-w-sm bg-white dark:bg-neutral-800 p-6 rounded-md">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-200 dark:bg-yellow-700 px-4 py-1 rounded-full text-sm font-semibold text-yellow-700 dark:text-yellow-200 flex items-center">
              <FiFeather className="text-yellow-700 dark:text-yellow-200 mr-2" />
              Innovation
            </div>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400">
            Driving continuous innovation, we embrace the latest technologies to create future-proof solutions for our clients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
