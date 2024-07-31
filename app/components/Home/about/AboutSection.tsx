

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Introduction */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">
          About Nivarix Technologies
        </h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mt-4">
          At Nivarix Technologies, we specialize in delivering innovative software solutions and digital services that empower businesses across Africa. Our mission is to help companies harness the power of technology to achieve their goals.
        </p>
      </div>

      {/* Mission, Vision, and Values */}
      <div className="flex flex-col md:flex-row justify-around mt-10 space-y-6 md:space-y-0">
        <div className="text-center md:w-1/3">
          <h3 className="text-2xl font-bold text-primary-dark">Our Mission</h3>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            To deliver cutting-edge technology solutions that drive business success and innovation.
          </p>
        </div>
        <div className="text-center md:w-1/3">
          <h3 className="text-2xl font-bold text-primary-dark">Our Vision</h3>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            To be the leading tech partner in Africa, enabling businesses to thrive in the digital age.
          </p>
        </div>
        <div className="text-center md:w-1/3">
          <h3 className="text-2xl font-bold text-primary-dark">Our Values</h3>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            Innovation, Integrity, Excellence, Customer-Centricity, and Collaboration.
          </p>
        </div>
      </div>

      {/* Company History */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-200">Our Journey</h3>
        <div className="flex flex-col items-center mt-8 space-y-4">
          <div className="flex items-center">
            <span className="w-8 h-8 bg-primary-dark rounded-full"></span>
            <p className="ml-4 text-neutral-700 dark:text-neutral-300">Founded in 2010</p>
          </div>
          <div className="flex items-center">
            <span className="w-8 h-8 bg-primary-dark rounded-full"></span>
            <p className="ml-4 text-neutral-700 dark:text-neutral-300">Launched our first major project in 2012</p>
          </div>
          <div className="flex items-center">
            <span className="w-8 h-8 bg-primary-dark rounded-full"></span>
            <p className="ml-4 text-neutral-700 dark:text-neutral-300">Expanded services across Africa in 2015</p>
          </div>
          <div className="flex items-center">
            <span className="w-8 h-8 bg-primary-dark rounded-full"></span>
            <p className="ml-4 text-neutral-700 dark:text-neutral-300">Awarded "Best Tech Innovator" in 2019</p>
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-200">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          <div className="text-center">
            <Image src="/static/images/team-member1.jpg" alt="Team Member 1" width={150} height={150} className="rounded-full mx-auto"/>
            <h4 className="text-xl font-bold mt-4 text-neutral-800 dark:text-neutral-200">John Doe</h4>
            <p className="text-neutral-700 dark:text-neutral-300">CEO & Founder</p>
          </div>
          <div className="text-center">
            <Image src="/static/images/team-member2.jpg" alt="Team Member 2" width={150} height={150} className="rounded-full mx-auto"/>
            <h4 className="text-xl font-bold mt-4 text-neutral-800 dark:text-neutral-200">Jane Smith</h4>
            <p className="text-neutral-700 dark:text-neutral-300">CTO</p>
          </div>
          <div className="text-center">
            <Image src="/static/images/team-member3.jpg" alt="Team Member 3" width={150} height={150} className="rounded-full mx-auto"/>
            <h4 className="text-xl font-bold mt-4 text-neutral-800 dark:text-neutral-200">Michael Brown</h4>
            <p className="text-neutral-700 dark:text-neutral-300">Head of Marketing</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="mt-12 text-center">
        <Link href="/contact">
          <p className="inline-block px-6 py-3 rounded-full bg-primary-dark text-white hover:bg-primary-light transition-colors duration-300">
            Contact Us
          </p>
        </Link>
      </div>
    </section>
  );
}
