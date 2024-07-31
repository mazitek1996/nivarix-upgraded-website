

// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { FaBars, FaTimes, FaSun, FaMoon, FaSearch } from "react-icons/fa";
// import { FiArrowUpRight } from "react-icons/fi";
// import { useTheme } from "@/app/utilities/ThemeContext";
// import AnnouncementBar from "./Announcement-section";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [currentPath, setCurrentPath] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
//   const { theme, toggleTheme } = useTheme();

//   useEffect(() => {
//     setCurrentPath(window.location.pathname);
//   }, []);

//   const links = [
//     { id: 1, link: "/", name: "Home" },
//     {
//       id: 2,
//       link: "/platform",
//       name: "Platform",
//       dropdown: [
//         { id: 1, link: "/platform/feature1", name: "Feature 1" },
//         { id: 2, link: "/platform/feature2", name: "Feature 2" },
//         { id: 3, link: "/platform/feature3", name: "Feature 3" },
//         { id: 4, link: "/platform/feature4", name: "Feature 4" },
//         { id: 5, link: "/platform/feature5", name: "Feature 5" },
//       ],
//     },
//     {
//       id: 3,
//       link: "/solutions",
//       name: "Solutions",
//       dropdown: [
//         { id: 1, link: "/solutions/solution1", name: "Solution 1" },
//         { id: 2, link: "/solutions/solution2", name: "Solution 2" },
//         { id: 3, link: "/solutions/solution3", name: "Solution 3" },
//         { id: 4, link: "/solutions/solution4", name: "Solution 4" },
//         { id: 5, link: "/solutions/solution5", name: "Solution 5" },
//       ],
//     },
//     { id: 4, link: "/templates", name: "Templates" },
//     { id: 5, link: "/enterprise", name: "Enterprise" },
//     { id: 6, link: "/pricing", name: "Pricing" },
//     { id: 7, link: "/contact", name: "Contact" },
//   ];

//   return (
//     <div className="fixed top-0 left-0 w-full z-50">
     
// <AnnouncementBar/>
//       {/* Main Navbar */}
//       <div className="bg-white dark:bg-gray-900 h-20 flex items-center justify-between px-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link href="/">
//             <div className="flex items-center cursor-pointer">
//               <img
//                 src="/static/images/NivarixLogo.svg"
//                 alt="Nivarix Logo"
//                 className="h-10"
//               />
//             </div>
//           </Link>

//           {/* Navigation Links */}
//           <ul className="hidden md:flex space-x-8">
//             {links.map(({ id, link, name, dropdown }) => (
//               <li
//                 key={id}
//                 className={`relative group text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 rounded transition-all duration-300 ${
//                   currentPath === link &&
//                   "bg-blue-100 dark:bg-gray-800 text-blue-500 dark:text-blue-400"
//                 }`}
//                 onMouseEnter={() => setDropdownOpen(id)}
//                 onMouseLeave={() => setDropdownOpen(null)}
//               >
//                 <Link href={link}>
//                   <p className="cursor-pointer">{name}</p>
//                 </Link>
//                 {dropdown && dropdownOpen === id && (
//                   <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-900 shadow-lg rounded-md overflow-hidden">
//                     {dropdown.map((item) => (
//                       <li
//                         key={item.id}
//                         className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 dark:hover:text-blue-400"
//                       >
//                         <Link href={item.link}>{item.name}</Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>

//           {/* Search and Theme Toggle */}
//           <div className="hidden md:flex items-center space-x-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="pl-8 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
//               />
//               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//             </div>
//             <button
//               onClick={toggleTheme}
//               className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
//             >
//               {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div
//             onClick={() => setNav(!nav)}
//             className="md:hidden cursor-pointer text-gray-800 dark:text-gray-200"
//           >
//             {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {nav && (
//           <div className="absolute top-20 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden">
//             <ul className="flex flex-col items-center">
//               {links.map(({ id, link, name, dropdown }) => (
//                 <li
//                   key={id}
//                   className="w-full"
//                 >
//                   <Link href={link}>
//                     <p onClick={() => setNav(!nav)} className="text-gray-800 dark:text-gray-200 py-4 text-center w-full border-t border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-all duration-300">
//                       {name}
//                     </p>
//                   </Link>
//                   {dropdown && (
//                     <ul className="w-full flex flex-col items-center bg-gray-50 dark:bg-gray-800">
//                       {dropdown.map((item) => (
//                         <li
//                           key={item.id}
//                           className="text-gray-800 dark:text-gray-200 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-all duration-300 w-full text-center"
//                         >
//                           <Link href={item.link}>
//                             <p onClick={() => setNav(!nav)} className="cursor-pointer w-full">{item.name}</p>
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//               <li className="w-full">
//                 <Link href="/signin">
//                   <p
//                     onClick={() => setNav(!nav)}
//                     className="text-gray-800 dark:text-gray-200 py-4 text-center w-full border-t border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-all duration-300"
//                   >
//                     Sign in
//                   </p>
//                 </Link>
//               </li>
//               <li className="w-full">
//                 <Link href="/signup">
//                   <p
//                     onClick={() => setNav(!nav)}
//                     className="text-gray-800 dark:text-gray-200 py-4 text-center w-full border-t border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-all duration-300"
//                   >
//                     Try for free
//                   </p>
//                 </Link>
//               </li>
//               {/* Search and Theme Toggle */}
//               <div className="w-full flex justify-center mt-4">
//                 <div className="relative w-full px-6">
//                   <input
//                     type="text"
//                     placeholder="Search..."
//                     className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
//                   />
//                   <FaSearch className="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-500" />
//                 </div>
//               </div>
//               <li className="w-full mt-4 flex justify-center">
//                 <button
//                   onClick={toggleTheme}
//                   className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
//                 >
//                   {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { FaBars, FaTimes, FaSun, FaMoon, FaPhone, FaSearch } from "react-icons/fa";
// import { FiArrowUpRight } from "react-icons/fi";
// import { useTheme } from "@/app/utilities/ThemeContext";
// import AnnouncementBar from "./Announcement-section";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [currentPath, setCurrentPath] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
//   const { theme, toggleTheme } = useTheme();

//   useEffect(() => {
//     setCurrentPath(window.location.pathname);
//   }, []);

//   const links = [
//     { id: 1, link: "/", name: "Home" },
//     {
//       id: 2,
//       link: "/about",
//       name: "About",
//       dropdown: [
//         { id: 1, link: "/about/achievements", name: "Achievements" },
//         { id: 2, link: "/about/history", name: "History" },
//         { id: 3, link: "/about/milestones", name: "Milestones" },
//         { id: 4, link: "/about/mission", name: "Mission" },
//         { id: 5, link: "/about/team/profiles", name: "Team Profiles" },
//       ],
//     },
//     {
//       id: 3,
//       link: "/blog",
//       name: "Blog",
//       dropdown: [
//         { id: 1, link: "/blog/company-news", name: "Company News" },
//         { id: 2, link: "/blog/guest-posts", name: "Guest Posts" },
//         { id: 3, link: "/blog/industry-insights", name: "Industry Insights" },
//       ],
//     },
//     {
//       id: 4,
//       link: "/careers",
//       name: "Careers",
//       dropdown: [
//         { id: 1, link: "/careers/application-portal", name: "Application Portal" },
//         { id: 2, link: "/careers/company-culture", name: "Company Culture" },
//         { id: 3, link: "/careers/job-listings", name: "Job Listings" },
//       ],
//     },
//     { id: 5, link: "/contact-us", name: "Contact Us", dropdown: [
//         { id: 1, link: "/contact-us/contact-form", name: "Contact Form" },
//         { id: 2, link: "/contact-us/contact-info", name: "Contact Info" },
//       ] 
//     },
//     {
//       id: 6,
//       link: "/events-and-webinars",
//       name: "Events & Webinars",
//       dropdown: [
//         { id: 1, link: "/events-and-webinars/upcoming-events", name: "Upcoming Events" },
//         { id: 2, link: "/events-and-webinars/webinar-recordings", name: "Webinar Recordings" },
//         { id: 3, link: "/events-and-webinars/workshop-information", name: "Workshop Information" },
//       ],
//     },
//     {
//       id: 7,
//       link: "/frequently-asked-questions",
//       name: "FAQs",
//       dropdown: [
//         { id: 1, link: "/frequently-asked-questions/FAQ", name: "FAQ" },
//         { id: 2, link: "/frequently-asked-questions/knowledge-base", name: "Knowledge Base" },
//       ],
//     },
//     { id: 8, link: "/legals", name: "Legals" },
//     {
//       id: 9,
//       link: "/newsletter-archive",
//       name: "Newsletter Archive",
//       dropdown: [
//         { id: 1, link: "/newsletter-archive/previous-newsletters", name: "Previous Newsletters" },
//         { id: 2, link: "/newsletter-archive/subscription-form", name: "Subscription Form" },
//       ],
//     },
//     {
//       id: 10,
//       link: "/portfolio",
//       name: "Portfolio",
//       dropdown: [
//         { id: 1, link: "/portfolio/case-studies", name: "Case Studies" },
//         { id: 2, link: "/portfolio/project-gallery", name: "Project Gallery" },
//         { id: 3, link: "/portfolio/success-stories", name: "Success Stories" },
//       ],
//     },
//     {
//       id: 11,
//       link: "/resources",
//       name: "Resources",
//       dropdown: [
//         { id: 1, link: "/resources/downloadable-templates", name: "Downloadable Templates" },
//         { id: 2, link: "/resources/ebooks", name: "Ebooks" },
//         { id: 3, link: "/resources/whitepapers-and-reports", name: "Whitepapers & Reports" },
//       ],
//     },
//     {
//       id: 12,
//       link: "/services",
//       name: "Services",
//       dropdown: [
//         { id: 1, link: "/services/consulting-services", name: "Consulting Services" },
//         { id: 2, link: "/services/custom-software-development", name: "Custom Software Development" },
//         { id: 3, link: "/services/digital-marketing", name: "Digital Marketing" },
//         { id: 4, link: "/services/mobile-pp-evelopment", name: "Mobile App Development" },
//         { id: 5, link: "/services/specialized-service", name: "Specialized Service" },
//       ],
//     },
//     { id: 13, link: "/teams-profile", name: "Teams Profile" },
//     {
//       id: 14,
//       link: "/testimonials-and-reviews",
//       name: "Testimonials & Reviews",
//       dropdown: [
//         { id: 1, link: "/testimonials-and-reviews/customer-reviews", name: "Customer Reviews" },
//         { id: 2, link: "/testimonials-and-reviews/video-testimonials", name: "Video Testimonials" },
//       ],
//     },
//   ];

//   return (
//     <div className="fixed top-0 left-0 w-full z-50">
//       <AnnouncementBar />
//       <div className="bg-white dark:bg-gray-900 h-20 flex items-center justify-between px-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link href="/">
//             <div className="flex items-center cursor-pointer">
//               <img
//                 src="/static/images/NivarixLogo.svg"
//                 alt="Nivarix Logo"
//                 className="h-10"
//               />
//             </div>
//           </Link>
//           <ul className="hidden md:flex space-x-8">
//             {links.map(({ id, link, name, dropdown }) => (
//               <li
//                 key={id}
//                 className={`relative group text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 rounded transition-all duration-300 ${
//                   currentPath === link &&
//                   "bg-blue-100 dark:bg-gray-800 text-blue-500 dark:text-blue-400"
//                 }`}
//                 onMouseEnter={() => setDropdownOpen(id)}
//                 onMouseLeave={() => setDropdownOpen(null)}
//                 aria-haspopup="true"
//                 aria-expanded={dropdownOpen === id}
//               >
//                 <Link href={link}>
//                   <p className="cursor-pointer">{name}</p>
//                 </Link>
//                 {dropdown && dropdownOpen === id && (
//                   <ul className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-900 shadow-lg rounded-md overflow-hidden">
//                     {dropdown.map((item) => (
//                       <li
//                         key={item.id}
//                         className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 dark:hover:text-blue-400"
//                       >
//                         <Link href={item.link}>{item.name}</Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//           <div className="hidden md:flex items-center space-x-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="pl-8 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
//               />
//               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//             </div>
//             <button
//               onClick={toggleTheme}
//               className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
//             >
//               {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
//             </button>
//           </div>
//           <div
//             onClick={() => setNav(!nav)}
//             className="md:hidden cursor-pointer text-gray-800 dark:text-gray-200"
//           >
//             {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//           </div>
//         </div>

//         {nav && (
//           <div className="absolute top-20 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden">
//             <ul className="flex flex-col items-center">
//               {links.map(({ id, link, name, dropdown }) => (
//                 <li key={id} className="w-full">
//                   <Link href={link}>
//                     <p
//                       onClick={() => setNav(!nav)}
//                       className="text-gray-800 dark:text-gray-200 py-4 text-center w-full border-t border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-all duration-300"
//                     >
//                       {name}
//                     </p>
//                   </Link>
//                   {dropdown && (
//                     <ul className="w-full flex flex-col items-center bg-gray-50 dark:bg-gray-800">
//                       {dropdown.map((item) => (
//                         <li
//                           key={item.id}
//                           className="text-gray-800 dark:text-gray-200 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-all duration-300 w-full text-center"
//                         >
//                           <Link href={item.link}>
//                             <p
//                               onClick={() => setNav(!nav)}
//                               className="cursor-pointer w-full"
//                             >
//                               {item.name}
//                             </p>
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//               <li className="w-full">
//                 <Link href="/signin">
//                   <p
//                     onClick={() => setNav(!nav)}
//                     className="text-gray-800 dark:text-gray-200 py-4 text-center w-full border-t border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-all duration-300"
//                   >
//                     Sign in
//                   </p>
//                 </Link>
//               </li>
//               <li className="w-full">
//                 <Link href="/signup">
//                   <p
//                     onClick={() => setNav(!nav)}
//                     className="text-gray-800 dark:text-gray-200 py-4 text-center w-full border-t border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-all duration-300"
//                   >
//                     Try for free
//                   </p>
//                 </Link>
//               </li>
//               <li className="px-4 cursor-pointer capitalize py-6 text-2xl transition-all duration-300">
//                 <a
//                   href="tel:29002434241"
//                   className="flex items-center space-x-2 font-mono bg-blue-600 px-4 py-2 rounded-full"
//                 >
//                   <FaPhone className="text-white" />
//                   <span>
//                     2 900 243 4241
//                     <sup className="text-xs text-gray-200 ml-1">Toll-Free</sup>
//                   </span>
//                 </a>
//               </li>
//               <li>
//                 <button
//                   onClick={toggleTheme}
//                   className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
//                 >
//                   {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;



"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaSun, FaMoon, FaPhone, FaSearch } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { useTheme } from "@/app/utilities/ThemeContext";
import AnnouncementBar from "./Announcement-section";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const links = [
    { id: 1, link: "/", name: "Home" },
    {
      id: 2,
      link: "/about",
      name: "About",
      dropdown: [
        { id: 1, link: "/about/achievements", name: "Achievements" },
        { id: 2, link: "/about/history", name: "History" },
        { id: 3, link: "/about/milestones", name: "Milestones" },
        { id: 4, link: "/about/mission", name: "Mission" },
        { id: 5, link: "/about/team/profiles", name: "Team Profiles" },
      ],
    },
    {
      id: 3,
      link: "/services",
      name: "Services",
      dropdown: [
        { id: 1, link: "/services/consulting-services", name: "Consulting Services" },
        { id: 2, link: "/services/custom-software-development", name: "Custom Software Development" },
        { id: 3, link: "/services/digital-marketing", name: "Digital Marketing" },
        { id: 4, link: "/services/mobile-pp-evelopment", name: "Mobile App Development" },
        { id: 5, link: "/services/specialized-service", name: "Specialized Service" },
      ],
    },
    {
      id: 4,
      link: "/portfolio",
      name: "Portfolio",
      dropdown: [
        { id: 1, link: "/portfolio/case-studies", name: "Case Studies" },
        { id: 2, link: "/portfolio/project-gallery", name: "Project Gallery" },
        { id: 3, link: "/portfolio/success-stories", name: "Success Stories" },
      ],
    },
   
   
    {
      id: 5,
      link: "/careers",
      name: "Careers",
      dropdown: [
        { id: 1, link: "/careers/application-portal", name: "Application Portal" },
        { id: 2, link: "/careers/company-culture", name: "Company Culture" },
        { id: 3, link: "/careers/job-listings", name: "Job Listings" },
      ],
    },
    { id: 6, link: "/contact-us", name: "Contact Us", dropdown: [
        { id: 1, link: "/contact-us/contact-form", name: "Contact Form" },
        { id: 2, link: "/contact-us/contact-info", name: "Contact Info" },
      ] 
    },
    {
      id: 7,
      link: "/blog",
      name: "Blog",
      dropdown: [
        { id: 1, link: "/blog/company-news", name: "Company News" },
        { id: 2, link: "/blog/guest-posts", name: "Guest Posts" },
        { id: 3, link: "/blog/industry-insights", name: "Industry Insights" },
      ],
    },
    {
      id: 8,
      link: "/frequently-asked-questions",
      name: "FAQs",
      dropdown: [
        { id: 1, link: "/frequently-asked-questions/FAQ", name: "FAQ" },
        { id: 2, link: "/frequently-asked-questions/knowledge-base", name: "Knowledge Base" },
      ],
    },
   
   
   
   
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <AnnouncementBar />
      <div className="bg-white dark:bg-gray-900 h-20 flex items-center justify-between px-4 ">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img
                src="/static/images/NivarixLogo.svg"
                alt="Nivarix Logo"
                className="h-10"
              />
            </div>
          </Link>
          <ul className="hidden md:flex space-x-8">
            {links.map(({ id, link, name, dropdown }) => (
              <li
                key={id}
                className={`relative group text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 rounded transition-all duration-300 ${
                  currentPath === link &&
                  "bg-blue-100 dark:bg-gray-800 text-blue-500 dark:text-blue-400"
                }`}
                onMouseEnter={() => setDropdownOpen(id)}
                onMouseLeave={() => setDropdownOpen(null)}
                aria-haspopup="true"
                aria-expanded={dropdownOpen === id}
              >
                <Link href={link}>
                  <p className="cursor-pointer">{name}</p>
                </Link>
                {dropdown && dropdownOpen === id && (
                  <ul className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-900 shadow-lg rounded-md overflow-hidden">
                    {dropdown.map((item) => (
                      <li
                        key={item.id}
                        className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 dark:hover:text-blue-400"
                      >
                        <Link href={item.link}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
          </div>
          <div
            onClick={() => setNav(!nav)}
            className="md:hidden cursor-pointer text-gray-800 dark:text-gray-200"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>

        {nav && (
          <div className="absolute top-20 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden">
            <ul className="flex flex-col items-center">
              {links.map(({ id, link, name, dropdown }) => (
                <li key={id} className="w-full">
                  <Link href={link}>
                    <p
                      onClick={() => setNav(!nav)}
                      className="text-gray-800 dark:text-gray-200 py-4 text-center w-full border-t border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-all duration-300"
                    >
                      {name}
                    </p>
                  </Link>
                  {dropdown && (
                    <ul className="w-full flex flex-col items-center bg-gray-50 dark:bg-gray-800">
                      {dropdown.map((item) => (
                        <li
                          key={item.id}
                          className="text-gray-800 dark:text-gray-200 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-all duration-300 w-full text-center"
                        >
                          <Link href={item.link}>
                            <p
                              onClick={() => setNav(!nav)}
                              className="cursor-pointer w-full"
                            >
                              {item.name}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="w-full">
                <Link href="/signin">
                  <p
                    onClick={() => setNav(!nav)}
                    className="text-gray-800 dark:text-gray-200 py-4 text-center w-full border-t border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-all duration-300"
                  >
                    Sign in
                  </p>
                </Link>
              </li>
              <li className="w-full">
                <Link href="/signup">
                  <p
                    onClick={() => setNav(!nav)}
                    className="text-gray-800 dark:text-gray-200 py-4 text-center w-full border-t border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-all duration-300"
                  >
                    Try for free
                  </p>
                </Link>
              </li>
              <li className="px-4 cursor-pointer capitalize py-6 text-2xl transition-all duration-300">
                <a
                  href="tel:29002434241"
                  className="flex items-center space-x-2 font-mono bg-blue-600 px-4 py-2 rounded-full"
                >
                  <FaPhone className="text-white" />
                  <span>
                    2 900 243 4241
                    <sup className="text-xs text-gray-200 ml-1">Toll-Free</sup>
                  </span>
                </a>
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                >
                  {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
