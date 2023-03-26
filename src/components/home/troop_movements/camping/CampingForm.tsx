import React, { ChangeEvent } from "react";
import CampBehavior from "./CampBehavior";
import CampFacilities from "./CampFacilities";
import CampLocation from "./CampLocation";

type Props = {
  setLatLng: (lat: number, lng: number) => void;
  onChangeCampBehaviors: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeCampFacilities: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CampingForm = ({
  setLatLng,
  onChangeCampBehaviors,
  onChangeCampFacilities,
}: Props) => {
  return (
    <>
      <CampLocation setLatLng={setLatLng} />
      <CampFacilities onChangeCampFacilities={onChangeCampFacilities} />
      <CampBehavior onChangeCampBehaviors={onChangeCampBehaviors} />
    </>
  );
};

export default CampingForm;
