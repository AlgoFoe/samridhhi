import React from "react";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full h-36 z-10 bg-transparent m-0 ">
      <Navbar />
    </header>
  );
};

export default Header;
