'use strict';

angular.module('angularPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('grade8', {
        url: '/grade8',
        templateUrl: 'app/grade8/grade8.html',
        controller: 'Grade8Ctrl'
      });
  });