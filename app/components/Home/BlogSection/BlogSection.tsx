

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Introduction */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">Latest News & Insights</h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mt-4">
          Stay up-to-date with the latest industry news, company updates, and expert insights from the Nivarix Technologies team.
        </p>
      </div>

      {/* Featured Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Post 1 */}
        <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
          <Image src="/static/images/blog1.jpg" alt="Blog Post 1" width={500} height={300} className="rounded-lg mb-4"/>
          <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">5 Emerging Tech Trends in 2024</h3>
          <p className="text-neutral-700 dark:text-neutral-300 mt-2">By John Doe, January 10, 2024</p>
          <p className="text-neutral-700 dark:text-neutral-300 mt-4">
            Discover the top tech trends that are set to shape the industry this year, from AI advancements to new digital marketing strategies.
          </p>
          <Link href="/blog/emerging-tech-trends-2024">
            <p className="inline-block mt-4 text-primary-dark hover:underline">Read More</p>
          </Link>
        </div>

        {/* Post 2 */}
        <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
          <Image src="/static/images/blog2.jpg" alt="Blog Post 2" width={500} height={300} className="rounded-lg mb-4"/>
          <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">How to Optimize Your Website for SEO in 2024</h3>
          <p className="text-neutral-700 dark:text-neutral-300 mt-2">By Jane Smith, February 5, 2024</p>
          <p className="text-neutral-700 dark:text-neutral-300 mt-4">
            Learn the latest SEO techniques to boost your website's visibility and attract more traffic in the coming year.
          </p>
          <Link href="/blog/seo-optimization-2024">
            <p className="inline-block mt-4 text-primary-dark hover:underline">Read More</p>
          </Link>
        </div>

        {/* Post 3 */}
        <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
          <Image src="/static/images/blog3.jpg" alt="Blog Post 3" width={500} height={300} className="rounded-lg mb-4"/>
          <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Case Study: E-Commerce Success Story</h3>
          <p className="text-neutral-700 dark:text-neutral-300 mt-2">By Michael Brown, March 15, 2024</p>
          <p className="text-neutral-700 dark:text-neutral-300 mt-4">
            Explore how our team helped an e-commerce business scale their operations and increase revenue through innovative solutions.
          </p>
          <Link href="/blog/ecommerce-success-story">
            <p className="inline-block mt-4 text-primary-dark hover:underline">Read More</p>
          </Link>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="mt-12 text-center">
        <Link href="/blog">
          <p className="inline-block px-6 py-3 rounded-full bg-primary-dark text-white hover:bg-primary-light transition-colors duration-300">
            View All Posts
          </p>
        </Link>
      </div>
    </section>
  );
}
