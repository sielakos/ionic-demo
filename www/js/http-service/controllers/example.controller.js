angular.module('starter.http-service').controller('ExampleController', function (ExampleService) {
  this.getExampleCom = getExampleCom;

  function getExampleCom() {
    ExampleService.getExampleCom().success(function (response) {
      alert(response);
    })
  }
});