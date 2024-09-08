import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="h-96 w-full bg-black-900 p-4 border-t">
      <div className="h-2/4 w-full container mx-auto  text-center flex justify-evenly items-center">
        <a href="#" className="flex items-center mb-4 md:mb-0">
          <img src="/Meity_logo.png" alt="Logo" className="w-20 h-auto bg-contain" />
        </a>
        <a href="#" className="flex items-center mb-4 md:mb-0">
          <img src="/digital-india-Logo.png" alt="Logo" className="w-20 h-auto bg-contain" />
        </a>
        <a href="#" className="flex items-center mb-4 md:mb-0">
          <img src="/ministryLogo.svg" alt="Logo" className="w-20 h-auto bg-contain bg-white" />
        </a>
        <a href="#" className="flex items-center mb-4 md:mb-0">
          <img src="/logo2.png" alt="Logo" className="w-20 h-auto bg-contain" />
        </a>
        <a href="#" className="flex items-center mb-4 md:mb-0">
          <img src="/logo2.png" alt="Logo" className="w-20 h-auto bg-contain" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
