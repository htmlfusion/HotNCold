'use strict';

angular.module('angularPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Spin-small', {
        url: '/Spin-small',
        templateUrl: 'app/Spin-small/Spin-small.html',
        controller: 'SpinSmallCtrl'
      });
  });