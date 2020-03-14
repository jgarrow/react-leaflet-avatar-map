import React, { useState, useEffect } from "react";
import { Polyline } from "react-leaflet";

const JourneyPath = ({ book }) => {
    const [pathPositions, setPathPositions] = useState([]);

    useEffect(() => {
        let positions = [];

        if (book === "book1") {
            positions = [
                [-77, 135], // Hakoda's Village
                [-20, 175], // Southern Air Temple
                [15, 255], // Kyoshi Island
                [80, 275], // Omashu
                [95, 225], // Haru's Village
                [75, 215], // Earthbender rescue from Fire Nation prison ship
                [127, 225], // HaiBai's Forest
                [118, 196], // Crescent Island (Fire Sage temple)
                [146, 242], // Jet's Forest
                [135, 274], // Great Divide
                [153, 221], // Fishing Village
                [157.5, 218], // Pohuai Stronghold (blue spirit episode)
                [170, 199], // Makapu Village (aunt wu)
                [178, 185], // the abbey
                [160, 222], // Fire Day's Festival (jongjong)
                [242, 288], // Northern Air Temple
                [263, 191] // Norther Water Tribe
            ];
        } else if (book === "book2") {
            positions = [];
        } else if (book === "book3") {
            positions = [];
        }

        setPathPositions(positions);
    }, [book]);

    return <Polyline positions={pathPositions} />;
};

export default JourneyPath;
