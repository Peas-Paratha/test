import React from "react";

const Home = () => {
  const handleTransitionEnd = () => {
    console.log("Transition end");
  };
  return (
    <div className="h-screen" onTransitionEnd={handleTransitionEnd}>
      Home
    </div>
  );
};

export default Home;
