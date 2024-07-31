

"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { FaCode, FaLaptop, FaChartLine, FaHandsHelping } from "react-icons/fa";
import Link from "next/link";
import { AppleCardsCarouselDemo } from "./hero-cards";

export default function HeroSection() {
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-between min-h-screen bg-white dark:bg-black bg-dot-black/[0.2] dark:bg-dot-white/[0.2]">
      <div className="container mt-10">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="flex flex-col items-center justify-center w-full space-y-6 pt-12 md:pt-24 max-w-4xl mx-auto relative z-10">
        <div className="flex justify-center py-4">
            {/* Dynamic AI Sci-Fi Element */}
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-spin-slow"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-4 border-white dark:border-gray-900"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                AI
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-center text-neutral-800 dark:text-neutral-200">
            Empowering African Businesses with Innovative Tech Solutions
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-center text-neutral-700 dark:text-neutral-300">
            Delivering custom software, web design, and digital marketing solutions tailored to your needs.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="#solutions">
              <p
                className={`inline-block px-8 py-3 rounded-full border-2 border-neutral-800 dark:border-neutral-200 transition-colors duration-300 ${
                  isPrimaryHovered ? "bg-neutral-800 text-white" : "text-neutral-800 dark:text-neutral-200"
                }`}
                onMouseEnter={() => setIsPrimaryHovered(true)}
                onMouseLeave={() => setIsPrimaryHovered(false)}
              >
                Explore Our Solutions
              </p>
            </Link>
            <Link href="#about">
              <p
                className={`inline-block px-8 py-3 rounded-full border-2 border-neutral-800 dark:border-neutral-200 transition-colors duration-300 ${
                  isSecondaryHovered ? "bg-neutral-800 text-white" : "text-neutral-800 dark:text-neutral-200"
                }`}
                onMouseEnter={() => setIsSecondaryHovered(true)}
                onMouseLeave={() => setIsSecondaryHovered(false)}
              >
                Learn More About Us
              </p>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-center mt-8 text-sm text-neutral-700 dark:text-neutral-300 space-y-2 md:space-y-0 md:space-x-4 w-full max-w-4xl mx-auto">
            {[
              { icon: <FaCode />, text: "Custom Software Development" },
              { icon: <FaLaptop />, text: "Responsive Web Design" },
              { icon: <FaChartLine />, text: "Data-Driven Digital Marketing" },
              { icon: <FaHandsHelping />, text: "Expert Consulting Services" },
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="border border-neutral-600 dark:border-neutral-200 px-2 py-1 rounded-md">
                  {feature.icon}
                </div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mx-auto px-4 relative z-10">
     

          <AppleCardsCarouselDemo/>
        </div>

        {/* Client Testimonials and Logos Section */}
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Trusted by leading companies</h3>
            <p className="text-neutral-600 dark:text-neutral-400">Join over 5 million people at top companies.</p>
          </div>
          {/* <div className="flex justify-center mt-4 space-x-4">
            <Image src="/static/icons/Google-Logo.wine.svg" alt="Client 1" width={100} height={40} />
            <Image src="/static/icons/Meta_Platforms-Logo.wine.svg" alt="Client 3" width={100} height={40} />

            <Image src="/static/icons/Amazon_Web_Services-Logo.wine.svg" alt="Client 2" width={100} height={40} />

            <Image src="/static/icons/Microsoft_Azure-Logo.wine.svg" alt="Client 4" width={100} height={40} />
            <Image src="/static/icons/Netlify-Logo.wine.svg" alt="Client 5" width={100} height={40} />
          </div> */}
        </div>
        
      </div>
    </section>
  );
}
