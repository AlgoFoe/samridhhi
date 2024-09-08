'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const categories = [
  { name: 'New Products', image: '/images/categories/new-products.png' },
  { name: 'Organic Farming', image: '/images/categories/organic-farming.png' },
  { name: 'Herbicides', image: '/images/categories/herbicides.png' },
  { name: 'Fungicides', image: '/images/categories/fungicides.png' },
  { name: 'Insecticides', image: '/images/categories/insecticides.png' },
  { name: 'Viricides', image: '/images/categories/viricides.png' },
  { name: 'Growth Promoters', image: '/images/categories/growth-promoters.png' },
  { name: 'Seeds', image: '/images/categories/seeds.png' },
  { name: 'Nutrients', image: '/images/categories/nutrients.png' },
  { name: 'Animal Husbandry', image: '/images/categories/animal-husbandry.png' },
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
              <Image src={""} alt={category.name} width={40} height={40} className="w-full h-full object-contain" />
            </div>
            <h3 className="mt-2 text-lg font-semibold text-center">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
