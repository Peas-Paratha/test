import React, { ChangeEvent } from "react";

type Props = {
  onChangeCampFacilities: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CampFacilities = ({ onChangeCampFacilities }: Props) => {
  return (
    <div className="flex gap-1 flex-col text-lg">
      <div>6. What are facilities of this camping place?</div>
      <div className="flex-1 grid grid-cols-3 ml-4 text-base gap-x-3 gap-y-1">
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="wt"
            className="border-b-2 border-red-500 outline-none text-right"
            name="watchTower"
            onChange={onChangeCampFacilities}
          />
          <label htmlFor="wt">Watch Tower</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="tranch"
            className="border-b-2 border-red-500 outline-none text-right"
            name="tranch"
            onChange={onChangeCampFacilities}
          />
          <label htmlFor="tranch">Tranch</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="banker"
            className="border-b-2 border-red-500 outline-none text-right"
            name="banker"
            onChange={onChangeCampFacilities}
          />
          <label htmlFor="banker">Banker</label>
        </div>
      </div>
    </div>
  );
};

export default CampFacilities;
