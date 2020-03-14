import React, { useState, useEffect } from "react";
import { CircleMarker, Popup } from "react-leaflet";

const CityMarker = ({ city, setActiveCity, activeCity }) => {
    const [markerColor, setMarkerColor] = useState("darkcyan");

    useEffect(() => {
        let color = "darkcyan";

        if (city.nation === "Earth Kingdom") {
            color = "darkgreen";
        } else if (city.nation === "Air Nation") {
            color = "ghostwhite";
        } else if (city.nation === "Fire Nation") {
            color = "firebrick";
        } else if (city.nation === "Water Tribe") {
            color = "deepskyblue";
        }

        setMarkerColor(color);
    }, [city.nation]);

    return (
        <CircleMarker
            center={city.geometry.coordinates}
            color={markerColor}
            radius={5}
            onClick={() => setActiveCity(city)}
        >
            {activeCity && (
                <Popup
                    position={city.geometry.coordinates}
                    onClose={() => setActiveCity(null)}
                >
                    <h2>{activeCity.properties.NAME}</h2>
                    <p>{activeCity.properties.DESCRIPTION}</p>
                </Popup>
            )}
        </CircleMarker>
    );
};

export default CityMarker;
