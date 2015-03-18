'use strict';

angular.module('angularPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('package-land', {
        url: '/package-land',
        templateUrl: 'app/package-land/package-land.html',
        controller: 'PackageLandCtrl'
      });
  });