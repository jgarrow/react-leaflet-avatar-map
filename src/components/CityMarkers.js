import React from "react";
import * as cityData from "../data/cityData.json";

import CityMarker from "./CityMarker";

const CityMarkers = ({ activeCity, setActiveCity }) => {
    return (
        <>
            {cityData.locations.map(city => (
                <CityMarker
                    key={city.properties.CITY_ID}
                    city={city}
                    activeCity={activeCity}
                    setActiveCity={setActiveCity}
                />
            ))}
        </>
    );
};

export default CityMarkers;
