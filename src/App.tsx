import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import BountyList from "./components/bounty-list/BountyList";
import Guide from "./components/guide/Guide";
import Home from "./components/home/Home";
import MainSharedLayout from "./components/shared-layouts/MainSharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/bounty" element={<BountyList />} />
          <Route path="/guide" element={<Guide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
