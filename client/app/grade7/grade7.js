'use strict';

angular.module('angularPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('grade7', {
        url: '/grade7',
        templateUrl: 'app/grade7/grade7.html',
        controller: 'Grade7Ctrl'
      });
  });