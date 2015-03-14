'use strict';

angular.module('angularPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Screen-1', {
        url: '/Screen-1',
        templateUrl: 'app/Screen-1/Screen-1.html',
        controller: 'Screen1Ctrl'
      });
  });