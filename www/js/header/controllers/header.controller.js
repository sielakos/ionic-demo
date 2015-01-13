angular.module('starter.header').controller('HeaderController', function () {
  this.headerActive = true;

  this.toggle = function () {
    this.headerActive = !this.headerActive;
  }
});