"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "Chuks Furniture & Interior transformed my living room into a paradise. Their attention to detail is unmatched! The team was professional and made sure that every aspect of the design was executed flawlessly. I couldn't be happier with the results!",
    name: "Adeola Adebayo",
    city: "Lagos",
  },
  {
    quote: "The best interior design services I've ever experienced. My home looks absolutely stunning! The designers took my vision and turned it into reality, creating a space that is both beautiful and functional. I highly recommend Chuks Furniture & Interior to anyone looking to enhance their home.",
    name: "Chidi Okafor",
    city: "Abuja",
  },
  {
    quote: "Professional and creative! They completely revamped my office space, making it modern and comfortable. The process was seamless, and the final result exceeded my expectations. I am thrilled with the new look of my office and get compliments from everyone who visits.",
    name: "Funmi Johnson",
    city: "Ibadan",
  },
  {
    quote: "Excellent service from start to finish. My kitchen has never looked better! The team at Chuks Furniture & Interior was attentive to my needs and provided innovative solutions to maximize the space. I am in love with my new kitchen and enjoy cooking in it every day.",
    name: "Ngozi Nwosu",
    city: "Port Harcourt",
  },
  {
    quote: "I love my new bedroom design. Chuks Furniture & Interior exceeded my expectations! The designers created a serene and stylish environment that makes me feel relaxed and happy. The quality of the furniture is outstanding, and I am impressed with the craftsmanship.",
    name: "Bola Adeyemi",
    city: "Kano",
  },
];
  
  const Testimonials = () => {
    return (
      <section className=" py-10 bg-gray-100">
       <div className=" container rounded-md   shadow-sm mx-auto h-[40rem] flex flex-col antialiased bg-gradient-to-br from-green-100 to-yellow-100 dark:from-purple-900 dark:to-teal-800 items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
      </section>
    );
  };
  
  export default Testimonials;
  

