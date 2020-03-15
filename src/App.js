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
            <div
                style={{
                    display: "flex",
                    width: "300px",
                    margin: "0 auto",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    paddingBottom: "1rem"
                }}
            >
                <button
                    onClick={() => handleClick("book1")}
                    style={{
                        boxSizing: "border-box",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        fontSize: "1rem",
                        // color: "lightgray",
                        background:
                            "linear-gradient(cornflowerblue, ghostwhite)"
                    }}
                >
                    Book 1
                </button>
                <button
                    onClick={() => handleClick("book2")}
                    style={{
                        boxSizing: "border-box",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        fontSize: "1rem",
                        // color: "lightgray",
                        background: "linear-gradient(darkgreen, ghostwhite)"
                    }}
                >
                    Book 2
                </button>
                <button
                    onClick={() => handleClick("book3")}
                    style={{
                        boxSizing: "border-box",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        fontSize: "1rem",
                        // color: "lightgray",
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
