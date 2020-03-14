import React, { useState, useRef, useEffect } from "react";
import { Map } from "react-leaflet";
import L, { CRS } from "leaflet";

import CityMarkers from "./CityMarkers";
import LandmarkMarkers from "./LandmarkMarkers";
import JourneyPath from "./Polyline";

export default ({ toggleJourneyPaths }) => {
    const [initialPos] = useState([90, 235]);
    const [activeCity, setActiveCity] = useState(null);

    const mapRef = useRef(null);
    const bounds = [
        [-110, -95],
        [290, 565]
    ];

    // used this console.log to figure out what to send my bounds to
    // not sure why these numbers worked great, but still threw other errors
    // but the refactor in the second useEffect works perfectly with them
    // useEffect(() => {
    //     setBounds(mapRef.current.leafletElement.getBounds());
    //     console.log(mapRef.current.leafletElement.getBounds());
    // }, []);

    useEffect(() => {
        const map = mapRef.current.leafletElement;

        const image = L.imageOverlay(
            "https://i.imgur.com/Ion6X7C.jpg",
            bounds
        ).addTo(map);

        map.fitBounds(image.getBounds());
    }, [bounds]);

    useEffect(() => {
        console.log("activeCity: ", activeCity);
    }, [activeCity]);

    return (
        <Map
            center={initialPos}
            zoom={0}
            ref={mapRef}
            minZoom={0}
            crs={CRS.Simple}
            maxBoundsViscosity={1.0}
            maxBounds={bounds}
            boundsOptions={{ padding: [50, 50] }}
        >
            <CityMarkers
                activeCity={activeCity}
                setActiveCity={setActiveCity}
            />
            <LandmarkMarkers
                activeCity={activeCity}
                setActiveCity={setActiveCity}
            />
            {toggleJourneyPaths.book1 && <JourneyPath book="book1" />}
        </Map>
    );
};
