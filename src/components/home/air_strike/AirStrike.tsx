import React from "react";
import AirStrikeTempText from "./AirStrikeTempText";
import Title from "./Title";

const AirStrike = () => {
  return (
    <div className="p-3 flex-col flex items-center w-full justify-center">
      <Title />
      <AirStrikeTempText />
    </div>
  );
};

export default AirStrike;
