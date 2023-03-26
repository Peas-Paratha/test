import React, { ChangeEvent } from "react";

type Props = {
  onChangeWeapons: (e: ChangeEvent<HTMLInputElement>) => void;
};

const weaponTypes = ["MA3", "AK", "M4", "RPG", "Unknown"];

const WeaponTypes = ({ onChangeWeapons }: Props) => {
  return (
    <div className="flex gap-1 flex-col text-lg">
      <div>2. What weapons are they carrying?</div>
      <div className="flex-1 grid grid-cols-3 ml-4 text-base gap-x-3 gap-y-1">
        {weaponTypes.map((weaponType, index) => {
          return (
            <div className="flex gap-2" key={index}>
              <input
                type="checkbox"
                id={weaponType}
                className="border-b-2 border-red-500 outline-none text-right"
                name={weaponType}
                onChange={onChangeWeapons}
              />
              <label htmlFor={weaponType}>{weaponType}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeaponTypes;
