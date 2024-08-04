

// "use client";
// import React from "react";
// import { 
//   FaNodeJs, FaReact, FaPython, FaAws, FaDocker, FaFigma, FaWordpress, FaBootstrap, FaSearchDollar, FaRegSmile 
// } from "react-icons/fa";
// import { FiArrowUpRight } from "react-icons/fi";
// import { SiDjango, SiOpenai, SiNextdotjs, SiTensorflow, SiIbm, SiAdobedreamweaver } from "react-icons/si";
// import { IoIosAnalytics } from "react-icons/io";

// export default function TechStackSection() {
//   return (
//     <section className="container mx-auto py-16 bg-emerald-100 dark:bg-neutral-900 rounded-lg">
//       <div className="text-center mb-10">
//         <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full mb-2">
//           <span>Technology & Services</span>
//         </div>

  

//         <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
//         Our Technology Stack & Services
//           <span className="ml-2 inline-flex items-center justify-center bg-emerald-500 h-7 w-7 rounded-full text-white">
//             <FiArrowUpRight size={24} />
//           </span>
//         </h2>

//         <p className="text-lg text-neutral-700 dark:text-neutral-300 mt-4">
//           We leverage the latest and most advanced technologies to deliver exceptional solutions across various domains.
//         </p>
//       </div>
//       <div className="flex flex-wrap justify-center gap-10">
//         {/* Backend */}
//         <div className="flex flex-col items-center">
//           <FaNodeJs className="text-5xl text-green-500" />
//           <p className="mt-2">Node.js</p>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiDjango className="text-5xl text-green-800" />
//           <p className="mt-2">Django</p>
//         </div>
//         <div className="flex flex-col items-center">
//           <FaPython className="text-5xl text-blue-500" />
//           <p className="mt-2">Python</p>
//         </div>
//         {/* Frontend */}
//         <div className="flex flex-col items-center">
//           <FaReact className="text-5xl text-blue-600" />
//           <p className="mt-2">React</p>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiNextdotjs className="text-5xl text-black" />
//           <p className="mt-2">Next.js</p>
//         </div>
//         <div className="flex flex-col items-center">
//           <FaBootstrap className="text-5xl text-purple-600" />
//           <p className="mt-2">Bootstrap</p>
//         </div>
//         <div className="flex flex-col items-center">
//           <FaWordpress className="text-5xl text-blue-700" />
//           <p className="mt-2">WordPress</p>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiAdobedreamweaver className="text-5xl text-green-500" />
//           <p className="mt-2">Adobe Dreamweaver</p>
//         </div>
//         {/* AI & Design */}
//         <div className="flex flex-col items-center">
//           <SiOpenai className="text-5xl text-teal-600" />
//           <p className="mt-2">OpenAI</p>
//         </div>
//         <div className="flex flex-col items-center">
//           <FaFigma className="text-5xl text-purple-500" />
//           <p className="mt-2">Figma</p>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiTensorflow className="text-5xl text-orange-500" />
//           <p className="mt-2">TensorFlow</p>
//         </div>
//         <div className="flex flex-col items-center">
//           <SiIbm className="text-5xl text-blue-600" />
//           <p className="mt-2">IBM Watson</p>
//         </div>
//         {/* Cloud & DevOps */}
//         <div className="flex flex-col items-center">
//           <FaAws className="text-5xl text-orange-500" />
//           <p className="mt-2">AWS</p>
//         </div>
//         <div className="flex flex-col items-center">
//           <FaDocker className="text-5xl text-blue-600" />
//           <p className="mt-2">Docker</p>
//         </div>
//         {/* Additional Services */}
//         <div className="flex flex-col items-center">
//           <FaSearchDollar className="text-5xl text-yellow-600" />
//           <p className="mt-2">Digital Marketing</p>
//         </div>
//         <div className="flex flex-col items-center">
//           <IoIosAnalytics className="text-5xl text-red-600" />
//           <p className="mt-2">Analytics</p>
//         </div>
//         <div className="flex flex-col items-center">
//           <FaRegSmile className="text-5xl text-green-600" />
//           <p className="mt-2">Customer Services</p>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import Link from "next/link"
import { 
  FaNodeJs, FaReact, FaPython, FaAws, FaDocker, FaFigma, FaWordpress, FaBootstrap, FaSearchDollar, FaRegSmile, FaSwift, FaApple, FaAndroid 
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { SiDjango, SiOpenai, SiNextdotjs, SiTensorflow, SiIbm, SiAdobedreamweaver, SiMongodb, SiJenkins, SiKubernetes, SiFlutter, SiSketch } from "react-icons/si";
import { IoIosAnalytics } from "react-icons/io";

export default function TechStackSection() {
  return (
    <section className="container mx-auto py-16 bg-emerald-100 dark:bg-neutral-900 rounded-lg">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full mb-2">
          <span>Technology & Services</span>
        </div>
        <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">
          Our Technology Stack & Services
          <span className="ml-2 inline-flex items-center justify-center bg-emerald-500 h-7 w-7 rounded-full text-white">
            <FiArrowUpRight size={24} />
          </span>
        </h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mt-4">
          We leverage the latest and most advanced technologies to deliver exceptional solutions across various domains.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {/* Backend */}
        <div className="flex flex-col items-center">
          <FaNodeJs className="text-5xl text-green-500" />
          <p className="mt-2">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <SiDjango className="text-5xl text-green-800" />
          <p className="mt-2">Django</p>
        </div>
        <div className="flex flex-col items-center">
          <FaPython className="text-5xl text-blue-500" />
          <p className="mt-2">Python</p>
        </div>
        <div className="flex flex-col items-center">
          <SiMongodb className="text-5xl text-green-500" />
          <p className="mt-2">MongoDB</p>
        </div>
        {/* Frontend */}
        <div className="flex flex-col items-center">
          <FaReact className="text-5xl text-blue-600" />
          <p className="mt-2">React</p>
        </div>
        <div className="flex flex-col items-center">
          <SiNextdotjs className="text-5xl text-black" />
          <p className="mt-2">Next.js</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBootstrap className="text-5xl text-purple-600" />
          <p className="mt-2">Bootstrap</p>
        </div>
        <div className="flex flex-col items-center">
          <FaWordpress className="text-5xl text-blue-700" />
          <p className="mt-2">WordPress</p>
        </div>
        <div className="flex flex-col items-center">
          <SiAdobedreamweaver className="text-5xl text-green-500" />
          <p className="mt-2">Adobe Dreamweaver</p>
        </div>
        {/* AI & Design */}
        <div className="flex flex-col items-center">
          <SiOpenai className="text-5xl text-teal-600" />
          <p className="mt-2">OpenAI</p>
        </div>
        <div className="flex flex-col items-center">
          <FaFigma className="text-5xl text-purple-500" />
          <p className="mt-2">Figma</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTensorflow className="text-5xl text-orange-500" />
          <p className="mt-2">TensorFlow</p>
        </div>
        <div className="flex flex-col items-center">
          <SiIbm className="text-5xl text-blue-600" />
          <p className="mt-2">IBM Watson</p>
        </div>
        {/* Cloud & DevOps */}
        <div className="flex flex-col items-center">
          <FaAws className="text-5xl text-orange-500" />
          <p className="mt-2">AWS</p>
        </div>
        <div className="flex flex-col items-center">
          <FaDocker className="text-5xl text-blue-600" />
          <p className="mt-2">Docker</p>
        </div>
        <div className="flex flex-col items-center">
          <SiJenkins className="text-5xl text-red-600" />
          <p className="mt-2">Jenkins</p>
        </div>
        <div className="flex flex-col items-center">
          <SiKubernetes className="text-5xl text-blue-500" />
          <p className="mt-2">Kubernetes</p>
        </div>
        {/* Mobile Development */}
        <div className="flex flex-col items-center">
          <FaSwift className="text-5xl text-orange-500" />
          <p className="mt-2">Swift</p>
        </div>
        <div className="flex flex-col items-center">
          <SiFlutter className="text-5xl text-blue-500" />
          <p className="mt-2">Flutter</p>
        </div>
        <div className="flex flex-col items-center">
          <SiSketch className="text-5xl text-blue-600" />
          <p className="mt-2">Sketche</p>
        </div>
        <div className="flex flex-col items-center">
          <FaAndroid className="text-5xl text-green-600" />
          <p className="mt-2">Android Development</p>
        </div>
        {/* Additional Services */}
        <div className="flex flex-col items-center">
          <FaSearchDollar className="text-5xl text-yellow-600" />
          <p className="mt-2">Digital Marketing</p>
        </div>
        <div className="flex flex-col items-center">
          <IoIosAnalytics className="text-5xl text-red-600" />
          <p className="mt-2">Analytics</p>
        </div>
        <div className="flex flex-col items-center">
          <FaRegSmile className="text-5xl text-green-600" />
          <p className="mt-2">Customer Services</p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link href="/services">
          <p className="inline-block px-6 py-3 rounded-full bg-primary-dark text-white hover:bg-primary-light transition-colors duration-300">
            Explore Our Services
          </p>
        </Link>
      </div>
    </section>
  );
}
