import React from 'react';
import { ProductCard } from './ProductCard'; 

const recentlyAddedProducts = [
  { productId: "1",sold:false, name: 'P-1',seller:1,description:'test desc',category:'nutrients', farmerName: 'Farmer A', price: 1000, quantity: '5 Kg', avgRating: 4.5, imgUrl: '/images/products/product1.jpg' },
  { productId: "2",sold:false, name: 'P-2',seller:2,description:'test desc',category:'seeds', farmerName: 'Farmer B', price: 750, quantity: '10 Kg', avgRating: 4.2, imgUrl: '/images/products/product2.jpg' },
  { productId: "3",sold:false, name: 'P-3',seller:3,description:'test desc',category:'insecticides', farmerName: 'Farmer C', price: 600, quantity: '7 Kg', avgRating: 4.8, imgUrl: '/images/products/product3.jpg' },
  { productId: "4",sold:false, name: 'P-4',seller:4,description:'test desc',category:'fungicides', farmerName: 'Farmer D', price: 900, quantity: '8 Kg', avgRating: 4.3, imgUrl: '/images/products/product4.jpg' },
  { productId: "5",sold:false, name: 'P-5',seller:5,description:'test desc',category:'herbicides,', farmerName: 'Farmer E', price: 500, quantity: '6 Kg', avgRating: 4.1, imgUrl: '/images/products/product5.jpg' },
  { productId: "6",sold:false, name: 'P-5',seller:6,description:'test desc',category:'nutrients', farmerName: 'Farmer F', price: 450, quantity: '4 Kg', avgRating: 3.7, imgUrl: '/images/products/product6.jpg' },
];

const RecentlyAdded: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Recently Added</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentlyAddedProducts.map((product) => (
          <ProductCard key={product.productId} {...product} />
        ))}
      </div>
    </section>
  );
};

export default RecentlyAdded;
