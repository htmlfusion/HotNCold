'use strict';

angular.module('gishAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('intro', {
        url: '/intro',
        templateUrl: 'app/intro/intro.html',
        controller: 'IntroCtrl'
      });
  });