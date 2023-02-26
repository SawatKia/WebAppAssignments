function getColorPair() {
    // Return one of 6 pre-defined color pairs for background and text
    const colorPairs = [
        { bgColor: "#205E61", textColor: "#8BF5FA" },
        { bgColor: "#3E0262", textColor: "#29DD41" },
        { bgColor: "#290209", textColor: "#59FB42" },
        { bgColor: "#6E2834", textColor: "#D1DA3B" },
        { bgColor: "#32AABC", textColor: "#E14EC8" },
        { bgColor: "#9AB8D9", textColor: "#8F21D3" },
    ];
    const index = Math.floor(Math.random() * colorPairs.length);
    return colorPairs[index];
}

let colorPair = getColorPair();

onmessage = function (event) {
    if (event.data.type === "getcolor") {
        postMessage({
            bgColor: colorPair.bgColor,
            textColor: colorPair.textColor,
        });
    } else if (event.data.type === "changecolor") {
        colorPair = getColorPair();
        postMessage({
            bgColor: colorPair.bgColor,
            textColor: colorPair.textColor,
        });
    }
};
