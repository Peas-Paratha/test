import React, { ChangeEvent } from "react";
import { alpha } from "../TroopCount";

type Vehicle = {
  FAW: string;
  jeep: string;
  tank: string;
  policeTruck: string;
  lightArmouredVehicle: string;
  onFoot: string;
};

type Props = {
  vehicles: Vehicle;
  onChangeVehicles: (e: ChangeEvent<HTMLInputElement>) => void;
};

const vehicleTypes = ["FAW", "jeep", "tank", "policeTruck"];

const VehicleCounts = ({ vehicles, onChangeVehicles }: Props) => {
  return (
    <div className="flex gap-1 flex-col text-lg">
      <div>7. What vehicles are they using?</div>
      <div className="flex-1 grid grid-cols-2 ml-4 text-base gap-x-3 gap-y-1">
        {vehicleTypes.map((vehicle, index) => {
          return (
            <div className="flex gap-2" key={index}>
              <label htmlFor={vehicle} className="capitalize">
                <span className="lowercase">{alpha[index]}</span>. {vehicle} -{" "}
              </label>
              <input
                type="number"
                id={vehicle}
                className="w-8 flex-1 border-b-2 border-red-500 outline-none text-right"
                placeholder="0"
                value={vehicles[vehicle as keyof Vehicle]}
                onChange={onChangeVehicles}
                name={vehicle}
              />
            </div>
          );
        })}
      </div>
      <div className="ml-4 flex flex-col gap-1">
        <div className="flex gap-2 text-base">
          <label htmlFor="onFoot">e. Light Armoured Vehicle -</label>
          <input
            type="number"
            id="lightArmouredVehicle"
            className="w-8 flex-1 border-b-2 border-red-500 outline-none text-right"
            placeholder="0"
            value={vehicles.lightArmouredVehicle}
            name="lightArmouredVehicle"
            onChange={onChangeVehicles}
          />
        </div>
        <div className="flex gap-2 text-base">
          <label htmlFor="onFoot">f. On Foot -</label>
          <input
            type="number"
            id="onFoot"
            className="w-8 flex-1 border-b-2 border-red-500 outline-none text-right"
            placeholder="Enter the number of soldiers merching on foot"
            value={vehicles.onFoot}
            onChange={onChangeVehicles}
            name="onFoot"
          />
        </div>
      </div>
    </div>
  );
};

export default VehicleCounts;
