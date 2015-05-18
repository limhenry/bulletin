(function () {
  "use strict";


  // Make sure we are accessing over https, if not redirect
  if ((!location.port || location.port === "80") && location.protocol !== "https:" && location.host !== "localhost") {
    location.protocol = "https:";
  }


  // Register our ServiceWorker
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register("/worker.js", {
      scope: "/"
    }).then(function (reg) {
      console.log("SW register success", reg);
    }, function (err) {
      console.log("SW register fail", err);
    });
  }

  function updateNetworkStatus() {

    if (navigator.onLine) {
      alert("online");
    } else {
      alert("offffffline");
    }
  }
  window.addEventListener("online", updateNetworkStatus);
  window.addEventListener("offline", updateNetworkStatus);
  updateNetworkStatus();
}());
