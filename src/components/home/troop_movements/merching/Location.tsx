import { useTroopMerchingMap } from "../../../../app/custom-hooks/troopMerchingMap";

type Props = {
  setLatLng: (lat: number, lng: number) => void;
};

const Location = ({ setLatLng }: Props) => {
  useTroopMerchingMap(setLatLng);

  return (
    <div className="flex gap-2 flex-col text-lg">
      <div className="flex items-top gap-1">
        <div>5. </div>
        <div className="">Please mark the location to the map.</div>
      </div>
      <div id="map" className="h-56 z-10 sm:ml-4 rounded-lg"></div>
    </div>
  );
};

export default Location;
