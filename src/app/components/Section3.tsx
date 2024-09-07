import React from "react";

const Section3: React.FC = () => {
  return (
    <section className="p-2 h-screen border">
      <h2 className="text-2xl font-semibold mb-4">Market Place</h2>
      <div className="bg-gray-100 p-4 rounded">
        <p>Content for the marketplace goes here...</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Go to marketplace
        </button>
      </div>
    </section>
  );
};

export default Section3;
