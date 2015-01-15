angular.module('starter.translation').factory('LocaleService', function ($window, $q, $translate) {
  return {
    getDefaultLocale: getDefaultLocale,
    useDefaultLocale: useDefaultLocale
  };

  function useDefaultLocale() {
    document.addEventListener("deviceready", onDeviceReady, false)

    function onDeviceReady() {
      getDefaultLocale().then(function (locale) {
        $translate.use(locale);
      });
    }
  }

  function getDefaultLocale() {
    var deferred = $q.defer();

    if ($window.navigator.globalization) {
      $window.navigator.globalization.getPreferredLanguage(
        function (language) {
          deferred.resolve(JSON.stringify(language));
        },
        function (error) {
          deferred.reject(error);
        }
      );
    } else {
      deferred.reject("No globalization plugin!");
    }

    return deferred.promise;
  }
});