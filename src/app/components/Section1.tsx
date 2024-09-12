import React from "react";
import { IoNewspaper } from "react-icons/io5";
import { Button } from "../../components/ui/button";
import { SiGnuprivacyguard } from "react-icons/si";

const Section1: React.FC = () => {
  return (
    <section className="relative t-0 h-screen overflow-hidden font-bold z-3 selection:bg-customGreen">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
      >
        <source src="/FarmerBg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-3 flex flex-col justify-center items-center h-full">
        <div className="p-4 w-full h-2/6 flex justify-center">
          <p className="text-5xl sm:text-7xl md:text-6xl lg:text-8xl font-bold mb-6 flex flex-col justify-center w-full text-center font-extrabold">
            <span className="p-4 animate-bounceContinuously text-lime-100 ">
              Buy, Sell And Grow,
            </span>
            <span className="text-amber-400 p-4 animate-pulseContinuously">
              All in One Go
            </span>
          </p>
        </div>
        <div className="flex justify-center flex-wrap space-x-4 w-full md:flex-row sm:flex-wrap sm:justify-center sm:items-center">
          <Button className="text-2xl mt-3 mb-3 md:px-6 sm:px-6 xsm:px-6" size="xl" variant="green">
            <span className="p-2">News</span>
            <IoNewspaper className="text-3xl" />
          </Button>
          <Button className="text-2xl mt-3 mb-3 md:px-6 sm:px-6 xsm:px-6" size="xl" variant="green">
            <span className="p-2">Register</span>
            <SiGnuprivacyguard className="text-3xl" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
