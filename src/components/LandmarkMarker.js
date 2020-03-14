import React, { useState, useEffect } from "react";
import { CircleMarker, Popup } from "react-leaflet";

const Landmark = ({ landmark, setActiveCity, activeCity }) => {
    const [markerColor, setMarkerColor] = useState("slateblue");

    useEffect(() => {
        let color = "slateblue";

        if (landmark.nation === "Earth Kingdom") {
            color = "darkgreen";
        } else if (landmark.nation === "Air Nation") {
            color = "ghostwhite";
        } else if (landmark.nation === "Fire Nation") {
            color = "firebrick";
        } else if (landmark.nation === "Water Tribe") {
            color = "deepskyblue";
        }

        setMarkerColor(color);
    }, [landmark.nation]);

    return (
        <CircleMarker
            center={landmark.geometry.coordinates}
            color={markerColor}
            radius={5}
            onClick={() => setActiveCity(landmark)}
        >
            {activeCity && (
                <Popup
                    position={landmark.geometry.coordinates}
                    onClose={() => setActiveCity(null)}
                >
                    <h2>{activeCity.properties.NAME}</h2>
                    <p>{activeCity.properties.DESCRIPTION}</p>
                </Popup>
            )}
        </CircleMarker>
    );
};

export default Landmark;
