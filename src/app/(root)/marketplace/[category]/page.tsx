'use client'
import React, { useState } from "react";
import { ProductCard } from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react"; 
import { Separator } from "@/components/ui/separator";

type CategoryType =
  | "new-products"
  | "organic-farming"
  | "herbicides"
  | "fungicides"
  | "insecticides"
  | "viricides"
  | "growth-promoters"
  | "seeds"
  | "nutrients"
  | "animal-husbandry";

const validCategories: CategoryType[] = [
  "new-products",
  "organic-farming",
  "herbicides",
  "fungicides",
  "insecticides",
  "viricides",
  "growth-promoters",
  "seeds",
  "nutrients",
  "animal-husbandry",
];

const dummyProducts = [
  {
    productId: '1',
    name: "Organic Fertilizer",
    category: "organic-farming",
    price: 250,
    quantity: "10 kg",
    farmerName: "Farmer A",
    imgUrl: "/images/products/img1.jpg",
    avgRating: 4.5,
    sold: false,
    seller: 1,
    description: 'test desc'
  },
  {
    productId: '2',
    name: "Herbicide",
    category: "organic-farming",
    price: 150,
    quantity: "5 L",
    farmerName: "Farmer B",
    imgUrl: "/images/products/img2.jpg",
    avgRating: 4.2,
    sold: false,
    seller: 2,
    description: 'test desc'
  },
  {
    productId: '3',
    name: "Fungicide Spray",
    category: "fungicides",
    price: 300,
    quantity: "1 L",
    farmerName: "Farmer C",
    imgUrl: "/images/products/img3.jpg",
    avgRating: 4.7,
    sold: false,
    seller: 3,
    description: 'test desc'
  },
  {
    productId: '4',
    name: "Growth Promoter",
    category: "growth-promoters",
    price: 120,
    quantity: "500 ml",
    farmerName: "Farmer D",
    imgUrl: "/images/products/img1.jpg",
    avgRating: 4.1,
    sold: false,
    seller: 4,
    description: 'test desc'
  },
  {
    productId: '5',
    name: "Animal Feed",
    category: "animal-husbandry",
    price: 400,
    quantity: "20 kg",
    farmerName: "Farmer E",
    imgUrl: "/images/products/img3.jpg",
    avgRating: 4.3,
    sold: false,
    seller: 5,
    description: 'test desc'
  },
  {
    productId: '6',
    name: "Seed Pack",
    category: "seeds",
    price: 80,
    quantity: "1 kg",
    farmerName: "Farmer F",
    imgUrl: "/images/products/img1.jpg",
    avgRating: 4.6,
    sold: false,
    seller: 6,
    description: 'test desc'    
  },
];

const Category = ({ params }: { params: { category: string } }) => {
  const { category } = params;
  const [searchTerm, setSearchTerm] = useState("");

  if (!validCategories.includes(category as CategoryType)) {
    return <div className="text-center mt-10 text-xl">Page Not Found</div>;
  }
  const filteredProducts = dummyProducts.filter(
    (product) =>
      product.category === category &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full mx-auto p-4 bg-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-3xl font-bold mb-4 md:mb-0">{category.replace("-", " ")}</h2>
        <div className="flex flex-row items-center md:space-x-4">
          <Input
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-72"
          />
          <Button className="ml-4 md:w-auto">
            <Filter />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={product.productId} className="w-full md:mb-4">
              <ProductCard {...product} />
              {index !== filteredProducts.length - 1 && (
                <Separator className="sm:block md:hidden" />
              )}
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600 mt-8">No products found</div>
        )}
      </div>
    </div>
  );
};

export default Category;
