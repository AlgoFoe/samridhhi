'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const categories = [
  { name: 'New Products', image: '/images/categories/newproducts.jpg' },
  { name: 'Organic Farming', image: '/images/categories/organic-farming.jpg' },
  { name: 'Herbicides', image: '/images/categories/herbicides.jpg' },
  { name: 'Fungicides', image: '/images/categories/fungicides.jpg' },
  { name: 'Insecticides', image: '/images/categories/insecticides.jpg' },
  { name: 'Viricides', image: '/images/categories/viricides.jpg' },
  { name: 'Growth Promoters', image: '/images/categories/growth-promoters.jpg' },
  { name: 'Seeds', image: '/images/categories/seeds.jpg' },
  { name: 'Nutrients', image: '/images/categories/nutrients.jpg' },
  { name: 'Animal Husbandry', image: '/images/categories/animal-husbandry.jpg' },
];

const Categories: React.FC = () => {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLDivElement>,category:string) => {
    e.preventDefault();
    const formattedCategory = category.replace(/\s/g, '-');

    router.push(`/marketplace/${formattedCategory.toLowerCase()}`);
  };
  return (
    <section className="max-w-7xl mx-auto p-4 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col items-center" onClick={(e)=>handleClick(e,category.name)}>
            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden shadow-md">
              <Image src={category.image} alt={category.name} width={140} height={140} className="w-full h-full object-contain" />
            </div>
            <h3 className="mt-2 text-lg font-semibold text-center">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
