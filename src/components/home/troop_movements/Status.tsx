import React from "react";

type status = "merching" | "temporarilyCamping" | "camping";
type Props = {
  setStatus: React.Dispatch<React.SetStateAction<status>>;
};

const Status = ({ setStatus }: Props) => {
  return (
    <div className="flex gap-1 flex-col text-lg">
      <div>4. What are they doing?</div>
      <div className="flex-1 grid grid-cols-3 ml-4 text-base gap-x-3 gap-y-1">
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            id="merching"
            className="border-b-2 border-red-500 outline-none text-right"
            name="status"
          />
          <label htmlFor="merching">Merching</label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            id="temporarilyCamping"
            className="border-b-2 border-red-500 outline-none text-right"
            name="status"
          />
          <label htmlFor="temporarilyCamping" className="leading-none">
            Temporarily Camping
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            id="camping"
            className="border-b-2 border-red-500 outline-none text-right"
            name="status"
          />
          <label htmlFor="camping">Camping</label>
        </div>
      </div>
    </div>
  );
};

export default Status;
