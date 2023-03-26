import React, { ChangeEvent } from "react";

type Props = {
  onChangeDirection: (e: ChangeEvent<HTMLInputElement>) => void;
};

const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

const Direction = ({ onChangeDirection }: Props) => {
  return (
    <div className="flex gap-2 flex-col text-lg">
      <div className="flex items-top gap-1">
        <div>6. </div>
        <div className="flex-col flex">
          <div>What is their direction of merching?</div>
          <span className="text-sm">
            (A compass can be viewed by clicking the marker)
          </span>
        </div>
      </div>
      <div className="grid grid-cols-4 text-sm gap-x-4 gap-y-1">
        {directions.map((direction, index) => {
          return (
            <div className="flex gap-1 items-center ml-4" key={index}>
              <input
                type="radio"
                id={direction}
                name="direction"
                value={direction}
                onChange={onChangeDirection}
              />
              <label
                htmlFor={direction}
                className={index % 2 === 0 ? "font-semibold" : ""}
              >
                {direction}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Direction;
