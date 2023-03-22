import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainSharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainSharedLayout;
