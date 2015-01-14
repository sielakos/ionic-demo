angular.module('starter.http-service').factory('ExampleService', function ($http) {
  return {
    getExampleCom: getExampleCom
  };

  function getExampleCom() {
    return $http.get('http://example.com');
  }
});