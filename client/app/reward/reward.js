'use strict';

angular.module('gishApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reward', {
        url: '/reward',
        templateUrl: 'app/reward/reward.html',
        controller: 'RewardCtrl'
      });
  });
