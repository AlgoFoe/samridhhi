import Categories from "@/components/shared/Categories";
import TopSellers from "@/components/shared/TopSellers";
import RecentlyAdded from "@/components/shared/RecentlyAdded";
import Banner from "@/components/shared/Banner";
import Image from "next/image";
import React from "react";

const MarketplacePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center justify-center">
            <Image src="" alt="Logo" className="h-10 w-auto" />
            <input
              type="text"
              placeholder="Search"
              className="ml-4 p-2 border border-gray-300 rounded-lg w-64"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-sm">EN</button>
            <button className="relative">
              <i className="fas fa-shopping-cart"></i>
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
            <i className="fas fa-user-circle text-2xl"></i>
          </div>
        </div>
      </header>

      <Banner/>
      <Categories/>
      <TopSellers/>
      <RecentlyAdded/>
      <section className="bg-[#289b75] text-white text-center py-6 mt-6">
        <h2 className="text-xl font-semibold">
          The Best Place for Farmers to Buy and Sell Agricultural Products
        </h2>
      </section>

      <footer className="bg-gray-800 text-white py-6 mt-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 Samridhhi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MarketplacePage;
