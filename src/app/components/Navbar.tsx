"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { IoIosLogIn } from "react-icons/io";
import { IoLanguageOutline } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeaderTop: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full flex flex-col md:flex-row items-center justify-between px-4 py-2 transition-colors duration-300 ${
        scrolled
          ? "bg-gray-900" //bg-emerald-800
          : "bg-gradient-to-b from-black-500 to-black-300"
      }`}
    >
      <a href="#" className="flex items-center mb-4 md:mb-0">
        <img src="/logo2.png" alt="Logo" className="w-20 h-auto bg-contain" />
      </a>
      <nav className="flex-1 w-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-end p-2 space-y-4 md:space-y-0 md:space-x-4 ">
          {/* Search Form */}
          <form className="w-full md:w-1/2 flex items-center justify-end ">
            <Input
              type="search"
              placeholder="Search"
              className="w-full md:w-3/4 text-white rounded-tr-none rounded-br-none border-r-0"
            />
            <Button
              type="submit"
              className="rounded-tl-none rounded-bl-none border-l-0 flex flex-row justify-between "
              variant="green"
            >
              <span className="p-2">Search</span>

              <FaSearch />
            </Button>
          </form>
          {/* Links */}

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 ">
            <button
              className="lg:hidden p-2 focus:outline-none hover:bg-gray-300 border float-left"
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-controls="navbarSupportedContent"
              aria-expanded={isNavOpen}
            >
              <span className="sr-only">Toggle navigation</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div
              id="navbarSupportedContent"
              className={`lg:flex lg:items-center lg:space-x-4 flex-col lg:flex-row w-full ${
                isNavOpen ? "block" : "hidden"
              }`}
            >
              <a
                href="#"
                className="block py-2 px-4 hover:bg-neutral-700 flex items-center justify-between"
              >
                <span className="mx-1 text-1xl">Home</span>
                <FaHome />
              </a>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-neutral-700 flex items-center justify-between"
              >
                <span className="mx-1 text-1xl">Link</span>
              </a>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-neutral-700 flex items-center justify-between"
              >
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue
                      placeholder={
                        <div className="flex items-center">
                          <span>Language</span>
                          <IoLanguageOutline className="mr-2 text-2xl" />
                        </div>
                      }
                    />
                  </SelectTrigger>
                  <SelectContent >
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="dark">Hindi </SelectItem>
                  </SelectContent>
                </Select>
              </a>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-neutral-700 flex flex-row items-center justify-between"
              >
                <span className="mx-1">Login</span>
                <IoIosLogIn className="text-2xl" />
              </a>
              <a
                href="#"
                className="block py-2 px-4 flex items-center justify-between"
              >
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderTop;
