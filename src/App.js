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
            <div className="buttonContainer">
                <button
                    className="bookButton"
                    onClick={() => handleClick("book1")}
                    style={{
                        background:
                            "linear-gradient(cornflowerblue, ghostwhite)"
                    }}
                >
                    Book 1
                </button>
                <button
                    className="bookButton"
                    onClick={() => handleClick("book2")}
                    style={{
                        background: "linear-gradient(darkgreen, ghostwhite)"
                    }}
                >
                    Book 2
                </button>
                <button
                    className="bookButton"
                    onClick={() => handleClick("book3")}
                    style={{
                        background: "linear-gradient(firebrick, ghostwhite)"
                    }}
                >
                    Book 3
                </button>
            </div>
            <Map toggleJourneyPaths={toggleJourneyPaths} />
        </div>
    );
}

export default App;
