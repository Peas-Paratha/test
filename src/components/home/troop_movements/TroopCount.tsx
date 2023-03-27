import React, { ChangeEvent } from "react";

type TroopCounts = {
  soldier: string;
  police: string;
  BGF: string;
  others: string;
};

type Props = {
  troopCounts: TroopCounts;
  onChangeTroopCounts: (e: ChangeEvent<HTMLInputElement>) => void;
};

const troopTypes = ["soldier", "police", "BGF", "others"];
export const alpha = ["a", "b", "c", "d", "e"];

const TroopCount = ({ troopCounts, onChangeTroopCounts }: Props) => {
  const total = Object.values(troopCounts).reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue),
    0
  );

  return (
    <div className="flex gap-1 flex-col text-lg">
      <div>1. How many are they?</div>
      <div className="flex-1 grid grid-cols-2 ml-4 text-base gap-x-3 gap-y-1">
        {troopTypes.map((troopType, index) => {
          return (
            <div className="flex gap-2" key={index}>
              <label htmlFor="soldier" className="capitalize">
                {alpha[index]}. {troopType}{" "}
              </label>
              <input
                type="number"
                id={troopType}
                className="w-8 flex-1 border-b-2 border-red-500 outline-none text-right"
                placeholder="0"
                onChange={onChangeTroopCounts}
                value={troopCounts[troopType as keyof TroopCounts]}
                name={troopType}
              />
            </div>
          );
        })}
      </div>
      <div className="flex gap-1 text-base mt-2 ml-auto">
        <div>Total - </div>
        <div className="px-2 bg-red-600 text-white rounded-lg">{total}</div>
      </div>
    </div>
  );
};

export default TroopCount;
