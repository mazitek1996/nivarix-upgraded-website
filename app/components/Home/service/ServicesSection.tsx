

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCode, FaLaptop, FaBullhorn, FaHandsHelping } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Introduction */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">Our Services</h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mt-4">
          At Nivarix Technologies, we offer a range of services designed to help businesses thrive in the digital landscape.
        </p>
      </div>

      {/* Service Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Software Development */}
        <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
          <FaCode className="text-primary-dark text-6xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Software Development</h3>
          <p className="text-neutral-700 dark:text-neutral-300 mt-2">
            Custom software solutions tailored to meet your business needs, using the latest technologies.
          </p>
          <Link href="/services/software-development">
            <p className="inline-block mt-4 text-primary-dark hover:underline">Learn More</p>
          </Link>
        </div>

        {/* Web Design */}
        <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
          <FaLaptop className="text-primary-dark text-6xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Web Design</h3>
          <p className="text-neutral-700 dark:text-neutral-300 mt-2">
            Beautiful, responsive websites designed to enhance user experience and drive engagement.
          </p>
          <Link href="/services/web-design">
            <p className="inline-block mt-4 text-primary-dark hover:underline">Learn More</p>
          </Link>
        </div>

        {/* Digital Marketing */}
        <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
          <FaBullhorn className="text-primary-dark text-6xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Digital Marketing</h3>
          <p className="text-neutral-700 dark:text-neutral-300 mt-2">
            Data-driven strategies to enhance your online presence and grow your business.
          </p>
          <Link href="/services/digital-marketing">
            <p className="inline-block mt-4 text-primary-dark hover:underline">Learn More</p>
          </Link>
        </div>

        {/* Consulting Services */}
        <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
          <FaHandsHelping className="text-primary-dark text-6xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Consulting Services</h3>
          <p className="text-neutral-700 dark:text-neutral-300 mt-2">
            Expert advice and support to help you navigate complex digital challenges.
          </p>
          <Link href="/services/consulting">
            <p className="inline-block mt-4 text-primary-dark hover:underline">Learn More</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
