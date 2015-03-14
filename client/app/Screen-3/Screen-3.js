'use strict';

angular.module('angularPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Screen-3', {
        url: '/Screen-3',
        templateUrl: 'app/Screen-3/Screen-3.html',
        controller: 'Screen3Ctrl'
      });
  });