import React, { useState } from "react";
import AirStrike from "./air_strike/AirStrike";
import Bounty from "./bounty/Bounty";
import TroopMovements from "./troop_movements/TroopMovements";
import VIPLocation from "./vip_location/VIPLocation";

const Home = () => {
  const [category, setCategory] = useState("troopMovements");
  return (
    <div className="h-screen p-3 flex flex-col items-center">
      <div className="grid grid-cols-2 gap-x-2 gap-y-3 mt-3">
        <button
          className="text-green-900 p-3 border border-green-600 bg-green-100 text-center text-lg capitalize rounded-lg"
          onClick={() => setCategory("troopMovements")}
        >
          Troop movements
        </button>
        <button
          className="text-yellow-900 p-3 border border-yellow-600 bg-yellow-100 text-center text-lg capitalize rounded-lg"
          onClick={() => setCategory("airStrike")}
        >
          Air Strike
        </button>
        <button
          className="text-purple-900 p-3 border border-purple-600 bg-purple-100 text-center text-lg capitalize rounded-lg"
          onClick={() => setCategory("vipLocation")}
        >
          VIP Location
        </button>
        <button
          className="text-slate-900 p-3 border border-slate-600 bg-slate-100 text-center text-lg capitalize rounded-lg"
          onClick={() => setCategory("bounty")}
        >
          Bounty
        </button>
      </div>
      {category === "troopMovements" && <TroopMovements />}
      {category === "airStrike" && <AirStrike />}
      {category === "vipLocation" && <VIPLocation />}
      {category === "bounty" && <Bounty />}
    </div>
  );
};

export default Home;
