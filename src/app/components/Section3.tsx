import React from "react";
import { ProductCard } from "./productCard";

const Section3: React.FC = () => {
  return (
    <section className="p-2 h-screen flex flex-wrap justify-center items-center bg-transparent overflow-x-hidden no-scrollbar ">
      <h2 className="text-5xl font-semibold w-full h-16 text-center text-lime-100">Market Place</h2>
      <div className="overflow-x-hidden">
        <div className="flex overflow-x-auto gap-x-10 n max-md:w-full no-scrollbar">
          <ProductCard
            avgRating={4.5}
            farmerName="Priyanshu Dixit"
            name="Paddy"
            price={1000}
            imgUrl=""
            className="flex-none"
          />
          <ProductCard
            avgRating={4.5}
            farmerName="Priyanshu Dixit"
            name="Paddy"
            price={1000}
            imgUrl=""
            className="flex-none"
          />
          <ProductCard
            avgRating={4.5}
            farmerName="Priyanshu Dixit"
            name="Paddy"
            price={1000}
            imgUrl=""
            className="flex-none"
          />
          <ProductCard
            avgRating={4.5}
            farmerName="Priyanshu Dixit"
            name="Paddy"
            price={1000}
            imgUrl=""
            className="flex-none"
          />
          <ProductCard
            avgRating={4.5}
            farmerName="Priyanshu Dixit"
            name="Paddy"
            price={1000}
            imgUrl=""
            className="flex-none"
          />
          <ProductCard
            avgRating={4.5}
            farmerName="Priyanshu Dixit"
            name="Paddy"
            price={1000}
            imgUrl=""
            className="flex-none"
          />
          <ProductCard
            avgRating={4.5}
            farmerName="Priyanshu Dixit"
            name="Paddy"
            price={1000}
            imgUrl=""
            className="flex-none"
          />
          <ProductCard
            avgRating={4.5}
            farmerName="Priyanshu Dixit"
            name="Paddy"
            price={1000}
            imgUrl=""
            className="flex-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
