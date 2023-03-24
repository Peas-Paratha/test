import React, { useState } from "react";
import MerchingForm from "./merching/MerchingForm";
import Status from "./Status";
import TroopCount from "./TroopCount";
import Uniform from "./Uniform";
import WeaponTypes from "./WeaponTypes";

type status = "merching" | "temporarilyCamping" | "camping";

const TroopMovementsForm = () => {
  const [status, setStatus] = useState<status>("merching");
  return (
    <div className="w-full flex flex-col gap-3">
      <TroopCount />
      <WeaponTypes />
      <Uniform />
      <Status setStatus={setStatus} />
      <MerchingForm />
    </div>
  );
};

export default TroopMovementsForm;
