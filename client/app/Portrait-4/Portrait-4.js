'use strict';

angular.module('angularPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Portrait-4', {
        url: '/Portrait-4',
        templateUrl: 'app/Portrait-4/Portrait-4.html',
        controller: 'Portrait4Ctrl'
      });
  });