import React from "react";
import Image from "next/image"

const Footer: React.FC = () => {
  return (
    <footer className="h-96 w-full bg-black-900 p-4 border-t">
      <div className="h-2/4 w-full container mx-auto  text-center flex justify-evenly items-center">
        <a href="#" className="flex items-center mb-4 md:mb-0">
          <Image src="/Meity_logo.png" alt="Logo" width={140} height={140} className="w-20 h-auto bg-contain" />
        </a>
        <a href="#" className="flex items-center mb-4 md:mb-0">
          <Image src="/digital-india-Logo.png" alt="Logo" width={140} height={140} className="w-20 h-auto bg-contain" />
        </a>
        <a href="#" className="flex items-center mb-4 md:mb-0">
          <Image src="/ministryLogo.svg" alt="Logo" width={140} height={140} className="w-20 h-auto bg-contain bg-white" />
        </a>
        <a href="#" className="flex items-center mb-4 md:mb-0">
          <Image src="/logo2.png" alt="Logo" width={140} height={140} className="w-20 h-auto bg-contain" />
        </a>
        <a href="#" className="flex items-center mb-4 md:mb-0">
          <Image src="/logo2.png" alt="Logo" width={140} height={140} className="w-20 h-auto bg-contain" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
