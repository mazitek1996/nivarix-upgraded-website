




import { Divider } from "antd";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import { BackgroundBeams } from "@/app/components/ui/background-beams";
import Outro from "./outro";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-slate-700 dark:from-purple-900 dark:to-gray-800 bg-no-repeat bg-center relative flex flex-col items-center justify-center antialiased">
      <BackgroundBeams className="z-0" />
      <div className="max-w-full p-4 relative z-10">
        <div className="container mx-auto lg:px-0">
          <div className="flex flex-col py-20 space-y-6 md:flex-row md:justify-between md:space-y-0">
            <div className="footer_logo">
              <img
                src="/static/chuks.png"
                alt="Nivarix Innovative Technologies Logo"
                className="h-14 w-auto mr-auto"
              />
             <Outro/>
            </div>

            <div className="footer-column">
              <div className="footer_section">
                <h4 className="text-2xl text-white font-semibold mb-6">
                  Company
                </h4>
                <ul className="footer_list">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/frequently-asked-questions">FAQs</Link>
                  </li>
                  <li>
                    <Link href="/products">Products</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-column">
              <div className="footer_section">
                <h4 className="text-2xl text-white font-semibold mb-6">
                  About
                </h4>
                <ul className="footer_list">
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-column">
              <div className="footer_section-social">
                <h4 className="text-2xl text-white font-semibold mb-6">
                  Stay Connected
                </h4>
                <ul className="footer_list">
                  <li className="mb-4">
                    <Link href="https://www.facebook.com" className="flex items-center">
                      <FaFacebook />
                      <p className="ml-2">Facebook</p>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="https://x.com/" className="flex items-center">
                      <FaTwitter />
                      <p className="ml-2">Twitter</p>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="https://www.instagram.com/" className="flex items-center">
                      <FaInstagram />
                      <p className="ml-2">Instagram</p>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/" className="flex items-center">
                      <FaLinkedin />
                      <p className="ml-2">LinkedIn</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-column">
              <div className="footer_section">
                <h4 className="text-2xl text-white font-semibold mb-6">
                  Legal
                </h4>
                <ul className="footer_list">
                  <li>
                    <Link href="/terms-of-services">Terms of Service</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Divider className="flex md:hidden footer_divider item-center" style={{ borderColor: "white" }}>
            <b className="text-gray-200">Nivarix Innovative Technologies&reg;.</b>
          </Divider>

          <div className="lower_footer_text flex flex-col md:flex-row justify-between items-center py-2">
            <p className="font-inter font-normal text-gray-100 text-sm md:text-xs text-center md:text-left">
              At Nivarix Innovative Technologies, we pride ourselves on transforming spaces with our exquisite furniture designs and expert interior solutions. From custom furniture to professional interior design, we cater to all your home and office needs with precision and creativity. Experience the blend of comfort, style, and functionality with our tailored services. Trust us to make your dream space a reality with our commitment to quality and customer satisfaction.
            </p>
          </div>

          <div className="address_container flex flex-col md:flex-row items-center text-xs text-gray-100 py-2">
            <span>&copy; {new Date().getFullYear()} Nivarix Innovative Technologies. All rights reserved.</span>
          </div>
        </div>

        <div className="mt-4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-slate-700 dark:from-purple-800 dark:to-gray-700">
            Nivarix Innovative Technologies Ltd.
          </h1>
        </div>
      </div>
    </div>
  );
}