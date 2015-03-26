'use strict';

angular.module('angularPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Spin-complete', {
        url: '/Spin-complete',
        templateUrl: 'app/Spin-complete/Spin-complete.html',
        controller: 'SpinCompleteCtrl'
      });
  });