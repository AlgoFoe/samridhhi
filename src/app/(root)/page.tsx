"use client";

import React from "react";

import Footer from "../components/Footer";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

const Home: React.FC = () => {
  return (
    <main className="flex-grow min-h-screen min-w-screen">
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </main>
  );
};

export default Home;
