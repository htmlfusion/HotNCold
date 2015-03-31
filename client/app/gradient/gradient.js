'use strict';

angular.module('gishAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('gradient', {
        url: '/gradient',
        templateUrl: 'app/gradient/gradient.html',
        controller: 'GradientCtrl'
      });
  });