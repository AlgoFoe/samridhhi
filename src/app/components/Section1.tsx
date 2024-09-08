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
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 flex flex-col justify-center w-full text-center font-extrabold">
            <span className="p-4 animate-bounceContinuously">
              Buy, Sell And Grow,
            </span>
            <span className="text-amber-400 p-4 animate-pulseContinuously">
              All in One Go
            </span>
          </p>
        </div>
        <div className="flex justify-center flex-wrap space-x-4 w-full">
          <Button className="text-2xl" size="xl" variant="green">
            <span className="p-2">News</span>
            <IoNewspaper className="text-3xl" />
          </Button>
          <Button className="text-2xl" size="xl" variant="green">
            <span className="p-2">Register</span>
            <SiGnuprivacyguard className="text-3xl" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
