import React, { useState } from "react";
import BrandName from "./BrandName";
import Hamburger from "./Hamburger";
import NavLists from "./NavLists";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };
  return (
    <header className="sticky top-0 bg-white z-50">
      <div className="p-4 flex justify-between border-b-2 border-red-500 items-center">
        <BrandName />
        <Hamburger isOpen={isOpen} toggleNavbar={toggleNavbar} />
      </div>
      <NavLists
        isOpen={isOpen}
        toggleNavbar={toggleNavbar}
        closeNavbar={closeNavbar}
      />
    </header>
  );
};

export default Navbar;
