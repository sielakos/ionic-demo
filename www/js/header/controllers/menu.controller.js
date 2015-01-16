angular.module('starter.header').controller('MenuController', function ($scope, $ionicPopover) {
  var menu;

  this.showMenu = showMenu;

  activate();

  $scope.$on('$destroy', function() {
    menu.remove();
  });
  function showMenu($event) {
    menu.show($event);
  }

  function activate() {
    $ionicPopover.fromTemplateUrl('templates/menu.html', {
      $scope: $scope
    }).then(function (popover) {
      menu = popover;
    });
  }
});