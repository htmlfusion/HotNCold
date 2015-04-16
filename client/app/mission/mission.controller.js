'use strict';

angular.module('gishApp')
  .controller('MissionCtrl', function ($scope, Scene) {
    $scope.scene = new Scene();
  });
