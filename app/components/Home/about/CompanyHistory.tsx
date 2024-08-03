


"use client";
import React from "react";
import { FiCheckCircle, FiLayers, FiTrendingUp, FiShield, FiAward, FiBriefcase } from "react-icons/fi";

function CompanyHistory() {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="col-span-1 flex flex-col justify-center space-y-4">
        <div className="flex items-center mb-2">
  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full inline-flex items-center space-x-2">
    <FiCheckCircle className="text-blue-600" />
    <span className="text-sm font-semibold">Company Highlights</span>
  </div>
</div>

          <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">
            Our Journey and Achievements
          </h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300">
            Discover the milestones that have shaped our growth and success in the technology industry.
          </p>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <FiAward className="text-yellow-500" />
              <span className="text-neutral-600 dark:text-neutral-300">Innovative solutions recognized globally.</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiBriefcase className="text-green-500" />
              <span className="text-neutral-600 dark:text-neutral-300">Empowering businesses across diverse sectors.</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiTrendingUp className="text-blue-500" />
              <span className="text-neutral-600 dark:text-neutral-300">Continuous growth and expansion.</span>
            </div>
          </div>
          <div className="mt-6">
            <a href="#more-about-us" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300">
              Learn More About Us
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: <FiLayers />,
              title: "Founded in 2024",
              description: "Established with a mission to revolutionize the tech landscape in Africa.",
              bgColor: "bg-blue-50",
              textColor: "text-blue-600",
            },
            {
              icon: <FiTrendingUp />,
              title: "First Major Project in 2025",
              description: "Launched a significant project, setting a benchmark for innovation.",
              bgColor: "bg-green-50",
              textColor: "text-green-600",
            },
            {
              icon: <FiShield />,
              title: "Expansion Across Africa in 2026",
              description: "Expanded services to multiple countries, supporting various industries.",
              bgColor: "bg-yellow-50",
              textColor: "text-yellow-600",
            },
            {
              icon: <FiCheckCircle />,
              title: "Best Tech Innovator Award in 2027",
              description: "Recognized for groundbreaking solutions and contributions to technology.",
              bgColor: "bg-purple-50",
              textColor: "text-purple-600",
            },
          ].map((event, index) => (
            <div key={index} className={`flex p-6 rounded-lg shadow-lg ${event.bgColor}`}>
              <div className={`flex-shrink-0 ${event.textColor} mr-4`}>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white">
                  {event.icon}
                </div>
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${event.textColor}`}>
                  {event.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-400">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyHistory;
