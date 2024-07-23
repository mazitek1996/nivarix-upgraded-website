
"use client";

import Image from "next/image";
import { useState } from "react";
import { FaCheckCircle, FaDesktop, FaCubes, FaMousePointer, FaGift } from "react-icons/fa";

export default function HeroSection() {
  const [isFigmaHovered, setIsFigmaHovered] = useState(false);
  const [isFramerHovered, setIsFramerHovered] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-blue-800 via-indigo-900 to-gray-900 text-white">
      <div className="flex flex-col items-center justify-center w-full space-y-6 pt-12 md:pt-24 max-w-4xl mx-auto">
        <div className="flex justify-center py-12">
          <Image
            src="/static/images/NivarixLogo.svg"
            alt="Nivarix Logo"
            width={100}
            height={100}
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-center">
          Transform Your Business with Cutting-Edge Tech
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-center">
          Build a fully functional, responsive, no-code website for AI-driven products in minutes using free Framer and Figma components.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.framer.com"
            className={`inline-block px-8 py-3 rounded-full border-2 border-white transition-colors duration-300 ${isFramerHovered ? "bg-white text-black" : "text-white"}`}
            onMouseEnter={() => setIsFramerHovered(true)}
            onMouseLeave={() => setIsFramerHovered(false)}
          >
            Get for Framer
          </a>
          <a
            href="https://www.figma.com"
            className={`inline-block px-8 py-3 rounded-full border-2 border-white transition-colors duration-300 ${isFigmaHovered ? "bg-white text-black" : "text-white"}`}
            onMouseEnter={() => setIsFigmaHovered(true)}
            onMouseLeave={() => setIsFigmaHovered(false)}
          >
            Get for Figma
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-center mt-8 text-sm text-gray-300 space-y-2 md:space-y-0 md:space-x-4 w-full max-w-4xl mx-auto">
          <div className="flex items-center space-x-2">
          <div className="border border-gray-100 px-2 py-1 rounded-md">   

            <FaCheckCircle />
            </div>

            <span>Over 100 sections and elements</span>
          </div>
          <div className="flex items-center space-x-2">
          <div className="border border-gray-100 px-2 py-1 rounded-md">   

            <FaDesktop />
            </div>


            <span>Responsive design: Desktop, Tablet, and Mobile</span>
          </div>
          <div className="flex items-center space-x-2">
          <div className="border border-gray-100 px-2 py-1 rounded-md">   

            <FaCubes />
            </div>

            <span>3D assets in different styles</span>
          </div>
          <div className="flex items-center space-x-2">
          <div className="border border-gray-100 px-2 py-1 rounded-md">   

            <FaMousePointer />
            </div>

            <span>Drag-and-drop building, no coding</span>
          </div>
          <div className="flex items-center space-x-2">

<div className="border border-gray-100 px-2 py-1 rounded-md">   
           <FaGift />
</div>
            <span>100% free</span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto mt-16 md:mt-32 mb-12 px-4">
        <div className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden h-[70vh] flex items-center">
          <div className="p-6 w-full">
            <h2 className="text-2xl font-bold mb-4">Welcome to Nivarix Technologies</h2>
            <p className="text-gray-600 mb-4">
              Explore the latest features that enhance your workflow and improve your productivity.
              From advanced components to seamless integrations, we have everything you need.
              Discover why our platform is the top choice for professionals. Our cutting-edge technology,
              user-friendly interface, and exceptional support set us apart from the rest.
            </p>
            <a
              href="/features"
              className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 mr-4"
            >
              Learn More
            </a>
            <a
              href="/about"
              className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
