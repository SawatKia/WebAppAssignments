let intervalId;

self.onmessage = function (event) {
  if (event.data === "start") {
    intervalId = setInterval(function () {
      self.postMessage(new Date());
    }, 1000);
  } else if (event.data === "stop") {
    clearInterval(intervalId);
  }
};
