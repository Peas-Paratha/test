import React from "react";

const WeaponTypes = () => {
  return (
    <div className="flex gap-1 flex-col text-lg">
      <div>2. What weapons are they carrying?</div>
      <div className="flex-1 grid grid-cols-3 ml-4 text-base gap-x-3 gap-y-1">
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="MA3"
            className="border-b-2 border-red-500 outline-none text-right"
            name="weapon"
          />
          <label htmlFor="MA3">MA3</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="AK"
            className="border-b-2 border-red-500 outline-none text-right"
            name="weapon"
          />
          <label htmlFor="AK">AK</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="M4"
            className="border-b-2 border-red-500 outline-none text-right"
            name="weapon"
          />
          <label htmlFor="M4">M4</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="RPG"
            className="border-b-2 border-red-500 outline-none text-right"
            name="weapon"
          />
          <label htmlFor="RPG">RPG</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="unknown"
            className="border-b-2 border-red-500 outline-none text-right"
            name="weapon"
          />
          <label htmlFor="unknown">Unknown</label>
        </div>
      </div>
    </div>
  );
};

export default WeaponTypes;
