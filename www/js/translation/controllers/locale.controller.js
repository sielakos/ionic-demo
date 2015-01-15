angular.module('starter.translation').controller('LocaleController', function ($window, $translate) {
  this.getDefaultLocale = function () {
    console.log("ddd");
    if (!window.navigator.globalization) {
      alert("no globalization!");
    } else {
      $window.navigator.globalization.getLocaleName(
        function (language) {alert('language: ' + JSON.stringify($window.navigator.language) + '\n');},
        function () {alert('Error getting language\n');}
      );
    }
  };

  this.setUS = function () {
    $translate.use('en-US');
  };

  this.setPL = function () {
    $translate.use('pl-PL');
  };
});