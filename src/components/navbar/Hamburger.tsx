import React from "react";

type Props = {
  isOpen: boolean;
  toggleNavbar: () => void;
};

const Hamburger = ({ isOpen, toggleNavbar }: Props) => {
  return (
    <button
      className={`p-[6px] flex flex-col gap-1 disabled:bg-black ${
        isOpen ? "-z-10" : "z-10"
      } rounded-lg`}
      onClick={toggleNavbar}
    >
      <div
        className={`h-[3px] w-7 bg-red-500 rounded-xl  transition-all ${
          isOpen && "rotate-45 translate-y-[7px]"
        }`}
      ></div>
      <div
        className={`h-[3px] w-7 bg-red-500 rounded-xl ${isOpen && "invisible"}`}
      ></div>
      <div
        className={`h-[3px] w-7 bg-red-500 rounded-xl  transition-all ${
          isOpen && "-rotate-45 -translate-y-[7px]"
        }`}
      ></div>
    </button>
  );
};

export default Hamburger;
