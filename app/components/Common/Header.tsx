


"use client";
import { useTheme } from "@/app/utilities/ThemeContext";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhone, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const links = [
    { id: 1, link: "/", name: "Home" },
    { id: 2, link: "/about", name: "About" },
    { id: 3, link: "/services", name: "Services" },
    { id: 4, link: "/products", name: "Products" },
    { id: 5, link: "/portfolio", name: "Portfolio" },
    { id: 6, link: "/frequently-asked-questions", name: "FAQs" },
    { id: 7, link: "/contact", name: "Contact Us" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-gradient-to-r from-green-100 to-red-100 dark:from-purple-900 dark:to-gray-800 fixed z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <img
             src="/static/images/NivarixLogo.svg"
            alt="Nivarix Logo"
            className="h-14 w-auto"
          />
        </Link>
        <ul className="hidden md:flex space-x-6 items-center">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className={`nav-links px-4 cursor-pointer capitalize font-normal ${
                currentPath === link
                  ? "text-blue-500"
                  : "text-gray-900 dark:text-gray-100 hover:text-blue-500"
              } transition-all duration-300`}
            >
              <Link href={link}>{name}</Link>
            </li>
          ))}
          <li className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-full text-white">
            <FaPhone />
            <a href="tel:29002434241" className="relative">
              2 900 243 4241
              <sup className="absolute top-0 right-0 -mt-2 text-xs text-gray-200">Toll-Free</sup>
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
          </li>
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center backdrop-blur-sm absolute top-0 left-0 w-full h-screen bg-gradient-to-tr from-slate-600 to-slate-900 text-white">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize py-6 text-2xl transition-all duration-300 ${
                currentPath === link && "text-blue-500"
              }`}
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                <div>{name}</div>
              </Link>
            </li>
          ))}
          <li className="px-4 cursor-pointer capitalize py-6 text-2xl transition-all duration-300">
            <a href="tel:29002434241" className="flex items-center space-x-2 font-mono bg-blue-600 px-4 py-2 rounded-full">
              <FaPhone className="text-white" />
              <span>
                2 900 243 4241<sup className="text-xs text-gray-200 ml-1">Toll-Free</sup>
              </span>
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="mt-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;