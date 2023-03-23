import React from "react";

const TroopCount = () => {
  return (
    <div className="flex gap-1 flex-col text-lg">
      <div>1. How many are they?</div>
      <div className="flex-1 grid grid-cols-2 ml-4 text-base gap-x-3 gap-y-1">
        <div className="flex gap-2">
          <label htmlFor="soldier">a. Soldiers - </label>
          <input
            type="number"
            id="soldier"
            className="w-8 flex-1 border-b-2 border-red-500 outline-none text-right"
            placeholder="0"
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="police">b. Police - </label>
          <input
            type="number"
            id="police"
            className="w-8 flex-1 border-b-2 border-red-500 outline-none text-right"
            placeholder="0"
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="BGF">c. BGF - </label>
          <input
            type="number"
            id="BGF"
            className="w-8 flex-1 border-b-2 border-red-500 outline-none text-right"
            placeholder="0"
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="pyusawhtee">d. Others - </label>
          <input
            type="number"
            id="Others"
            className="w-8 flex-1 border-b-2 border-red-500 outline-none text-right"
            placeholder="0"
          />
        </div>
      </div>
      <div className="flex gap-1 text-base mt-2 ml-auto">
        <div>Total - </div>
        <div className="px-2 bg-red-600 text-white rounded-lg">34</div>
      </div>
    </div>
  );
};

export default TroopCount;
