


"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Introduction */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">
          Latest News & Insights
        </h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mt-4">
          Stay up-to-date with the latest industry news, company updates, and expert insights from the Nivarix Technologies team.
        </p>
      </div>

      {/* Featured Posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Post 1 */}
        <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
          <div className="relative h-48 overflow-hidden rounded-t-lg">
            <Image
              src="https://images.unsplash.com/photo-1678070334322-eb68e79ee458?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog Post 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mt-4">
            Optimizing Workflow Processes for Maximum Efficiency
          </h3>
          <p className="text-neutral-700 dark:text-neutral-300 mt-2">
            Understand the importance of optimizing workflow processes to enhance efficiency. Learn techniques for...
          </p>
          <Link href="/blog/optimizing-workflow-processes">
            <p className="inline-block mt-4 text-blue-600 hover:underline">
              Read More
            </p>
          </Link>
          <div className="flex items-center mt-4">
            <Image
              src="/static/images/team1.jpg"
              alt="Author Image"
              width={30}
              height={30}
              className="rounded-full"
            />
            <p className="text-sm text-neutral-700 dark:text-neutral-300 ml-2">
              Joel Keneley
            </p>
            <span className="ml-auto text-sm text-neutral-500">4 Min Read</span>
          </div>
        </div>

        {/* Post 2 */}
        <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
          <div className="relative h-48 overflow-hidden rounded-t-lg">
            <Image
              src="https://images.unsplash.com/photo-1515469037678-4d4f8288bcbe?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog Post 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mt-4">
            Best Practices for Effective Project Documentation
          </h3>
          <p className="text-neutral-700 dark:text-neutral-300 mt-2">
            Dive into the importance of maintaining thorough project documentation. Learn best practices for...
          </p>
          <Link href="/blog/best-practices-project-documentation">
            <p className="inline-block mt-4 text-blue-600 hover:underline">
              Read More
            </p>
          </Link>
          <div className="flex items-center mt-4">
            <Image
              src="/static/images/team2.jpg"
              alt="Author Image"
              width={30}
              height={30}
              className="rounded-full"
            />
            <p className="text-sm text-neutral-700 dark:text-neutral-300 ml-2">
              Sarah Devis
            </p>
            <span className="ml-auto text-sm text-neutral-500">10 Min Read</span>
          </div>
        </div>

        {/* Post 3 */}
        <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
          <div className="relative h-48 overflow-hidden rounded-t-lg">
            <Image
              src="https://images.unsplash.com/photo-1708844897353-649da595a3f2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog Post 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mt-4">
            Managing Stakeholder Expectations for Project Success
          </h3>
          <p className="text-neutral-700 dark:text-neutral-300 mt-2">
            Understand the importance of stakeholder management in project planning. Learn strategies for...
          </p>
          <Link href="/blog/managing-stakeholder-expectations">
            <p className="inline-block mt-4 text-blue-600 hover:underline">
              Read More
            </p>
          </Link>
          <div className="flex items-center mt-4">
            <Image
              src="/static/images/team3.jpg"
              alt="Author Image"
              width={30}
              height={30}
              className="rounded-full"
            />
            <p className="text-sm text-neutral-700 dark:text-neutral-300 ml-2">
              Micheal Smith
            </p>
            <span className="ml-auto text-sm text-neutral-500">14 Min Read</span>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="mt-12 text-center">
        <Link href="/blog">
          <p className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
            View All Blogs
          </p>
        </Link>
      </div>
    </section>
  );
}
