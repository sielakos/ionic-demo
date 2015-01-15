
function runCustomActivity() {
  if (window.cordova) {
    window.cordova.exec(angular.noop, angular.noop, "CustomActivity", "whatever", []);
  }
}
