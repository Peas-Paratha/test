import React from "react";

type Props = {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const CategoryButtonsGroup = ({ setCategory }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-3 my-3">
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
  );
};

export default CategoryButtonsGroup;
