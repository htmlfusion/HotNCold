'use strict';

angular.module('gishApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('gradient', {
        url: '/gradient',
        templateUrl: 'app/gradient/gradient.html',
        controller: 'GradientCtrl'
      });
  });
