import React from "react";
import { Polyline } from "react-leaflet";

const JourneyPath = () => {
    return (
        <Polyline
            positions={[
                [-77, 135],
                [-20, 175],
                [15, 255],
                [80, 275],
                [95, 225]
            ]}
        />
    );
};

export default JourneyPath;
