import React, { useEffect } from "react";

export const useTroopCampingMap = (
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

    marker.on("moveend", () => {
      setLatLng(marker.getLatLng().lat, marker.getLatLng().lng);
    });

    return () => {
      map.remove();
    };
  }, []);
};
