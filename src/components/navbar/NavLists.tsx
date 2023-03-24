import React, { useRef, useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GiCheckMark } from "react-icons/gi";

type Props = {
  isOpen: boolean;
  toggleNavbar: () => void;
  closeNavbar: () => void;
};

const NavLists = ({ isOpen, closeNavbar }: Props) => {
  const navLinksRef = useRef<HTMLUListElement>(null);

  const closeModal = useCallback(
    (e: MouseEvent) => {
      if (!navLinksRef.current!.contains(e.target as Node)) {
        closeNavbar();
      }
    },
    [closeNavbar]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", closeModal);
    } else {
      document.removeEventListener("mousedown", closeModal);
    }
  }, [isOpen, closeModal]);

  return (
    <div
      className={`fixed left-0 right-0 bg-red-100 z-50 ${
        isOpen ? "h-screen" : "h-0 transition-all duration-300"
      }`}
    >
      <ul
        className={`flex flex-col items-center gap-1 p-3 text-red-500 text-lg uppercase bg-white rounded-xl m-2 tracking-wider left-0 right-0 ${
          isOpen
            ? "translate-x-0 transition-transform duration-300"
            : "-translate-x-[calc(100%+8px)]"
        }`}
        ref={navLinksRef}
      >
        <NavLink to={"/"}>
          {({ isActive }) => (
            <div className="flex items-center gap-1 font-semibold">
              Home
              <span className={isActive ? "visible" : "invisible"}>
                <GiCheckMark />
              </span>
            </div>
          )}
        </NavLink>
        <NavLink to={"/guide"}>
          {({ isActive }) => (
            <div className="flex items-center gap-1 font-semibold">
              Guide
              <span className={isActive ? "visible" : "invisible"}>
                <GiCheckMark />
              </span>
            </div>
          )}
        </NavLink>
      </ul>
    </div>
  );
};

export default NavLists;
