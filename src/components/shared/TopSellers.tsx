import Image from 'next/image';
import React from 'react';

interface TopSeller {
  id: number;
  name: string;
  productName: string;
  image: string;
}

const topSellers: TopSeller[] = [
  { id: 1, name: 'Farmer 1', productName: 'Product 1', image: '/images/sellers/farmer1.jpg' },
  { id: 2, name: 'Farmer 2', productName: 'Product 2', image: '/images/sellers/farmer2.jpg' },
  { id: 3, name: 'Farmer 3', productName: 'Product 3', image: '/images/sellers/farmer3.jpg' },
  { id: 4, name: 'Farmer 4', productName: 'Product 4', image: '/images/sellers/farmer4.jpg' },
];

const TopSellers: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Top Sellers</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {topSellers.map((seller) => (
          <div key={seller.id} className="bg-white shadow-md rounded-lg p-4">
            <Image
              src={seller.image}
              alt={seller.name}
              width={40}
              height={40}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold">{seller.name}</h3>
            <p className="text-gray-500">{seller.productName}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSellers;
