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
import { Button } from "../ui/button";

const Banner: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  // Array of image URLs for the banners
  const images = [
    "/images/banner/banner1.png",
    "/images/banner/banner2.png",
    "/images/banner/banner3.png",
    "/images/banner/banner1.png",
    "/images/banner/banner3.png",
  ];

  useEffect(() => {
    if (!api) return;

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
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div
                className="relative w-full h-64 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                  <Button>Shop Now</Button>
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
