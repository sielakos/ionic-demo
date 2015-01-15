angular.module('starter.translation', ['pascalprecht.translate']).config(function ($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: 'js/translation/i18n/locale-',
    suffix: '.json'
  });
  $translateProvider.preferredLanguage('pl-PL');
});