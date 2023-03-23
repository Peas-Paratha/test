import React from "react";
import Title from "./Title";
import TroopMovementsForm from "./TroopMovementsForm";

const TroopMovements = () => {
  return (
    <div className="p-3 flex-col flex items-center w-full justify-center">
      <Title />
      <TroopMovementsForm />
    </div>
  );
};

export default TroopMovements;
