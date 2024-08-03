"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Introduction from "./Introduction";
import MissionVisionValues from "./MissionVisionValues";
import CompanyHistory from "./CompanyHistory";
import MeetTheTeam from "./MeetTheTeam";

export default function AboutSection() {
  return (
    <section className="container mx-auto py-12">
   
     <div>

      <Introduction/>
      
      <MissionVisionValues/>

<CompanyHistory/>

<MeetTheTeam/>
     </div>




    </section>
  );
}
