

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCode, FaLaptop, FaBullhorn, FaHandsHelping } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section className="container mx-auto py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full mb-2">
          <span>Services</span>
        </div>
        <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">
          Unlock Your Business Potential
        </h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mt-4">
          Discover the diverse range of services we offer to drive your business success.
        </p>
      </div>

      {/* Central Image and Service Cards */}
      <div className="flex justify-center items-start gap-3">
        {/* Left Column */}
        <div className="flex flex-col space-y-4 w-1/3">
          {/* Service Cards */}
          <div className="flex items-center p-6 rounded-lg shadow-sm bg-white dark:bg-neutral-800 w-full h-40">
            <div className="bg-green-100 text-green-600 text-3xl mr-4 p-4 rounded-full flex items-center justify-center">
              <FaCode />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                Software Development
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mt-2">
                Custom software solutions tailored to your business needs using cutting-edge technology.
              </p>
              <Link href="/services/software-development">
                <p className="inline-block mt-4 text-blue-600 hover:underline">
                  Learn More
                </p>
              </Link>
            </div>
          </div>

          <div className="flex items-center p-6 rounded-lg shadow-sm bg-white dark:bg-neutral-800 w-full h-40">
            <div className="bg-yellow-100 text-yellow-600 text-3xl mr-4 p-4 rounded-full flex items-center justify-center">
              <FaHandsHelping />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                Consulting Services
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mt-2">
                Expert guidance and support for navigating complex digital transformations.
              </p>
              <Link href="/services/consulting">
                <p className="inline-block mt-4 text-blue-600 hover:underline">
                  Learn More
                </p>
              </Link>
            </div>
          </div>

          <div className="flex items-center p-6 rounded-lg shadow-sm bg-white dark:bg-neutral-800 w-full h-40">
            <div className="bg-red-100 text-red-600 text-3xl mr-4 p-4 rounded-full flex items-center justify-center">
              <FaBullhorn />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                Digital Marketing
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mt-2">
                Data-driven strategies to boost your online presence and business growth.
              </p>
              <Link href="/services/digital-marketing">
                <p className="inline-block mt-4 text-blue-600 hover:underline">
                  Learn More
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Central Image */}
        <div className="relative w-1/3 flex justify-center items-center">
          <div className="bg-gradient-to-b from-lime-300 to-lime-100 from w-full h-[59vh] overflow-hidden flex justify-center items-center rounded-lg shadow-sm">
            <Image
              src="https://framerusercontent.com/images/tdAk34uLhQdVI7smyhd4KWZNIU.png?scale-down-to=2048"
              alt="Central Service Image"
              className="object-cover"
              height="500"
              width="300"
              style={{ transform: "translateY(120px)" }}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-4 w-1/3">
          {/* Service Cards */}
          <div className="flex items-center p-6 rounded-lg shadow-sm bg-white dark:bg-neutral-800 w-full h-40">
            <div className="bg-blue-100 text-blue-600 text-3xl mr-4 p-4 rounded-full flex items-center justify-center">
              <FaLaptop />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                Web Design
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mt-2">
                Beautiful and responsive websites designed to enhance user experience.
              </p>
              <Link href="/services/web-design">
                <p className="inline-block mt-4 text-blue-600 hover:underline">
                  Learn More
                </p>
              </Link>
            </div>
          </div>

          <div className="flex items-center p-6 rounded-lg shadow-sm bg-white dark:bg-neutral-800 w-full h-40">
            <div className="bg-purple-100 text-purple-600 text-3xl mr-4 p-4 rounded-full flex items-center justify-center">
              <FaBullhorn />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                Another Service
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mt-2">
                Description of another service offered.
              </p>
              <Link href="/services/another-service">
                <p className="inline-block mt-4 text-blue-600 hover:underline">
                  Learn More
                </p>
              </Link>
            </div>
          </div>

          <div className="flex items-center p-6 rounded-lg shadow-sm bg-white dark:bg-neutral-800 w-full h-40">
            <div className="bg-teal-100 text-teal-600 text-3xl mr-4 p-4 rounded-full flex items-center justify-center">
              <FaLaptop />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                Yet Another Service
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mt-2">
                Description of yet another service offered.
              </p>
              <Link href="/services/yet-another-service">
                <p className="inline-block mt-4 text-blue-600 hover:underline">
                  Learn More
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
