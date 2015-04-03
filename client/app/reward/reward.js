'use strict';

angular.module('gishAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reward', {
        url: '/reward',
        templateUrl: 'app/reward/reward.html',
        controller: 'RewardCtrl'
      });
  });