import React from "react";
import Image from "next/image";
import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white p-8 border-t">
      <div className="container mx-auto">
        {/* Logo Section */}
        <div className="flex flex-wrap justify-evenly items-center mb-8">
          <a href="#" className="flex items-center">
            <Image
              src="/ministryLogo.svg"
              alt="Ministry Logo"
              width={140}
              height={140}
              className="w-20 h-auto bg-contain"
            />
          </a>
          <a href="#" className="flex items-center">
            <Image
              src="/Government_of_India_logo.svg"
              alt="Government of India Logo"
              width={140}
              height={140}
              className="w-20 h-auto bg-contain"
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
              src="/digital-india-Logo.png"
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
            className="text-gray-600 hover:text-gray-900"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-red-600"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Footer Links and Text */}
        <div className="text-center text-sm text-gray-600">
          <p className="mb-2">
            © 2024 Your Company Name. All Rights Reserved.
          </p>
          <p className="mb-2">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Terms of Service
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </p>
          <p>Made with ♥ by Team Samridhhi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
