'use strict';

angular.module('angularPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Screen-2', {
        url: '/Screen-2',
        templateUrl: 'app/Screen-2/Screen-2.html',
        controller: 'Screen2Ctrl'
      });
  });