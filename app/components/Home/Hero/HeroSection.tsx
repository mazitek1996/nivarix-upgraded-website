


"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { AppleCardsCarouselDemo } from "./hero-cards";
import PartnersLogoSection from "./partnersLogoSection";
import HeroServices from "./hero-services";

export default function HeroSection() {
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mt-10 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-96 h-96 bg-gradient-to-br from-transparent via-blue-200 to-blue-500 opacity-30 dark:opacity-20 rounded-full animate-pulse"></div>
        </div>

        <div className="flex flex-col items-center justify-center w-full space-y-8 pt-12 md:pt-24 max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center py-4">
            {/* Dynamic AI Sci-Fi Element */}
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-spin-slow"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-4 border-white dark:border-gray-900"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-extrabold">
                AI
              </div>
            </div>
          </div>
       
<h1 className="text-4xl md:text-6xl font-extrabold text-center text-neutral-800 dark:text-neutral-100 break-words">
  Revolutionizing African Businesses with Cutting-Edge Technology
</h1>
<p className="max-w-lg mx-auto text-sm md:text-xl text-center text-neutral-700 dark:text-neutral-300 mt-4 break-words">
  Unlocking the potential of your business with custom software, web design, and digital marketing solutions.
</p>

          <div className="flex flex-col md:flex-row justify-center space-x-0 space-y-4 md:space-x-6 md:space-y-0">
            <Link href="#solutions">
              <p
                className={`inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-neutral-800 dark:border-neutral-200 transition-colors duration-300 ${
                  isPrimaryHovered ? "bg-neutral-800 text-white" : "text-neutral-800 dark:text-neutral-200"
                }`}
                onMouseEnter={() => setIsPrimaryHovered(true)}
                onMouseLeave={() => setIsPrimaryHovered(false)}
              >
                Explore Our Solutions <FiArrowUpRight className="ml-2" />
              </p>
            </Link>
            <Link href="#about">
              <p
                className={`inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-neutral-800 dark:border-neutral-200 transition-colors duration-300 ${
                  isSecondaryHovered ? "bg-neutral-800 text-white" : "text-neutral-800 dark:text-neutral-200"
                }`}
                onMouseEnter={() => setIsSecondaryHovered(true)}
                onMouseLeave={() => setIsSecondaryHovered(false)}
              >
                Learn More About Us <FiArrowUpRight className="ml-2" />
              </p>
            </Link>
          </div>
        </div>
        <HeroServices/>

      </div>
      <div className="w-full mx-auto px-4 relative z-10 mt-12">
        <AppleCardsCarouselDemo />
      </div>
      <div className="">
        {/* Client Testimonials and Logos Section */}
        <PartnersLogoSection />
      </div>
    </section>
  );
}
