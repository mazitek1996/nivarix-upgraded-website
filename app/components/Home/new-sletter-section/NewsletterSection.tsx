

"use client";
import React from "react";
import { FiMail } from "react-icons/fi";

export default function NewsletterSection() {
  return (
    <section className="container mx-auto mb-10 py-16 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-sm text-center">
      <h2 className="text-3xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
        Stay in the Loop!
      </h2>
      <p className="text-lg mb-8 text-neutral-600 dark:text-neutral-400">
        Subscribe to our newsletter for the latest updates, special offers, and exclusive content.
      </p>
      <form className="flex justify-center items-center">
        <input
          type="email"
          placeholder="Enter your email here"
          className="py-3 px-4 rounded-l-full border border-neutral-300 dark:border-neutral-600 focus:outline-none w-1/2 md:w-1/3 text-neutral-700 dark:text-neutral-200 bg-neutral-50 dark:bg-neutral-700"
        />
        <button
          type="submit"
          className="bg-emerald-500 text-white py-3 px-6 rounded-r-full flex items-center transition-colors duration-300 hover:bg-emerald-600"
        >
          <FiMail className="mr-2" />
          Sign me up!
        </button>
      </form>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-4">
        By submitting your email address, you agree to receive updates and promotions from our company.
        Your privacy is important to us, and we will not share your information.
      </p>
    </section>
  );
}
