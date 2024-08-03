

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram, FiArrowUpRight } from "react-icons/fi";

// Define the type for the Card props
type TeamMemberProps = {
  name: string;
  role: string;
  imageSrc: string;
  linkedIn: string;
  github: string;
  twitter: string;
  instagram: string;
  portfolio: string;
};

export function MeetTheTeamCarousel() {
  const cards = data.map((member, index) => (
    <Link href={member.portfolio} key={member.name} passHref>
      <Card
        card={{
          category: member.role,
          title: member.name,
          src: member.imageSrc,
          content: (
            <TeamMemberCard
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
              linkedIn={member.linkedIn}
              github={member.github}
              twitter={member.twitter}
              instagram={member.instagram} portfolio={""}            />
          ),
        }}
        index={index}
      />
    </Link>
  ));

  return (
    <div className="w-full h-full py-20 bg-gradient-to-br from-red-100 rounded-lg dark:from-gray-900 to-white dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Meet Our Team
          <span className="ml-2 inline-flex items-center justify-center bg-emerald-500 h-10 w-10 rounded-full text-white">
            <FiArrowUpRight size={24} />
          </span>
        </h2>
        <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mt-4 md:mt-0 max-w-2xl">
          Our talented and dedicated team is committed to delivering excellence and innovation. Get to know the people who drive our success.
        </p>
      </div>
      <div className="mt-10">
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const TeamMemberCard = ({
  name,
  role,
  imageSrc,
  linkedIn,
  github,
  twitter,
  instagram,
}: TeamMemberProps) => {
  return (
    <div className="block bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 text-center w-64 transition-transform transform hover:scale-105">
      <Image
        src={imageSrc}
        alt={`${name}'s photo`}
        width={150}
        height={150}
        className="rounded-full mx-auto"
      />
      <h4 className="text-xl font-bold mt-4 text-neutral-800 dark:text-neutral-200">{name}</h4>
      <p className="text-neutral-700 dark:text-neutral-300">{role}</p>
      <div className="flex justify-center space-x-3 my-4">
        <a href={linkedIn} target="_blank" className="text-neutral-600 hover:text-blue-600" rel="noopener noreferrer">
          <FiLinkedin size={20} />
        </a>
        <a href={github} target="_blank" className="text-neutral-600 hover:text-black" rel="noopener noreferrer">
          <FiGithub size={20} />
        </a>
        <a href={twitter} target="_blank" className="text-neutral-600 hover:text-blue-400" rel="noopener noreferrer">
          <FiTwitter size={20} />
        </a>
        <a href={instagram} target="_blank" className="text-neutral-600 hover:text-pink-600" rel="noopener noreferrer">
          <FiInstagram size={20} />
        </a>
      </div>
      <div className="text-blue-600 hover:underline">
        View Portfolio
      </div>
    </div>
  );
};

const data: TeamMemberProps[] = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    imageSrc: "/static/images/team1.jpg",
    linkedIn: "#",
    github: "#",
    twitter: "#",
    instagram: "#",
    portfolio: "/team/john-doe",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    imageSrc: "/static/images/team2.jpg",
    linkedIn: "#",
    github: "#",
    twitter: "#",
    instagram: "#",
    portfolio: "/team/jane-smith",
  },
  {
    name: "Michael Brown",
    role: "Head of Marketing",
    imageSrc: "/static/images/team1.jpg",
    linkedIn: "#",
    github: "#",
    twitter: "#",
    instagram: "#",
    portfolio: "/team/michael-brown",
  },
  // Add more team members as needed
];

export default MeetTheTeamCarousel;
