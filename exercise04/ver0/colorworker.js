let colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];
setInterval(function () {
  postMessage(colors);
  colors.push(colors.shift());
}, 6000);
