import React, { useEffect } from "react";

export const useTroopMerchingMap = (
  setLatLng: (lat: number, lng: number) => void
) => {
  useEffect(() => {
    //@ts-ignore
    const map = L.map("map").setView(
      [16.774383970165566, 96.15875959396364],
      5
    );
    //@ts-ignore
    L.control
      .locate({
        flyTo: true,
        initialZoomLevel: false,
        keepCurrentZoomLevel: true,
      })
      .addTo(map);
    //@ts-ignore

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

    //@ts-ignore
    var tooltip = L.tooltip().setContent(`
        <div class="w-16 h-16 relative">
          <div class="w-16 h-16 rounded-full absolute right-8 top-8 translate-x-1/2 -translate-y-1/2">
            <div class="absolute top-0 right-8 translate-x-1/2 font-semibold">N</div>
            <div class="absolute top-3 right-[9px] text-[8px]">NE</div>
            <div class="absolute top-1/2 right-0 -translate-y-1/2 font-semibold">E</div>
            <div class="absolute bottom-[10px] right-[10px] text-[8px]">SE</div>
            <div class="absolute bottom-0 right-1/2 translate-x-1/2 font-semibold">S</div>
            <div class="absolute bottom-[10px] left-[8px] text-[8px]">SW</div>
            <div class="absolute left-0 top-1/2 -translate-y-1/2 font-semibold">W</div>
            <div class="absolute top-[12px] left-[8px] text-[8px]">NW</div>
          </div>
          <div class="w-10 h-10 rounded-full absolute right-8 top-8 translate-x-1/2 -translate-y-1/2">

            <div class="w-0 h-0 translate-x-1/2 absolute top-0 right-5 border-b-[20px] border-b-red-600 border-r-[5px] border-r-transparent border-l-[5px] border-l-transparent"></div>

            <div class="w-0 h-0 translate-x-1/2 absolute bottom-0 right-5 border-t-[20px] border-t-purple-400 border-r-[5px] border-r-transparent border-l-[5px] border-l-transparent"></div>

          </div>
        </div>
      `);

    marker.bindTooltip(tooltip).openTooltip();

    marker.on("moveend", () => {
      setLatLng(marker.getLatLng().lat, marker.getLatLng().lng);
    });

    return () => {
      map.remove();
    };
  }, []);
};
