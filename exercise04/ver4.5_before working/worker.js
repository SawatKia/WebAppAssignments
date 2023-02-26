let currentColorPairIndex = 0;

function getColorPair() {
    // Return one of 6 pre-defined color pairs for background and text
    const colorPairs = [
      { bgColor: "#205E61", textColor: "#8BF5FA" },//1
      { bgColor: "#3E0262", textColor: "#29DD41" },//2
      { bgColor: "#290209", textColor: "#59FB42" },//3
      { bgColor: "#6E2834", textColor: "#D1DA3B" },//4
      { bgColor: "#32AABC", textColor: "#E14EC8" },//5
      { bgColor: "#9AB8D9", textColor: "#8F21D3" }//6
    ];
  
    const colorPair = colorPairs[currentColorPairIndex];
    currentColorPairIndex = (currentColorPairIndex + 1) % colorPairs.length;
    return colorPair;
  }
  setInterval(function() {
    const colorPair = getColorPair();
    postMessage({
      dateTime: Date(),
      color1: colorPair.bgColor,
      color2: colorPair.textColor
    });
  }, 1000);
