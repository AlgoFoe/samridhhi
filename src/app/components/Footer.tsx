import React from "react";
import Image from "next/image";
import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black p-8 border-t text-white ">

      <div className="container mx-auto min-w-full">
        {/* Logo Section */}
        <div className="flex flex-wrap justify-evenly items-center mb-8 w-full space-y-2">
          <a href="#" className="flex items-center">
            <Image
              src="/Ministry.png"
              alt="Ministry Logo"
              width={140}
              height={140}
              className="w-20 h-auto bg-white bg-contain fill-white p-2"
            />
          </a>
          <a href="#" className="flex items-center">
            <Image
              src="/Government_of_India_logo.svg"
              alt="Government of India Logo"
              width={140}
              height={140}
              className="w-20 h-auto bg-contain bg-white p-2"
            />
          </a>
          <a href="#" className="flex items-center">
            <Image
              src="/Meity_logo.png"
              alt="Meity Logo"
              width={140}
              height={140}
              className="w-20 h-auto bg-contain"
            />
          </a>
          <a href="#" className="flex items-center">
            <Image
              src="/digital-india-logo.png"
              alt="Digital India Logo"
              width={140}
              height={140}
              className="w-20 h-auto bg-contain"
            />
          </a>
          <a href="#" className="flex items-center">
            <Image
              src="/image.jpeg"
              alt="Image Logo"
              width={140}
              height={110}
              className="w-16 h-auto bg-contain"
            />
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-gray-900"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-red-600"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Footer Links and Text */}
        <div className="text-center text-sm ">
          <p className="mb-2">
          Copyright © 2024 All rights reserved.
          </p>
          <p className="mb-2">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            |
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            |
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </p>
          <p>Made with <span className="text-red-600">♥</span> by Team Samridhhi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
