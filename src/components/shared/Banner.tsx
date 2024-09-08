"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const Banner: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!api) return;

      if (direction === "forward") {
        if (current >= count) {
          setDirection("backward");
          api.scrollPrev();
        } else {
          api.scrollNext();
        }
      } else {
        if (current <= 1) {
          setDirection("forward");
          api.scrollNext();
        } else {
          api.scrollPrev();
        }
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [api, current, count, direction]);

  return (
    <div className="relative w-full h-64">
      <Carousel className="w-full h-full relative" setApi={setApi}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div
                className="relative w-full h-64 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('/images/banner${index + 1}.jpg')`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                  <button className="bg-[#114232] text-white px-6 py-3 rounded-lg shadow-lg">
                    Shop Now{current}
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute inset-y-0 left-0 flex items-center">
          <CarouselPrevious className="relative left-5 -translate-y-32 -translate-x-1/2" />
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <CarouselNext className="relative right-5 -translate-y-32 translate-x-1/2" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
