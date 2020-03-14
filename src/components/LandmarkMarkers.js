import React from "react";
import * as landmarkData from "../data/landmarkData";

import Landmark from "./LandmarkMarker";

const LandmarkMarkers = ({ activeCity, setActiveCity }) => {
    return (
        <>
            {landmarkData.locations.map(landmark => (
                <Landmark
                    key={landmark.properties.CITY_ID}
                    landmark={landmark}
                    activeCity={activeCity}
                    setActiveCity={setActiveCity}
                />
            ))}
        </>
    );
};

export default LandmarkMarkers;
