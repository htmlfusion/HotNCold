'use strict';

angular.module('angularPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Spin-medium', {
        url: '/Spin-medium',
        templateUrl: 'app/Spin-medium/Spin-medium.html',
        controller: 'SpinMediumCtrl'
      });
  });