onmessage = function (event) {
    setInterval(function () {
      let now = new Date();
      let seconds = now.getSeconds();
      postMessage(now.toTimeString().split(" ")[0] + ":" + seconds);
    }, 1000);
  };
  