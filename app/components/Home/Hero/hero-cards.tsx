


// "use client";
// import Image from "next/image";
// import React from "react";
// import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";
// import { FiStar } from "react-icons/fi";

// export function AppleCardsCarouselDemo() {
//   const cards = data.map((card, index) => (
//     <Card key={card.src} card={card} index={index} />
//   ));

//   return (
//     <div className="w-full h-full py-20">
//       <div className="max-w-7xl pl-4 mx-auto flex items-center text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
//         <FiStar className="mr-2" />
//         <h2>Explore Our Expertise</h2>
//       </div>
//       <Carousel items={cards} />
//     </div>
//   );
// }

// interface ContentSectionProps {
//   title: string;
//   description: string;
// }

// const ContentSection: React.FC<ContentSectionProps> = ({ title, description }) => (
//   <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl ">
//     <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//       <span className="font-bold text-neutral-700 dark:text-neutral-200">
//         {title}
//       </span>{" "}
//       {description}
//     </p>
//   </div>
// );

// const data = [
//   {
//     category: "Custom Software",
//     title: "Innovative Software Solutions",
//     src: "https://images.unsplash.com/photo-1631624210938-539575f92e3c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <ContentSection title="Custom Software Development" description="Creating tailored software solutions that cater to your unique business needs, ensuring efficiency and scalability." />,
//   },
//   {
//     category: "Web Development",
//     title: "Stunning Web Experiences",
//     src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <ContentSection title="Responsive Web Design" description="Designing and developing websites that provide an optimal viewing experience across all devices." />,
//   },
//   {
//     category: "Digital Marketing",
//     title: "Boost Your Online Presence",
//     src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <ContentSection title="Data-Driven Marketing" description="Utilizing analytics and targeted strategies to enhance your digital presence and drive growth." />,
//   },
//   {
//     category: "Consulting",
//     title: "Expert Guidance",
//     src: "https://plus.unsplash.com/premium_photo-1707155465551-0d2b570926d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <ContentSection title="Consulting Services" description="Offering professional guidance and support to help you navigate complex digital transformations." />,
//   },
//   {
//     category: "E-commerce",
//     title: "Expanding Your Online Store",
//     src: "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <ContentSection title="E-commerce Solutions" description="Building and optimizing e-commerce platforms to enhance user experience and increase sales." />,
//   },
//   {
//     category: "Mobile Development",
//     title: "Apps for a Mobile World",
//     src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <ContentSection title="Mobile App Development" description="Creating engaging mobile applications that provide seamless user experiences." />,
//   },
// ];


"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";
import { FiStar } from "react-icons/fi";

// Define the type for the Card props
type CardProps = {
  category: string;
  title: string;
  src: string;
  content: JSX.Element;
  service: string;
};

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Link href={card.service} key={card.title} passHref>
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
    <div className="w-full h-full py-20">
      <div className="max-w-7xl pl-4 mx-auto flex items-center text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        <FiStar className="mr-2" />
        <h2>Explore Our Expertise</h2>
      </div>
      <div className="mt-10">
        <Carousel items={cards} />
      </div>
    </div>
  );
}

interface ContentSectionProps {
  title: string;
  description: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, description }) => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl ">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        {title}
      </span>{" "}
      {description}
    </p>
  </div>
);

const data: CardProps[] = [
  {
    category: "Custom Software",
    title: "Innovative Software Solutions",
    src: "https://images.unsplash.com/photo-1631624210938-539575f92e3c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ContentSection title="Custom Software Development" description="Creating tailored software solutions that cater to your unique business needs, ensuring efficiency and scalability." />,
    service: "/service/custom-software",
  },
  {
    category: "Web Development",
    title: "Stunning Web Experiences",
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ContentSection title="Responsive Web Design" description="Designing and developing websites that provide an optimal viewing experience across all devices." />,
    service: "/service/web-development",
  },
  {
    category: "Digital Marketing",
    title: "Boost Your Online Presence",
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ContentSection title="Data-Driven Marketing" description="Utilizing analytics and targeted strategies to enhance your digital presence and drive growth." />,
    service: "/service/digital-marketing",
  },
  {
    category: "Consulting",
    title: "Expert Guidance",
    src: "https://plus.unsplash.com/premium_photo-1707155465551-0d2b570926d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ContentSection title="Consulting Services" description="Offering professional guidance and support to help you navigate complex digital transformations." />,
    service: "/service/consulting",
  },
  {
    category: "E-commerce",
    title: "Expanding Your Online Store",
    src: "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ContentSection title="E-commerce Solutions" description="Building and optimizing e-commerce platforms to enhance user experience and increase sales." />,
    service: "/service/e-commerce",
  },
  {
    category: "Mobile Development",
    title: "Apps for a Mobile World",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ContentSection title="Mobile App Development" description="Creating engaging mobile applications that provide seamless user experiences." />,
    service: "/service/mobile-development",
  },
];

export default AppleCardsCarouselDemo;
