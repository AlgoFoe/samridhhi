"use client";

import React from "react";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

const Home: React.FC = () => {
  return (
    <main className="flex-grow min-h-screen min-w-screen bg-[url('/sec2_bg3.jpg')] bg-cover bg-center bg-fixed bg-no-repeat">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
};

export default Home;
