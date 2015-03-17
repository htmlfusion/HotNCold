'use strict';

angular.module('angularPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('grade9', {
        url: '/grade9',
        templateUrl: 'app/grade9/grade9.html',
        controller: 'Grade9Ctrl'
      });
  });