import React, { useState, ChangeEvent } from "react";
import CampingForm from "./camping/CampingForm";
import MerchingForm from "./merching/MerchingForm";
import Status from "./Status";
import TroopCount from "./TroopCount";
import Uniform from "./Uniform";
import WeaponTypes from "./WeaponTypes";

const TroopMovementsForm = () => {
  const [troopMovementsFormValues, setTroopMovementsFormValues] = useState({
    troopCounts: {
      soldier: 0,
      police: 0,
      BGF: 0,
      others: 0,
    },
    weapons: {
      MA3: false,
      AK: false,
      M4: false,
      RPG: false,
      Unknown: false,
    },
    uniform: "",
    status: "",
    vehicles: {
      FAW: 0,
      jeep: 0,
      tank: 0,
      policeTruck: 0,
      lightArmouredVehicle: 0,
      onFoot: 0,
    },
    location: {
      Lat: 0,
      Lng: 0,
    },
    direction: "N",
    campFacilities: {
      watchTower: false,
      tranch: false,
      banker: false,
    },
    campBehaviors: {
      checkPoint: false,
      ambush: false,
    },
  });

  const onChangeTroopCounts = (e: ChangeEvent<HTMLInputElement>) => {
    setTroopMovementsFormValues({
      ...troopMovementsFormValues,
      troopCounts: {
        ...troopMovementsFormValues.troopCounts,
        [e.target.name]: e.target.value,
      },
    });
  };

  const onChangeWeapons = (e: ChangeEvent<HTMLInputElement>) => {
    setTroopMovementsFormValues({
      ...troopMovementsFormValues,
      weapons: {
        ...troopMovementsFormValues.weapons,
        [e.target.name]: e.target.checked,
      },
    });
  };

  const onChangeUniform = (e: ChangeEvent<HTMLInputElement>) => {
    setTroopMovementsFormValues({
      ...troopMovementsFormValues,
      uniform: e.target.value,
    });
  };

  const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setTroopMovementsFormValues({
      ...troopMovementsFormValues,
      status: e.target.value,
    });
  };

  const onChangeVehicles = (e: ChangeEvent<HTMLInputElement>) => {
    setTroopMovementsFormValues({
      ...troopMovementsFormValues,
      vehicles: {
        ...troopMovementsFormValues.vehicles,
        [e.target.name]: e.target.value,
      },
    });
  };

  const setLatLng = (lat: number, lng: number) => {
    setTroopMovementsFormValues({
      ...troopMovementsFormValues,
      location: {
        Lat: lat,
        Lng: lng,
      },
    });
  };

  const onChangeDirection = (e: ChangeEvent<HTMLInputElement>) => {
    setTroopMovementsFormValues({
      ...troopMovementsFormValues,
      direction: e.target.value,
    });
  };

  const onChangeCampFacilities = (e: ChangeEvent<HTMLInputElement>) => {
    setTroopMovementsFormValues({
      ...troopMovementsFormValues,
      campFacilities: {
        ...troopMovementsFormValues.campFacilities,
        [e.target.name]: e.target.checked,
      },
    });
  };

  const onChangeCampBehaviors = (e: ChangeEvent<HTMLInputElement>) => {
    setTroopMovementsFormValues({
      ...troopMovementsFormValues,
      campBehaviors: {
        ...troopMovementsFormValues.campBehaviors,
        [e.target.name]: e.target.checked,
      },
    });
  };

  console.log(troopMovementsFormValues);

  return (
    <div className="w-full flex flex-col gap-3">
      <TroopCount
        troopCounts={troopMovementsFormValues.troopCounts}
        onChangeTroopCounts={onChangeTroopCounts}
      />
      <WeaponTypes onChangeWeapons={onChangeWeapons} />
      <Uniform onChangeUniform={onChangeUniform} />
      <Status onChangeStatus={onChangeStatus} />
      {troopMovementsFormValues.status === "merching" ? (
        <MerchingForm
          vehicles={troopMovementsFormValues.vehicles}
          onChangeVehicles={onChangeVehicles}
          onChangeDirection={onChangeDirection}
          setLatLng={setLatLng}
        />
      ) : (
        troopMovementsFormValues.status === "camping" && (
          <CampingForm
            onChangeCampFacilities={onChangeCampFacilities}
            onChangeCampBehaviors={onChangeCampBehaviors}
            setLatLng={setLatLng}
          />
        )
      )}
    </div>
  );
};

export default TroopMovementsForm;
