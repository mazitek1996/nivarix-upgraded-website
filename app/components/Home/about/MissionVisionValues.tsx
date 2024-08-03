// "use client";
// import Image from "next/image";
// import React from "react";
// import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";
// import { FiArrowUpRight } from "react-icons/fi";

// // Define the type for the Card props
// type CardProps = {
//   category: string;
//   title: string;
//   src: string;
//   content: JSX.Element;
// };

// export function AppleCardsCarouselDemo() {
//   const cards = data.map((card, index) => (
//     <Card key={card.src} card={card} index={index} />
//   ));

//   return (
//     <div className="w-full h-full py-20 bg-gradient-to-br from-red-100 rounded-lg dark:from-gray-900 to-white dark:to-gray-800">
//   <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
//     <h2 className="text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
//       Bright future secured with Nivarix
//       <span className="ml-2 inline-flex items-center justify-center bg-emerald-500 h-10 w-10 rounded-full text-white">
//         <FiArrowUpRight size={24} />
//       </span>
//     </h2>
//     <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mt-4 md:mt-0 max-w-2xl">
//       Discover our commitment to innovation, excellence, and integrity as we
//       strive to empower businesses across Africa. Explore our core values and
//       our vision for the future.
//     </p>
//   </div>
//   <div className="mt-10">
//     <Carousel items={cards} />
//   </div>
// </div>

//   );
// }

// // Define the type for the props in MissionVisionValuesContent
// interface MissionVisionValuesContentProps {
//   title: string;
//   description: string;
// }

// const MissionVisionValuesContent = ({
//   title,
//   description,
// }: MissionVisionValuesContentProps) => {
//   return (
//     <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
//       <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//         <span className="font-bold text-neutral-700 dark:text-neutral-200">{title}</span>{" "}
//         {description}
//       </p>
//       <Image
//         src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="Visual representation"
//         height="500"
//         width="500"
//         className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//       />
//     </div>
//   );
// };

// // Ensure that data has the correct type
// const data: CardProps[] = [
//     {
//       category: "Mission",
//       title: "Empowering Businesses",
//       src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       content: <MissionVisionValuesContent title="Our Mission" description="To deliver cutting-edge technology solutions that empower businesses to achieve their full potential." />,
//     },
//     {
//       category: "Values",
//       title: "Integrity and Transparency",
//       src: "https://images.unsplash.com/photo-1483086431886-3590a88317fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfDF8MHx8fDA%3D",
//       content: <MissionVisionValuesContent title="Our Values" description="We uphold the highest standards of integrity and transparency in all our interactions, fostering trust and reliability." />,
//     },
//     {
//       category: "Vision",
//       title: "Innovation for a Better Future",
//       src: "https://plus.unsplash.com/premium_photo-1683120972279-87efe2ba252f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGFpfGVufDB8MXwwfHx8MA%3D%3D",
//       content: <MissionVisionValuesContent title="Our Vision" description="To be a leading tech partner in Africa, driving innovation and excellence to help businesses thrive in a digital world." />,
//     },
//     {
//       category: "Mission",
//       title: "Driving Innovation",
//       src: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       content: <MissionVisionValuesContent title="Our Mission" description="To continuously innovate and provide top-notch digital solutions tailored to meet the unique challenges of our clients." />,
//     },
//     {
//       category: "Values",
//       title: "Customer-Centric Approach",
//       src: "https://images.unsplash.com/photo-1615890932417-89da415105d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       content: <MissionVisionValuesContent title="Our Values" description="Our clients are at the heart of everything we do. We prioritize their needs and tailor our services to exceed their expectations." />,
//     },
//     {
//       category: "Vision",
//       title: "Expanding Digital Horizons",
//       src: "https://images.unsplash.com/photo-1647323968696-0ea09525407c?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       content: <MissionVisionValuesContent title="Our Vision" description="To broaden the digital landscape, enabling businesses to explore new opportunities and reach their highest potential." />,
//     },
//     {
//       category: "Mission",
//       title: "Building Strong Partnerships",
//       src: "https://images.unsplash.com/photo-1690264461712-d630b81890a4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       content: <MissionVisionValuesContent title="Our Mission" description="To establish lasting relationships with clients through transparent communication and dependable service." />,
//     },
//     {
//       category: "Values",
//       title: "Commitment to Excellence",
//       src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       content: <MissionVisionValuesContent title="Our Values" description="Integrity, Innovation, Excellence, Customer-Centricity, and Collaboration are at the core of everything we do." />,
//     },
//     {
//       category: "Vision",
//       title: "Pioneering Technological Advancements",
//       src: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       content: <MissionVisionValuesContent title="Our Vision" description="To be at the forefront of technological advancements, providing innovative solutions that set new industry standards." />,
//     },
//   ];
  

// export default AppleCardsCarouselDemo;


"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";
import { FiArrowUpRight } from "react-icons/fi";

// Define the type for the Card props
type CardProps = {
  category: string;
  title: string;
  src: string;
  content: JSX.Element;
  portfolio: string;
};

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Link href={card.portfolio} key={card.title} passHref>
      <Card
        card={{
          category: card.category,
          title: card.title,
          src: card.src,
          content: card.content,
        }}
        index={index}
      />
    </Link>
  ));

  return (
    <div className="w-full h-full py-20 bg-gradient-to-br from-red-100 rounded-lg dark:from-gray-900 to-white dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Bright future secured with Nivarix
          <span className="ml-2 inline-flex items-center justify-center bg-emerald-500 h-10 w-10 rounded-full text-white">
            <FiArrowUpRight size={24} />
          </span>
        </h2>
        <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mt-4 md:mt-0 max-w-2xl">
          Discover our commitment to innovation, excellence, and integrity as we
          strive to empower businesses across Africa. Explore our core values and
          our vision for the future.
        </p>
      </div>
      <div className="mt-10">
        <Carousel items={cards} />
      </div>
    </div>
  );
}

// Define the type for the props in MissionVisionValuesContent
interface MissionVisionValuesContentProps {
  title: string;
  description: string;
}

const MissionVisionValuesContent = ({
  title,
  description,
}: MissionVisionValuesContentProps) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">{title}</span>{" "}
        {description}
      </p>
      <Image
        src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Visual representation"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

// Ensure that data has the correct type
const data: CardProps[] = [
    {
      category: "Mission",
      title: "Empowering Businesses",
      src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <MissionVisionValuesContent title="Our Mission" description="To deliver cutting-edge technology solutions that empower businesses to achieve their full potential." />,
      portfolio: "/portfolio/empowering-businesses",
    },
    {
      category: "Values",
      title: "Integrity and Transparency",
      src: "https://images.unsplash.com/photo-1483086431886-3590a88317fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfDF8MHx8fDA%3D",
      content: <MissionVisionValuesContent title="Our Values" description="We uphold the highest standards of integrity and transparency in all our interactions, fostering trust and reliability." />,
      portfolio: "/portfolio/integrity-transparency",
    },
    {
      category: "Vision",
      title: "Innovation for a Better Future",
      src: "https://plus.unsplash.com/premium_photo-1683120972279-87efe2ba252f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGFpfGVufDB8MXwwfHx8MA%3D%3D",
      content: <MissionVisionValuesContent title="Our Vision" description="To be a leading tech partner in Africa, driving innovation and excellence to help businesses thrive in a digital world." />,
      portfolio: "/portfolio/innovation-future",
    },
    {
      category: "Mission",
      title: "Driving Innovation",
      src: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <MissionVisionValuesContent title="Our Mission" description="To continuously innovate and provide top-notch digital solutions tailored to meet the unique challenges of our clients." />,
      portfolio: "/portfolio/driving-innovation",
    },
    {
      category: "Values",
      title: "Customer-Centric Approach",
      src: "https://images.unsplash.com/photo-1615890932417-89da415105d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <MissionVisionValuesContent title="Our Values" description="Our clients are at the heart of everything we do. We prioritize their needs and tailor our services to exceed their expectations." />,
      portfolio: "/portfolio/customer-centric",
    },
    {
      category: "Vision",
      title: "Expanding Digital Horizons",
      src: "https://images.unsplash.com/photo-1647323968696-0ea09525407c?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <MissionVisionValuesContent title="Our Vision" description="To broaden the digital landscape, enabling businesses to explore new opportunities and reach their highest potential." />,
      portfolio: "/portfolio/digital-horizons",
    },
    {
      category: "Mission",
      title: "Building Strong Partnerships",
      src: "https://images.unsplash.com/photo-1690264461712-d630b81890a4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <MissionVisionValuesContent title="Our Values" description="Integrity, Innovation, Excellence, Customer-Centricity, and Collaboration are at the core of everything we do." />,


      

      portfolio: "/portfolio/commitment-excellence",
    },
    {
      category: "Values",
      title: "Commitment to Excellence",
      src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <MissionVisionValuesContent title="Our Vision" description="To be at the forefront of technological advancements, providing innovative solutions that set new industry standards." />,
      portfolio: "/portfolio/technological-advancements",
    },
    {
      category: "Vision",
      title: "Pioneering Technological Advancements",
      src: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <MissionVisionValuesContent title="Our Vision" description="To be at the forefront of technological advancements, providing innovative solutions that set new industry standards." />,
      portfolio: "/portfolio/technological-advancements",
    },
    
  ]
  
export default AppleCardsCarouselDemo;
