
// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FiDownload } from "react-icons/fi";

// export default function CallToActionSection() {
//   return (
//     <section className="container mx-auto mb-10 mt-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-16 rounded-lg shadow-lg overflow-hidden relative">
//       <div className="flex flex-col md:flex-row items-center justify-between h-full">
//         {/* Text Content */}
//         <div className="md:w-1/2 p-8 z-10">
//           <h2 className="text-4xl font-bold mb-4">Experience the Future of Technology</h2>
//           <p className="text-lg mb-8">
//             Join us on a journey to explore cutting-edge solutions with a 14-day free trial. Experience the seamless integration of our advanced technologies and see the difference for yourself.
//           </p>
//           <Link href="/download">
//             <button className="bg-emerald-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-emerald-600 transition duration-300 transform hover:scale-105 flex items-center gap-2">
//               Download the App <FiDownload className="text-lg" />
//             </button>
//           </Link>
//         </div>
        
//         {/* Image Content */}
//         <div className="md:w-1/2 relative flex items-end justify-end z-0">
//           <Image
//             src="https://framerusercontent.com/images/Czf8gEAwGiNxtXQSLZRZTXxU9Ag.svg"
//             alt="Desktop Screen"
//             className="object-contain"
//             width={600}
//             height={400}
//           />
//         </div>
//       </div>

//     </section>
//   );
// }


"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function CallToActionSection() {
  return (
    <section className="container mx-auto mb-10 mt-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-16 rounded-lg shadow-lg overflow-hidden relative">
      <div className="flex flex-col md:flex-row items-center justify-between h-full">
        {/* Text Content */}
        <div className="md:w-1/2 p-8 z-10">
          <h2 className="text-4xl font-bold mb-4">Let's Build Your Vision Together</h2>
          <p className="text-lg mb-8">
            We are here to transform your ideas into reality. Contact us today and discover how our innovative solutions can elevate your business. Take the first step towards your digital transformation journey with our expert team.
          </p>
          <Link href="/contact">
            <button className="bg-emerald-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-emerald-600 transition duration-300 transform hover:scale-105 flex items-center gap-2">
              Contact Us <FiArrowUpRight className="text-lg transition-transform duration-300 transform group-hover:rotate-45" />
            </button>
          </Link>
        </div>
        
        {/* Image Content */}
        <div className="md:w-1/2 relative flex items-end justify-end z-0">
          <Image
            src="https://framerusercontent.com/images/Czf8gEAwGiNxtXQSLZRZTXxU9Ag.svg"
            alt="Desktop Screen"
            className="object-contain"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
