'use strict';

angular.module('angularPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Spin-Start', {
        url: '/Spin-Start',
        templateUrl: 'app/Spin-Start/Spin-Start.html',
        controller: 'SpinStartCtrl'
      });
  });