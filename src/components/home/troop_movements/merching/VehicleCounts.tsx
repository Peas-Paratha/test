import React from "react";

const VehicleCounts = () => {
  return (
    <div className="flex gap-1 flex-col text-lg">
      <div>5. What vehicles are they using?</div>
      <div className="flex-1 grid grid-cols-2 ml-4 text-base gap-x-3 gap-y-1">
        <div className="flex gap-2">
          <label htmlFor="FAW">a. FAW - </label>
          <input
            type="number"
            id="FAW"
            className="w-8 flex-1 border-b-2 border-red-500 outline-none text-right"
            placeholder="0"
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="jeep">b. Jeep - </label>
          <input
            type="number"
            id="jeep"
            className="w-8 flex-1 border-b-2 border-red-500 outline-none text-right"
            placeholder="0"
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="tank">c. Tank - </label>
          <input
            type="number"
            id="tank"
            className="w-8 flex-1 border-b-2 border-red-500 outline-none text-right"
            placeholder="0"
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="policeTruck">d. Police Truck - </label>
          <input
            type="number"
            id="policeTruck"
            className="w-8 flex-1 border-b-2 border-red-500 outline-none text-right"
            placeholder="0"
          />
        </div>
      </div>
      <div className="flex gap-2 text-base ml-4">
        <label htmlFor="lightArmouredVehicle">
          e. Light Armoured Vehicle -{" "}
        </label>
        <input
          type="number"
          id="lightArmouredVehicle"
          className="w-8 flex-1 border-b-2 border-red-500 outline-none text-right"
          placeholder="0"
        />
      </div>
      <div className="flex gap-2 text-base ml-4">
        <label htmlFor="onFoot">f. On Foot -</label>
        <input
          type="number"
          id="onFoot"
          className="w-8 flex-1 border-b-2 border-red-500 outline-none text-right"
          placeholder="Number of soldiers on foot"
        />
      </div>
    </div>
  );
};

export default VehicleCounts;
