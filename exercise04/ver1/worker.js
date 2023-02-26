// function getRandomColor() {
//     return "#" + Math.floor(Math.random() * 16777215).toString(16);
//   }
  
//   setInterval(function() {
//     postMessage({
//       color1: getRandomColor(),
//       color2: getRandomColor()
//     });
//   }, 1000);
let colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];
for (let i = 0;i<= colors.length;i++){
  txtclr = colors[i];
  bgclr = colors[colors.length-i]; 
}
setInterval(function(){
  postMessage({
    dt: Date(),
    color1: txtclr,
    color2: bgclr
  });
},1000);

  