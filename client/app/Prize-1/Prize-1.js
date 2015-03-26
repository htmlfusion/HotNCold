'use strict';

angular.module('angularPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Prize-1', {
        url: '/Prize-1',
        templateUrl: 'app/Prize-1/Prize-1.html',
        controller: 'Prize1Ctrl'
      });
  });