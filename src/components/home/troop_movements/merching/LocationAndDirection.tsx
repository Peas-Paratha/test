import React, { useEffect } from "react";

const LocationAndDirection = () => {
  useEffect(() => {
    //@ts-ignore
    const map = L.map("map").setView(
      [16.774383970165566, 96.15875959396364],
      13
    );
    //@ts-ignore
    L.control
      .locate({
        flyTo: true,
        initialZoomLevel: false,
        keepCurrentZoomLevel: true,
        showCompass: true,
        drawMarker: true,
      })
      .addTo(map);
    //@ts-ignore
    //map.addControl(new L.Control.Compass());
    //@ts-ignore
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    //@ts-ignore
    const marker = L.marker([16.774383970165566, 96.15875959396364], {
      draggable: true,
    }).addTo(map);

    //marker.bindPopup(`<div class="text-red-500">Hello</div>`).openPopup();

    //@ts-ignore
    var tooltip = L.tooltip().setContent("hello");
    marker.bindTooltip(tooltip).openTooltip();

    // marker
    //   .bindTooltip(
    //     `
    //     <div class="w-16 h-16 relative">
    //       <div class="w-16 h-16 rounded-full absolute right-8 top-8 translate-x-1/2 -translate-y-1/2">
    //         <div class="absolute top-0 right-8 translate-x-1/2 font-semibold">N</div>
    //         <div class="absolute top-3 right-[9px] text-[8px]">NE</div>
    //         <div class="absolute top-1/2 right-0 -translate-y-1/2 font-semibold">E</div>
    //         <div class="absolute bottom-[10px] right-[10px] text-[8px]">SE</div>
    //         <div class="absolute bottom-0 right-1/2 translate-x-1/2 font-semibold">S</div>
    //         <div class="absolute bottom-[10px] left-[8px] text-[8px]">SW</div>
    //         <div class="absolute left-0 top-1/2 -translate-y-1/2 font-semibold">W</div>
    //         <div class="absolute top-[12px] left-[8px] text-[8px]">NW</div>
    //       </div>
    //       <div class="w-10 h-10 rounded-full absolute right-8 top-8 translate-x-1/2 -translate-y-1/2">

    //         <div class="w-0 h-0 translate-x-1/2 absolute top-0 right-5 border-b-[20px] border-b-red-600 border-r-[5px] border-r-transparent border-l-[5px] border-l-transparent"></div>

    //         <div class="w-0 h-0 translate-x-1/2 absolute bottom-0 right-5 border-t-[20px] border-t-purple-400 border-r-[5px] border-r-transparent border-l-[5px] border-l-transparent"></div>

    //       </div>
    //     </div>
    //   `
    //   )
    //   .openTooltip();

    marker.on("moveend", () => {
      console.log(marker.getLatLng());
      console.log("drag end");
    });

    return () => {
      map.remove();
    };
  }, []);
  return (
    <div className="flex gap-2 flex-col text-lg">
      <div>6. Please select their location and direction?</div>
      <div id="map" className="h-60 z-10 ml-4 rounded-lg"></div>
    </div>
  );
};

export default LocationAndDirection;
