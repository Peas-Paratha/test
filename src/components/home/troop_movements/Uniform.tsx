import React, { ChangeEvent } from "react";

type Props = {
  onChangeUniform: (e: ChangeEvent<HTMLInputElement>) => void;
};

const uniformOptions = ["yes", "no", "mixed"];

const Uniform = ({ onChangeUniform }: Props) => {
  return (
    <div className="flex gap-1 flex-col text-lg">
      <div>3. Are they wearing uniforms?</div>
      <div className="flex-1 grid grid-cols-3 ml-4 text-base gap-x-3 gap-y-1">
        {uniformOptions.map((uniform, index) => {
          return (
            <div className="flex gap-2 items-center" key={index}>
              <input
                type="radio"
                id={uniform}
                className="border-b-2 border-red-500 outline-none text-right"
                name="uniform"
                onChange={onChangeUniform}
                value={uniform}
              />
              <label htmlFor={uniform} className="capitalize">
                {uniform}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Uniform;
