"use client";

import React from "react";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <main className="flex-grow min-h-screen min-w-screen bg-[url('/sec2_bg3.jpg')] bg-cover bg-center bg-fixed bg-no-repeat">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </main>
  );
};

export default Home;
