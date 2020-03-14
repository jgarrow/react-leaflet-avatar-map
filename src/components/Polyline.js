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
            positions = [
                [263, 191], // Norther Water Tribe
                [107, 219], // Fong's Base (avatar state episode)
                [80, 258], // Cave of Two Lovers
                [80, 275], // Omashu
                [52, 278], // The Swamp
                [21.5, 259.5], // Chin (Avatar Day)
                [28, 297], // Gaoling (home of the Beifong estate)
                [45, 350], // Tu Zin (ghost town)
                [63, 310], // Misty Palms Oasis
                [85, 350], // The Library
                [130, 310], // Full Moon Bay (ferries for refugees to get to Ba Sing Se)
                [153, 318], // Serpent's Pass
                [170, 373], // Ba Sing Se
                [177, 392], // Lake Laogai
                [170, 373] // Ba Sing Se
            ];
        } else if (book === "book3") {
            positions = [
                [170, 373], // Ba Sing Se
                [110, 413], // Chameleon Bay
                [110, 393],
                [119.5, 389],
                [121, 388],
                [122.5, 386.5],
                [123.5, 384.5],
                [124.5, 382.75],
                [125.25, 382.25],
                [125.1, 381],
                [125.35, 380.5],
                [126.75, 380.4],
                [126.75, 380],
                [127.25, 379.5],
                [127.75, 379.5],
                [127.75, 378.25],
                [127, 378],
                [126, 378],
                [126, 377.25],
                [128, 376.25],
                [128, 375.25],
                [127.25, 374.5],
                [129.25, 372],
                [130.75, 371.9],
                [131.5, 373],
                [132.25, 373],
                [132.75, 372.5],
                [132.75, 371],
                [138, 367],
                [134.5, 359],
                [134, 356],
                [133.8, 354],
                [134.75, 351],
                [134.55, 350.5],
                [134.55, 350],
                [135.5, 349],
                [137, 348.5],
                [139, 348.75],
                [140.25, 347.5],
                [139.85, 346.75],
                [140.5, 346],
                [142, 346],
                [146, 342],
                [151, 316], // Serpent's Pass land bridge
                [160, 300],
                [157, 270],
                [153.25, 265],
                [152.9, 262.75],
                [151.25, 262.25],
                [150.5, 260.5],
                [146.25, 260.75],
                [145.75, 260],
                [145.75, 258.5],
                [145, 258],
                [144.75, 255],
                [143.5, 254.5],
                [142.5, 252],
                [143.75, 250.5],
                [143.75, 249],
                [143.25, 248.5],
                [143, 248],
                [143, 247.25],
                [142, 246.75],
                [142, 244.5],
                [135, 233],
                [133, 232],
                [130, 229],
                [131.5, 223],
                [128, 210],
                [115, 200],
                [118, 196], // Crescent Island
                [129.5, 191], // Onji's Island
                [133.5, 186], // Jang Hui
                [133, 175], // Shu Jing
                [120, 168.5], // Sheltered Cove
                [102, 144], // Roku's Island
                [93, 118], // Fire Fountain City
                [106, 91], // Hama's Village
                [96, 80], // The Black Cliffs
                [96, 67], // The Gates of Azulon
                [100, 30.5], // Fire Nation Capital
                [200, 105], // Western Air Temple
                [114, 89.5] // Ember Island
            ];
        }

        setPathPositions(positions);
    }, [book]);

    return <Polyline positions={pathPositions} />;
};

export default JourneyPath;
