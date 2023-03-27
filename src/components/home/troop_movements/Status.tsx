import React, { ChangeEvent } from "react";

type Props = {
  onChangeStatus: (e: ChangeEvent<HTMLInputElement>) => void;
  status: string;
};

const statusOptions = ["merching", "camping"];

const Status = ({ onChangeStatus, status }: Props) => {
  return (
    <div className="flex gap-1 flex-col text-lg">
      <div>4. What is their status?</div>
      <div className="flex-1 grid grid-cols-3 ml-4 text-base gap-x-3 gap-y-1">
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            id="merching"
            className="border-b-2 border-red-500 outline-none text-right"
            name="status"
            value="merching"
            onChange={onChangeStatus}
            checked={status === "merching"}
          />
          <label htmlFor="merching" className="capitalize">
            Merching
          </label>
        </div>

        <div className="flex gap-2 items-center">
          <input
            type="radio"
            id="camping"
            className="border-b-2 border-red-500 outline-none text-right"
            name="status"
            value="camping"
            onChange={onChangeStatus}
            checked={status === "camping"}
          />
          <label htmlFor="camping" className="capitalize">
            Merching
          </label>
        </div>
      </div>
    </div>
  );
};

export default Status;
