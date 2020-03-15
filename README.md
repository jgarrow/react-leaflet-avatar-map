This project was an exercise to learn how to make a custom, interactive map using [react-leaflet](https://react-leaflet.js.org/en/). It was challenging in that I am not familiar with maps, particularly with points map units work. The docs for react-leaflet and leafletjs assume that the user has a basic understanding of maps, so I found them difficult to work with.

This particular map is a fan-made map of the world of Avatar the Last Airbender. The image used for the map was found [here](https://imgur.com/Ion6X7C). The different cities and locations that Aang visited on his journeys have been mapped using other fan-made map images found on Google as references. The toggle buttons display Aang's journey within each season of the show.

There are still issues to be worked through with the built-in `onClick` and `onClose` functions for the `Popup` components. Although the state resets as expected, the `Popup` itself takes 2 clicks before it displays as expected.
