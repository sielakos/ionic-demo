angular.module('starter.phone-call').controller('CallController', function ($window) {
  this.makeCall = function (phoneNumber) {
    if (!$window.ionic.Platform.isIOS()) {
      $window.document.location.href = 'tel:' + phoneNumber;
    } else {
      $window.plugins.phoneDialer.dial(phoneNumber);
    }
  };
});