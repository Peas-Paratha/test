import React, { ChangeEvent } from "react";
import Direction from "./Direction";
import LocationAndDirection from "./Location";
import VehicleCounts from "./VehicleCounts";

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
  onChangeDirection: (e: ChangeEvent<HTMLInputElement>) => void;
  setLatLng: (lat: number, lng: number) => void;
};

const MerchingForm = ({
  vehicles,
  onChangeVehicles,
  onChangeDirection,
  setLatLng,
}: Props) => {
  return (
    <>
      <LocationAndDirection setLatLng={setLatLng} />
      <Direction onChangeDirection={onChangeDirection} />
      <VehicleCounts vehicles={vehicles} onChangeVehicles={onChangeVehicles} />
    </>
  );
};

export default MerchingForm;
