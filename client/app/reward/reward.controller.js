'use strict';

angular.module('gishApp')
  .controller('RewardCtrl', function ($scope) {
    $scope.rewards = [{
      badge: "Explorer"
    }, {
      badge: "Kale"
    }];
  });
