'use strict';

angular.module('angularPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Prize-2', {
        url: '/Prize-2',
        templateUrl: 'app/Prize-2/Prize-2.html',
        controller: 'Prize2Ctrl'
      });
  });