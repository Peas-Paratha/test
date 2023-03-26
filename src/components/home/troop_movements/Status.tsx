import React, { ChangeEvent } from "react";

type Props = {
  onChangeStatus: (e: ChangeEvent<HTMLInputElement>) => void;
};

const statusOptions = ["merching", "camping"];

const Status = ({ onChangeStatus }: Props) => {
  return (
    <div className="flex gap-1 flex-col text-lg">
      <div>4. What is their status?</div>
      <div className="flex-1 grid grid-cols-3 ml-4 text-base gap-x-3 gap-y-1">
        {statusOptions.map((statusOption, index) => {
          return (
            <div className="flex gap-2 items-center" key={index}>
              <input
                type="radio"
                id={statusOption}
                className="border-b-2 border-red-500 outline-none text-right"
                name="status"
                value={statusOption}
                onChange={onChangeStatus}
              />
              <label htmlFor={statusOption} className="capitalize">
                {statusOption}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Status;
