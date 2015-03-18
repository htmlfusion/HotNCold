'use strict';

angular.module('angularPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('package-start', {
        url: '/package-start',
        templateUrl: 'app/package-start/package-start.html',
        controller: 'PackageStartCtrl'
      });
  });