

// // // import React from 'react'
// // // import { FaCode, FaLaptop, FaChartLine, FaHandsHelping, FaHeadphones } from "react-icons/fa";

// // // export default function HeroServices() {
// // //   return (
// // //     <div>


// // // <div className="flex flex-col md:flex-row justify-center py-10 mt-10 text-sm text-neutral-700 dark:text-neutral-300 space-y-8 md:space-y-0 md:space-x-16 w-full max-w-4xl mx-auto">
// // //             {[
// // //               {
// // //                 icon: <FaCode className="text-white" />,
// // //                 text: "Custom Software Development",
// // //                 description: "Tailored solutions to meet your unique business needs.",
// // //                 bgColor: "bg-blue-300"
// // //               },
// // //               {
// // //                 icon: <FaLaptop className="text-white" />,
// // //                 text: "Responsive Web Design",
// // //                 description: "Creating stunning websites that look great on any device.",
// // //                 bgColor: "bg-green-300"
// // //               },
// // //               {
// // //                 icon: <FaChartLine className="text-white" />,
// // //                 text: "Data-Driven Digital Marketing",
// // //                 description: "Boost your online presence with targeted strategies.",
// // //                 bgColor: "bg-red-300"
// // //               },
// // //               {
// // //                 icon: <FaHandsHelping className="text-white" />,
// // //                 text: "Expert Consulting Services",
// // //                 description: "Guidance and support for your digital transformation.",
// // //                 bgColor: "bg-yellow-300"
// // //               },
// // //               {
// // //                 icon: <FaHeadphones className="text-white" />,
// // //                 text: "Professional Customer Services",
// // //                 description: "Guidance and support for your digital transformation.",
// // //                 bgColor: "bg-emerald-300"
// // //               },
// // //             ].map((feature, index) => (
// // //               <div key={index} className="flex flex-col items-center md:items-start md:flex-row md:space-x-4 space-y-2 md:space-y-0">
// // //                 <div className={`flex items-center justify-center w-12 h-12 rounded-full ${feature.bgColor} hover:scale-105 transition-transform`}>
// // //                   {feature.icon}
// // //                 </div>
// // //                 <div className="text-center md:text-left">
// // //                   <h3 className="font-bold text-lg text-neutral-800 dark:text-neutral-100">{feature.text}</h3>
// // //                   <p className="text-sm text-neutral-600 dark:text-neutral-400">{feature.description}</p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>



// // //     </div>
// // //   )
// // // }



"use client";
import React from 'react';
import { FaSlack, FaTrello, FaGoogle } from "react-icons/fa";
import { FiArrowRight } from 'react-icons/fi';
import { SiTodoist, SiNotion, SiAsana } from "react-icons/si";

export default function IntegrationsSection() {
  return (
    <section className="container mx-auto py-16">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
        {/* Title and Description */}
        <div className="lg:w-2/3">
          <span className="inline-block bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm mb-4">Integrations</span>
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">Unlock Synergy, Seamless Integrations with Our Platform</h2>
          <p className="text-lg text-neutral-700">
            Explore our platform's seamless integrations with various tools and platforms, enhancing productivity and workflow efficiency.
          </p>
        </div>

        {/* First Two Cards */}
        <div className="lg:w-2/3 flex flex-col lg:flex-row gap-4">
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-gray-100 rounded-lg">
                <SiTodoist className="text-3xl text-red-600" />
              </div>
              <a href="#" className="inline-flex items-center bg-blue-100 text-blue-600 py-1 px-2 rounded-full text-sm hover:bg-blue-200">
                Visit Website <FiArrowRight className="ml-2 transform transition-transform duration-300 hover:rotate-90" />
              </a>
            </div>
            <div className="mt-4">
              <h3 className="font-bold text-lg text-neutral-800">Todoist</h3>
              <p className="text-neutral-600 mt-2">Manage tasks seamlessly between Todoist and our platform.</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-gray-100 rounded-lg">
                <FaSlack className="text-3xl text-purple-600" />
              </div>
              <a href="#" className="inline-flex items-center bg-blue-100 text-blue-600 py-1 px-2 rounded-full text-sm hover:bg-blue-200">
                Visit Website <FiArrowRight className="ml-2 transform transition-transform duration-300 hover:rotate-90" />
              </a>
            </div>
            <div className="mt-4">
              <h3 className="font-bold text-lg text-neutral-800">Slack</h3>
              <p className="text-neutral-600 mt-2">Enhance team collaboration with our Slack integration.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Remaining Four Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-gray-100 rounded-lg">
              <FaGoogle className="text-3xl text-blue-600" /> 
            </div>
            <a href="#" className="inline-flex items-center bg-blue-100 text-blue-600 py-1 px-2 rounded-full text-sm hover:bg-blue-200">
              Visit Website <FiArrowRight className="ml-2 transform transition-transform duration-300 hover:rotate-90" />
            </a>
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-lg text-neutral-800">Gmail</h3>
            <p className="text-neutral-600 mt-2">Effortlessly integrate email communication with our platform.</p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-gray-100 rounded-lg">
              <SiNotion className="text-3xl text-black" />
            </div>
            <a href="#" className="inline-flex items-center bg-blue-100 text-blue-600 py-1 px-2 rounded-full text-sm hover:bg-blue-200">
              Visit Website <FiArrowRight className="ml-2 transform transition-transform duration-300 hover:rotate-90" />
            </a>
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-lg text-neutral-800">Notion</h3>
            <p className="text-neutral-600 mt-2">Sync tasks and data seamlessly with our platform.</p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-gray-100 rounded-lg">
              <SiAsana className="text-3xl text-pink-600" />
            </div>
            <a href="#" className="inline-flex items-center bg-blue-100 text-blue-600 py-1 px-2 rounded-full text-sm hover:bg-blue-200">
              Visit Website <FiArrowRight className="ml-2 transform transition-transform duration-300 hover:rotate-90" />
            </a>
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-lg text-neutral-800">Asana</h3>
            <p className="text-neutral-600 mt-2">Project management with our Asana integration.</p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-gray-100 rounded-lg">
              <FaTrello className="text-3xl text-blue-600" />
            </div>
            <a href="#" className="inline-flex items-center bg-blue-100 text-blue-600 py-1 px-2 rounded-full text-sm hover:bg-blue-200">
              Visit Website <FiArrowRight className="ml-2 transform transition-transform duration-300 hover:rotate-90" />
            </a>
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-lg text-neutral-800">Trello</h3>
            <p className="text-neutral-600 mt-2">Sync Trello boards seamlessly with our platform.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
