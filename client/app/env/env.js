'use strict';

angular.module('angularPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('env', {
        url: '/env',
        templateUrl: 'app/env/env.html',
        controller: 'EnvCtrl'
      });
  });