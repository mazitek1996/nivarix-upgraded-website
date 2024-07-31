

"use client";
import React from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Introduction */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">What Our Clients Say</h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mt-4">
          We value our clients' feedback and take pride in delivering exceptional service. Here’s what they have to say about working with us.
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
          <Image src="/static/images/client1.jpg" alt="Client 1" width={80} height={80} className="rounded-full mx-auto mb-4"/>
          <p className="text-neutral-700 dark:text-neutral-300 italic">
            "Nivarix Technologies transformed our digital presence with a stunning website and effective marketing strategies. Our online engagement has skyrocketed!"
          </p>
          <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mt-4">John Doe</h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">CEO, Example Corp</p>
        </div>

        {/* Testimonial 2 */}
        <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
          <Image src="/static/images/client2.jpg" alt="Client 2" width={80} height={80} className="rounded-full mx-auto mb-4"/>
          <p className="text-neutral-700 dark:text-neutral-300 italic">
            "The team at Nivarix provided us with excellent custom software solutions. Their expertise and support made our project a success."
          </p>
          <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mt-4">Jane Smith</h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">CTO, Tech Innovators</p>
        </div>

        {/* Testimonial 3 */}
        <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
          <Image src="/static/images/client3.jpg" alt="Client 3" width={80} height={80} className="rounded-full mx-auto mb-4"/>
          <p className="text-neutral-700 dark:text-neutral-300 italic">
            "Working with Nivarix has been a pleasure. Their digital marketing strategies significantly increased our online visibility and sales."
          </p>
          <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mt-4">Michael Brown</h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">Marketing Director, Online Retailers</p>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="mt-12 text-center">
        <a href="/testimonials" className="inline-block px-6 py-3 rounded-full bg-primary-dark text-white hover:bg-primary-light transition-colors duration-300">
          Read More Testimonials
        </a>
      </div>
    </section>
  );
}
