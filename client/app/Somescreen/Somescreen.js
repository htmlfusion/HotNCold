'use strict';

angular.module('angularPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Somescreen', {
        url: '/Somescreen',
        templateUrl: 'app/Somescreen/Somescreen.html',
        controller: 'SomescreenCtrl'
      });
  });