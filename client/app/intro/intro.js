'use strict';

angular.module('gishAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('intro', {
        url: '/',
        templateUrl: 'app/intro/intro.html',
        controller: 'IntroCtrl'
      });
  });