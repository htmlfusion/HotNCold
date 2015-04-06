'use strict';

angular.module('gishAppApp')
  .controller('RewardCtrl', function ($scope) {
    $scope.rewards = [{
      badge: "Explorer"
    }, {
      badge: "Kale"
    }];
  });
