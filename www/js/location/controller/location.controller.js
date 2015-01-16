angular.module('starter.location').controller('LocationController', function ($window, $scope, $ionicModal) {
  var that = this;

  this.showLocation = showLocation;
  this.hideLocation = hideLocation;

  $ionicModal.fromTemplateUrl('templates/location_modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    that.modal = modal;
  });

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  function showLocation() {
    that.position = null;
    if (!$window.navigator) {
      that.error = "Nie ma geolocation";
      that.modal.show();
    } else {
      $window.navigator.geolocation.getCurrentPosition(onSuccess, onError, {
        enableHighAccuracy: true
      });
    }
  }

  function onSuccess(position) {
    that.position = position;
    console.log(position);
    that.modal.show();
  }

  function onError(error) {
    that.position = null;
    that.error = error;
    that.modal.show();
  }

  function hideLocation() {
    that.modal.hide();
  }

});