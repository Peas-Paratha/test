import React from "react";

const Uniform = () => {
  return (
    <div className="flex gap-1 flex-col text-lg">
      <div>3. Are they wearing uniforms?</div>
      <div className="flex-1 grid grid-cols-3 ml-4 text-base gap-x-3 gap-y-1">
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            id="yes"
            className="border-b-2 border-red-500 outline-none text-right"
            name="uniform"
          />
          <label htmlFor="yes">Yes</label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            id="no"
            className="border-b-2 border-red-500 outline-none text-right"
            name="uniform"
          />
          <label htmlFor="no">No</label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            id="mixed"
            className="border-b-2 border-red-500 outline-none text-right"
            name="uniform"
          />
          <label htmlFor="mixed">Mixed</label>
        </div>
      </div>
    </div>
  );
};

export default Uniform;
