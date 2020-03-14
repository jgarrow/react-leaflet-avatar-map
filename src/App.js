import React, { useState } from "react";
import Map from "./components/Map";
import "./App.css";

function App() {
    const [toggleJourneyPaths, setToggleJourneyPaths] = useState({
        book1: false,
        book2: false,
        book3: false
    });

    const handleClick = book => {
        setToggleJourneyPaths({
            ...toggleJourneyPaths,
            [book]: !toggleJourneyPaths[book]
        });
    };

    return (
        <div className="App">
            <h1>The World of Avatar</h1>
            <div>
                <button onClick={() => handleClick("book1")}>Book 1</button>
                <button onClick={() => handleClick("book2")}>Book 2</button>
                <button onClick={() => handleClick("book3")}>Book 3</button>
            </div>
            <Map toggleJourneyPaths={toggleJourneyPaths} />
        </div>
    );
}

export default App;
