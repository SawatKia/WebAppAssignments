
  setInterval(function() {
    //const colorPair = getColorPair();
    postMessage({
      dateTime: Date(),
      // color1: colorPair.bgColor,
      // color2: colorPair.textColor
    });
  }, 1000);
