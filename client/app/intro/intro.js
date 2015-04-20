'use strict';

angular.module('gishApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('intro', {
        url: '/',
        templateUrl: 'app/intro/intro.html',
        controller: 'IntroCtrl'
      });
  });
