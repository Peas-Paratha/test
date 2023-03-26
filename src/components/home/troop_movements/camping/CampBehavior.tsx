import React, { ChangeEvent } from "react";

type Props = {
  onChangeCampBehaviors: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CampBehavior = ({ onChangeCampBehaviors }: Props) => {
  return (
    <div className="flex gap-1 flex-col text-lg">
      <div>7. What are they doing at this camp?</div>
      <div className="flex-1 grid grid-cols-2 ml-4 text-base gap-x-3 gap-y-1">
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="check"
            className="border-b-2 border-red-500 outline-none text-right"
            name="checkPoint"
            onChange={onChangeCampBehaviors}
          />
          <label htmlFor="check">Check Point</label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            id="ambush"
            className="border-b-2 border-red-500 outline-none text-right"
            name="ambush"
            onChange={onChangeCampBehaviors}
          />
          <label htmlFor="ambush">Preparing for ambush</label>
        </div>
      </div>
    </div>
  );
};

export default CampBehavior;
