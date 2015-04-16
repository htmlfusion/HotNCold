'use strict';

angular.module('gishApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mission', {
        url: '/mission',
        templateUrl: 'app/mission/mission.html',
        controller: 'MissionCtrl'
      });
  });