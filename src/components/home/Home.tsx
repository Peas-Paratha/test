import React, { useState } from "react";
import AirStrike from "./air_strike/AirStrike";
import Bounty from "./bounty/Bounty";
import CategoryButtonsGroup from "./CategoryButtonsGroup";
import TroopMovements from "./troop_movements/TroopMovements";
import VIPLocation from "./vip_location/VIPLocation";

const Home = () => {
  const [category, setCategory] = useState("troopMovements");
  return (
    <div className="flex flex-col items-center">
      <CategoryButtonsGroup setCategory={setCategory} />
      <div className="h-[2px] w-full bg-red-500"></div>
      {category === "troopMovements" && <TroopMovements />}
      {category === "airStrike" && <AirStrike />}
      {category === "vipLocation" && <VIPLocation />}
      {category === "bounty" && <Bounty />}
    </div>
  );
};

export default Home;
