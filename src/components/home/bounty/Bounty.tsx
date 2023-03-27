import React from "react";
import BountyTempText from "./BountyTempText";
import Title from "./Title";

const Bounty = () => {
  return (
    <div className="p-3 flex-col flex items-center w-full justify-center">
      <Title />
      <BountyTempText />
    </div>
  );
};

export default Bounty;
