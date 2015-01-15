angular.module('starter.translation').controller('LocaleController', function ($window) {
  this.getDefaultLocale = function () {
    console.log("ddd");
    if (!window.navigator.globalization) {
      alert("no globalization!");
    } else {
      $window.navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
      );
    }
  };
});