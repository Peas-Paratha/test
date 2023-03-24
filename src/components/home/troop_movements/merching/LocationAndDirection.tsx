import React, { useEffect } from "react";

const LocationAndDirection = () => {
  useEffect(() => {
    //@ts-ignore
    var map = L.map("map").setView([16.8738953, 96.118844], 13);
    //@ts-ignore
    L.control.locate().addTo(map);
    //@ts-ignore
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);
  return (
    <div className="flex gap-1 flex-col text-lg">
      <div>6. Please select their location and direction?</div>
      <div id="map" className="h-60"></div>
    </div>
  );
};

export default LocationAndDirection;
