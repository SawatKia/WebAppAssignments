  setInterval(function() {
    postMessage({
      dateTime: Date(),
    });
  }, 1000);
