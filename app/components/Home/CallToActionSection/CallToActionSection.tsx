

"use client";
import React from "react";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="container mx-auto px-4 py-12 bg-primary-light dark:bg-primary-dark">
      {/* Introduction */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">Ready to Get Started?</h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mt-4">
          Reach out to our team to learn more about how we can help your business thrive. Contact us today for a consultation or to discuss your project needs.
        </p>
      </div>

      {/* Call-to-Actions */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
        <Link href="/contact">
          <p className="inline-block px-8 py-3 rounded-full bg-primary-dark text-white hover:bg-primary-light transition-colors duration-300">
            Contact Us
          </p>
        </Link>
        <Link href="/request-quote">
          <p className="inline-block px-8 py-3 rounded-full bg-primary-dark text-white hover:bg-primary-light transition-colors duration-300">
            Request a Quote
          </p>
        </Link>
        <Link href="/subscribe">
          <p className="inline-block px-8 py-3 rounded-full bg-primary-dark text-white hover:bg-primary-light transition-colors duration-300">
            Subscribe for Updates
          </p>
        </Link>
      </div>

      {/* Contact Information */}
      <div className="text-center mt-12">
        <p className="text-neutral-700 dark:text-neutral-300">
          Or reach us directly at:
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 font-bold mt-2">
          Email: <a href="mailto:info@nivarix.com" className="underline">info@nivarix.com</a>
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 font-bold">
          Phone: <a href="tel:+1234567890" className="underline">+1 234 567 890</a>
        </p>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center mt-6 space-x-6">
        <a href="https://facebook.com" className="text-neutral-800 dark:text-neutral-200 hover:text-primary-dark">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" className="text-neutral-800 dark:text-neutral-200 hover:text-primary-dark">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" className="text-neutral-800 dark:text-neutral-200 hover:text-primary-dark">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </section>
  );
}
