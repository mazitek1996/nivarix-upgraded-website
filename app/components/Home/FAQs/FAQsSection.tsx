

"use client";

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiArrowRight } from 'react-icons/fi';
import Link from "next/link"

export default function FAQsSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
      { 
        question: 'What types of furniture do you offer?',
        answer: 'We offer a wide range of furniture, including sofas, dining tables, beds, office chairs, and custom-made pieces to fit your unique space and style.'
      },
      { 
        question: 'Do you provide interior design services?',
        answer: 'Yes, we provide professional interior design services to help transform your space into a beautiful and functional environment. Our team of experts works closely with you to bring your vision to life.'
      },
      { 
        question: 'Can I request custom furniture?',
        answer: 'Absolutely! We specialize in creating custom furniture tailored to your specific needs and preferences. Contact us to discuss your ideas and requirements.'
      },
      { 
        question: 'What is the lead time for custom orders?',
        answer: 'The lead time for custom orders varies depending on the complexity of the design and our current workload. Typically, it takes between 4 to 8 weeks. We will provide an estimated timeline when you place your order.'
      },
      { 
        question: 'Do you offer delivery services?',
        answer: 'Yes, we offer delivery services for all our products. Our delivery team ensures that your furniture arrives safely and is properly set up in your home or office.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods, including credit cards (Visa, Mastercard, American Express), bank transfers, and mobile payments.'
      },
      {
        question: 'Do you provide warranties for your products?',
        answer: 'Yes, we provide warranties on all our furniture pieces. The warranty period varies depending on the product. Please contact our support team for more details.'
      },
      {
        question: 'Can I visit your showroom?',
        answer: 'Yes, you are welcome to visit our showroom to see our furniture and discuss your design needs with our team. Please check our website for the showroom location and opening hours.'
      },
      {
        question: 'Do you offer consultation services?',
        answer: 'Yes, we offer consultation services to help you plan your interior design and furniture needs. Schedule an appointment with our experts to get started.'
      },
      {
        question: 'How do I care for my new furniture?',
        answer: 'We provide care instructions for all our furniture pieces to help you maintain their beauty and durability. Please refer to the care guide provided with your purchase or contact us for specific advice.'
      }
    ];

    const toggleAccordion = (index: number) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
      <section className=" py-10 bg-gray-100">
        <div className="container mx-auto  bg-gray-50 dark:bg-gray-800 rounded-md shadow-sm px-6">


        <div className="py-10 flex flex-col lg:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold mb-4 lg:mb-0 text-gray-900 dark:text-gray-100">Frequently Asked Questions</h2>
          <div className="text-center lg:text-right lg:ml-4 mt-4 lg:mt-0">
            <Link href="/frequent_asked_questions">
              <div className="inline-flex items-center text-gray-700 dark:text-gray-300 text-sm shadow-lg bg-gradient-to-r from-green-200 to-red-200 dark:from-purple-900 dark:to-slate-800 border-emerald-500 border py-1 px-2 rounded-full hover:bg-emerald-400/10 dark:hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-colors duration-300 ease-in-out">
                <span className="hidden lg:inline">Explore more frequently asked questions</span>
                <span className="inline lg:hidden">Explore more frequently asked questions</span>
                <FiArrowRight className="ml-1 transition-transform hover:text-blue-500 hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>

        <div className="container mx-auto py-3 lg:px-0">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-sm">
                <div
                  className="flex items-center justify-between px-4 py-3 cursor-pointer bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{faq.question}</h3>
                  {activeIndex === index ? <FiChevronUp className="text-gray-600 dark:text-gray-400" /> : <FiChevronDown className="text-gray-600 dark:text-gray-400" />}
                </div>
                {activeIndex === index && (
                  <div className="px-4 py-2 text-gray-700 dark:text-gray-300">
                    {typeof faq.answer === 'string' ? (
                      <p>{faq.answer}</p>
                    ) : (
                      faq.answer
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
    );
}