

// import React from 'react'
// import Image from "next/image";

// export default function PartnersLogoSection() {
//   return (
//     <div>
//         <div className="w-full max-w-4xl mx-auto px-4 py-4">
//     <div className="text-center">
//       <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Trusted by leading companies</h3>
//       <p className="text-neutral-600 dark:text-neutral-400">Join over 5 million people at top companies.</p>
//     </div>
//     <div className="flex justify-center mt-4 space-x-4">
//       <Image src="/static/icons/Google-Logo.wine.svg" alt="Client 1" width={100} height={40} />
//       <Image src="/static/icons/Meta_Platforms-Logo.wine.svg" alt="Client 3" width={100} height={40} />

//       <Image src="/static/icons/Amazon_Web_Services-Logo.wine.svg" alt="Client 2" width={100} height={40} />

//       <Image src="/static/icons/Microsoft_Azure-Logo.wine.svg" alt="Client 4" width={100} height={40} />
//       <Image src="/static/icons/Netlify-Logo.wine.svg" alt="Client 5" width={100} height={40} />
//     </div>
//   </div>
//   </div>
//   )
// }

import React from 'react'
import Image from "next/image";

export default function PartnersLogoSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Trusted by Leading Companies</h3>
        <p className="text-neutral-600 dark:text-neutral-400 mt-2">Join over 5 million people at top companies.</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {[
          { src: "/static/icons/Google-Logo.wine.svg", alt: "Google" },
          { src: "/static/icons/Meta_Platforms-Logo.wine.svg", alt: "Meta" },
          { src: "/static/icons/Amazon_Web_Services-Logo.wine.svg", alt: "AWS" },
          { src: "/static/icons/Microsoft_Azure-Logo.wine.svg", alt: "Microsoft Azure" },
          { src: "/static/icons/Netlify-Logo.wine.svg", alt: "Netlify" },
        ].map((logo, index) => (
          <div key={index} className="p-2 transition-transform duration-300 transform hover:scale-105">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={50}
              className="filter grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
